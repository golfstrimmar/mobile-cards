//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

// разворачивание переполненной карточки
$(document).ready(function (e) {
  // $(".search-cards-card__title--drop").slideUp(1);
  $(".search-cards-card__add").on("click", function () {
    // $(this).siblings(".search-cards-card__title--drop").slideDown(200);
    $(this).parent().css({
      height: "auto",
    });
    $(this).siblings(".search-cards-card__title").css("display", "block");
    $(this).fadeOut(200);
  });
});

// разворачивание переполненной карточки на слайдере моилки
$(document).ready(function (e) {
  $(".slider-item-birthday__add").on("click", function () {
    // $(this).parent().css({
    //   height: "auto!important",
    // });
    $(this)
      .closest(".slider__item--birthday")
      .css({ height: "auto!important" });
    $(this).fadeOut(200);
  });
});

// разворачивание дополнительных карточек

$(document).ready(function (e) {
  window.state = 0;
  $("._hidden-card").slideUp(1);
  
  $(".but-js-1").on("click", function () {
    $(this).siblings(".slider").find("._hidden-card").slideDown(300);
    $(this).attr("disabled", true);
    $(this).find(".button-helper").addClass("button-helper--active");
    $(".search__slider").addClass("search__slider--active");
    window.state = 1;
    $(".slider-js-1")
      .slick("unslick")
      .data({ "init-slider": 0 })
      .removeClass("slider-js-1");
  });

  $(".but-js-2").on("click", function () {
    $(this).siblings(".slider").find("._hidden-card").slideDown(300);
    $(this).attr("disabled", true);
    $(this).find(".button-helper").addClass("button-helper--active");
    $(".search__slider").addClass("search__slider--active");
    window.state = 2;
    $(".slider-js-2")
      .slick("unslick")
      .data({ "init-slider": 0 })
      .removeClass("slider-js-2");
  });

});


//////////////////////////////////////////////////
$(window).resize(function () {
  if ($(window).width() < 768) {
    $(".march-section-cards__card:nth-child(3)").addClass("prose-card-js");
  }else{
    $(".march-section-cards__card:nth-child(3)").removeClass("prose-card-js");
  }
});





///////////////////////////////////////////////////////////////////////

// .home-button

//  window.addEventListener("load", function (event) {
//    if (window.innerWidth <= 768) {
//      class my {
//        constructor(selector) {
//          elements = document.querySelectorAll(selector);
//          this._objs = elements;
//          return this;
//        }

//        siblings(selector) {
//          let elements = [];

//          if (this._objs.length > 0) {
//            let obj = this._objs[0];

//            obj.parentNode.querySelectorAll(selector).forEach((elem) => {
//              if (elem !== obj) elements.push(elem);
//            });
//          }

//          this._objs_old = this._objs;
//          this._objs = elements;
//          return this;
//        }
//      }

// let slider = document.querySelector(".search__slider");

//      document
//        .querySelector(".home-button")
//        .addEventListener("click", function (event) {
//          this.siblings(slider).setAttribute("style", "display: none");
//        });
//    };
//  });

// $(document).ready(function (e) {

// if ($(window).width() <= "1000" ) {
//   $(".home-button").on("click", function () {
//     $(this).siblings(".search__slider").css("display", "none");
//   });
// }

// });

// $(window).resize(function () {
//   if ($(window).width() <= "1000") {
//     $(".home-button").on("click", function () {
//       $(this).siblings(".search__slider").css("display", "none");
//     });
//   }
// });

// разворачивание дополнительных открыток

$(document).ready(function (e) {
  $(".popular__cards--add").slideUp(1);
  $(".home-section__button").on("click", function () {
    $(this)
      .siblings(".popular__cards--add")
      .slideDown(300)
      .css("display", "grid");
    // .find(".search-cards__card--birthday")
    // .css("margin-bottom", "20px");
    $(this).attr("disabled", true);
    // .css({ background: " rgba(158, 185, 244)" })
    // .find(".button-helper--birthday")
    // .css("background", " rgba(158, 185, 244)");
  });
});

// ======================================================
$(document).ready(function (e) {
  // перенос каждого предложения в карточке на новую строку

  const div = document.querySelectorAll(".carryover");
  div.forEach(function (enter) {
    var s = enter.textContent;
    s = s.replace(/([A-Я])/g, "<br/>" + "$1").trim();
    return (enter.innerHTML = s);
  });
});

// ===================================================

// $(".home-section").find(".slider__body").append("")

// $(".search-cards__card--birthday")

// $(document).ready(function (e) {

// $(window).resize(function () {
//   // if ($(window).width() <= "1000") {

// $(".search-cards-birthday-js").each(function () {
//   let array = Array.from($(this).find(".search-cards-card"));

//   console.log(array);

//   // $.each(array, function (index) {

//   // });
// });

// // $(".slider-js-1").find(".slick-track").append(".search-cards-card");
// // return;

//   // }
// // });

// });
// });
