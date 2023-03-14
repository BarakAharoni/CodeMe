const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Developer = new Schema({
    name : {
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

    picture: {
        type: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Developer', Developer);