/* Slider */


const first_dot = document.querySelector(".first-dot");
const second_dot = document.querySelector(".second-dot");
const third_dot = document.querySelector(".third-dot");
const first_slide = document.querySelector(".slider-item-1");
const second_slide = document.querySelector(".slider-item-2");
const third_slide = document.querySelector(".slider-item-3");
const arrow_back = document.querySelector(".arrow-back");
const arrow_next = document.querySelector(".arrow-next");

first_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	slideIndex = 1;
	first_dot.classList.add("current");
	second_dot.classList.remove("current");
	third_dot.classList.remove("current");
	first_slide.classList.add("slide-current");
	second_slide.classList.remove("slide-current");
	third_slide.classList.remove("slide-current");
	arrow_back.disabled = true;
	arrow_next.disabled = false;
});

second_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	slideIndex = 2;
	first_dot.classList.remove("current");
	second_dot.classList.add("current");
	third_dot.classList.remove("current");
	first_slide.classList.remove("slide-current");
	second_slide.classList.add("slide-current");
	third_slide.classList.remove("slide-current");
	arrow_back.disabled = false;
	arrow_next.disabled = false;
});

third_dot.addEventListener("click", function (evt) {
	evt.preventDefault();
	slideIndex = 3;
	first_dot.classList.remove("current");
	second_dot.classList.remove("current");
	third_dot.classList.add("current");
	first_slide.classList.remove("slide-current");
	second_slide.classList.remove("slide-current");
	third_slide.classList.add("slide-current");
	arrow_back.disabled = false;
	arrow_next.disabled = true;
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("slider-button");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("slide-current");
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" current", "");
	}
	slides[slideIndex - 1].classList.add("slide-current");
	dots[slideIndex - 1].className += " current";
	if (slideIndex == 1) {
		arrow_back.disabled = true;
	} else {
		arrow_back.disabled = false;
	}
	if (slideIndex == slides.length) {
		arrow_next.disabled = true;
	} else {
		arrow_next.disabled = false;
	}
}


/* Reset btn */


const form = document.querySelector(".filter");
const reset_btn = document.querySelector(".button-reset");

reset_btn.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.reset();
});


/* Price filter */


function replacer(el) {
	el.value = el.value.replace(/[^0-9]/g, ''); 
}


/* Custom validation */


const form_feedback = document.querySelector(".feedback-form");
const submit = form_feedback.querySelector(".button-price");
const name = form_feedback.querySelector(".name-buyer");
const tel = form_feedback.querySelector(".tel-buyer");
const email = form_feedback.querySelector(".email-buyer");
const err_name = form_feedback.querySelector(".err-name");
const err_tel = form_feedback.querySelector(".err-tel");
const err_email = form_feedback.querySelector(".err-email");
var pattern_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

submit.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (name.value !== "") {
		err_name.classList.remove("err-show");
	} else {
		err_name.classList.add("err-show");
	}
	if (tel.value !== "") {
		err_tel.classList.remove("err-show");
	} else {
		err_tel.classList.add("err-show");
	}
	if (pattern_email.test(email.value) !== false) {
		err_email.classList.remove("err-show");
	} else {
		err_email.classList.add("err-show");
	}
});