const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String, required: false },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
