const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  type: {
    type: String,
    enum: ["questions", "answers", "comments"],
    required: true,
  },
  id: { type: String, required: true },
});

const Like = mongoose.model("Like",likeSchema);

module.exports = Like; 