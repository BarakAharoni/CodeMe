const loginService = require("../services/login")

function isLoggedIn(req, res, next) {
    if (req.session.username != null)
        return next()
    else
        res.redirect('/login')
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
                fail = "Error on create an account"
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
function loginForm(req, res) {res.render(`../views/login sighin.ejs`, { url: "login", error: getError(req)})}

function signupForm(req, res) {res.render("../views/login sighin.ejs", { url:  "signup", error: getError(req)}) }

function logout(req, res) {
    req.session.destroy(() => {
        res.redirect('/login');
    });
}
async function login(req, res) {
    const { username, password } = req.body

    const result = await loginService.getDevByUsername(username, password)
    if (result) {
        req.session.username = username
        res.redirect('/')
    }
    else
        res.redirect('/login?error=1')
}

async function signup(req, res) {
    const { username, password } = req.body


    try {
        await loginService.addDev(username, password)
        req.session.username = username
        res.redirect('/')
    }
    catch (e) {
        res.redirect('/signup?error=2')
    }
}

module.exports = {
    login,
    loginForm,
    signup,
    signupForm,
    logout,
    renderHome,
    isLoggedIn
}