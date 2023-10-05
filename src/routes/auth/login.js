const { Router } = require("express");
const data = require("../../db/index");

const route = Router();

route.post("/login", (req, res) => {
    const { user, password } = req.body;
    const userInDb = data.find((e) => e.user == user && e.password == password);
  if (userInDb) {
    res.status(200).json({ userInDb });
  } else {
    res
      .status(401)
      .json({ message: "No se encontro ningun usuario en la base de datos" });
  }
});

module.exports = route;
