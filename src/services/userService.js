const User = require("../models/user");

const createUser = async (username, password) => {
  await User.create({
    username: username,
    password: password,
  });
};

const getUserByUsername = async (username) => {
  return await User.findOne({
    where: {
      username: username,
    },
  });
};

module.exports = {
  createUser,
  getUserByUsername,
};
