const NotFoundError = require("../errors/notfound.error");

class LikeService {
  constructor(likeRepository) {
    this.likeRepository = likeRepository;
  }
  async likeCommentQuestionAnswer(type, id, userId) {
    try {
      const like = await this.likeRepository.likeCommentQuestionAnswer(
        type,
        id,
        userId
      );

      console.log("Like")
      if (!like) {
        throw new NotFoundError("likeCommentQuestionAnswer");
      }
      return like;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = LikeService;
