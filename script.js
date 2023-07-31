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


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);


const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1'); //returns a NodeList
const allButtons = document.getElementsByTagName('button'); //returns a HTMLCollection
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); //returns a HTMLCollection
*/
// Creating and inserting elements
// .insertAdjacentHTML
const header = document.querySelector('.header');
const message = document.createElement('div'); //crete a new DoM element but its not use in DOM yet
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message); //add message as the first child of header
header.append(message); //add message as the last child of header
// header.append(message.cloneNode(true)); //add message as the last child of header

//header.before(message); //add message as the sibling before header
//header.after(message); //add message as the sibling after header

// Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();
  //message.parentElement.removeChild(message); //old way
});


// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //empty string
console.log(message.style.backgroundColor); //rgb(55, 56, 61)

console.log(getComputedStyle(message).color); //rgb(187, 187, 187)
console.log(getComputedStyle(message).height); //38.4px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; //38.4px -> 68.4px

//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.src); //http://
console.log(logo.className); //nav__logo

logo.alt = 'Beautiful minimalist logo'; //change the alt attribute

// Non-standard
console.log(logo.designer); //undefined
console.log(logo.getAttribute('designer')); //Jonas
logo.setAttribute('company', 'Bankist'); //add a new attribute
console.log(logo.getAttribute('company')); //Bankist

console.log(logo.getAttribute('src')); //http://


// Data attributes
console.log(logo.dataset.versionNumber); //3.0

//classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes

// Don't use
logo.className = 'jonas'; //overwrites all the existing classes