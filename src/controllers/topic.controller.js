const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const MissionParams = require("../errors/missingParams.error");
const { TopicService } = require("../services");
const { TopicRepository } = require("../repositories");
const topicService = new TopicService(new TopicRepository());


async function createTopic(req,res,next) {
    try {
        if(!req.body.name) {
            throw new MissionParams(["name"]);
        }

        const topic = await topicService.createTopic(req.body);

        return res.status(StatusCodes.CREATED).json({
            success : true,
            message: "Successfully created a topic",
            data : topic,
            error: {}
        })
    } catch (error) {
        next(error);
    }
}

async function getTopics(req,res,next) {
    try {
        const topics = await topicService.getTopics()
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully listed all the topics",
            data : topics,
            error : {}
        })
    } catch (error) {
        next(error)
    }
}
module.exports =  {
    createTopic,
    getTopics
}