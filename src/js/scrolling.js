import $ from "jquery";
// ------------------------------------------------






//   // --------------------------------------------------------------------------
//  $(window).scroll(function () {
//    var $section = $("section");

//    $section.each(function (i, el) {
//      var top = $(el).offset().top - 100;
//      var bottom = top + $(el).height();
//      var scroll = $(window).scrollTop();
//      var id = $(el).attr("id");

//      if (scroll > top && scroll < bottom) {
//        $("a").removeClass("menu__link-active");
//        $('a[href="#' + id + '"').addClass("menu__link-active");
//      }
//    });

//  });




$(".search-transfer-links").on("click", "a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();

  // получем идентификатор блока из атрибута href
  var id = $(this).attr("href"),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top - 150;

  // $("a").removeClass("menu__link-active");

  // $(this).addClass("menu__link-active");
  // анимируем переход к блоку, время: 800 мс
  $("body,html").animate({ scrollTop: top  }, 800);
});

// $(document).ready(function (e) {
//         $('a[href^="#prose"]').click(function () {
//           var target = $(this).attr("href");
//           $("html, body").animate(
//             { scrollTop: $(target).offset().top - 160 },
//             800
//           ); 
//           return false;
//         });
//       })