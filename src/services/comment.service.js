const NotFoundError = require("../errors/notfound.error")
class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository
    }

    async postCommentOnComment(commentId,commentData) {
        const comment = await this.commentRepository.postCommentOnComment(commentId,commentData);
        if(!comment) {
            throw new NotFoundError("commentId", commentId);
        }
        return comment;
    }
}

module.exports = CommentService;