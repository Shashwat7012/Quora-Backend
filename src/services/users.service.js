const NotFoundError = require("../errors/notfound.error");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async addUser(userData) {
    const user = await this.userRepository.addUser(userData);
    return user;
  }
  async getUser(userId) {
    const user = await this.userRepository.getUser(userId);
    if (!user) {
      throw new NotFoundError("userID", userId);
    }
    return user;
  }
  async updateUser(userId, userData) {
    const user = await this.userRepository.updateUser(userId, userData);
    if (!user) {
      throw new NotFoundError("userID", userId);
    }
    return user;
  }

  async followAUser(userId, targetUserId) {
    const follow = await this.userRepository.followAUser(userId, targetUserId);
    if (!follow.success) {
      if (follow["resource"] == "userId") {
        throw new NotFoundError("userId", userId);
      } else {
        throw new NotFoundError("targetUserId", targetUserId);
      }
    }
    return follow;
  }
}

module.exports = UserService;
