const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");

router.get("/signup", loginController.signupForm);
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get('/logout', loginController.logout);
router.get('/', loginController.isLoggedIn, loginController.renderHome);

module.exports = router;