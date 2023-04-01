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

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.post("/api/books", (req, res) => {
  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

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
    return res.status(404).send("sorry we cant find u re book");
  }
  res.send(book);
});

app.put("/api/books/:id", (req, res) => {
  // bazadan kitobni topish kerak
  // agarda kitob bolmasa 404 hatosini qaytarish kerak
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send("sorry we cant find u re book");
  }

  // agarda kitob topilsa sorovni validation qilish kerak
  // agarda sorov validationdan otmasa 400 hatosini qaytaramiza

  const { error } = validateBook(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  // sorov validationdan otsa kitobni yangilab beramiza
  book.name = req.body.name;
  // kitobni qaytarish
  res.send(book);
});

function validateBook(book) {
  const bookSchema = Joi.object({
    name: Joi.string().required().min(3),
  });
  return bookSchema.validate(book);
}

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
