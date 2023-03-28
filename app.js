const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const developers = require('./routes/developer');
const jobOffers = require('./routes/jobOffer');
const comments = require("./routes/comment");
const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

mongoose.connect(process.env.CONNECTION_STRING,
    {   useNewUrlParser: true,
        useUnifiedTopology: true });
 
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));
app.set("view engine", "ejs");

app.get('/chat', (req, res) => { res.sendFile(__dirname + '/views/chat.html'); });

app.use('/jobOffers', jobOffers);
app.use("/comments", comments); 
app.use('/', developers);
 
io.on('connection', (socket) => 
{
    socket.broadcast.emit('joined', '');
 
    socket.on('disconnect', () => 
    {
        socket.broadcast.emit('disconnected', '');
    });

    socket.on('new message', (msg) => 
    {
        io.emit('new message', msg);
    });
});
 
http.listen(process.env.PORT);
