const express = require("express");
const app = express();

// imports
const model = require("./models/userdata.model.js");
// const login = require("./controllers/login1.controller.js");
const login = require("./controllers/login.controller.js");
const collection = require("./models/user.model.js");

const path = require("path");

// Body Parser
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Login GET Request
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

// Login POST Request
app.post("/login", login);

// SignUp (TEMPORARY)
// const userData = {
//   name: "Brock Lesnar",
//   email: "brocklesnar@1gmail.com",
//   password: "beast",
// };
// app.get("/signup", async (req, res) => {
//   await collection.insertMany([userData]);
//   res.send("sign up successful...");
// });

// Listening Server at PORT 3000
app.listen(3000, () => {
  console.log("listening the server...");
});
