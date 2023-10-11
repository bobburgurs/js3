const express = require("express");
const app = express();

// Serve static files from the `public` directory
app.use(express.static("./public"));

// Handle GET requests to the `/` endpoint
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Handle POST requests to the `/` endpoint
app.post("/", (req, res) => {
  res.sendFile(__dirname + "/public/index2.html");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
