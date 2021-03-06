import $ from "jquery";
// import "./slick.js";


// $(Document).ready(function () {

// $(".slider-js-1").slick({
//   responsive: [
//     {
//       breakpoint: 20048,
//       settings: "unslick",
//       dots: false,
//       arrows: false,
//     },
//     {
//       breakpoint: 1000,
//       settings: {
//         dots: true,
//         arrows: true,
//         slidesToShow: 1,
//         speed: 500,
//         easing: "ease",
//         cssEase: "linear",
//         centerMode: false,
//         autoplay: true,
//         infinite: true,
//         nextArrow: $(".slider__arrow_next--1"),
//         prevArrow: $(".slider__arrow_prev--1"),
//       },
//     },
//   ],
//   // mobileFirst: true,
// });



// });



// !!!!!!!!!!!!!!!!!!!!моилка-вкл   больше 1000 - выкл!!!!!!!!!!!!!!!!!!!!!!!!!
// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".slider-js-1").data("init-slider");
  // Если мобильный
  if(window.innerWidth < 1000){
    // Если слайдер не запущен
    if(init != 1){
      // Запускаем слайдер и записываем в data init-slider = 1
      $(".slider-js-1")
        .slick({
          dots: true,
                  arrows: true,
                  slidesToShow: 1,
                  speed: 500,
                  easing: "ease",
                  cssEase: "linear",
                  centerMode: false,
                  autoplay: true,
                  infinite: true,
                  nextArrow: $(".slider__arrow_next--1"),
                  prevArrow: $(".slider__arrow_prev--1"),
        })
        .data({ "init-slider": 1 });
    }
  }
  // Если десктоп
  else {
    // Если слайдер запущен
    if(init == 1){
      // Разрушаем слайдер и записываем в data init-slider = 0
      $(".slider-js-1").slick("unslick").data({ "init-slider": 0 });
    }
  }
}).trigger('resize');


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!








// ------------------------------------------------------------






$(Document).ready(function () {
$(".slider-js-2").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 500,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  autoplay: true,
  infinite: true,
  nextArrow: $(".slider__arrow_next--2"),
  prevArrow: $(".slider__arrow_prev--2"),

  // customPaging: function (slider, i) {
  //   var current = i + 1;
  //   current = current < 10 ? "" + current : current;

  //   var total = slider.slideCount;
  //   total = total < 10 ? "" + total : total;

  //   return (
  //     '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  // 		<span class="slick-dots-current">' +
  //     current +
  //     '</span>\
  // 		<span class="slick-dots-separator">из</span>\
  // 		<span class="slick-dots-total">' +
  //     total +
  //     "</span></button>"
  //   );
  // },
});
});

