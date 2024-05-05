const express = require("express");
const router = express.Router();
const { getEducation, createEducation, updateEducation, deleteEducation} = require("../controllers/education.controller");
const Education = require("../models/education.model");

// get all skills
router.get("/", getEducation);

// create a skill
router.post("/", createEducation);

// update a skill
router.put("/:id", updateEducation);

// // delete a skill
router.delete("/:id", deleteEducation);

module.exports = router;
