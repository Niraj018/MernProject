const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
// body parser helps us convert any information coming from front end to an object so that we can read it on backend
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// This is the middleware section
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "*"],
    credentials: true,
  })
);
app.options("*", cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

//Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Error Middleware
app.use(errorHandler);

// Connecting to Database and start server
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
