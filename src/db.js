const ActiveDirectory = require("activedirectory");

const config = {
    url: "ldap://192.168.10.10:389", // Utiliza la dirección IP correcta de la red interna
    baseDN: "dc=MyServer,dc=redinterna,dc=local", // Ajusta según la estructura de tu dominio
    username: "Erik@redinterna.local",
    password: "Undertale2?",
  };
  

const username = "Erik@redinterna.local";
const password = "Undertale2?";

const ad = new ActiveDirectory(config);

ad.authenticate(username, password, function (err, auth) {
    if (err) {
      console.log("ERROR: " + JSON.stringify(err, null, 2)); // Imprime el error detallado
      return;
    }
  
    if (auth) {
      console.log("Authenticated!");
    } else {
      console.log("Authentication failed!");
    }
  });
  