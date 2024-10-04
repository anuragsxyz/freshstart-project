const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hey Server!!");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.listen(port, () => "hey, server running");
