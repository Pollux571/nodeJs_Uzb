// ! semantic verisoning           ornek

//  ? Major.minor.patch      bu numaralarin anlami versioynlar demek.major versiyon minor versiyon patch versiyon
// ! patch bug fixlenmesine karar verir
// ! minor projeye yenilik eklendiginde degisir yani moongose 7.1.0 patch da degisir cunku minor degisti ve bu versiyonda hala bir bug bulunamadi
// ! major api ye cevap verir yada buyuk bir degisiklik oldugunda  ve bu artik 8.0.0 olur
// ! caret = ^       buda su demek  bir guncelleme gelirse major yada minor tarafidan biz bu guncelemeye raziyiz demek ve npm i yada npm update yaparsak otomatik olarak yazilimlarimiz guncelleniy artik mongoose ornek olarak belkide 8.1.0 olur
// ! tilda isarete ~    Использование знака тильды перед нашим номером версии означает, что при обновлении нашего пакета мы можем принять только выпуск исправления.       "mongoose": "^8.1.x",
// ! * yildiz isareti    Использование звездочки означает «принять все выпуски», но это не рекомендуется, поскольку при этом будут приниматься основные выпуски, что может привести к поломке нашего кода.
// ! eger herkes ayni versionu kullansin guncelleme gelmesin diyorsak numaralin onunden isaretleri kaldiririz.  "mongoose": "8.1.x", sade boyle kalir
// {
//     "dependencies": {
//       "mongoose": "^7.0.3",
//       "underscore": "^1.13.6"
//     }
//   }
/ !***************************************************************************************************************************************** */
//  ! npm commands
// ? npm list  veya  npm list --depth=0      bize projemizde download edilen npm paketlerin versiyonunu gosterir aradaki fark npm list daha kapsamlidir aslinda.
// ? npm view mongoose       = bize mongoose paketi hakkinda ozet cikartir arka plani node_modules icindeki mongoose icindeki package.json dan gelir
// ? npm view mongoose dependencies     = dersek bize mongoose icindeki kullanilarn bilgilerin versiyonunu doner obje json seklinde
// ? npm view mongoose versions      = bize mongoose hakindaki guncellemeri gosterir versiyon guncelemerini 7.5.1, 7.5.2 gibi
// ? npm outdated    = bize npm paketlerin  suanki,  istelinen ve sonuncu versiyonlarin listesini cedvel seklinde doner
// ? npm update     = sadec patch ve minor versionlari guncellemek icin kullanirz.
// ? npm install        = bize major verisonu gunceller yani en son versiyona

// ! ***************************************************************************************************************************************** */
// ? devDependencies    bize projemizin kurulum,bundling,statick test yaparken araclarimizin yer aldigi ve bunlar productionda kullanilmaz kisimdir burda jshinti biz gorucez.
// npm install --save-dev               == save dev demek development dependencies olarak sakla demek bu yuzdende devDependencies acilir.
// {
// "devDependencies": {
//       "jshint": "^2.13.6"
//     }
// }

const _ = require("underscore");
const isContain = _.contains([3, 4, 5], 3, 2, 10, "hello", 3);

console.log(isContain);
