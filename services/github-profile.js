const GithubProfile = require('../Models/github-profile');

const getGithubProfileById = async (id) => {
    return await GithubProfile.findById(id);
};

const updateGithubProfile = async (id, title) => {
    const githubProfile = await getGithubProfileById(id);
    if (!githubProfile)
        return null;

    githubProfile.title = title;
    await githubProfile.save();
    return githubProfile;
};

module.exports = {
    getGithubProfileById,
    updateGithubProfile
};