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
    }
});

module.exports = mongoose.model("Comment", Comment);
