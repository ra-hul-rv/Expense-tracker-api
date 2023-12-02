const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Example protected route
router.get("/protected", authMiddleware.verifyToken, (req, res) => {
  res.json({ message: "Protected route" });
});

module.exports = router;
