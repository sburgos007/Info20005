const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const aboutbtn = document.querySelector('.about');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('active');
  mobile_menu.classList.toggle('active');
  aboutbtn.classList.toggle('active');
});

function isInputNumber(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
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
}, 3000);
