$(function(){
    $(".nav>ul>li").mouseover(function(){
        $(this).find($(".submenu")).stop().slideDown()
    })
    $(".nav>ul>li").mouseout(function(){
        $(this).find($(".submenu")).stop().slideUp()
    })
})

$(function(){
    let currnetIndex=0
    $(".slide").hide().first().show()

    setInterval(function(){
        let nextIndex=(currnetIndex + 1)%3
        $(".slide").eq(currnetIndex).fadeOut(1200)
        $(".slide").eq(nextIndex).fadeIn(1200)

        currnetIndex=nextIndex
    },3000)
})