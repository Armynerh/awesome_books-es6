const listnav = document.querySelector('.list-nav');
const contactNav = document.querySelector('.contact-nav');
const listContainer = document.querySelector('.container1');
const addNav = document.querySelector('.add-nav');
const form = document.querySelector('.form-cover');
const contact = document.querySelector('.contact-container');

export const listToggle = () => {
  listnav.addEventListener('click', () => {
    listContainer.classList.remove('active');
    form.classList.remove('active');
    contact.classList.remove('active');
  });
};

export const addToggle = () => {
  addNav.addEventListener('click', () => {
    form.classList.add('active');
    listContainer.classList.add('active');
    contact.classList.remove('active');
  });
};
export const contactToggle = () => {
  contactNav.addEventListener('click', () => {
    contact.classList.add('active');
    listContainer.classList.add('active');
    form.classList.remove('active');
  });
};
