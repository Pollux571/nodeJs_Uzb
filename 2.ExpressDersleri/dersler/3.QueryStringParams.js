require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});


app.get("/api/books/articles/:year/:month", (req, res) => {
  // ! query string params     =      ?name=Suleyman&surName=Basir
  // ? query string param her zaman soru isareti ile baslar  "?id=12" gib gibi
  // ? req.query calismasi icin req.paramsi kommente aldik
  res.send(req.query); // {"name": "Ebubekir"}         monthdan sonra biz  /api/books/articles/:year/:month?name=Ebubekir yazdik ve bize queryi dondu
});

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
