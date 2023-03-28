class GithubProfile {
    #username;
    #name;
    #bio;
    #location;
    #avatar;
    #followers;
    #following;
    #html_url;
    #repositories;
    constructor(username) {
      this.username = username;
      this.name = "";
      this.bio = "";
      this.location = "";
      this.avatar = "";
      this.followers = 0;
      this.following = 0;
      this.html_url = "";
      this.repositories = [];
    }

  }

  module.exports = { GithubProfile };