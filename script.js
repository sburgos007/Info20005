const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});


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



