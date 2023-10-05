const { Router } = require("express");
const logIn = require("./auth/login");
const route = Router();

route.use(logIn);

module.exports = route;
