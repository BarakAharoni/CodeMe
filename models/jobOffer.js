const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobOffer = new Schema({
    title : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    salary : {
        type: Number,
        required: true
    },
    published: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: "No job description."
    }
});

module.exports = mongoose.model('JobOffer', JobOffer);