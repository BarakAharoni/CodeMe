const express = require('express');
var router = express.Router();
const DeveloperController = require('../controllers/developer');
const DeveloperProfileController = require('../controllers/developerProfile');

router.route('/')
    .get(DeveloperController.getDevelopers)
    .post(DeveloperController.createDeveloper);

router.route('/developerProfile')
    .get(DeveloperProfileController.getDeveloper)
    .post(DeveloperProfileController.createDeveloper);

router.route('/:id')
    .get(DeveloperController.getDeveloper)
    .put(DeveloperController.updateDeveloper)
    .delete(DeveloperController.deleteDeveloper);

module.exports = router;