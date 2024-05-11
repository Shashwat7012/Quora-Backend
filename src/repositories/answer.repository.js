const NotFoundError = require("../errors/notfound.error");
const { Answer } = require("../models");
const { Comment } = require("../models");
class AnswerRepository {
  async updateAnswer(answerId, answerData) {
    try {
      const updatedAnswer = await Answer.findByIdAndUpdate(
        answerId,
        answerData,
        { new: true }
      );
      return updatedAnswer;
    } catch (error) {
      throw new error();
    }
  }
  async addCommentOnAnswer(answerId, commentData) {
    try {
      const getAnswer = await Answer.findById(answerId);
      if (getAnswer) {
      console.log("Get Answer :", getAnswer, " For ID:", answerId)

        const addComment = await Comment.create({
          userId: commentData.userId,
          text: commentData.text,
          answerId: answerId,
        });
        return addComment;
      }
      return false;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = AnswerRepository;
