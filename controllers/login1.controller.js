const model = require("../models/userdata.model.js");

function login(req, res) {
  // user data from login form
  const { email, password } = req.body;
  let isUserExist = false;
  let user;
  // Finding user
  model.forEach((data) => {
    if (email === data.email) {
      isUserExist = true;
      user = data;
      return;
    }
  });
  // Checking Validity of User
  if (isUserExist) {
    if (password == user.password) {
      res.send(
        "<h1 style='text-align:center; margin-top:300px;'>login successful</h1>"
      );
    } else {
      res.send(
        "<h1 style='text-align:center; margin-top:300px;'>Wrong Password</h1>"
      );
    }
  } else {
    res.send(
      "<h1 style='text-align:center; margin-top:300px;'>User does not exist</h1>"
    );
  }
}

module.exports = login;
