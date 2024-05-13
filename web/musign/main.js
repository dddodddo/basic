//메인메뉴의 움직이는 바
$('.gnb a').mouseenter(function(){
    let bar=$(this).position().left
    //position() : 요소의 위치정보(top,left)를 반환한다.
    console.log(bar)
    let widnum=$(this).width()
    // $('.bar').animate({옵션},시간)
    $('.bar').animate({
        'left':bar + 'px',
        'width':widnum + 'px',
    },200)
})

//애니메이션
$('.animate').scrolla({
    mobile: false, // 모바일엔 넣지 않겠다는 의미
    once: false, // 애니메이션 한번 실행할건지
    animateCssVersion: 4 // 버전
  });