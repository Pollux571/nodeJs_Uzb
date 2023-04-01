require("dotenv").config();
const express = require("express");
const Joi = require("joi");
const app = express();

// ! middleware
app.use(express.json());

const books = [
  { id: 1, name: "rich daddy poor daddy" },
  { id: 2, name: "goods to great" },
  { id: 3, name: "nodejs" },
];

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});

app.get("/api/books", (req, res, next) => {
  res.send(["rich daddy poor daddy", "goods to great", "nodejs", "javScirpt"]);
  next();
});

app.post("/api/books", (req, res) => {
  const bookSchema = Joi.object({
    name: Joi.string().required().min(3),
  });
  const result = bookSchema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // if (!req.body.name) {
  //   res.status(400).send("Name is required");
  //   return;
  // }
  // if (!req.body.name.length < 3) {
  //   res.status(400).send("Name should be at least 3 characters");
  //   return;
  // }
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
});

// ! req.params
app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("sorry we cant find u re book");
  }
  res.send(book);
});

app.get("/api/books/articles/:year/:month", (req, res) => {
  res.send(req.query);
});

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
