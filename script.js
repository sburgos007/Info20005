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




// ABOUT SECTION 
// // Initially check the scroll position on page load
// toggleActiveClass();

// // Event listener for scroll event
// window.addEventListener('scroll', toggleActiveClass);

// // Get the aboutSection element
// const aboutSection = document.querySelector('#aboutSection');

// // Get the about link in the navbar
// const aboutLink = document.querySelector('a[href="#aboutSection"]');

// // Function to check if aboutSection is in the viewport
// function isElementInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     );
// }

// // Function to add or remove active class based on scroll position
// function toggleActiveClass() {
//     if (isElementInViewport(aboutSection)) {
//         aboutLink.classList.add('active');
//     } else {
//         aboutLink.classList.remove('active');
//     }
// }

// // Hover effect on menu category buttons
// document.addEventListener('DOMContentLoaded', function() {
//   var catButtons = document.querySelectorAll('.cat-button p');
//   catButtons.forEach(function(button) {
//     button.addEventListener('mouseenter', function() {
//       this.classList.add('hover');
//     });
//     button.addEventListener('mouseleave', function() {
//       this.classList.remove('hover');
//     });
//   });
// });

// paybutton = document.querySelectorAll('.dot');

// buttons.forEach(button => {
// button.addEventListener('click', () => {
//   button.style.backgroundColor = '#1a685e';
// });
// }); 



