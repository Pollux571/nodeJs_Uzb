// ? https://www.tutorialspoint.com/nodejs/nodejs_streams.htm
const fs = require("fs");
const zlib = require("zlib");
const readStream = fs.createReadStream("./stream.txt");
const writeStream = fs.createWriteStream("./new-stream.txt");
const compressStream = zlib.createGzip();   // bu dosyalari kucultur(Sjimat Fayl)
readStream.on("data", (chunk) => {
  console.log("---------"); // buferler guzel ayri gorunsun
  // ! chunk diye birakirsak bize stream.txt icindeki verileri buffer sekilinde doner eger toString()  metodunu verirsek bize stream.txt icindeki verileri string doner
  console.log(chunk.toString());
});

// ! 2 ornek

// burdada yukardaki dosyanin aynisini olusturup icinde verileri ile birlikte onlari chunk sekilden bolucez daha okunur olsun diye verilerin.

// bu zor yoluydu
// readStream.on("data", (chunk) => {
//   writeStream.write("\n Chunk Start");
//   writeStream.write(chunk);
//   writeStream.write("\n Chunk End");
// });

// ! kolay yolu
// readStream.pipe(wrtiteStream); // buda ayni sekilde new-stream.txt olusturur. stream.txt kopyasini

// ! 3 ornek simdi bunun aslidan en guzel sekliylle nasil yazildinig yapalim
const handleError = () => {
  console.log(Error);
  readStream.destroy();
  writeStream.end("Finished with Error....");
};

readStream
.on("error", handleError)
.pipe(compressStream) // artik okunamaz dosya elde ediyoruz hatali yada okunamaz cunku dosyayi baskiladik yani (Sjimat texta) yaptik
.pipe(writeStream)
.on("error", handleError);
