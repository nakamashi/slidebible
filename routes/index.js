var express = require("express");
var app= express();
var router = express.Router();
var Versiculos = require("../model/versiculos.js");

/* GET home page. */
router.get("/", function (req, res, next) {

  console.log("entrou!!!!!");
  //res.send("funcionou!!!");

   
  var v = new Versiculos();

  //book ,nCap,nVers1, nVers2
  v.versiculoBetween(2, 1, 1, 5, "nvi").then((vers) => {
    console.log(vers);
    v.getBooks().then((books) => {
      res.render("index", { vers: vers, books: books, title: "Versiculos" });
      //res.render('index', { vers: vers, title: 'Versiculos' });
    });
  });
   
  /*v.getBooks().then(books =>{
      res.render('index', { books: books, title: 'Versiculos' });
  }); */
});

router.get("/monitor", function (req, res, next) {
  res.render("monitor", { title: "monitor" });
});

router.post("/busca", function (req, res, next) {
  var v = new Versiculos();
  var book = req.body.book;
  var nCap = req.body.cap;
  var nVers1 = req.body.vers1;
  var nVers2 = req.body.vers2;
  var version = req.body.version;

  var optionSplit = book.split("=");
  var idLivro = optionSplit[0];
  
  console.log(v.versiculoBetween(idLivro, nCap, nVers1, nVers2, version));

  //book ,nCap,nVers1, nVers2, version
  v.versiculoBetween(idLivro, nCap, nVers1, nVers2, version).then((vers) => {
    console.log(vers);
    v.getBooks().then((books) => {
      res.render("index", { vers: vers, books: books, title: "Versiculos" });
      //res.render('index', { vers: vers, title: 'Versiculos' });
    });
  });
  console.log("book= "+idLivro+"  |cap ="+nCap+"  |vers1= "+nVers1+"  |ver2= "+nVers2+"  |version= "+version);
});
  
app.listen(3000, '0.0.0.0', function(){
  console.log('listening on port 3000');
});
module.exports = router;
