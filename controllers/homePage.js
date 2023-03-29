const developerService = require('../services/developer');


const getHome = async (req, res) => {
    const developers = await developerService.getDevelopers();
    const cityGroup = await developerService.getCityByGroup();
    res.render("../views/homePage.ejs", { developers: developers , user: await developerService.getDeveloperByName(req.session.username),cityGroup: cityGroup, type: req.session.type});
    //res.json(developer);
};


  module.exports = {
    getHome
  };