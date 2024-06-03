$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find($(".submenu")).stop().slideDown()
    })
})