'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header'); //Selecting header element
const message = document.createElement('div'); //crete a new DoM element but its not use in DOM yet
const btnScrollTo = document.querySelector('.btn--scroll-to'); //Selecting Lord button
const section1 = document.querySelector('#section--1'); //Selecting Lording elements by ID
const tabs = document.querySelectorAll('.operations__tab'); //Selecting all tabs
const tabsContainer = document.querySelector('.operations__tab-container'); //Selecting all tabs container
const tabsContent = document.querySelectorAll('.operations__content'); //Selecting all tabs content
const nav = document.querySelector('.nav'); //Selecting all tabs content in nav bar

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



// Tabbed component

tabsContainer.addEventListener('click', function(e) { //Use a event mouseenter Listener
  const clicked = e.target.closest('.operations__tab'); //Use Select the closest parent element with class operations__tab
  //console.log(clicked); //Show mouse click element

  //Guard clause
  if(!clicked) return; //To prevent error when click on empty space

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active')); //Remove active Tab
  tabsContent.forEach(c => c.classList.remove('operations__content--active')); //Remove active content

  //Active tab
  clicked.classList.add('operations__tab--active'); //Add active Tab

  //Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active'); //Add active content

});

//Nav Bar Fade Animation

//create a function to Change Opacity
const handleHover = function(e) { //Create a funtion to handle hover 
  if (e.target.classList.contains('nav__link')){ //filter the event target
    const link = e.target; //Select the target links from pereaent element
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); //Select the event target from pereaent element
    const logo = link.closest('.nav').querySelector('img'); //Select the Logo from pereaent element
    
    

    siblings.forEach(el => { //Select the event target from pereaent element
      if(el !== link) el.style.opacity = this; //Select link element is not equal to event target change opacity
    });
    logo.style.opacity = this; //Change Logo opacity
  }
};

//Passing "argument" into handler and change opacity
nav.addEventListener('mouseover', handleHover.bind(0.5)); //Trigger when mouse over the elemnt and call the function and change opacity
nav.addEventListener('mouseout', handleHover.bind(1)); //Trigger when mouse Out the elemnt and call the function and change opacity



//Sticky Navigation: Intersection Observer API

const navHeight = nav.getBoundingClientRect().height; //Selecting nav bar height

const stickyNav = function(entries) { //Create a new observer callback
  const [entry] = entries; //Selecting the first element of the array

  if (!entry.isIntersecting) nav.classList.add('sticky'); //Add sticky class to nav bar wehen section 1 is out of view
  else nav.classList.remove('sticky'); //Remove sticky class to nav bar
};

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `-${navHeight}px`}); //Create a new Intersection Observer
headerObserver.observe(header); //Observe header element



//Reveal sections: Intersection Observer API
const allSections = document.querySelectorAll('.section'); //Selecting all sections

const revealSection = function(entries, observer) { //Create a new observer callback
  const [entry] = entries; //Selecting the first element of the array

  if (!entry.isIntersecting) return; //Guard clause

  entry.target.classList.remove('section--hidden'); //Remove hidden class to Selected Correct section
  observer.unobserve(entry.target); //Stop observing the section for performance
}

const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15}); //Create a new Intersection Observer

allSections.forEach(function(section) { //Selecting all sections
  sectionObserver.observe(section); //Observe all sections
  section.classList.add('section--hidden'); //Add hidden class to all sections
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
 /*
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight')); //Selecting all elements with class highlight
console.log(h1.childNodes); //Selecting all elements with class highlight
console.log(h1.children); //Selecting all elements with class highlight
h1.firstElementChild.style.color = 'white'; //Selecting first element with class highlight
h1.lastElementChild.style.color = 'orangered'; //Selecting last element with class highlight

//Going upwards: parents
console.log(h1.parentNode); //Selecting parent element
console.log(h1.parentElement); //Selecting parent element

h1.closest('.header').style.background = 'var(--gradient-secondary)'; //Selecting closest element with class header

h1.closest('h1').style.background = 'var(--gradient-primary)'; //Selecting closest element with class header

//Going sideways: siblings
console.log(h1.previousElementSibling); //Selecting previous element with class highlight
console.log(h1.nextElementSibling); //Selecting next element with class highlight

console.log(h1.previousSibling); //Selecting previous element with class highlight
console.log(h1.nextSibling); //Selecting next element with class highlight

console.log(h1.parentElement.children); //Selecting all children elements of parent element
[...h1.parentElement.children].forEach(function(el) { //Selecting all children elements of parent element
  if(el !== h1) el.style.transform = 'scale(0.5)'; //Selecting all children elements of parent element
});
*/

