
// Hamburger menu display on toggle ---------------------------------------
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const aboutbtn = document.querySelector('.about');

menu_btn.addEventListener('click', function () {
  aboutbtn.classList.toggle('active');
  menu_btn.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

//  Validation of forms ---------------------------------------------------
function isInputNumber(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}


// About us header change -------------------------------------------------
// Get the elements
const homeLink = document.querySelector('header .navbar li:nth-child(1) a');
const aboutLink = document.querySelector('header .navbar li:nth-child(2) a');


// Function to check if element is in viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle scroll event on menu
const handleScroll = () => {
  const aboutSection = document.getElementById('aboutSection');
  if (isInViewport(aboutSection)) {
    aboutLink.classList.add('active');
    homeLink.classList.remove('active');
  } else {
    aboutLink.classList.remove('active');
    homeLink.classList.add('active');
  }
};

window.addEventListener('scroll', handleScroll);




// Add and minus buttons --------------------------------------------------
function plus() {
  document.getElementById('number').stepUp();
}
function minus() {
  document.getElementById('number').stepDown();
}

function plus2() {
  document.getElementById('number2').stepUp();
}
function minus2() {
  document.getElementById('number2').stepDown();
}

function plus3() {
  document.getElementById('number3').stepUp();
}
function minus3() {
  document.getElementById('number3').stepDown();
}

function showDetails() {
  var x = document.getElementById("card-details");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// Change background image every 5 seconds ---------------------------------
let images = document.querySelectorAll('.page1-container img');
let currentImageIndex = 0;

setInterval(() => {
  // Hide the current image
  images[currentImageIndex].style.display = 'none';

  // Increment the image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Show the next image
  images[currentImageIndex].style.display = 'block';

  // Set the background image of .firstpage
  document.querySelector('.firstpage').style.backgroundImage = `url(${images[currentImageIndex].src})`;
}, 4000);


// Sliding menu items --------------------------------------------------------
function slideInItems() {
  let items = document.querySelectorAll('.items-box');
  let windowHeight = window.innerHeight;

  items.forEach((item, index) => {
    let itemTop = item.getBoundingClientRect().top;

    if (itemTop < windowHeight || index < 2) {
      item.classList.add('slide-in');
    }
  });
}

window.addEventListener('scroll', slideInItems);
window.addEventListener('DOMContentLoaded', slideInItems);

