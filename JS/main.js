"use strict";

let slideIndex = 1;
let slidesPerPage = 3;
let autoSlideInterval;

showSlides(slideIndex);
startAutoSlide();

function plusSlides(e) {
  showSlides((slideIndex += e));
  resetAutoSlide();
}

function currentSlide(e) {
  showSlides((slideIndex = e));
  resetAutoSlide();
}

function showSlides(e) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (slides.length === 0) {
    console.error("No elements with class 'mySlides' found.");
    return;
  }

  if (e > slides.length - slidesPerPage + 1) {
    slideIndex = 1;
  }
  if (e < 1) {
    slideIndex = slides.length - slidesPerPage + 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = slideIndex - 1; i < slideIndex - 1 + slidesPerPage; i++) {
    slides[i].style.display = "block";
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function () {
    plusSlides(1);
  }, 1000); }

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}
