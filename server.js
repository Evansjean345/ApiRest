const express = require("express");
const app = express();
const port = 6000;
const Database = require("./database/db.js");
const bodyParser = require("body-parser");
const route = require("./routes/userRoute");
const User = require("./models/user");
const mongoose = require("mongoose");

app.use(bodyParser.json());

app.use(route);

Database.connect();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/* ajout de plusieurs utilsateurs */

User.create([
  {
    name: "Batman",
    lastname: "yoda",
    age: 27,
    ville: "Arkham city",
  },
  {
    name: "Superman",
    lastname: "okkk",
    age: 56,
    ville: "pluton city",
  },
  {
    name: "Goku",
    lastname: "san",
    age: 1000,
    ville: "saiyan city",
  },
  {
    name: "Cartman",
    lastname: "unknown",
    age: 30,
    ville: "south-park",
  },
]);
