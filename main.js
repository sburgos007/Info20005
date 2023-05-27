
// // Hover effect on menu category buttons
// document.addEventListener('DOMContentLoaded', function() {
//     var catButtons = document.querySelectorAll('.cat-button p');
//     catButtons.forEach(function(button) {
//       button.addEventListener('mouseenter', function() {
//         this.classList.add('hover');
//       });
//       button.addEventListener('mouseleave', function() {
//         this.classList.remove('hover');
//       });
//     });
// });

paybutton = document.querySelectorAll('.dot');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = '#1a685e'; // Change the background color to red
    // Add any other styling or logic you desire
  });
}); 