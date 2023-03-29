// 1 ---  https://www.geeksforgeeks.org/what-is-the-use-of-next-function-in-express-js/?ref=rp
// 2 --- https://www.geeksforgeeks.org/when-to-use-next-and-return-next-in-node-js/?ref=rp

require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello world");
  next();
});

app.get("/api/books", (req, res, next) => {
  res.send(["rich daddy poor daddy", "goods to great", "nodejs","javScirpt"]);
  next();
});

// set port=5001 dersem portum 5001 baslatilir set bu default programin kendi global metodudur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port} calismaya basladi hayirli olsun`);
});
