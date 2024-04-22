let rotationX=0
let rotationY=0
let cube=document.querySelector('.box-area')


function rotateXAxis(n){
    rotationX=rotationX + (90 * n)
    console.log(rotationX)
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`
}



function rotateYAxis(n){
    rotationY=rotationY + (90 * n)
    console.log(rotationY)
    //transform: rotateX(0deg) rotateY(0deg)
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`
}

function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`
}

