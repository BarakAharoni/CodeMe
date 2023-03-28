const commentService = require("../services/comment");
const devService = require("../services/developer");

const addComment = async (req, res) =>
{
    const dev = await devService.getDeveloperById(req.params.id);
    res.render("../views/addComment", { dev: dev });
}

const createComment = async (req, res) =>
{
    const comment = await commentService.createComment(req.body.content, req.body.rating, req.body.id);
    const dev = devService.getDeveloperById(req.params.id);
    //res.json(comment);
    res.render("../views/success", { comment: comment, dev: dev }, function (err, html) { res.send(html); })
}

const getComments = async (req, res) =>
{
    const comments = await commentService.getComments();
    res.json(comments);
}

const getComment = async (req, res) =>
{
    const comment = await commentService.getComment(req.params.id);
    if (!comment)
        return res.json(404)({ errors: ["comment not found"] });
    const dev = await devService.getDeveloperById(comment.dev);
    //res.json(comment);
    res.render("../views/comment", { comments: [comment], dev: dev });
}

const getCommentsById = async (req, res) =>
{
    const comments = await commentService.getCommentsById(req.params.id);
    const dev = await devService.getDeveloperById(req.params.id);
    if (!comments)
        return res.json(404)({ errors: ["comment not found"] });
    //res.json(comments);
    res.render("../views/comment", { comments: comments, dev: dev });
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
    addComment,
    createComment,
    getComments,
    getComment,
    getCommentsById,
    getCommentsByRating,
    updateComment,
    deleteComment
};