const express = require("express");
const comment = require("../controllers/comment");
const router = express.Router();

router.route('/')
    .get(comment.getComments)
    .post(comment.createComment);

router.route("/dev/:id")
    .get(comment.getCommentsById);

router.route('/addcomment/:id')
    .get(comment.addComment);

router.route('/byid/:id')
    .get(comment.getComment)
    .put(comment.updateComment)
    .delete(comment.deleteComment);

router.route('/rating/:rating')
    .get(comment.getCommentsByRating);

module.exports = router;