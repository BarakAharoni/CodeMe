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
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

app.use('/developers', developers);


app.listen(process.env.PORT); 