const { NODE_ENV, ATLAS_DB_URL } = require("./server.config");
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") await mongoose.connect(ATLAS_DB_URL);
    else await mongoose.connect("Something else!");
  } catch (error) {
    console.log("Not able to connect!");
    console.log(error);
  }
}

module.exports = connectToDB;
