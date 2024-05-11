const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  answerId: { type: String, required: false },
  created_at: { type: Date, default: Date.now },
  commentId: { type: String, required: false },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
