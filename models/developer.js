const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const defaultImg = fs.readFileSync('./images/basicDev.png');

const Developer = new Schema({
    _id : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    langs: {
        type: Array,
        default: []
    },
    city: {
        type: String,
        default: true
    },
    github: {
        type: String,
        required: true
    },
    picture: {
        type: Buffer,
        contentType: String,
        default: defaultImg.toString('base64')
    }
});

module.exports = mongoose.model('Developer', Developer);