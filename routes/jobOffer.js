const express = require('express');
var router = express.Router();
const jobOfferController = require('../controllers/jobOffer');

router.route('/')
    .get(jobOfferController.getJobOffers)
    .post(jobOfferController.createJobOffer);

router.route('/:id')
    .get(jobOfferController.getJobOffer)
    .put(jobOfferController.updateJobOffer)
    .delete(jobOfferController.deleteJobOffer);

module.exports = router;