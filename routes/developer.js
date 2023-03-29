const express = require('express');
var router = express.Router();
const homePageController = require('../controllers/homePage.js');
const DeveloperController = require('../controllers/developer.js');
const DeveloperProfileController = require('../controllers/developerProfile.js');
const DeveloperRegisterController = require('../controllers/developerRegister.js');

router
    .route('/')
    .get(homePageController.getHome)

router
    .route('/developers')
    .get(DeveloperController.getDevelopers)
    .post(DeveloperController.createDeveloper);

router
    .route('/developerProfile')
    .get(DeveloperProfileController.getDeveloper)

    router
    .route('/register')
    .get(DeveloperRegisterController.getForm)
    .post(DeveloperController.createDeveloper);

router
    .route('/update')
    .get(DeveloperController.updateDeveloperPage)
    .post(DeveloperController.updateDeveloper);

router
    .route('/delete')
    .get(DeveloperController.deleteDeveloper)


    router
    .route('/admin/register')
    .get(DeveloperRegisterController.getForm)
    .post(DeveloperRegisterController.createDeveloper);

router
    .route('/:id')
    .get(DeveloperController.getDeveloper)
    .put(DeveloperController.updateDeveloper)
    .delete(DeveloperController.deleteDeveloper);

    
const loginController = require("../login/controllers/login");
    
router.get("/signup", loginController.signupForm);
router.post("/signup", loginController.signup);
router.get("/login", loginController.loginForm);
router.post("/login", loginController.login);
router.get('/logout', loginController.logout);
router.get('/', loginController.isLoggedIn, loginController.renderHome);

module.exports = router;