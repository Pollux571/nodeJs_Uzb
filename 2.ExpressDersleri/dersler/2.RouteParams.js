require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});

// ! req.params
app.get("/api/books/:id", (req, res) => {
  res.send(req.params.id); // "/api/books/req.params.id"          id = req.params.id
});

app.get("/api/books/id/:bookID", (req, res) => {
  res.send(req.params.bookID); // "/api/books/req.params.bookID"          id = req.params.bookID
});

app.get("/api/books/articles/:year/:month", (req, res) => {
  res.send(req.params); // year ve month doner bize           {"year": "2022",  "month": "04"}
});

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
