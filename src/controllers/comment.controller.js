const { CommentRepository } = require("../repositories");
const { CommentService } = require("../services");

const { StatusCodes } = require("http-status-codes");
const commentService = new CommentService(new CommentRepository());
const MissionParams = require("../errors/missingParams.error");

async function addCommentOnComment(req, res, next) {
  try {
    if (!req.params.commentId || !req.body.text || !req.body.userId) {
      const params = ["text", "userId"];
      throw new MissionParams(params);
    }
    const answer = await commentService.postCommentOnComment(
      req.params.commentId,
      req.body
    );

    return res.status(StatusCodes.CREATED).json({
      succcess: true,
      message: "Successfully added a comment on comment",
      data: answer,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addCommentOnComment,
};
