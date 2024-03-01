const express = require("express");
const app = express();
const path = require("path");

app.set("view  engine", "ejs"); // set up ejs for templating
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Monnty", "Winston", "Snowball"];
  res.render("cats.ejs", { cats: cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit.ejs", { subreddit });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { num });
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080");
});
