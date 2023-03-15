const Developer = require("../../models/developer");


async function getDevByUsername(username) {
    const dev = await Developer.findOne({ _id: username});
    return dev != null
}

async function addDev(username, password) {

    const dev = new Developer({
        _id: username,
        password
    });

    await dev.save()
}

module.exports = {
    getDevByUsername,
    addDev
}