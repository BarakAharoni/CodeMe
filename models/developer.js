const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Developer = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    langs: {
        type: Array,
        required: true
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
        contentType: String
    }
});

module.exports = mongoose.model('Developer', Developer);