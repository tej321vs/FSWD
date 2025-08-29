const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const upload = multer({ dest: "uploads/" });
app.post("/register", upload.single("profilePic"), (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    dob: req.body.dob,
    gender: req.body.gender,
    hobbies: req.body.hobbies,
    course: req.body.course,
    bio: req.body.bio,
    profilePic: req.file ? req.file.filename : null
  };

  res.send(`
    <h2>Form Submitted Successfully</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
