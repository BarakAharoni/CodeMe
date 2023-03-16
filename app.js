const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const developers = require('./routes/developer');
const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');

mongoose.connect(process.env.CONNECTION_STRING, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.use('/developers', developers);


app.listen(process.env.PORT); 