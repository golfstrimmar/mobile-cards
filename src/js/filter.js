import $ from "jquery";

$(document).ready(function(){  //1
  $("#demoInput").on("keyup", function() {  //2
    var value = $(this).val().toLowerCase();  //3
    $("#demoList li").filter(function() {  //4
   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)  //5
  });
    $("#demoList h4").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); //5
    });
    $("#demoList h2").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1); //5
    });

  });
});