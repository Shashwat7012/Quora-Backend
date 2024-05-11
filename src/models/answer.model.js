const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  question_id: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const Answer = mongoose.model("Answer",answerSchema);

module.exports = Answer;