window.onload=function(){
    let gallery = document.querySelector(".gallery")
    let previewImage=document.querySelector(".preview-img img")
    let galleryWrap=document.querySelector("#page4")

    galleryWrap.addEventListener("mousemove",function(event){
        let x=event.clientX
        let y=event.clientY
        // console.log(`${x},${y}`)
        let centerX=window.innerWidth / 2 //window.innerWidth 화면의 넓이
        let centerY=window.innerHeight / 2 //window.innerHeight 화면의 높이

        let percentX=(x - centerX)/centerX
    })

    for(let i=0; i<150; i++){
        let item=document.createElement("div")
        item.className="item"
        let img=document.createElement('img')
        img.src='./assets/img' + ((i % 15) + 1) + ".jpg"
        // console.log(item)
        item.appendChild(img)
        gallery.appendChild(item)
        // console.log(gallery)
    }

    let items=document.querySelectorAll(".item")
    let numberOfItems=items.length
    let angleIncrement=360 / numberOfItems
    console.log(angleIncrement)

    // //각각의 요소 item, 번호 index
    // items.forEach(function(item, index){
    //     gsap.set(item,{
    //         rotationY:90,
    //         rotationZ:index * angleIncrement - 90,
    //         transformOrigin:"50% 400px"
    //     })
    // })



}