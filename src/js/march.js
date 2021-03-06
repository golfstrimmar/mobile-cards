import $ from "jquery";

$(document).ready(function (e) {
  $(".search-transfer__button").on("click", function () {
    let drop = $(".search-transfer-links");
    let icon = $(this).find("i");

    if ($(this).hasClass("act")) {
      drop.slideUp(200);
      $(this).removeClass("act");
      icon.css("transform", "rotate(0deg)");
      $(this).find("span").html("Показать");
    } else {
      drop.slideDown(200).css("display", "grid");
      $(this).addClass("act");
      icon.css("transform", "rotate(180deg)");
      $(this).find("span").html("Спрятать");
    }
  });
});

$(document).ready(function (e) {
  $(".prose-js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act");
      $(this)
        .siblings(".march-cards")
        .find(".prose-card-js")
        .removeClass("prose-card-js--active");
    } else {
      $(this).addClass("act");
      $(this)
        .siblings(".march-cards")
        .find(".prose-card-js")
        .addClass("prose-card-js--active");
    }
  });
});

$(document).ready(function (e) {
  $(".friend-js").on("click", function () {
    if ($(this).hasClass("act")) {
      $(this).removeClass("act").find("span").text("Показати більше");
      $(this)
        .siblings(".march-cards")
        .find(".prose-card-js")
        .removeClass("prose-card-js--active");
      $(this).find("i").css("transform", "rotate(0deg)");
    } else {
      $(this).addClass("act").find("span").text("Приховати привітання");
      $(this)
        .siblings(".march-cards")
        .find(".prose-card-js")
        .addClass("prose-card-js--active");
      $(this).find("i").css("transform", "rotate(180deg)");
    }
  });
});

// ---------скрытие иконок при выходе нижнего блока


$(document).ready(function (e) {
  $(window).scroll(function (e) {
    if ($("#march-soc").length > 0) {
let distanceTop = $("#march-soc").offset().top;
let viewPort = window.innerHeight;
      if (window.pageYOffset > distanceTop - viewPort + 50) {
        $("#soc-aside").css("opacity", "0");
      } else {
        $("#soc-aside").css("opacity", "1");
      }
    }
  });
});
// -----если нет кнопки на странице друзей- делаем отступ--------------------------

$(document).ready(function (e) {
  $(".march__section").each(function () {
    let array = Array.from($(this).find(".home-section__button--friend"));
    if (array.length < 1) {
      $(this).css("margin", "0 0 106px 0");
    } else {
      $(this).css("margin", "0");
    }
  });
});



// регулирует количество имен в колонке--------------------------
$(document).ready(function (e) {
  $(".names-column").each(function () {
    let array = Array.from($(this).find(".names-colum__item"));
    if (array.length <= 6) {
      $(this).addClass("names-column--string");
      $(this).find(".names-colum__item").addClass("names-colum__item--string");
      $(this)
        .parent(".names-letter__list-item")
        .addClass("names-letter__list-item--string");
      $(this)
        .closest(".names-letter__list")
        .addClass("names-letter__list--string");
    } else {
      $(this).removeClass("names-column--string");
      $(this)
        .find(".names-colum__item")
        .removeClass("names-colum__item--string");
      $(this)
        .parent(".names-letter__list-item")
        .removeClass("names-letter__list-item--string");
      $(this)
        .closest(".names-letter__list")
        .removeClass("names-letter__list--string");
    }
  });
});
