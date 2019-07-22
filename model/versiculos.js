
var knex= require('../conectknex.js');

module.exports = class Versiculos{
	 constructor(){

	 }

	versiculoUnico(book ,nCap,nVers){
		knex('verses')
		.where({book_id:book ,verse: nVers, chapter: nCap})
		.then((vers) => {
            console.log(vers);
        });
	}

	versiculoBetween(book ,nCap,nVers1, nVers2){
		return knex.select("verses.id","verses.version", "verses.chapter","verses.verse","verses.text","books.name").from('verses')
		.leftJoin('books', 'books.id', 'verses.book_id')
		.whereBetween('verse', [nVers1, nVers2])
		.where({book_id:book, chapter: nCap})
		
	}

	getBooks(){
		return knex.select('name','id','qtd_chapter').from('books');
	}

	getCapitulos(){
		return knex('verses').distinct('chapter');
	}
}

