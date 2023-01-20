const LOGIN = document.querySelector(".login");
const ADDBOOK = document.querySelector(".addbook");
const WARNING = document.querySelector(".warning");
const POPUP = document.querySelector(".popup");
const TITLE = document.querySelector(".title");
const AUTHOR = document.querySelector(".author");
const PAGES = document.querySelector(".page");
const SUBMIT = document.querySelector(".submitbtn");

ADDBOOK.addEventListener("click", showPopUp);
SUBMIT.addEventListener("click", addNewBook);

let library = [];
let title;
let author;
let pages;
let newBook;

function book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

function addToLibrary(book) {
    library.push(book);
}

function render() {
    if(library.length == 0) {
        WARNING.innerHTML = "You have no books!";
    }
}

function showPopUp() {
    POPUP.hidden = false;
}

function addNewBook(event) {
    event.preventDefault();
    title = TITLE.value;
    author = AUTHOR.value;
    pages = PAGES.value;
    let newBook = new book(title, author, pages);
    addToLibrary(newBook);
}