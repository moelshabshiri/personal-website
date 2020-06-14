const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const {
    userName,
    userPosition,
    projectName,
    projectType,
    projectDescription,
    projectLink,
    companyName,
    exStartYear,
    exEndYear,
    exDescription,
    schoolName,
    edStartYear,
    edEndYear,
    edSescription,
    skillName,
    skillStatus,
    facebook,
    instagram,
    github,
    linkedin
  } = req.body;

  const newUser = new User({
    userName,
    userPosition,
    projectName,
    projectType,
    projectDescription,
    projectLink,
    companyName,
    exStartYear,
    exEndYear,
    exDescription,
    schoolName,
    edStartYear,
    edEndYear,
    edSescription,
    skillName,
    skillStatus,
    facebook,
    instagram,
    github,
    linkedin
  });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
