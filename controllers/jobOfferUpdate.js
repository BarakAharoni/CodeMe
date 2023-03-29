const jobOfferService = require('../services/jobOffer');
const updateJobOffer = async (req, res) => {
    const newJobOffer = await jobOfferService.updateJobOffer(req.query.id,
        req.body.title,
        req.body.username,
        req.body.password,
        req.body.salary,
        req.body.description
    );
    if(req.body.type !== "admin") {
        req.session.username = req.body.username;
        req.session.type = "job";
    }
    res.json(newJobOffer);
};

const getForm = async (req, res) => {

    const jobOffers = await jobOfferService.getJobOffers();
    const job = await jobOfferService.getJobOfferById(req.query.id);
    res.render("../views/jobOfferUpdate.ejs", {jobOffers: jobOffers, job: job,type: req.session.type});
};

module.exports = {
    updateJobOffer,
    getForm
};