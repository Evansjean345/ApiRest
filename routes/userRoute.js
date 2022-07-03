const express = require("express");
const User = require("../models/user");
const routes = express.Router();

/* GET---READ retourne la liste de tous les utilistateurs  */

routes.get("/user", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});

/* POST-----CREATE ajoute un nouvel utilisateur dans la base de donnée */

routes.post("/users", (req, res) => {
  User.create(req.body).then((user) => {
    res.json({
      user: user,
      message: "le nouvel utilisateur a bien été ajouté ",
    });
  });
});

/* PUT----UDAPTE modifie un utilisteur par son id  */

routes.put("/users/:id", (req, res) => {
  User.findByIdAndUpdate({ _id: req.params.id }).then((user) => {
    res.json(user);
  });
});

/* DELETE-----DELETE supprimer un utilisateur par son id  */

routes.delete("/users/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id }).then((user) => {
    res.json(user);
  });
});

/* exportation du module pour pouvoir l'utiliser */

module.exports = routes;
