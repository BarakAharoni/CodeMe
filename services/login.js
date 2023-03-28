const Developer = require("../models/developer");
const Admin = require("../models/admin");


async function getDevByUsername(username, password) {
    const dev = await Developer.findOne({ username: username, password: password});
    return dev != null
}

async function getAdminByUsername(username, password) {
    const admin = await Admin.findOne({ _id: username, password: password});
    return admin != null
}

module.exports = {
    getDevByUsername,
    getAdminByUsername
}