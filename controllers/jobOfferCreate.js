const jobOfferService = require('../services/jobOffer');
const createJobOffer = async (req, res) => {
    const newJobOffer = await jobOfferService.createDeveloper(req.body.title);
    res.json(newJobOffer);
};

const getForm = async (req, res) => {

    const jobOffers = await jobOfferService.getJobOffers();
    res.render("../views/jobOfferCreation.ejs", {jobOffers: jobOffers});
};

module.exports = {
    createJobOffer,
    getForm
};