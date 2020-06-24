const express = require('express');
const app = express();

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

app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
