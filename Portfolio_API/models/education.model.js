const mongoose = require("mongoose");

const EducationSchema = mongoose.Schema({
  UniversityName: {
    Name: String,
  },

  FieldOfStudy: {
    type: String,
  },

  Specialization: {
    type: String,
  },

  StartingDate: {
    type: String,
  },

  EndingDate: {
    type: String,
  },
});

const Education = mongoose.model("Education", EducationSchema);
module.exports = Education;
