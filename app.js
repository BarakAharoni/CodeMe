const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const developers = require('./routes/developer');
const newLocal = require('custom-env');
newLocal.env(process.env.NODE_ENV, './config');


mongoose.connect(process.env.DB_CONNECTION_STRING,
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const session = require('express-session');
app.use(session({
    secret: 'saveLogin',
    saveUninitialized: false,
    resave: false
}))
app.use("/", require("./routes/login"));
app.use("/developers", require("./routes/developer"))


app.listen(process.env.PORT);

console.log("server run")