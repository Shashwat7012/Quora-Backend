const { Question, Answer, Comment, Like } = require("../models");

class LikeRepository {
  async likeCommentQuestionAnswer(type, id, userId) {
    try {
      const getQuestion = await Question.findById(id);
      if (!getQuestion) {
        const getAnswer = await Answer.findById(id);
        if (!getAnswer) {
          const getComment = await Comment.findById(id);
          if (!getComment) {
            return false;
          }
        }
      }

      console.log("Here")
      const like = await Like.create({
        type,
        id,
        userId,
      });
      return like;
      
    } catch (error) {
        console.log(error)
      throw error;
    }
  }
}

module.exports = LikeRepository;
