import ManageBookDetails from './modules/manageBook.js';
import updateDateTime from './modules/dynamicDate.js';
import { listToggle, addToggle, contactToggle } from './modules/booknav.js';

const bookManager = new ManageBookDetails();
window.onload = () => {
  bookManager.loadBooks();
  updateDateTime();
  listToggle();
  addToggle();
  contactToggle();
};

const bookAdded = () => {
  bookManager.bookAdded();
};

const btn = document.querySelector('.button');
btn.addEventListener('click', () => {
  bookAdded();
});
