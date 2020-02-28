function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("hamburger-menu").style.marginLeft = "250px";
  document.getElementById("openbutton").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("hamburger-menu").style.marginLeft= "0";
  document.getElementById("openbutton").style.display = "block";
}
