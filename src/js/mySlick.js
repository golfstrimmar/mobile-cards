import $ from "jquery";
// import "./slick.js";

// !!!!!!!!!!!!!!!!!!!!моилка-вкл   больше 1000 - выкл!!!!!!!!!!!!!!!!!!!!!!!!!
$(window).on('resize', function(e){
  // Переменная, по которой узнаем запущен слайдер или нет.
  // Храним её в data
  var init = $(".slider-js-1").data("init-slider");
  // Если мобильный
  if(window.innerWidth < 1000){
    if (window.state == 1) {
      $(".slider-js-1").slick("unslick").data({ "init-slider": 0 });
      return;
    } else {
      if (init != 1) {
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
  }
  else {
    if (window.state == 1) {
  $(".slider-js-1")
    .slick("unslick")
    .data({ "init-slider": 0 })
    .removeClass("slider-js-1");
  $(".search__slider").addClass("search__slider--active");

    }


      if (init == 1) {
        $(".slider-js-1").slick("unslick").data({ "init-slider": 0 });
      }

  }

}).trigger('resize');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


$(window)
  .on("resize", function (e) {
    // Переменная, по которой узнаем запущен слайдер или нет.
    // Храним её в data
    var init = $(".slider-js-2").data("init-slider");
    // Если мобильный
    if (window.innerWidth < 1000) {
      if (window.state == 2) {
        $(".slider-js-2").slick("unslick").data({ "init-slider": 0 });
        return;
      } else {
        if (init != 1) {
          $(".slider-js-2")
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
              nextArrow: $(".slider__arrow_next--2"),
              prevArrow: $(".slider__arrow_prev--2"),
            })
            .data({ "init-slider": 1 });
        }
      }
    } else {
      if (window.state == 2) {
        $(".slider-js-2")
          .slick("unslick")
          .data({ "init-slider": 0 })
          .removeClass("slider-js-2");
        $(".search__slider").addClass("search__slider--active");
      }

      if (init == 1) {
        $(".slider-js-2").slick("unslick").data({ "init-slider": 0 });
      }
    }
  })
  .trigger("resize");



