class TopicService {
  constructor(topicRepository) {
    this.topicRepository = topicRepository;
  }
  async createTopic(topicData) {
    const topic = await this.topicRepository.createTopic(topicData);
    return topic;
  }
  async getTopics() {
    const topics = await this.topicRepository.getTopics();
    return topics;
  }
}

module.exports = TopicService;
