
// Hamburger menu display on toggle ---------------------------------------
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobileNav');

menu_btn.addEventListener('click', function () {
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

var nameError = document.getElementById('noName');
var phoneError = document.getElementById('noPhone');
var addressError = document.getElementById('noAddress');
var suburbError = document.getElementById('noSuburb');
var postcodeError = document.getElementById('noPostcode');
var cardnumError = document.getElementById('noCardnum');
var expiryError = document.getElementById('noExpiry');
var CVVError = document.getElementById('noCVV');


function validateName(){
  var name = document.getElementById('name').value;

  if(name.length == 0){
    nameError.innerHTML = '*Enter name';
    return false
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = '*Please write full name';
    return false
  }
  nameError.innerHTML = '';
  return true
}

function validatePhone(){
  var phone = document.getElementById('phone').value;

  if(phone.length == 0){
    phoneError.innerHTML = '*Phone no. required';
    return false
  }
  if(phone.length !== 10){
    phoneError.innerHTML = '*10 digits required';
    return false
  }
  phoneError.innerHTML = '';
  return true
}

function validateAddress(){
  var address = document.getElementById('address').value;

  if(address.length == 0){
    addressError.innerHTML = '*Address required';
    return false
  }
  addressError.innerHTML = '';
  return true
}

function validateSuburb(){
  var suburb = document.getElementById('subDetails').value;

  if(suburb.length == 0){
    suburbError.innerHTML = '*Suburb required';
    return false
  }
  suburbError.innerHTML = '';
  return true
}

function validatePostcode(){
  var postcode = document.getElementById('postDetails').value;

  if(postcode.length == 0){
    postcodeError.innerHTML = '*Postcode required';
    return false
  }
  if(postcode.length !== 4){
    postcodeError.innerHTML = '*Enter 4 digits';
    return false
  }
  postcodeError.innerHTML = '';
  return true
}

function validateCardnum(){
  var cardnum = document.getElementById('cardnumDetails').value;

  if(cardnum.length == 0){
    cardnumError.innerHTML = '*Card No. required';
    return false
  }
  if(cardnum.length !== 10){
    cardnumError.innerHTML = '*Enter 10 digits';
    return false
  }
  cardnumError.innerHTML = '';
  return true
}

function validateExpiry(){
  var expiry = document.getElementById('expiryDetails').value;

  if(expiry.length == 0){
    expiryError.innerHTML = '*Expiry required';
    return false
  }
  if(!expiry.match(/^[0-9]*\/{1}[0-9]{2}$/)){
    expiryError.innerHTML = '*DD/MM';
    return false
  }
  expiryError.innerHTML = '';
  return true
}

function validateCVV(){
  var CVV = document.getElementById('CVVDetails').value;

  if(CVV.length == 0){
    CVVError.innerHTML = '*CVV required';
    return false
  }
  if(CVV.length !== 3){
    CVVError.innerHTML = '*Enter 3 digits';
    return false
  }
  CVVError.innerHTML = '';
  return true
}



function validateForm(){
  if (!validateName() || !validatePhone() || !validateAddress() || !validateSuburb() || !validatePostcode() ||!validateCardnum() ||!validateExpiry()||!validateCVV()){
    submitError.innerHTML = '*Please enter required fields ';
    return false;
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
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollThreshold = aboutSection.offsetTop + aboutSection.offsetHeight * 0.4 - viewportHeight;

  if (window.pageYOffset >= scrollThreshold) {
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

// Adding pop up section for card input details----------------------------
function showDetails() {
  var details = document.getElementById("cardDetails");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function showTime() {
  var details = document.getElementById("timeSelect");
  if (details.style.display === "none") {
    details.style.display = "flex";
  } else {
    details.style.display = "none";
  }
}



// Change background image every 5 seconds ---------------------------------
let images = document.querySelectorAll('.page1Container img');
let currentImageIndex = 0;

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = 'block';

  // Set the background image of .firstPage
  document.querySelector('.firstPage').style.backgroundImage = `url(${images[currentImageIndex].src})`;
}, 4000);


// Sliding menu items --------------------------------------------------------
function slideInItems() {
  let items = document.querySelectorAll('.itemsBox');
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




// Change colour payment buttons -------------

const dots = document.querySelectorAll('.dot');
let currentDot = null;

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    if (currentDot) {
      currentDot.classList.remove('clicked');
    }
    dot.classList.add('clicked');
    currentDot = dot;
  });
});