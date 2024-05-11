const express = require("express");
const questionRouter = express.Router();
const { questionController } = require("../../controllers");


questionRouter.get("/ping",questionController.pingQuestions);
questionRouter.post("/",questionController.postNewQuestion);
questionRouter.get("/search",questionController.searchQuestion)
questionRouter.post("/:questionId/answers",questionController.postAnAnswerToQuestion);
module.exports = questionRouter