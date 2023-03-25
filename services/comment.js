const Comment = require("../models/comment");

const createComment = async (content, rating) =>
{
    const comment = new Comment ({ content: content, rating: rating, date: Date.now() });
    return await comment.save();
};

const getComments = async () =>
{
    return await Comment.find({});
};

const getCommentById = async (id) =>
{
    return await Comment.findById(id);
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
    getCommentById,
    getCommentsByRating,
    updateComment,
    deleteComment
};