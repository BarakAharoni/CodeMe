const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login");
const chatController = require("../controllers/developer");

router.get("/signup", loginController.signupForm);
router.post("/login", loginController.login);
router.get('/logout', loginController.logout);
router.get("/chat", chatController.chat);
router.get('/', loginController.isLoggedIn, loginController.renderHome);

module.exports = router;