$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(".submenu").stop().slideDown(300)
        $("#slider").addClass("on")
    })
    $(".nav>ul>li").mouseout(function(){
        $(".submenu").stop().slideUp(300)
        $("#slider").removeClass("on")
    })
},3000)

$(function(){
    let currentIndex=0
    
})