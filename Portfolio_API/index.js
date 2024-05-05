require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Skill = require("./models/skill.model.js");
const Education = require("./models/education.model.js");
const skillRoute = require("./routes/skill.route.js");
const educationRoute = require("./routes/education.route.js");

const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

//routes
app.use("/api/skills", skillRoute);
app.use("/api/education", educationRoute);

// DB connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
