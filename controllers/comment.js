const commentService = require("../services/comment");

const createComment = async (req, res) =>
{
    const comment = await commentService.createComment(req.body.content, req.body.rating);
    //res.json(comment);
    res.render("../views/success", { comment: comment }, function (err, html) { res.send(html); })
}

const getComments = async (req, res) =>
{
    const comments = await commentService.getComments();
    //res.json(comments);
    res.render("../views/comment", { comments: comments });
}

const getComment = async (req, res) =>
{
    const comment = await commentService.getCommentById(req.params.id);
    if (!comment)
        return res.json(404)({ errors: ["comment not found"] });
    res.json(comment);
    //res.render("../views/comment", { comments: [comment] });
}

const getCommentsByRating = async (req, res) =>
{
    const comments = await commentService.getCommentsByRating(req.params.rating);
    res.json(comments);
    //res.render("../views/comment", { comments: comments });
}

const updateComment = async (req, res) =>
{
    const comment = await commentService.updateComment(req.params.id, req.body.content, req.body.rating);
    res.json(comment);
}

const deleteComment = async (req, res) =>
{
    const comment = await commentService.deleteComment(req.params.id);
    if (!comment)
        return res.json(404)({ errors: ["comment not found"] });
    res.json(comment);
}

module.exports = 
{
    createComment,
    getComments,
    getComment,
    getCommentsByRating,
    updateComment,
    deleteComment
};