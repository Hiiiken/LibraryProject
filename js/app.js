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
   myLibrary.forEach((book, i) => {
      let htmlBook = `
      <div class="col col-4 col-lg">
         <div class="book-card" id="${i}">
            <h4 class="title" id="cardTitle">${book.title}</h4>
            <p class="author" id="cardAuthor">${book.author}</p>
            <p class="pages" id="cardPages">${book.pages}</p>
            <p class="status" id="cardStatus">${book.read}</p>
            <button class="btn btn-edit" data-popup-target="#popup_${i}">Edit</button>
            <button class="btn btn-delete">Delete</button>
         </div>
      </div>
      `;
      booksList.insertAdjacentHTML('afterbegin', htmlBook);
   });
}

// Button actions
booksList.addEventListener('click', (event) => {
   if (event.target.tagName === 'BUTTON') {
      const button = event.target;
      const card = button.parentNode;
      if (button.textContent === 'Delete') {
         if (confirm('Are you sure you want to delete this book?') === true) {
            booksList.removeChild(card.parentNode);
            myLibrary.splice(card.id, 1)
         }
      } else if (button.textContent === 'Edit') {
         document.querySelector('#titleEdit').value = myLibrary[card.id].title;
         document.querySelector('#authorEdit').value = myLibrary[card.id].author;
         document.querySelector('#pagesEdit').value = myLibrary[card.id].pages;
         document.querySelector('#readEdit').value = myLibrary[card.id].read;
         togglePopup(popup);

         
      }

      // Save Button
      let saveBtn = document.querySelector('#saveBtn');
      saveBtn.addEventListener('click', (e) => {
         e.preventDefault();
         console.log('clicked');
         myLibrary[card.id].title = document.querySelector('#titleEdit').value;
         myLibrary[card.id].author = document.querySelector('#authorEdit').value;
         myLibrary[card.id].pages = document.querySelector('#pagesEdit').value;
         myLibrary[card.id].read = document.querySelector('#readEdit').value;

         document.querySelector('#cardTitle').innerText = myLibrary[card.id].title;
         document.querySelector('#cardAuthor').innerText = myLibrary[card.id].author;
         document.querySelector('#cardPages').innerText = myLibrary[card.id].pages;
         document.querySelector('#cardStatus').innerText = myLibrary[card.id].read;
         
         togglePopup(popup);
      })
   }
})





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
   if (popup == null) return;
   popup.classList.toggle('active');
}