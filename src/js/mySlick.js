import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {



$(".slider-js-1").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next--1"),
  prevArrow: $(".slider__arrow_prev--1"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});








});