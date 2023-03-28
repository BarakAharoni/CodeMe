const JobOffer = require('../models/jobOffer');

const createJobOffer = async (title, username, salary, description, published) => {
    const jobOffer = new JobOffer({
        title : title,
        username : username,
        salary : salary
    });

    if (description)
        jobOffer.description = description;

    if (published)
        jobOffer.published = published;

    return await jobOffer.save();
};

const getJobOfferById = async (id) => {
    return await JobOffer.findById(id);
};

const getJobOffers = async () => {
    return await JobOffer.find({});
};

const updateJobOffer = async (id, title) => {
    const jobOffer = await getJobOfferById(id);
    if (!jobOffer)
        return null;

    jobOffer.title = title;
    await jobOffer.save();
    return jobOffer;
};

const deleteJobOffer = async (id) => {
    const jobOffer = await getJobOfferById(id);
    if (!jobOffer)
        return null;

    await jobOffer.remove();
    return jobOffer;
};

module.exports = {
    createJobOffer,
    getJobOfferById,
    getJobOffers,
    updateJobOffer,
    deleteJobOffer
}