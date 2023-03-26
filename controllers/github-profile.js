const githubProfileService = require('../services/github-profile');

const { GithubProfile } = require('../Models/github-profile');

const getGithubProfile = async (req, res) => {
    // const profile = await githubProfileService.getGithubProfileById(req.query.id);
    const profile = new GithubProfile(req.query.id);

    try {
      await profile.fetch();

      console.log('github-profile (/githubProfile): ', profile.username, " bio: ", profile.bio);
      res.render('../views/github-profile.ejs', { profile });
    } catch {
      console.log('github-profile (/githubProfile) failed');
      return res.status(404).json({ errors: ['profile not found'] });
    }

    // res.json(profile);
    // res.render("../views/githubProfile.ejs", { githubProfile: githubProfile });

    // console.log('get githubProfile.ejs + ', githubProfile.username );
    // res.render('../views/github-profile.ejs', { profile });
};

const updateGithubProfile = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title is required",
      });
    }

    const githubProfile = await githubProfileService.updateGithubProfile(req.params.id, req.body.title);
    if (!githubProfile) {
      return res.status(404).json({ errors: ['githubProfile not found'] });
    }

    res.json(githubProfile);
  };


  module.exports = {
    getGithubProfile,
    updateGithubProfile
  };