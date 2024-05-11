const express = require("express");
const topicRouter = express.Router();
const { topicController } = require("../../controllers");

topicRouter.post("/",topicController.createTopic);
topicRouter.get("/",topicController.getTopics);


module.exports = topicRouter;