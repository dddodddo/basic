let imageSources=[
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
    "./assets/img5.jpg"
]

let menuItem=document.querySelectorAll(".menu-item")
console.log(menuItem)
//[item,item,item,item,item]
menuItem.forEach(function(item){
    let copyElements=item.querySelectorAll(".info, .name, .tag")
    copyElements.forEach(function(div){
        let copy=div.querySelector("p")
        let duplicateCopy=document.createElement("p")
        duplicateCopy.textContent=copy.textContent
        div.appendChild(duplicateCopy)
    })
})

let appendImages=function(src){}

let mouseoverAnimation=function(elem){
    console.log(elem)
    gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        top:"-100%",
        duration:0.3
    })
    gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        top:"0%",
        duration:0.3
    })
}
let mouseOutAnimation=function(elem){
    gsap.to(elem.querySelectorAll("p:nth-child(1)"),{
        top:"0%",
        duration:0.3
    })
    gsap.to(elem.querySelectorAll("p:nth-child(2)"),{
        top:"100%",
        duration:0.3
    })
}

document.querySelectorAll(".menu-item").forEach(function(item,index){
    item.addEventListener("mouseover",function(){
        // console.log("실행")
        mouseoverAnimation(item)
    })
    item.addEventListener("mouseout",function(){
        // console.log("실행")
        mouseOutAnimation(item)
    })

})

appendImages()


