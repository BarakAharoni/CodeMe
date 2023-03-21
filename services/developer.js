const Developer = require('../models/developer');

const createDeveloper = async (
    name,
    username,
    password,
    city,
    github,
    langs,
    picture
) => {
    const developer = new Developer({
        name: name,
        username: username,
        password: password,
        langs: langs,
        github: github,
        city: city,
        picture: picture
    });

    return await developer.save();
};

const getDeveloperById = async (id) => {
    return await Developer.findById(id);
};

const getNameDeveloperById = async (id) => {
    return await (Developer.findById(id));
};

const getDeveloperByName = async (name) => {
    return await Developer.findOne({username: name});
};

const getDevelopers = async () => {
    return await Developer.find({});
};

const updateDeveloper = async (id, name, username, password, langs, city, github, picture) => {
    const developer = await getDeveloperById(id);
    if (!developer) 
        return null;
    
    developer.name = name;
    developer.username = username;
    developer.password = password;
    developer.langs = langs;
    developer.city = city;
    developer.github = github;
    developer.picture = picture;
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
    deleteDeveloper,
    getDeveloperByName,
    getNameDeveloperById
}