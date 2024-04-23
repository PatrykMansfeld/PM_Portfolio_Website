const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
  skillName: {
    type: String,
  },

  expiriecneLevel: {
    type: String,
  },
});

const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;
