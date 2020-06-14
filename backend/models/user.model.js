const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    userPosition: {
      type: String,
      required: true
    },
    projects: [
      {
        projectName: String,
        projectType: String,
        projectDescription: String,
        projectLink: String
      }
    ],
    experience: [
      {
        companyName: String,
        exStartYear: String,
        exEndYear: String,
        exDescription: String
      }
    ],
    education: [
      {
        schoolName: String,
        edStartYear: String,
        edEndYear: String,
        edSescription: String
      }
    ],
    skill: [
      {
        skillName: String,
        skillStatus: String
      }
    ],
    socialMediaLinks: {
      facebook: String,
      instagram: String,
      github: String,
      linkeden: String
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
