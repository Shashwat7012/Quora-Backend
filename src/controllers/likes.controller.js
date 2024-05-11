const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const MissionParams = require("../errors/missingParams.error");
const InvalidParamValue = require("../errors/InvalidParamValue.error");
const { LikeService } = require("../services");
const { LikeRepository } = require("../repositories");

const likeService = new LikeService(new LikeRepository())
async function likeCommentQuestionComment(req, res, next) {
  try {
    console.log(req.params.type, " Type")
    console.log(req.params.id, " id")

    if (!req.params.type || !req.params.id || !req.body.userId) {
      const params = ["type", "id", "userId"];
      throw new MissionParams(params);
    }

    if (!["questions", "answers", "comments"].includes(req.params.type)) {
      throw new InvalidParamValue("type");
    }
    console.log("Value for Enum", ["questions", "answers", "comments"].includes(req.params.type))

    const like = await likeService.likeCommentQuestionAnswer(req.params.type,req.params.id,req.body.userId)
    return res.status(StatusCodes.CREATED).json({
        success : true,
        message : "Successfully liked to question, answer, or comment",
        error : {},
        data : like
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  likeCommentQuestionComment,
};
