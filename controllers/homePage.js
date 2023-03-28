const developerService = require('../services/developer');


const getHome = async (req, res) => {
    const developers = await developerService.getDevelopers();
    res.render("../views/homePage.ejs", { developers: developers });
    //res.json(developer);
};


  module.exports = {
    getHome
  };