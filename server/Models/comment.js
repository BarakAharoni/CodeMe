const mongoose = require('mongoose');
const schema = mongoose.schema;

const Comment = new schema
({
    title:
    {
        type: String
    },

    content:
    {
        type: String
    },

    likes:
    {
        type: int,
        default: 0
    },

    dislikes:
    {
        type: int,
        default: 0
    },
});

module.exports = mongoose.model('Comment', Comment);