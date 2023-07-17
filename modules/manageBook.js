import Book from './bookClass.js';

export default class ManageBookDetails {
  constructor() {
    this.books = [];
  }

  displayBooks = () => {
    const bookTableBody = document.getElementById('bookTableBody');
    bookTableBody.innerHTML = '';

    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = book.title;
      row.appendChild(titleCell);

      const authorCell = document.createElement('td');
      authorCell.textContent = book.author;
      row.appendChild(authorCell);

      const removeCell = document.createElement('td');
      const removeButton = document.createElement('button');
      removeButton.className = 'remove-button';
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });
      removeCell.appendChild(removeButton);
      row.appendChild(removeCell);

      bookTableBody.appendChild(row);
    });
  }

  bookAdded = () => {
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;

    const book = new Book(title, author);
    this.books.push(book);

    this.displayBooks();

    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';

    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook = (index) => {
    this.books.splice(index, 1);
    this.displayBooks();
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
      this.displayBooks();
    }
  }
}