const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use(express.static("./dist/ngv13"));
app.set("view engine", "pug");

/* app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
}); */ 

app.get("/shipping", (req, res) => {
  res.redirect("http://localhost:3000");
});

app.get("/register", (req, res) => {
  res.redirect("http://localhost:3000");
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});