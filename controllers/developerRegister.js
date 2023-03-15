const developerService = require('../services/developer');

const createDeveloper = async (req, res) => {
    const newDeveloper = await developerService.createDeveloper(req.body.title);
    res.json(newDeveloper);
};

const getForm = async (req, res) => {
    const developers = await developerService.getDevelopers();
    res.render("../views/developerRegister.ejs", { developers: developers });
    //res.json(developer);
};

  module.exports = {
    createDeveloper,
    getForm
  };