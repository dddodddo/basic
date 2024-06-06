// JavaScript Document

jQuery(document).ready(function(){
  // ******  메뉴  ****** //
  $('.navi>li').mouseover(function(){
	  $(this).find('.subMenu').stop().slideDown(500);
  }).mouseout(function(){
	  $(this).find('.subMenu').stop().slideUp(500);
  });

  // ******  이미지 슬라이드  ****** //

  var imgs = 2;
  var now = 0;
  start();
  function start(){
    $(".imgSlide>a").eq(0).siblings().animate({left:"-3000px"});
    setInterval(function(){
      now = now==imgs ? 0 : now+=1;
      $(".imgSlide>a").eq(now-1).animate({left:"-3000px"});
      $(".imgSlide>a").eq(now).animate({left:"0"});
    },3000);
  }

  // //이미지슬라이드 좌우
  // var imgs = 2;
  // var now = 0;

  // start();

  // function start(){
  //   $(".imgSlide>a").eq(0).siblings().animate({width:"-1200px"});

  //   setInterval(function(){
  //     now = now==imgs ? 0 : now+=1;
  //     $(".imgSlide>a").eq(now-1).animate({width:"-1200px"});
  //     $(".imgSlide>a").eq(now).animate({width:"1200px"});
  //   },3000);
  // }





   // ******  Modal 팝업  ****** //

  $(".notice li:first").click(function(){
	   $("#modalWrap").addClass("active");
  });
    $(".btn").click(function(){
	$("#modalWrap").removeClass("active");
  });

});