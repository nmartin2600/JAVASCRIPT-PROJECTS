/*Makes p element with id "timer" display countdown of seconds from a given number to 0 in intervals of 1 second*/
function countdown() {
    let seconds = document.getElementById("seconds").value;
    let timer = document.getElementById("timer");

    function tick() {
        seconds -= 1;
        timer.innerHTML = seconds;
        let time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    tick();
}

/*Slideshow controls*/
function showSlides(n) {
  let i; // Create counter variable for loop
  /*Get lists of elements for slides and dots*/
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // If user clicked next on last slide
  if (n < 1) {slideIndex = slides.length} // If user clicked previous on first slide
  /*Set all slides to not display*/
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*Set all dots as inactive*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  /*Set current slide to display and corresponding number dot as active*/
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/*Show first slide on page load*/
let slideIndex = 1;
showSlides(slideIndex);