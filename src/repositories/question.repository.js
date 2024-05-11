const { Question } = require("../models");
const { Answer } = require("../models");

class QuestionRepository {
  async postQuestion(questionData) {
    try {
      const question = await Question.create(questionData);
      return question;
    } catch (error) {
      throw new error();
    }
  }

  async searchQuestions(text, tag) {
    try {
      let questions;
      console.log("text: ", text);
      console.log("tag: ", tag);

      if (text && tag) {
        questions = await Question.find({
          title: { $regex: ".*" + text + ".*", $options: "i" },
          topicTags: tag,
        });
        return questions;
      } else if (text && !tag) {
        questions = await Question.find({
          title: { $regex: ".*" + text + ".*", $options: "i" },
        });
      } else if (tag && !text) {
        questions = await Question.find({
          topicTags: tag,
        });
      } else throw new "Need to atleast text or tags"();

      return questions;
    } catch (error) {
      throw new error();
    }
  }
  async postAnswerToQuestion(questionId, userId, text) {
    try {
      const answer = await Answer.create({
        question_id: questionId,
        userId: userId,
        text: text,
      });
      return answer;
    } catch (error) {
      throw new error();
    }
  }
}

module.exports = QuestionRepository;
