const LOGIN = document.querySelector(".login");
const ADDBOOK = document.querySelector(".addbook");

let library = [];

function book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addToLibrary(book) {
    library.push(book);
}