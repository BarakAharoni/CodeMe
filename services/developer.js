const Developer = require('../models/developer');

const createDeveloper = async (name, city, langs) => {
    const developer = new Developer({
        name : name,
        langs : langs,
        city : city
    });

    return await developer.save();
};

const getDeveloperById = async (id) => {
    return await Developer.findById(id);
};

const getDevelopers = async () => {
    return await Developer.find({});
};

const updateDeveloper = async (id, title) => {
    const developer = await getDeveloperById(id);
    if (!developer)
        return null;

    developer.title = title;
    await developer.save();
    return developer;
};

const deleteDeveloper = async (id) => {
    const developer = await getDeveloperById(id);
    if (!developer)
        return null;

    await developer.remove();
    return developer;
};

module.exports = {
    createDeveloper,
    getDeveloperById,
    getDevelopers,
    updateDeveloper,
    deleteDeveloper
}