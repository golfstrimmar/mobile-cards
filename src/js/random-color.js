import $ from "jquery";


$(document).ready(function (e) {



$(".random-color").mouseenter(function () {
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
    .css({ background: hue, "box-shadow": "0px -25px 15px -10px" + hue });

  // $(this)
  //   .find(".search-cards-card__add")
  //   .css({ background: hue, "box-shadow": "0px -25px 15px -10px" + hue });
});

$(".random-color").mouseleave(function () {
  $(this)
    .css("background", "white")
    .find(".search-cards-card__add")
    .css({ background: "white", "box-shadow": "0px -25px 15px -10px #fff" });

// $(this)
//   .find(".slider-item-birthday__add")
//   .css({ background: "white", "box-shadow": "0px -25px 15px -10px #fff" });

});






$(" ._hidden-card").mouseenter(function () {
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
    .css({ background: hue, "box-shadow": "0px -25px 15px -10px" + hue });

  $(this)
    .find(".slider-item-birthday__add")
    .css({ background: hue, "box-shadow": "0px -25px 15px -10px" + hue });
});

$("._hidden-card").mouseleave(function () {
  $(this)
    .css("background", "white")
    .find(".search-cards-card__add")
    .css({ background: "white", "box-shadow": "0px -25px 15px -10px #fff" });

  $(this)
    .find(".slider-item-birthday__add")
    .css({ background: "white", "box-shadow": "0px -25px 15px -10px #fff" });
});
});
