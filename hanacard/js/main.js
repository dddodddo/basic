// slick
$(document).ready(function () {
  $('.eb_slider_list').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    fade: true
  });
});

// 정지/재생 버튼
//버튼.click(); --> 버튼을 클릭하면 어떤 일이 일어난다.
//버튼.click(function(){}); --> 어떤 일은 함수 function(){}
//버튼.hasClass('active'); --> 버튼이 active라는 class를 가지고 있는가? / 가지고 있다면 true, 가지고 있지 않다면 false

$('.event_box2 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  if ($('.event_box2 .page_act').hasClass("on")) {
    $('.event_box2 .page_act').removeClass("on")
    $('.eb_slider_list').slick('slickPause');
  }

})


$('.event_box2 .page_act .btn_play').click(function (e) {
  e.preventDefault();
  if (!$('.event_box2 .page_act').hasClass("on")) {
    // on을 가지고 있지 않아야 true
    // ! --> not, 부정 --> 아닐 때 true
    $('.event_box2 .page_act').addClass("on") //on추가
    $('.eb_slider_list').slick('slickPlay');
  }
})


//card slider
let card = $('.card')
card.slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false,
  fade: true
});

$('.event_box3 .page_act .btn_stop').click(function (e) {
  e.preventDefault();
  //.hasClass('on') --> 클래스명 on을 가지고 있으면 true / 없다면 false
  if($('.event_box3 .page_act').hasClass('on')){
    $('.event_box3 .page_act').removeClass('on')
    card.slick('slickPause');
  }
})

$('.event_box3 .page_act .btn_play').click(function(e){
  //내장함수 --> 함수를 javaScript나 jQuery가 가지고 있어서 우리는 함수를 직접 만드는 것이 아니라 이미 있는 함수를 가져다 쓰는 것.
  e.preventDefault()
  if(!$('.event_box3 .page_act').hasClass('on')){
    $('.event_box3 .page_act').removeClass('on')
    card.slick('slickPause');
  }
})