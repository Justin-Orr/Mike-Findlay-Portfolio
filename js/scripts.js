document.getElementById('linkedin-btn').addEventListener('click', function() {
  location.href='https://www.linkedin.com/in/mike-findlay-a5920915b/';
});

// Button function to scroll to top of page
var top_btn = document.getElementById('top-of-page-btn')

// When the user scrolls down to the top of the content (My Projects) from the top of the entire webpage, show the button
var elementOffset = document.getElementById('content_area').offsetTop;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > elementOffset || document.documentElement.scrollTop > elementOffset) {
    top_btn.style.opacity = "1";
  } else {
    top_btn.style.opacity = "0";
  }
}

// When the user clicks on the top of page button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}