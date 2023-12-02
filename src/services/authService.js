const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const userService = require("./userService");

const signup = async (username, password) => {
  // Check if the user already exists
  const existingUser = await userService.getUserByUsername(username);
  if (existingUser) {
    throw new Error("Username already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the user in the database
  await userService.createUser(username, hashedPassword);
};

const login = async (username, password) => {
  // Retrieve the user from the database
  const user = await userService.getUserByUsername(username);

  // Check if the user exists and the password is correct
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  // Generate a JWT token
  const token = jwt.generateToken({ userId: user.id, username: user.username });

  return token;
};

module.exports = {
  signup,
  login,
};
