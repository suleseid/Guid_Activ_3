const express = require("express");
const path = requiure("path");
const fs =require("fs");
const app = express();

// Serve index.html on the root path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
  
  // Serve support.html on the '/support' path
  app.get("/support", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "support.html"));
  });

  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});