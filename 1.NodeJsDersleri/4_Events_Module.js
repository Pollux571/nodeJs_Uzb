const EventEmitter = require("events"); // degiskeni buyuk harfle yazmamizin nedeni EvenetEmitter bir class olmasindan dolayi
const emitter = new EventEmitter();

//
emitter.on("messageLogged", (args) => {  // on ve event ayni medotlardir on kullanilir cunku kisa
    console.log("hello World emmet", args.age);
});
// ? emit("gonderilecekmesaj", {})
emitter.emit("messageLogged",{
    id:1,
    name:"NodeJs",
    age:23
});   // yazdigimiz mesaji yani emiti gostere bilmek icin  handlerini yazmak lazim onun icinde on medotu ile handler yazdik yada evenlistenerde diyebilirz.

// ! ----------------------------------------------------------------------------------------------------------------------
// ? yukardaki ilk ornek mantikli olani
emitter.on("argunman ornek", (arg1, arg2) => {  // on ve event ayni medotlardir on kullanilir cunku kisa
    console.log("hello World emmet", arg1, arg2.arguman);
});
// ? emit("gonderilecekmesaj", {})
emitter.emit("argunman ornek", 1, {
    arguman: "idsi 2 olan"
});   // yazdigimiz mesaji yani emiti gostere bilmek icin  handlerini yazmak lazim onun icinde on medotu ile handler yazdik yada evenlistenerde diyebilirz.
