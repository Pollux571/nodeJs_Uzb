const fs = require("fs");

console.log(fs.readdirSync("./")); // [ '1_Path_Module.js', '2_Os_Module.js', '3_FileSystem_Module.js' ]

// ! ***************-------------------------------------------------------------------------
const file = fs.readdir("./", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(file); // [ '1_Path_Module.js', '2_Os_Module.js', '3_FileSystem_Module.js' ]

// ! ---------------------------------------------------------------------------
const file1 = fs.readdir("/", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(file1); // asadagiyi doner
[
  "$RECYCLE.BIN",
  "Documents and Settings",
  "DumpStack.log.tmp",
  "MSOCache",
  "pagefile.sys",
  "Program Files",
  "Program Files (x86)",
  "ProgramData",
  "Python39",
  "Recovery",
  "swapfile.sys",
  "System Volume Information",
  "Users",
  "Windows",
];

// ! ------------------------------------------------------------------------

// eger burda utf-8 atmaz isek bize bayte yazilim seklinde cevap doner soyle <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72  ... 1218 more bytes>
const fileRead = fs.readFile(
  "./3_FileSystem_Module.js",
  "utf-8",
  (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  }
);

console.log(fileRead); // simdi ise butun kodlarimiz string seklinde doner

// ! ---------------------------------------------------------------------------

// fs.writeFile("Dosya TIPI", "yazilar", (err,data)=>{})
const wroteFile = fs.writeFile(
  "index.html",
  "FileCreated my Dear",
  (err, data) => {
    if (err) {
      throw Error;
    } else {
      console.log("file created");
    }
  }
);

const renameFile = fs.rename("input.txt", "newFile.txt", (err, data) => {
  if (err) {
    throw Error;
  } else {
    console.log("file created");
  }
});

const deleteFile = fs.unlink("input.html", (err, data) => {
  // burayi kapatirsak eger index.html dosyasi olusur yoksa durmadan siler dosyayi
  if (err) {
    throw err;
  } else {
    console.log("delete is completed");
  }
});
