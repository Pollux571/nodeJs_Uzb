const http = require("http");
var url = require("url");

// ! bu butun kodlar http yollari eski yollar suan bunlarin yerine express kulaniliyor onuda  4 modulde gorucez suanlik bunu bilmemiz yeter
//create a server object:
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" }); // yazilari html seklinde goster demek
      res.write("Hello World!"); //write a response to the client
      res.end();
    }
    if (req.url === "/?year=2017&month=July") {
      const q = url.parse(req.url, true).query;
      const txt = q.year + " " + q.month;
      res.write(txt)
      res.end();
    }
    if (req.url === "/api/book") {
      res.write(JSON.stringify(["code complete", "refactoring", "clean code"]));
      res.end();
    }

    if (req.url != "/") {
      res.write("sorry notihng to say");
      res.end();
    }
  })
  .listen(8080);
