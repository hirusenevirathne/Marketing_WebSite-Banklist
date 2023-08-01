'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const message = document.createElement('div'); //crete a new DoM element but its not use in DOM yet
const btnScrollTo = document.querySelector('.btn--scroll-to'); //Selecting Lord button
const section1 = document.querySelector('#section--1'); //Selecting Lording elements by ID

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); //Add event to Lord button

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Creating and inserting elements Cokies message
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
btnScrollTo.addEventListener('click', function(e) { //Add event to Lord button
  section1.scrollIntoView({behavior: 'smooth'}); //new way Scrolling
}); 

//Page Navigation

//1. Add event to common parent element
//2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) { //Use a event mouseenter Listener
  //console.log(e.target); //Use a event mouseenter Listener to see what element originated the event
  e.preventDefault(); //Use a event mouseenter Listener

  //Matching strategy
  if(e.target.classList.contains('nav__link')) { //Use a event mouseenter Listener
    const id = e.target.getAttribute('href'); //Use a event mouseenter Listener
    document.querySelector(id).scrollIntoView({behavior: 'smooth'}); //Use a event mouseenter Listener
  }
});


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
const h1 = document.querySelector('h1');
const alertH1 = function(e) {//Use a event mouseenter Listener
  alert('addEventListener: Great! You are reading the heading :D');
};
h1.addEventListener('mouseenter', alertH1); //Use a event mouseenter Listener
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); //Remove event mouseenter Listener After 3s  
*/



/*
// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min); //Create a random number
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`; //Create a random color 

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e) { //Use a event mouseenter Listener
  this.style.backgroundColor = randomColor(); //this = e.currentTarget
  console.log('LINK', e.target, e.currentTarget);
  //e.stopImmediatePropagation(); //Stop bubbling
  //e.stopPropagation(); //Stop bubbling
});  
document.querySelector('.nav__links').addEventListener('click', function(e) { //Use a event mouseenter Listener
  this.style.backgroundColor = randomColor(); //this = e.currentTarget
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function(e) { //Use a event mouseenter Listener
  this.style.backgroundColor = randomColor(); //this = e.currentTarget
  console.log('NAV', e.target, e.currentTarget);
});
*/
 