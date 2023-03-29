const jsdom = require('jsdom');
const dom = new jsdom.JSDOM("");
const jQuery = require('jquery')(dom.window);



var cities = [];
    let data = {
        resource_id: 'b7cf8f14-64a2-4b33-8d4b-edb286fdbd37',
        limit: 1500
    };
    jQuery.ajax({
        url: 'https://data.gov.il/api/action/datastore_search',
        data: data,
        dataType: 'json',
        success: (data) => {
            data
                .result
                .records
                .map(item => cities.push(item));
        }
    });

const developerService = require('../services/developer');
const createDeveloper = async (req, res) => {
    const newDeveloper = await developerService.createDeveloper(req.body.title);
    res.json(newDeveloper);
};

const getForm = async (req, res) => {

    const developers = await developerService.getDevelopers();
    res.render("../views/developerRegister.ejs", {developers: developers, cities:cities});
    //res.json(developer);
};

const getAllCities = async (req,res) => {
    return cities;
}

module.exports = {
    createDeveloper,
    getForm,
    getAllCities
};