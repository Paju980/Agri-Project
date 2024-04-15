const collection = require("../models/user.model.js");
async function login(req, res) {
  try {
    const check = await collection.findOne({ email: req.body.email });

    if (check.password === req.body.password) {
      res.send(
        "<h1 style='text-align:center; margin-top:300px;'>login successful</h1>"
      );
    } else {
      res.send(
        "<h1 style='text-align:center; margin-top:300px;'>Wrong Password</h1>"
      );
    }
  } catch (err) {
    // console.log(err);
    res.send(
      "<h1 style='text-align:center; margin-top:300px;'>User does not exist</h1>"
    );
  }
}

module.exports = login;
