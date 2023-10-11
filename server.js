const express = require("express");
const app = express();

// Make sure the server is listening on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// When the client sends a GET request to the / endpoint, send the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/index.html");
});

// When the client sends a POST request to the / endpoint, send the submitted.html file
app.post("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/submitted.html");
});
