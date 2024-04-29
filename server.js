const express = require("express");
const path = require("path");
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

  app.get("/submitform", (req, res) => {
    // Notice that the data from the form is in the request query object.
    // The information is in the form of key-value pairs with the key
    // being the name of the input field and the value being the value of the input field.
    console.log(req.query);
  
    // Let's save these values to a file and then send a response to the user.
    fs.appendFile("formdata.txt", JSON.stringify(req.query) + '\n', (err) => {
      if (err) {
        console.error("Error writing to file", err);
        res.status(500).send("An error occurred while processing your form.");
        return;
      }
      console.log("The data was appended to file!");
  
      // Send a response back to the user.
      res.send("Thank you for submitting the form");
    });
  });



  const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});