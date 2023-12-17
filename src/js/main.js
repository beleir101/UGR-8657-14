const openMenu = document.getElementById("dropdown");

const NavbarMenu = document.getElementById("navbarMenu");
const sub = document.getElementById("submitted");
openMenu.addEventListener("click", function (e) {
  e.preventDefault();
  NavbarMenu.classList.toggle("is-active");
});

sub.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Message Sent Succesfully.");
});
