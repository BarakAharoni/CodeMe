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

    async fetch() {
      const response = await fetch(`https://api.github.com/users/${this.username}`);
      const data = await response.json();

      this.name = data.name;
      this.bio = data.bio;
      this.location = data.location;
      this.avatar = data.avatar_url;
      this.followers = data.followers;
      this.following = data.following;
      this.html_url = data.html_url;
      console.log("in fetch: ", this.bio);
      // Fetch repositories
      const reposResponse = await fetch(`https://api.github.com/users/${this.username}/repos`);
      const reposData = await reposResponse.json();

      this.repositories = reposData;
      console.log("in fetch repositories: ", this.repositories[0].description);
    }
  }

  module.exports = { GithubProfile };