const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  topicTags: [String],
  created_at : { type : Date , default : Date.now }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
