const express = require('express');
const app = express();

const userData = [{
  name: "Soumik"
}, {
  name: "Richik"
}];

app.get("/users", function(req, res) {
  res.json({
    success: true,
    message: "User list obtained!",
    users: userData
  });
});

app.listen(8000, function() {
  console.log("Server is running on port 8000");
});
