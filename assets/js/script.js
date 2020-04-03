/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

const topnav = document.querySelector(".topnav");
const icon = document.getElementById("icon");

icon.addEventListener("click", function() {
  topnav.classList.toggle("responsive");
});
// document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
