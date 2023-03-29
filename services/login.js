const Developer = require("../models/developer");
const Admin = require("../models/admin");
const Job = require("../models/jobOffer");


async function getDevByUsername(username, password) {
    const dev = await Developer.findOne({ username: username, password: password});
    return dev != null
}

async function getDeJobOfferByUsername(username, password) {
    const dev = await Job.findOne({ username: username, password: password});
    return dev != null
}

async function getAdminByUsername(username, password) {
    const admin = await Admin.findOne({ username: username, password: password});
    return admin != null
}

module.exports = {
    getDevByUsername,
    getAdminByUsername,
    getDeJobOfferByUsername
}