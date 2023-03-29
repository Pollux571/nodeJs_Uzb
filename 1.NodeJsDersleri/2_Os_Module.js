const os = require("node:os");

console.log(os.freemem()); // bos bellegi doner bilgisayardaki
console.log(os.uptime());   // kac saatir bilgisayarin calistigini gosterir saniye cinsinden
console.log(os.userInfo());  // kullaniciyi gosterir
console.log(os.totalmem());  // total hatirayi gosterir
console.log(os.cpus()) // bilgisayar gostergelir


// domashka
const sum = parseInt((os.totalmem() - os.freemem()) / (1024 * 1024));
console.log(sum.toFixed());
