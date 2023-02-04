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
    published: {
        type: Date,
        default: Date.now
    },

    picture: {
        type: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Developer', Developer);