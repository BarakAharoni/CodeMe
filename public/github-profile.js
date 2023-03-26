// const { GithubProfile } = require('../Models/github-profile');
// const profile = new GithubProfile('RomiSalomon');
// const webSocket = require('ws');
// const socket = new webSocket('ws://localhost:3000');

// socket.addEventListener('open', () => {
//   console.log('WebSocket connection established');

//   // Fetch profile data initially
//   socket.send(JSON.stringify({ type: 'fetchProfile' }));
// });

// socket.addEventListener('message', async (event) => {
//   const data = JSON.parse(event.data);

//   switch (data.type) {
//     case 'updateProfile':
//       // Update profile data
//       await profile.fetch();
//       socket.send(JSON.stringify({ type: 'updateProfile', profile }));
//       break;
//   }
// });
