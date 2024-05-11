const { Comment } = require("../models");

class CommentRepository {
  async postCommentOnComment(commentId, commentData) {
    try {
      const getComment = await Comment.findById(commentId);
      if (getComment) {
        const comment = await Comment.create({
          userId: commentData.userId,
          text: commentData.text,
          commentId : commentId
        });
        return comment;
      }
      return false;
    } catch (error) {
        console.log(error)
      throw new error();
    }
  }
}

module.exports = CommentRepository;
