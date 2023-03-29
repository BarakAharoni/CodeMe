const JobOffer = require('../models/jobOffer');
var mongoose = require('mongoose');

const createJobOffer = async (title, username,password, salary, description, published) => {
    const jobOffer = new JobOffer({
        title : title,
        username : username,
        salary : salary,
        password: password
    });

    if (description)
        jobOffer.description = description;

    if (published)
        jobOffer.published = published;

    return await jobOffer.save();
};

const getJobOfferById = async (id) => {
    if(mongoose.Types.ObjectId.isValid(id)) {
        return await JobOffer.findById(id);
        } else {
            return null;
        }
};

const getJobOfferByUsername = async (name) => {
    try {
        return await JobOffer.findOne({username: name});
    }
    catch (e) {
        return null;
    }
};

const getJobOffers = async () => {
    return await JobOffer.find({});
};

const updateJobOffer = async (id, title, username, password, salary, description) => {
    const jobOffer = await getJobOfferById(id);
    if (!jobOffer)
        return null;

    jobOffer.title = title;
    jobOffer.username = username;
    jobOffer.password = password;
    jobOffer.salary = salary;
    jobOffer.description = description;
    await jobOffer.save();
    return jobOffer;
};

const deleteJobOffer = async (id) => {
    const jobOffer = await getJobOfferById(id);
    if (!jobOffer)
        return null;

    return await JobOffer.deleteOne(jobOffer);
};

module.exports = {
    createJobOffer,
    getJobOfferById,
    getJobOffers,
    updateJobOffer,
    deleteJobOffer,
    getJobOfferByUsername
}