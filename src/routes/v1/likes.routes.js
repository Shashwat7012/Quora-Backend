const express = require("express");
const likesRouter = express.Router();
const { likeController } = require("../../controllers")
likesRouter.post("/:type/:id/likes",likeController.likeCommentQuestionComment);
module.exports = likesRouter;