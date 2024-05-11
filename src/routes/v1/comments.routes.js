const express = require("express");
const commentRouter = express.Router();
const { commentController } = require("../../controllers")
commentRouter.post("/:commentId/comments",commentController.addCommentOnComment);
module.exports = commentRouter;