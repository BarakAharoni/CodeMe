const developerService = require('../services/developer');

const createDeveloper = async (req, res) => {
    const newDeveloper = await developerService.createDeveloper(req.body.title);
    res.json(newDeveloper);
};

const getDevelopers = async (req, res) => {
    const developers = await developerService.getDevelopers();
    res.render("../views/developerProfile.ejs", { developers: developers });
};

const getDeveloper = async (req, res) => {
    const developer = await developerService.getDeveloperById(req.query.id);
    if (!developer) {
        return res.status(404).json({ errors: ['Developer not found'] });
    }

    //github Account
    if (!req.query.id) {
      return res.status(404).json({ errors: ['profile not entered'] });
    }
    const profile = developerService.git(req.query.id);
    res.render("../views/developerProfile.ejs", { developer: developer, git: (await profile)});
};

const updateDeveloper = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title is required",
      });
    }
  
    const developer = await developerService.updateDeveloper(req.params.id, req.body.title);
    if (!developer) {
      return res.status(404).json({ errors: ['Developer not found'] });
    }
  
    res.json(developer);
  };

  const deleteDeveloper = async (req, res) => {
    const developer = await developerService.deleteDeveloper(req.params.id);
    if (!developer) {
      return res.status(404).json({ errors: ['Developer not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createDeveloper,
    getDevelopers,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper
  };