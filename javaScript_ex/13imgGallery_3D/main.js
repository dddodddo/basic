window.onload=function(){
    let gallery = document.querySelector(".gallery")
    let previewImage=document.querySelector(".preview-img img")
    let galleryWrap=document.querySelector("#page4")

    galleryWrap.addEventListener("mousemove",function(event){
        let x=event.clientX
        let y=event.clientY
        console.log(`${x},${y}`)
        let centerX=window.innerWidth / 2 //window.innerWidth 화면의 넓이
        let centerY=window.innerHeight / 2 //window.innerHeight 화면의 높이

        let percentX=(x - centerX)/centerX
    })
}