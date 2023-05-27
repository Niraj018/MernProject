const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "**This field is required**"],
  },
  email: {
    type: String,
    required: [true, "**This field is required**"],
    unique: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "**Enter a valid email**",
    ],
  },
  password: {
    type: String,
    required: [true, "**Add Your Password**"],
    minLength: [5, "**Password Length is too Short**"],
    // maxLength: [70, "**Password is Too long**"],
  },
  description: {
    type: String,
    default: "Description",
    maxLength: [250, "**Desription is too Long**"],
  },
});

// Encrypting password before saving to DB so that you don't have to hash password in registering or changing password
userSchema.pre("save", async function (next) {
  //here pre makes sure that before saving the data to database the password is coverted to hashed password

  if (!this.isModified("password")) {
    return next();
  }
  // Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  // Since the password is not a variable yet so we need to point it through this keyword
  next();
  //So that the function that is nexted works you need to call the next function.
});

const User = mongoose.model("user", userSchema);
module.exports = User;
