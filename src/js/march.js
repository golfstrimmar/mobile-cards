import $ from "jquery";


$(document).ready(function (e) {
$(".search-transfer__button").on("click", function () {
  let drop = $(".search-transfer-links");
  let icon = $(this).find("i");
  
  if ($(this).hasClass("act")) {
    drop.slideUp(200)
    $(this).removeClass("act");
    icon.css("transform", "rotate(0deg)");
    $(this).find("span").html("Показать");
  } else {
    drop.slideDown(200).css("display", "grid");
    $(this).addClass("act")
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