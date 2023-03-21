const developerService = require('../services/developer');
const cities = require('../controllers/developerRegister');

const createDeveloper = async (req, res) => {
    const newDeveloper = await developerService.createDeveloper(req.body.name, req.body.username, req.body.password, req.body.city, req.body.github, req.body.langs , req.body.picture);
    res.json(newDeveloper);
};

const getDevelopers = async (req, res) => {
    const developers = await developerService.getDevelopers();
    if (req.session.username === undefined){
        res.redirect('/login')
    }
    else{
        res.render("../views/developersOption.ejs", { developers: developers, developerOwner: await developerService.getDeveloperByName(req.session.username)});
    }
    //res.json(developer);
};

const getDeveloper = async (req, res) => {
    const developer = await developerService.getDeveloperById(req.params.id);
    if (!developer) {
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

    //res.json(developer); error
  };

  const deleteDeveloper = async (req, res) => {
    const developer = await developerService.deleteDeveloper(req.params.id);
    if (!developer) {
      return res.status(404).json({ errors: ['Developer not found'] });
    }
  
    res.send();
  };

const updateDeveloperPage = async (req, res) => {
    try {
        const developer = await developerService.getDeveloperById(req.query.id);
        if (!developer || req.session.username === undefined) {
            res.redirect('/developers')
        }
        else if(req.session.username !== developer.username){
            res.redirect('/developers')
        }
        //res.json(developer);
        else {
            res.render("../views/developerUpdate.ejs", {dev: developer,developers: developerService.getDevelopers() ,cities: cities.getAllCities()});
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