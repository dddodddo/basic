/////////////////////////////////////////////////////////
$(function () {
  $(".sec1_name .p").mouseover(function () {
    $(".bg1").addClass("on");
    $(".park>span").addClass("on");
  });
  $(".sec1_name .p").mouseout(function () {
    $(".bg1").removeClass("on");
    $(".park>span").removeClass("on");
  });

  $(".sec1_name .d").mouseover(function () {
    $(".bg2").addClass("on");
    $(".do>span").addClass("on");
  });
  $(".sec1_name .d").mouseout(function () {
    $(".bg2").removeClass("on");
    $(".do>span").removeClass("on");
  });

  $(".sec1_name .h").mouseover(function () {
    $(".bg3").addClass("on");
    $(".hyeon>span").addClass("on");
  });
  $(".sec1_name .h").mouseout(function () {
    $(".bg3").removeClass("on");
    $(".hyeon>span").removeClass("on");
  });
});
