const { Topic } = require("../models");

class TopicRepository{
    async createTopic(topicData) {
        try {
            const topic = await Topic.create({
                name : topicData.name
            });
            return topic;
        } catch (error) {
            throw new error;
        }
    }

    async getTopics() {
        try {
            const topics = await Topic.find()
            return topics;
        } catch (error) {
            throw new error;
        }
    }
}

module.exports = TopicRepository