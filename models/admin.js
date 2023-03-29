const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const defaultImg = fs.readFileSync('./images/adminPic.png');

const Admin = new Schema({
    username :{ //username
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: Buffer,
        contentType: String,
        default: defaultImg.toString('base64')
    }
});

module.exports = mongoose.model('Admin', Admin);