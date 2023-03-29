const developerService = require('../services/developer');
const users = require('../services/users');


const getHome = async (req, res) => {
    const developers = await developerService.getDevelopers();
    const cityGroup = await developerService.getCityByGroup();
    res.render("../views/homePage.ejs", { developers: developers , user: await users.getUserByUsername(req.session.username, req.session.type),cityGroup: cityGroup, type: req.session.type});
    //res.json(developer);
};


  module.exports = {
    getHome
  };