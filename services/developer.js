const Developer = require('../models/developer');
const {GithubProfile} = require('../Models/github-profile');
var mongoose = require('mongoose');

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
    if(mongoose.Types.ObjectId.isValid(id)) {
        return await Developer.findById(id);
        } else {
            return null;
        }
};

const getDeveloperByName = async (name) => {
    try {
        return await Developer.findOne({username: name});
    }
    catch (e) {
        return null;
    }
}
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

    return await Developer.deleteOne(developer);
};

const git = async(id) => {
    const dev = await Developer.findById(id);
    var gitName = dev.github;
    let response;
    let data
    try {
        response = await fetch(`https://api.github.com/users/${gitName}`);
        data = await response.json();
        let profile = new GithubProfile(gitName);
        profile.name = data.name;
        profile.bio = data.bio;
        profile.location = data.location;
        profile.avatar = data.avatar_url;
        profile.followers = data.followers;
        profile.following = data.following;
        profile.html_url = data.html_url;
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${profile.username}/repos`);
        const reposData = await reposResponse.json();
        profile.repositories = reposData;
        return profile;
    }
    catch (e) {
        return null;
    }




};

const getCityByGroup  = async() => {
    var cityGroup = await Developer.aggregate([
        {
            $group:
            {
                _id: "$city",
                count: { $sum: 1 }

            }
        }
    ]);

    return cityGroup;
}

module.exports = {
    createDeveloper,
    getDeveloperById,
    getDevelopers,
    updateDeveloper,
    deleteDeveloper,
    git,
    getDeveloperByName,
    getCityByGroup
}