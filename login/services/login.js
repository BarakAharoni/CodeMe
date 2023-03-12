const Developer = require("../../models/developer");

async function checkIfExistUser(username, password) {
    const dev = await Developer.findOne({ _id: username, password });
    return dev != null
}

async function addUser(username, password) {

    const dev = new Developer({
        _id: username,
        password
    });

    await dev.save()
}

module.exports = {
    checkIfExistUser,
    addUser
}