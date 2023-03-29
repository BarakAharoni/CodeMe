const developerService = require('../services/developer');


const getHome = async (req, res) => {
    const developers = await developerService.getDevelopers();
    const cityGroup = await developerService.getCityByGroup();
    res.render("../views/homePage.ejs", { developers: developers, cityGroup: cityGroup });
    //res.json(developer);
};


  module.exports = {
    getHome
  };