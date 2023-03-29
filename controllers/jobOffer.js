const jobOfferService = require('../services/jobOffer');
const users = require('../services/users');
const developerService = require("../services/developer");

const createJobOffer = async (req, res) => {
    const newJobOffer = await jobOfferService.createJobOffer(req.body.title,
                                                             req.body.username,
                                                             req.body.password,
                                                             req.body.salary,
                                                             req.body.description
                                                            );
    req.session.username = req.body.username;
    req.session.type = "job";
    res.json(newJobOffer);
};

const getJobOffers = async (req, res) => {
    const jobOffers = await jobOfferService.getJobOffers();
    res.render("../views/jobOffer.ejs", { jobOffers : jobOffers , user: await users.getUserByUsername(req.session.username, req.session.type),type: req.session.type});
    // res.json(jobOffers);
};

const getJobOffer = async (req, res) => {
    const jobOffer = await jobOfferService.getJobOfferById(req.params.id);
    if (!jobOffer) {
        return res.status(404).json({ errors: ['jobOffer not found'] });
    }

    res.json(jobOffer);
};

const updateJobOffer = async (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "title, name, salary are required",
      });
    }

    const jobOffer = await jobOfferService.updateJobOffer(req.params.id, req.body.title);
    if (!jobOffer) {
      return res.status(404).json({ errors: ['jobOffer not found'] });
    }

    res.json(jobOffer);
  };

  const deleteJobOffer = async (req, res) => {
    const jobOffer = await jobOfferService.deleteJobOffer(req.query.id);
    if (!jobOffer) {
      return res.status(404).json({ errors: ['jobOffer not found'] });
    }

    res.send();
  };


  module.exports = {
    createJobOffer,
    getJobOffers,
    getJobOffer,
    updateJobOffer,
    deleteJobOffer
  };