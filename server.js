const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const jsonData = {
  success: true,
  message: "User list updated!",
  userData: [{
    name: "Soumik"
  }, {
    name: "Richik"
  }]
};

app.get("/users", function(req, res) {
  res.json(jsonData);
});

app.get("/users/:user", function(req, res) {
  jsonData.userData[2] = {
    name: req.params.user
  };
  res.json(jsonData);
});

app.post("/users/login", function(req, res) {
  if ((req.body.username === process.env.name) && (req.body.password === process.env.pass)) {
    res.json({
      success: true,
      message: "Username and Password match!",
      token: "<Encrypted token goes here>"
    });
  } else {
    res.json({
      success: false,
      message: "Username and Password do not match!",
      token: "<No token generated>"
    });
  }
});

app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
