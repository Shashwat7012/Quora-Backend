const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const { StatusCodes } = require("http-status-codes");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config.js");

app.get("/ping", (req, res, next) => {
  res.status(StatusCodes.OK).json({
    message: "Quora ping works fine",
  });
});

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server is connected to ", PORT);
  await connectToDB();
  console.log("Connected to DB");
});
