const express = require("express");
const answerRouter = express.Router();

const { answerController } = require("../../controllers")

answerRouter.get("/ping",answerController.pingAnswer);
answerRouter.put("/:answerId",answerController.updateAnswer);
answerRouter.post("/:answerId/comments",answerController.addCommentOnAnswer);

module.exports = answerRouter;