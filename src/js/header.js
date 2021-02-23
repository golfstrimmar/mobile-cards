
import $ from "jquery";
// ------------------------------------------------



$(document).ready(function (e) {

  $(".header__burger").on("click", function () {
    
    $(".menu")
      .addClass("menu-active")
      // .append(
      //   $(
      //     "<div class='header__info info'><a class='info_phone' href='#!'>+7(000) 123 45 65</a><div class='info_search border-bg'><input type='text' placeholder='Поиск' /><i class='icon-search'></i></div></div>"
      //   )
      // );
      
      setTimeout(function () {
        $(".info").addClass("info-active");
      }, 200);

    $("body").addClass("lock");
  }); 







$(".header__close").on("click", function () {
$(".menu")
  .removeClass("menu-active")
  .find(".header__info")
  .remove();
  $(".info").removeClass("info-active");
$("body").removeClass("lock");
  });

});

 

  // ----- header меняется в размерах и цвете
   window.addEventListener("scroll", function (event) {
     if (window.pageYOffset > 100) {
       document.querySelector(
         ".header"
       ).classList.add("responciveHeader");

     } else {
       document.querySelector(".header").classList.remove("responciveHeader");
     }
   });


//--- сворачивается открытый header при увеличении окна 768

window.onresize = function () {
  if (window.innerWidth >= 768) {
    $(".menu").removeClass("menu-active").find(".header__info").remove();
    $(".info").removeClass("info-active");
    $("body").removeClass("lock");
// alert("");
  }
};



$(document).ready(function (e) {
  
  $(".info-drop-js").slideUp(1);
  $(".info-js").on("click", function () {

 if($(this).hasClass("act")){
 $(this).removeClass("act").find(".info-drop-js").slideUp(200);
 }else{
 $(this).addClass("act").find(".info-drop-js").slideDown(200);
 }

});});           				  				












  // $(document).mouseup(function (e) {
  //   // событие клика по веб-документу
  //   var div = $("#popup"); // тут указываем ID элемента
  //   if (
  //     !div.is(e.target) && // если клик был не по нашему блоку
  //     div.has(e.target).length === 0
  //   ) {
  //     // и не по его дочерним элементам
  //     div.hide(); // скрываем его
  //   }
  // });

