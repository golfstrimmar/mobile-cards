import $ from "jquery";

// независимые табы-------------------------
$(document).ready(function () {
let titleTab=  $(".tabs-title-js");
titleTab.on("click", function () {
let dropTab = $(this).siblings(".tabs-drop-js");
let imgTab = $(this).find(".tabs-img-js");
if ($(this).hasClass("act")) {
  setTimeout(function () {
    dropTab.removeClass("act");
  }, 200);
  $(this).removeClass("act");
  dropTab.slideUp(100);
  imgTab.css("transform", " translateY(-50%) rotate(0deg)");
}
else {
  $(this).addClass("act");
  imgTab.css("transform", "translateY(-50%) rotate(180deg)");
  dropTab.addClass("act").slideDown(100);
}	
});
})






