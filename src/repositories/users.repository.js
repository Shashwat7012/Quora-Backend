const { User, Follow } = require("../models");

class UserRepository {
  async addUser(userData) {
    try {
      const user = await User.create({
        username: userData.username,
        email: userData.email,
      });

      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUser(userId) {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateUser(userId, userData) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      console.log("In the Repo", user);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async followAUser(userId, targetUserId) {
    try {
      const submitterUser = await User.findById(userId);
      if (!submitterUser)
        return {
          success: false,
          resource: "userId",
        };

      const targetUser = await User.findById(targetUserId);
      if (!targetUser)
        return {
          success: false,
          resource: "targetUserId",
        };

      await Follow.create({
        userId,
        targetUserId,
      });
      return {
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
