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
    try{
        return await Developer.findById(id);
    }
    catch (e) {
        return null;
    }
};

const getDeveloperByName = async (name) => {
    return await Developer.findOne({username: name});
};

const getDevelopers = async () => {
    return await Developer.find({});
};

const updateDeveloper = async (id, name_new, username_new, password_new, langs_new, city_new, github_new, picture_new) => {
    const developer = await getDeveloperById(id);
    if (!developer) 
        return null;
    developer.name = name_new;
    developer.username = username_new;
    developer.password = password_new;
    developer.langs = langs_new;
    developer.city = city_new;
    developer.github = github_new;
    developer.picture = picture_new;
    return await developer.save();
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
}