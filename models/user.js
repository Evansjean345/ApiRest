const mongoose = require("mongoose");
const Database = require("../database/db");

let userSchema = mongoose.Schema({
  name: { type: "String" },
  lastname: { type: "String" },
  age: { type: "number" },
  ville: { type: "String" },
});

User = mongoose.model("user", userSchema);

module.exports = User;
