document.getElementById('linkedin-btn').addEventListener('click', function() {
  location.href='https://www.linkedin.com/in/mike-findlay-a5920915b/';
});

// Page Scolling Functions (functions to manipulate elements based on scrolling patterns)
var menu_btn = document.getElementById('menu_btn')
var side_nav = document.getElementById("side_nav")
var side_nav_shader = document.getElementById("side_nav_shader")
var top_btn = document.getElementById('top-of-page-btn')

// When the user scrolls down to the top of the content (My Projects) from the top of the entire webpage, show the button
var elementOffset1 = document.getElementById('header_background_img_container').offsetHeight;
var elementOffset2 = document.getElementById('content_area').offsetTop;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Menu Buttom
  if (document.body.scrollTop > elementOffset1 || document.documentElement.scrollTop > elementOffset1) {
    menu_btn.className = "btn btn-dark";
    //menu_btn.style.outlineColor = "black";
  } else {
    menu_btn.className = "btn btn-outline-light";
    //menu_btn.style.outlineColor = "white";
  }

  // Top of Page Button
  if (document.body.scrollTop > elementOffset2 || document.documentElement.scrollTop > elementOffset2) {
    top_btn.style.opacity = "1";
  } else {
    top_btn.style.opacity = "0";
  }
}

// When the user clicks the menu button, open the side navigation menu
function openNav() {
  side_nav.style.width = "250px";
  side_nav_shader.style.display = "block";
}

// Set the width of the side navigation to 0
function closeNav() {
  side_nav.style.width = "0";
  side_nav_shader.style.display = "none";
}

// When the user clicks on the top of page button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}