const mongoose = require("mongoose");

const mongooServer =
  "mongodb+srv://Evans345:Azerty0987@cluster0.uvefquj.mongodb.net/ApiExo?retryWrites=true&w=majority";

class Database {
  static connect() {
    mongoose
      .connect(mongooServer)
      .then((res) => {
        console.log("Database connecting");
      })
      .catch((error) => {
        console.log("il y'a une erreur " + error.message);
      });
  }
}

module.exports = Database;
