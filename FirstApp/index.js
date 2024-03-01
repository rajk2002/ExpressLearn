const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a  request!");
//   res.send("Hello,we got your request! This is the response!");
//res.send({ color: "red" });
//   res.send("<h1>Welcome to Express</h1>");
// });

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit`);
});

app.post("/cats", (req, res) => {
  res.send("This is the Post Method for /cats");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCHED!");
  }
  res.send(`<h1>Search results for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("I don't know this path");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000!");
});
