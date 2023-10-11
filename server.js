const express = require("express");
const app = express();

// Serve static files from the "public" folder
app.use(express.static("public"));

// Handle GET request
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/pages/index.html");
});

// Handle POST request
app.post("/", function (req, res) {
  res.sendFile(__dirname + "/src/pages/submitted.html");
});

// Listen on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
