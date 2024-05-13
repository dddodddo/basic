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