const JobOffer = require("../models/jobOffer");
const dev = require("../models/developer");
const admin = require("../models/admin");
const getUserByUsername = async (name, type) => {
    let user;
    try {
        user = await admin.findOne({username: name});

        if(!user && type === "dev"){
            user = await dev.findOne({username: name});
        }
        if(!user && type === "job"){
            user = await JobOffer.findOne({username: name});
        }
        return user;
    }
    catch (e) {
        return null;
    }
};

module.exports = {
    getUserByUsername
}