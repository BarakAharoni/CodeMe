const Developer = require("../models/developer");


async function getDevByUsername(username, password) {
    const dev = await Developer.findOne({ username: username, password: password});
    return dev != null
}

module.exports = {
    getDevByUsername
}