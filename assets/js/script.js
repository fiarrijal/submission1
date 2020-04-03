/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

let topnav = document.getElementsByClassName("topnav");
let hamburger = document.getElementsById("hamburger");

hamburger.addEventListener("click", function() {
  topnav.classList.toggle("responsive");
  return;
});
// document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
