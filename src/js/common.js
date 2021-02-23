//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function () {
  $(".cssload").delay(200).fadeOut("slow");
});

$(document).ready(function (e) {
  $(".search-cards-card__title--drop").slideUp(1);
  $(".search-cards-card__add").on("click", function () {
    $(this).siblings(".search-cards-card__title--drop").slideDown(200);
    $(this).parent().css("display","block")
    $(this).siblings(".search-cards-card__title").css('display','block');
    $(this).fadeOut(200);
  });});           				  				
