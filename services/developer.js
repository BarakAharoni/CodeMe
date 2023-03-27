const Developer = require('../models/developer');
const {GithubProfile} = require('../Models/github-profile');

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

const git = async(id) => {
    const dev = await Developer.findById(id);
    var gitName = dev.github;
    const response = await fetch(`https://api.github.com/users/${gitName}`);
    const data = await response.json();
    
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
};


module.exports = {
    createDeveloper,
    getDeveloperById,
    getDevelopers,
    updateDeveloper,
    deleteDeveloper,
    git
}