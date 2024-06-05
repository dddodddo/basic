$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find($(".submenu")).stop().slideDown(500)
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).find($(".submenu")).stop().slideUp(500)
    })
})


$(function(){
    let currentIndex=0
    $(".sliderWrap").append($(".slider").first().clone(true))

    setInterval(function(){
        
    })
})