//Imports
const path = require("path");
const express = require("express");
const app = express();

// const http = require("http");
const fs = require("fs");

//files variables
// let MainFileHTML = fs.readFileSync("../ClientSide/index.html").toString();
// let welcomeFileHTML = fs.readFileSync("../ClientSide/welcome.html").toString();
// let StyleCSS = fs.readFileSync("../ClientSide/style.css").toString();
// let Bootstrap = fs.readFileSync("../ClientSide/bootstrap.min.css").toString();

// let ScriptFile = fs.readFileSync("../ClientSide/script.js").toString();
// let myIcon = fs.readFileSync("../ClientSide/favicon.ico");
// let clientsJSON = fs.readFileSync("clients.json").toString();
// console.log("clientsJSON:", clientsJSON);

let clientsArray = [];

app.use(express.urlencoded({ extended: true }));

function concatURL(urPath) {
  return path.join(__dirname, urPath);
}
let PORT = process.env.PORT || "7003";

app.get("/", (req, res) => {
  res.sendFile(concatURL("../Clientside/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(concatURL("../Clientside/style.css"));
});
app.get("/bootstrap.min.css", (req, res) => {
  res.sendFile(concatURL("../Clientside/bootstrap.min.css"));
});
app.get("/Serverside/clients.json", (req, res) => {
  res.sendFile(concatURL("./clients.json"));
});
app.get("/welcome.html", (req, res) => {
  res.sendFile(concatURL("../Clientside/welcome.html"));
});

app.post(
  "/welcome.html",
  (req, res, next) => {
    client = req.body;
    data = fs.readFileSync("clients.json", "utf-8");
    obj = JSON.parse(data);
    // console.log(obj);
    obj.forEach((arr) => {
      clientsArray.push(arr);
    });
    clientsArray.push(client);
    console.log("=========", clientsArray);
    next();
  },
  (req, res, next) => {
    jsonString = JSON.stringify(clientsArray);

    // console.log(jsonString);
    fs.writeFileSync("./clients.json", jsonString);
    next();
  },
  (req, res) => {
    res.sendFile(concatURL("../Clientside/welcome.html"));
  }
);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
