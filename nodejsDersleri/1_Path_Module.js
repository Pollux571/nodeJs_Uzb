const path = require("path");


const parsing = path.parse(__dirname); // Метод path.parse() возвращает объект, свойства которого представляют важные элементы пути.
console.log(parsing);

// ! -------------------------------------------------------------------------------------

const dirnamee = path.dirname(__dirname); //Метод path.dirname() возвращает имя каталога пути, подобно команде unix dirname. Конечные разделители каталогов игнорируются, см. path.sep.
console.log(dirnamee);

// ! --------------------------------------------------------------------------------------

const baseName = path.basename(__dirname, "UZB"); //Метод path.basename() возвращает последнюю часть пути, подобно команде basename Unix. Конечные разделители каталогов игнорируются.
// 2 ci deger ise donen yolun istenmedigi yerini keser
// ? ornek  path.basename('/foo/bar/baz/asdf/quux.html', '.html');  //Returns: 'quux'
console.log(baseName);

// ! --------------------------------------------------------------------------------------

const joined = path.join(__dirname); //Метод path.join() объединяет все заданные сегменты пути вместе, используя разделитель для конкретной платформы в качестве разделителя, а затем нормализует полученный путь.Сегменты пути нулевой длины игнорируются. Если объединенная строка пути является строкой нулевой длины, тогда '.' будет возвращен, представляя текущий рабочий каталог.
console.log(joined);
console.log(path.join("/foo", "bar", "baz/asdf", "quux","..")); // Returns: '/foo/bar/baz/asdf'
// ? console.log(path.join("foo", {}, "bar")); // return 'TypeError: Path должен быть строкой. Полученный {}' TypeError выдается, если какой-либо из сегментов пути не является строкой.

// ! ------------------------------------------------------------------
const normalizension = path.normalize("\/\\\///foo\//\\\\\\\///bar") // Метод path.normalize() нормализует заданный путь, разрешая '..' и '.' сегменты.
console.log(path.normalize(normalizension));
