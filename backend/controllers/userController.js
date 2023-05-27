const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// using pakage to avoid using try catch while using async function
const registerUser = asyncHandler(async (req, res) => {
  // Destructuring body
  const { name, email, password } = req.body;

  // Adding Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please do not submit empty fields");
  }
  if (password < 6) {
    res.status(400);
    throw new Error("**Password is Too Short**");
  }

  //Checking Existing USers

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email already taken please choose another");
  }
  // Create new User

  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    const { _id, name, email, description } = user;
    res.status(201).json({
      _id,
      name,
      email,
      description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = {
  registerUser,
};
