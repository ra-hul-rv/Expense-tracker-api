const authService = require("../services/authService");

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    await authService.signup(username, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = {
  signup,
  login,
};
