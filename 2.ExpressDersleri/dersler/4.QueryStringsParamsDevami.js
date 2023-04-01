require("dotenv").config();
const express = require("express");
const app = express();

const books = [
  { id: 1, name: "rich daddy poor daddy" },
  { id: 2, name: "goods to great" },
  { id: 3, name: "nodejs" },
];

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});

// ! req.params
app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("sorry we cant find u re book");
  }
  res.send(book);
});



// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});