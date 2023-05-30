const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getUser", protect, getUser);
router.get("/loggedIn", loginStatus);

// GetUser is used to check if the user is logged in or not and decide what to do afterwards

module.exports = router;
