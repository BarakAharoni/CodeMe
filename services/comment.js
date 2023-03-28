const Comment = require("../models/comment");
const Dev = require("../models/developer");

const createComment = async (content, rating, id) =>
{
    const comment = new Comment ({ content: content, rating: rating, date: Date.now(), dev: id });
    return await comment.save();
}

const getComments = async () =>
{
    return await Comment.find({});
};

const getComment = async (id) =>
{
    return await comment.findById(id);
};

const getCommentsById = async (id) =>
{
    return await Comment.find({ dev: id });
};

const getCommentsByRating = async (rating) =>
{
    return await Comment.find({ rating: rating });
};

const updateComment = async (id, content, rating) =>
{
    return await Comment.findByIdAndUpdate(id, { content: content, rating: rating });
}

const deleteComment = async (id) =>
{
    return await Comment.findByIdAndDelete(id);
};

module.exports =
{
    createComment,
    getComments,
    getComment,
    getCommentsById,
    getCommentsByRating,
    updateComment,
    deleteComment
};