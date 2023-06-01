
// Hamburger menu display on toggle
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const aboutbtn = document.querySelector('.about');

menu_btn.addEventListener('click', function () {
  aboutbtn.classList.toggle('active');
  menu_btn.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

function isInputNumber(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}

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



// Change background image every 5 seconds
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


// Sliding menu items
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

