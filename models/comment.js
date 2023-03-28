const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Comment = new schema
({
    rating:
    {
        type: Number,
        required: true
    },
    
    content:
    {
        type: String,
    },

    date:
    {
        type: Date
    },

    dev:
    {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Comment", Comment);
