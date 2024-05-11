const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    userId : {type : String , required : true},
    targetUserId : { type : String, required : true}
});

const Follow = mongoose.model("Follow", followSchema);

module.exports = Follow;