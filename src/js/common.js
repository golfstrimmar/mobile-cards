//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function () {
  $(".cssload").delay(200).fadeOut("slow");
});

$(document).ready(function (e) {
  // $(".search-cards-card__title--drop").slideUp(1);
  $(".search-cards-card__add").on("click", function () {
    $(this).siblings(".search-cards-card__title--drop").slideDown(200);
    $(this).parent().css("display","block")
    $(this).siblings(".search-cards-card__title").css('display','block');
    $(this).fadeOut(200);
  });});           				  				


  (function () {
     var hint = document.createElement("div");
    hint.className = "hint"; // изначально невидимый клаcc
    document.body.appendChild(hint);

    var path = document.getElementsByClassName("path");
    var i;
    for (i = 0; i < path.length; i++) {
      path[i].addEventListener("click", function (e) {
        // hint.innerText = this.dataset.description;

        hint.innerText = "Скопировано!";

        hint.style.display = "inline-block";

        /* Условие для координат всплывающего блока. 
    Через (e.pageX + Любое_Число) можно настраивать положение блока */
        if (e.pageX + hint.offsetWidth < document.body.offsetWidth) {
          /* e.pageX == расстояние от мышки до левого края страницы, в пикселях
      hint.offsetWidth == ширина всплывающей подсказки
      Если их сумма оказывается больше ширины body - сработает else */
         hint.style.cssText = `
            opacity: 1; 
            `;

hint.style.top = e.pageY + 33 + "px";
hint.style.left = e.pageX  -12 + "px";

 setTimeout(function () {

   hint.style.cssText = `
            opacity: 0; 
            `;
 }, 1000);
        } else {
          hint.style.top = e.pageY + 10 + "px";
          hint.style.left = e.pageX - hint.offsetWidth - 10 + "px";
        }
        /* 'e' - всего лишь переменная в фукнции... там могло бы быть
       function (bubu) { bubu.pageX; } */
      });
    }


    /* Добавляем событие 'клик' на всю страницу и каждый раз запускаем функцию*/
    // document.addEventListener("click", function (e) {
    //   /*Если e.target (кликнутый элемент) имеет класс "path" - разворачиваемся*/
    //   if (e.target.className.match("path")) {
    //     return;
    //   }
    //   /* А если нет - скрываем блок */
    //   hint.style.display = "none";
    // });
  })();


// рандомный цвет карточки из списка
$(".search-cards-card").mouseenter(function () {

  const color = [
    "#FDFFBC",
    "#E7D9EA",
    "#CFEBD2",
    "#FCD1D1",
    "#D3E0EA",
    "#EFF7E1",
    "#FFEEBB",
    "#FFDCDC",
    "#D3E0DC",
    "#BEE5D3",
    "#D3E0DC",
    "#D6B0B1",
  ];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

var i = randomInteger(0, 11);
  var hue = color[i];
  $(this)
    .css("background", hue)
    .find(".search-cards-card__add")
    .css({ background: hue, "box-shadow": "0px -25px 15px -10px"+ hue  });

});


$(".search-cards-card").mouseleave(function () {
  $(this)
    .css("background", "white")
    .find(".search-cards-card__add")
    .css({ "background": "white", "box-shadow": "0px -25px 15px -10px #fff" });
});








$(document).ready(function (e) {$(".home-section__button").on("click", function () {
  $(this).siblings(".search__cards--add")
    .slideDown(300)
    .css("display", "flex")
    .find(".search-cards__card--birthday")
    .css("margin-bottom", "20px");
  $(this)
    .attr("disabled", true)
    // .css({ background: " rgba(158, 185, 244)" })
    // .find(".button-helper--birthday")
    // .css("background", " rgba(158, 185, 244)");
});

});           				  				
$(document).ready(function (e) {
  
  $(".popular__cards--add").slideUp(1);
  $(".home-section__button").on("click", function () {
  $(this)
    .siblings(".popular__cards--add")
    .slideDown(300)
    .css("display", "grid")
    // .find(".search-cards__card--birthday")
    // .css("margin-bottom", "20px");
  $(this)
    .attr("disabled", true)
    // .css({ background: " rgba(158, 185, 244)" })
    // .find(".button-helper--birthday")
    // .css("background", " rgba(158, 185, 244)");
});

});           				  				