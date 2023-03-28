const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
    if (req.session.username != null) {
        return next()
    }
    else{
        res.redirect('/login')
    }

}
function getError(req){
    let currentUrl = req.url;
    let match = currentUrl.match(/error=([^&]*)/);
    let fail;
    if(match === null) {fail = ""}
    else{
        switch(parseInt(match[1])) {
            case 1:
                fail = "Your username or passward doesn`t correct"
                break;
            case 2:
                fail = "This username is already taken"
                break;
            default:
                fail = match[1]
        }
    }
    return fail
}

function renderHome(req,res) {
    if(req.session.adminUser === true){
        res.redirect('/admins/developers');
    }
    else {
        res.redirect('/developers');
    }
}
function loginForm(req, res) {res.render(`../views/login.ejs`, { url: "login", error: getError(req)})}

function signupForm(req, res) {res.redirect('/developers/register')}

function logout(req, res) {
    req.session.destroy(() => {
        res.redirect('/login');
    });
}
async function login(req, res) {
    let { username, password } = req.body
    let result;
    let admin;
    if(String(username).startsWith("admin-")){
        username = String(username).substring(6);
        result = await loginService.getAdminByUsername(username, password)
        admin = true;
    }
    else{
        result = await loginService.getDevByUsername(username, password)
        admin = false;
    }

    if (result) {
        req.session.username = username
        req.session.adminUser = admin
        res.redirect('/')
    }
    else
        res.redirect('/login?error=1')
}


module.exports = {
    login,
    loginForm,
    logout,
    signupForm,
    renderHome,
    isLoggedIn
}