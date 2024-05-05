const express = require("express");
const router = express.Router();
const { getSkill, createSkill, updateSkill, deleteSkill } = require("../controllers/skill.controller");
const Skill = require("../models/skill.model");


// get all skills
router.get("/", getSkill);

// create a skill
router.post("/", createSkill);

// update a skill
router.put("/:id", updateSkill);

// delete a skill
router.delete("/:id", deleteSkill);


module.exports = router;
