function mouseMove(){
    let cardMoves=document.querySelectorAll(".card_move")

    cardMoves.forEach(function(card){
        card.addEventListener("mousemove",function(e){
            let x = e.offsetX
            let y = e.offsetY
            console.log(x)
        })
    })
}
mouseMove()