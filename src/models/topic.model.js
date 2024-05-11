const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    name : { type : String , require : true},
    created_at : { type:Date , require : true, default : Date.now }
})

const Topic = mongoose.model("Topic",topicSchema);

module.exports = Topic;