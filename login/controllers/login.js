const loginService = require("../services/login")
const users = require('../services/users');

function isLoggedIn(req, res, next) {
    if (req.session.username != null)
        return next()
    else
        res.redirect('/')
}

function renderHome(req,res) {
    res.redirect('/developers');
}


function logout(req, res) {
    req.session.destroy(() => {
        res.redirect('/login');
    });
}

async function login(req, res) {
    const { username, password } = req.body

    const result = await loginService.checkIfExistUser(username, password)
    if (result) {
        req.session.username = username
        res.redirect('/')
    }
    else
        res.redirect('/login?error=1')
}

module.exports = {
    login,
    logout,
    renderHome,
    isLoggedIn,
}