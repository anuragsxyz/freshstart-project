const express = require("express");
const app = express();
const port = 3000;
const randomData = require("./randomdata.json");

app.use(express.static("public")); // static directory

const path = require("path");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/random", (req, res) => {
  let rand = Math.floor(Math.random() * 10);
  res.render("random", { rand });
});

app.get("/", (req, res) => {
  const randomDatafile = randomData;
  const cats = ["mike", "mia", "lovely", "modu"];
  let rand = Math.floor(Math.random() * 10);
  res.render("index", { cats, randomDatafile });
});

app.listen(port, () => {
  console.log("running");
});
