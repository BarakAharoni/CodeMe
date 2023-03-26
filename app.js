const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const webSocket = require('ws');
const http = require('http');

const developers = require('./routes/developer');
const jobOffers = require('./routes/jobOffer');
// const githubProfile = require('./routes/github-profile');

const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING,
                {   useNewUrlParser: true,
                    useUnifiedTopology: true });

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/developers', developers);
app.use('/jobOffers', jobOffers);
// app.use('/githubProfile', githubProfile);

const { GithubProfile } = require('./Models/github-profile');
app.get('/githubProfile', async function (req, res) {
  try {
    if (!req.query.id) {
      console.log('github-profile (/githubProfile) empty');
      return res.status(404).json({ errors: ['profile not entered'] });
    }
    let profile = new GithubProfile(req.query.id);
    await profile.fetch();

    console.log('github-profile (/githubProfile): ', profile.username, " bio: ", profile.bio);
    res.render('github-profile.ejs', { profile });
  } catch {
    console.log('github-profile (/githubProfile) failed');
    return res.status(404).json({ errors: ['profile not found'] });
  }

});

// app.get('/:id', async function (req, res) {
//   // First read existing users.
//   const profile = new GithubProfile(req.query.id);
//   console.log('github-profile: ', profile.username);
//   if (!profile) {
//     return res.status(404).json({ errors: ['profile not found'] });
//   }

//   // res.json(profile);
//   // res.render('github-profile.ejs', { profile });
// });

// const { GithubProfile } = require('./Models/github-profile');
// const profile2 = new GithubProfile('Barak Aharoni');
// wss.on('connection', (socket) => {
//     console.log('WebSocket connection established');
//     socket.on('message', async (message) => {
//       const data = JSON.parse(message);
//       switch (data.type) {
//         case 'fetchProfile':
//           await profile2.fetch();
//           socket.send(JSON.stringify({ type: 'updateProfile', profile2 }));
//           break;
//       }
//     });
// });

app.listen(process.env.PORT);
