const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
    if (req.session.username != null) {
        return next()
    }
    else{
        res.redirect('/developers')
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
    res.redirect('/developers');
}
function loginForm(req, res) {res.render(`../views/login.ejs`, { url: "login", error: getError(req)})}

function signupForm(req, res) {res.redirect('/developers/register')}

function logout(req, res) {
    req.session.destroy(() => {
        res.redirect('/');
    });
}
async function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    const typeOfUser = req.body.type;
    let result;
    let type;
    if(String(username).startsWith("admin-")){
        username = String(username).substring(6);
        result = await loginService.getAdminByUsername(username, password)
        type = "admin";
    }
    else{
        if(typeOfUser === "jobOffer"){
            result = await loginService.getDeJobOfferByUsername(username, password)
            type = "job";
        }
        else if(typeOfUser === "developer"){
            result = await loginService.getDevByUsername(username, password)
            type = "dev";
        }
    }

    if (result) {
        req.session.username = username
        req.session.type = type
        res.redirect('/')
    }
    else{
        return res.status(404).json({ errors: ['not found'] });
    }
}


module.exports = {
    login,
    loginForm,
    logout,
    signupForm,
    renderHome,
    isLoggedIn
}