const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const { UserService } = require("../services");
const { UserRepository } = require("../repositories");
const userService = new UserService(new UserRepository());

async function pingUserContoller(req, res) {
  return res.status(StatusCodes.OK).json({
    message: "Ping is working for Users service!!",
  });
}

async function createUser(req, res, next) {
  try {
    const newUser = await userService.addUser(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "New user is created successfully!",
      data: newUser,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

async function getUser(req, res, next) {
  try {
    const user = await userService.getUser(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully returned the user profile",
      error: {},
      data: user,
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully update the user profile!",
      data: user,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

async function followUser(req, res, next) {
  try {
    await userService.followAUser(req.params.userId, req.params.targetUserId);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User is followed successfully",
      data: [],
      error: {},
    });
  } catch (error) {
    next(error);
  }
}
module.exports = {
  pingUserContoller,
  createUser,
  getUser,
  updateUser,
  followUser,
};
