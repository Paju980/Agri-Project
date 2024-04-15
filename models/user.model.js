const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://prajwalwandhare100:undertaker@cluster0.wkw1a9l.mongodb.net/mechfarm_users";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("mongodb connected...");
  })
  .catch(() => {
    console.log("failed to connect...");
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const collection = mongoose.model("users", userSchema);

module.exports = collection;
