const developerService = require('../services/developer');
const cities = require('../controllers/developerRegister');
const users = require('../services/users');

const createDeveloper = async (req, res) => {
    const newDeveloper = await developerService.createDeveloper(req.body.name, req.body.username, req.body.password, req.body.city, req.body.github, req.body.langs , req.body.picture);
    req.session.username = req.body.username;
    req.session.type = "dev";
    res.json(newDeveloper);
};

const getDevelopers = async (req, res) => {
    const developers = await developerService.getDevelopers();
    res.render("../views/developersOption.ejs", { developers: developers, dev: await users.getUserByUsername(req.session.username, req.session.type), type: req.session.type});
    //res.json(developer);
};

const getDeveloper = async (req, res) => {
    try {
        const developer = await developerService.getDeveloperById(req.params.id);
        if (!developer) {
            return res.status(404).json({ errors: ['Developer not found'] });
        }
    }
    catch (e) {
        return res.status(404).json({ errors: ['Developer not found'] });
    }

    res.json(developer);
};

const updateDeveloper = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title is required",
      });
    }
    const developer = await developerService.updateDeveloper(req.query.id, req.body.name, req.body.username ,req.body.password,  req.body.langs,  req.body.city,  req.body.github,  req.body.picture);
    if (!developer) {
      return res.status(404).json({ errors: ['Developer not found'] });
    }
    if(req.body.type !== "admin") {
        req.session.username = req.body.username;
    }
    res.json(developer);
  };

  const deleteDeveloper = async (req, res) => {
    const developer = await developerService.deleteDeveloper(req.query.id);
    if (!developer) {
      return res.status(404).json({ errors: ['Developer not found'] });
    }
    const developers = await developerService.getDevelopers();
    res.json(developers);
  };

const updateDeveloperPage = async (req, res) => {
    try {
        const developers = await developerService.getDevelopers();
        const developer = await developerService.getDeveloperById(req.query.id);
        const city = await cities.getAllCities();
        if (!developer || req.session.username === undefined) {
            console.log("not valid name " + req.query.id)
            res.redirect('/developers')
        }
        else if(req.session.username !== developer.username && req.session.type !== "admin"){
            console.log("not match")
            res.redirect('/developers')
        }
        //res.json(developer);
        else {
            res.render("../views/developerUpdate.ejs", {developers: developers, dev: developer ,cities: city, type: req.session.type});
        }
    }
    catch (e) {
        res.redirect('/developers')
    }
};

  module.exports = {
    createDeveloper,
    getDevelopers,
    getDeveloper,
    updateDeveloper,
    deleteDeveloper,
    updateDeveloperPage,
  };