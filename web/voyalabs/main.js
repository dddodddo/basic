//cursor
const coords={x:0,y:0};
const circles=document.querySelectorAll(".circle");
const svg=document.querySelector(".cursor img")
let timer;

svg.style.visibility="hidden";

circles.forEach((circle, index)=>{
    //console.log(circle)
    circle.x=0;
    circle.y=0;
})

window.addEventListener("mousemove",function(e){
    coords.x=e.clientX;
    coords.y=e.clientY;

   clearTimeout(timer)

   svg.style.visibility="hidden";
   circles.forEach((circle)=>{
    circle.style.display='block';
})

  // this.setTimeout(function(){},시간) 시간만큼 지나면 할일이 한번 실행됨
  timer=setTimeout(function(){
    circles.forEach((circle)=>{
        circle.style.display='none';
        svg.style.visibility="visible";
        svg.style.display="block"
    })
},500)
})

function animateCircles(){
  let x=coords.x;
  let y=coords.y;

  circles.forEach((circle,index)=>{
      circle.style.left=x +"px";
      circle.style.top=y +"px";

      let len=circles.length * 2;
      circle.style.scale=((len - index) / len) * window.innerWidth / 1400;


      circle.x=x;
      circle.y=y;

      let nextCircle=circles[index + 1] || circles[0]
      x +=(nextCircle.x - x)*0.1;
      y +=(nextCircle.y - y)*0.1;
      console.log(x)
  })

 
  requestAnimationFrame(animateCircles)
}
animateCircles()


//  100        200
//  x =(nextCircle.x - x)*0.1 + x;
//  x = (100 - 200) *0.1 + 200 = 190


//  x = (100 - 190) *0.1 + 190 = 181

//Theme Changer
let themeChanger = ()=>{
  let offsets=document.querySelector("#theme-changer").getBoundingClientRect();
  // console.log(offsets)
  document.body.style.backgroundColor=offsets.top<0?"#fff":"#0e0e0e"
}
window.addEventListener("scroll",themeChanger)
window.addEventListener("load",themeChanger)


//Video
//<iframe src="" frameborder="0" autoplay loof></iframe>
//allow="autoplay"; allow는 iframe 콘텐츠에 특정 기능을 허용하는 역할
let video=document.querySelector(".video");
video.addEventListener("click",()=>{
    video.innerHTML=`<iframe src="https://player.vimeo.com/video/764513434?color=ffffff&badge=0&title=0&byline=0&portrait=0&loop=1&autoplay=1&api=1" frameborder="0" allow="autoplay"></iframe>`
    video.classList.add("video-added")
})




//animation
const hiddenElement = document.querySelectorAll("p");
const hiddenElement1 = document.querySelectorAll("h1");
const hiddenElement2 = document.querySelectorAll("h2");
const hiddenElement3 = document.querySelectorAll("h3");
const hiddenElement4 = document.querySelectorAll("a");
const hiddenElement5 = document.querySelectorAll("button");

let observer=new IntersectionObserver((entries)=>{

})