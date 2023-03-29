const express = require('express');
var router = express.Router();
const jobOfferController = require('../controllers/jobOffer');
const JobOfferCreateController = require('../controllers/jobOfferCreate.js');
const JobOfferUpdateController = require('../controllers/jobOfferUpdate.js');

router.route('/')
    .get(jobOfferController.getJobOffers)
    .post(jobOfferController.createJobOffer);

router
    .route('/create')
    .get(JobOfferCreateController.getForm)
    .post(JobOfferCreateController.createJobOffer);

router
    .route('/update')
    .get(JobOfferUpdateController.getForm)
    .post(JobOfferUpdateController.updateJobOffer);

router
    .route('/delete')
    .get(jobOfferController.deleteJobOffer)
    .delete(jobOfferController.deleteJobOffer)

router.route('/:id')
    .get(jobOfferController.getJobOffer)
    .put(jobOfferController.updateJobOffer)
    .delete(jobOfferController.deleteJobOffer);

module.exports = router;