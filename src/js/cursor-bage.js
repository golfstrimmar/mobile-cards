// всплывающий бэйдж -скопировано
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
        hint.style.left = e.pageX -20+ "px";

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
