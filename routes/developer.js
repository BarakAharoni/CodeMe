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
    .route('/developers/developerProfile')
    .get(DeveloperProfileController.getDeveloper)
    .post(DeveloperProfileController.createDeveloper);

    router
    .route('/developers/register')
    .get(DeveloperRegisterController.getForm)
    .post(DeveloperRegisterController.createDeveloper);

router
    .route('/:id')
    .get(DeveloperController.getDeveloper)
    .put(DeveloperController.updateDeveloper)
    .delete(DeveloperController.deleteDeveloper);

module.exports = router;