const express = require("express");
const router = express.Router();

const loginController = require("../login/controllers/login");

router.get("/signup", loginController.signupForm);
router.post("/signup", loginController.signup);
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get('/logout', loginController.logout);
router.get('/', loginController.isLoggedIn, loginController.renderHome);

module.exports = router;