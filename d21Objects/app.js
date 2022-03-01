"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {showTitles, addBook, findAuthors, findIds, }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];


/**
 * 
 * @param{string} title of the book
 * @param{string} author of the book
 * @param{string} Id of the book
 * @return{array} array of books
 */

 function addBook( title, author, libraryID){
    let newBook = {title, author, libraryID}
       
       library.push(newBook);
       return newBook;
    
}
console.log(addBook("Yelmjat", "Addis", 1212));

/**
 * 
 * @param{array} library
 * @return{array} array of book titles
 */

function showTitles() {
    let bookTitles = [];
    for( let i = 0; i < library.length; i++){
        let tit = library[i]
        bookTitles.push(tit.title);
        bookTitles.sort()
    }
    return bookTitles;
}
console.log(showTitles());


/**
 * 
 * @param{array} library
 * @return{array} array of book authors
 */

 function findAuthors() {
    let bookAuthors = [];
    for( let i = 0; i < library.length; i++){
        let auth = library[i]
        bookAuthors.push(auth.author);
        bookAuthors.sort()
    }
    return bookAuthors;
}
console.log(findAuthors());




/**
 * 
 * @param{array} library
 * @return{array} array of book Ids
 */

function findIds() {
    let bookIds = [];
    for( let i = 0; i < library.length; i++){
        let id = library[i]
        bookIds.push(id.libraryID);
        bookIds.sort()
    }
    return bookIds;
}
console.log(findIds());