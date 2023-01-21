const LOGIN = document.querySelector(".login");
const ADDBOOK = document.querySelector(".addbook");
const WARNING = document.querySelector(".warning");
const POPUP = document.querySelector(".popup");
const TITLE = document.querySelector(".title");
const AUTHOR = document.querySelector(".author");
const PAGES = document.querySelector(".page");
const READ = document.querySelector(".checkbox");
const SUBMIT = document.querySelector(".submitbtn");
const CARDLIBRARY = document.querySelector(".cardlibrary");

ADDBOOK.addEventListener("click", showPopUp);
SUBMIT.addEventListener("click", addNewBook);

let library = [];
let title;
let author;
let pages;
let read;
let newBook;

function book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read
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
    read = READ.checked;
    let newBook = new book(title, author, pages, read);
    addToLibrary(newBook);
    render();
    clearForm();
}

function clearForm() {
    POPUP.hidden = true;
    TITLE.value = "";
    AUTHOR.value = "";
    PAGES.value = "";
    READ.checked = false;
}

function createCard() {
    let cardTitle = document.createElement("h3");
    cardTitle.innerHTML = "TEST";
    let cardAuthor = document.createElement("h3");
    cardAuthor.innerHTML = "TEST";
    let cardPages = document.createElement("h3");
    cardPages.innerHTML = "TEST";
    let label = document.createElement("h3");
    label.innerHTML = "TEST";
    let card = document.createElement("div");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    CARDLIBRARY.appendChild(card);
    card.setAttribute("class", "card");
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(label);
    card.appendChild(checkbox);
}