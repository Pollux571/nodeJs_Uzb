// Not = > Backende gelen her hangi bi sorgulari control etmek lazim yani validation
// ! her bir seyi control etmek icin teker teker controllar yazmaktansa biz burda JOI npm paketinden faydalandik

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

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
