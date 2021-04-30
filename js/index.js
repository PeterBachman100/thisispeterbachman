// Get the modal
var contactModal = document.getElementById("contactModal");

// Get the button that opens the modal
var contactBtn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var contactClose = document.getElementById("contactClose");

// When the user clicks on the button, open the modal
contactBtn.onclick = function() {
  contactModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
contactClose.onclick = function() {
  contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

/* ----------------- Slideshow ------------------ */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* -------------------- End Slideshow --------------- */