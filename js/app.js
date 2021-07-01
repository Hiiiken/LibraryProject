// Book constructor
function Book(title, author, pages, read) {
   this.title = title,
   this.author = author,
   this.pages = pages,
   this.read = read
}

// Catching user input
let bookTitle = document.querySelector('#title');
let bookAuthor = document.querySelector('#author');
let bookPages = document.querySelector('#pages');
let bookStatus = document.querySelector('#read');
// let bookAddBtn = document.querySelector('#submit');
let bookForm = document.querySelector('#add-book-form');

let myLibrary = [];

// Function to add books to myLibrary array
function addBookToLibrary() {
   const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
   return myLibrary.push(book);
}

bookForm.addEventListener('submit', function(e) {
   e.preventDefault();
   addBookToLibrary();
   clearForm();
})


// Function to clear the form after clicking the 'New Book'
function clearForm() {
   bookTitle.value = '';
   bookAuthor.value = '';
   bookPages.value = '';
   bookStatus.value = '';
}