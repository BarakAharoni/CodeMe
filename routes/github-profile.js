const express = require('express');
var router = express.Router();
const githubProfileController = require('../controllers/github-profile');

// router.route('/')
//     .get(githubProfileController.getDevelopers)
//     .post(githubProfileController.createDeveloper);

router.route('/githubProfile')
    .get(githubProfileController.getGithubProfile)
    .post(githubProfileController.updateGithubProfile);

router.route('/:id')
    .get(githubProfileController.getGithubProfile)
    .put(githubProfileController.updateGithubProfile);
    // .delete(githubProfileController.deleteDeveloper);

module.exports = router;