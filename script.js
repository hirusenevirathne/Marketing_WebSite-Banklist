'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating and inserting elements Cokies message
const header = document.querySelector('.header');
const message = document.createElement('div'); //crete a new DoM element but its not use in DOM yet
message.classList.add('cookie-message'); //add class to new element
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; //add HTML to new element
header.append(message); //add message as the last child of header

// Delete elements Cokies message
document.querySelector('.btn--close-cookie').addEventListener('click', function() { //Selecting button
  message.remove(); //new way
  //message.parentElement.removeChild(message); //old way
});
// Styles Cokies message
message.style.backgroundColor = '#37383d'; //background-color -> backgroundColor
message.style.width = '120%'; //width -> width
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //38.4px -> 68.4px


// Add scrole to Learn more button
const btnScrollTo = document.querySelector('.btn--scroll-to'); //Selecting Lord button
const section1 = document.querySelector('#section--1'); //Selecting Lording elements by ID

btnScrollTo.addEventListener('click', function(e) { //Add event to Lord button
  section1.scrollIntoView({behavior: 'smooth'}); //new way Scrolling
});



////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
