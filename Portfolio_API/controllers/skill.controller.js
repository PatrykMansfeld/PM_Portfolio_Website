const Skill = require("../models/skill.model.js");

const getSkill = async (req, res) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSkill = async (req, res) => {
  try {
    const skills = await Skill.create(req.body);
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSkill = async (req, res) => {
    try {
      const { id } = req.params;
  
      const skills = await Skill.findByIdAndUpdate(id, req.body);
  
      if (!skills) {
        return res.status(404).json({ message: "Skill not found" });
      }
  
      const updatedSkill = await Skill.findById(id);
      res.status(200).json(updatedSkill);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // delete a skill
  const deleteSkill = async (req, res) => {
    try {
      const { id } = req.params;
  
      const skill = await Skill.findByIdAndDelete(id);
  
      if (!skill) {
        return res.status(404).json({ message: "Skill not found" });
      }
  
      res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { getSkill, createSkill, updateSkill, deleteSkill};