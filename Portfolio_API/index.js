require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Skill = require("./models/skill.model.js");
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//get route
app.get("/api/skills", async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post route
app.post("/api/skills", async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete route
app.delete("/api/skills/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// modify route
app.put("/api/skills/:id", async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DB connection
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(() => {
    console.log("Connection failed");
  });
