const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  loginStatus,
  updateUser,
  changePassword,
} = require("../controllers/userController");

const protect = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
// GetUser is used to check if the user is logged in or not and decide what to do afterwards
router.get("/getUser", protect, getUser);
router.get("/loggedIn", loginStatus);

// This function is used to update the data of the user in user Profile
router.patch("/updateUser", protect, updateUser);
// Protect so that only logged users can access the Update profile feature
// Patch request is the process of modifying resources based on your liking

router.patch("/changePassword", protect, changePassword);

module.exports = router;
