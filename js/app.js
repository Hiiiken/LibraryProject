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
   render();
})

// Function to clear the form after clicking the 'New Book'
function clearForm() {
   bookTitle.value = '';
   bookAuthor.value = '';
   bookPages.value = '';
   bookStatus.value = '';
}

// Function to display data in HTML
let booksList = document.getElementById('books-list-grid');
function render() {
   booksList.innerHTML = '';
   myLibrary.forEach((book) => {
      let htmlBook = `
      <div class="col col-4 col-lg">
         <div class="book-card">
            <h4 class="title">${book.title}</h4>
            <p class="author">${book.author}</p>
            <p class="pages">${book.pages}</p>
            <p class="status">${book.read}</p>
            <button class="btn btn-edit">Edit</button>
            <button class="btn btn-delete">Delete</button>
         </div>
      </div>
      `;
      booksList.insertAdjacentHTML('afterbegin', htmlBook);
   });
}



// Popups
const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-popup]');

openPopupButtons.forEach(button => {
   button.addEventListener('click', () => {
      const popup = document.querySelector(button.dataset.popupTarget);
      togglePopup(popup);
   })
})

closePopupButtons.forEach(button => {
   button.addEventListener('click', () => {
      const popup = button.closest('.popup');
      togglePopup(popup);
   })
})

function togglePopup(popup) {
   // document.getElementById('popup-1').classList.toggle('active');
   if (popup == null) return;
   popup.classList.toggle('active');
}