const Education = require("../models/education.model");

const getEducation = async (req, res) => {
  try {
    const Edu = await Education.find({});
    res.status(200).json(Edu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEducationById = async (req, res) => {
  try {
    const { id } = req.params;
    const edu = await Education.findById(id);

    if (!edu) {
      return res.status(404).json({ message: "Education not found" });
    }

    res.status(200).json(edu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEducation = async (req, res) => {
  try {
    const Edu = await Education.create(req.body);
    res.status(200).json(Edu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEducation = async (req, res) => {
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
  const deleteEducation = async (req, res) => {
    try {
      const { id } = req.params;

      const Edu = await Education.findByIdAndDelete(id);

      if (!Education) {
        return res.status(404).json({ message: "Skill not found" });
      }

      res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { getEducation, createEducation, updateEducation, deleteEducation, getEducationById };
