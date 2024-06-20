gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/////////////////////////////////////////////////////////

var ripple6 = new RippleEffect({
  parent: document.querySelector('.div5'),
  texture: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Daniele_Levis_Pelusi_2017-03-04_%28Unsplash%29.jpg',
  intensity: 1.2,
  strength: .2,
  waveSpeed: 0.002,
  hover: false //false
});
document.querySelector('.start').addEventListener('click', ripple6.start);
document.querySelector('.start').click()
document.querySelector('.stop').addEventListener('click', ripple6.stop);

/////////////////////////////////////////////////////////
$(function(){
  $(".sec1_name .p").mouseover(function(){
    $(".bg1").addClass("on")
    $(".park>span").addClass("on")
  })
  $(".sec1_name .p").mouseout(function(){
    $(".bg1").removeClass("on")
    $(".park>span").removeClass("on")
  })

  $(".sec1_name .d").mouseover(function(){
    $(".bg2").addClass("on")
    $(".do>span").addClass("on")
  })
  $(".sec1_name .d").mouseout(function(){
    $(".bg2").removeClass("on")
    $(".do>span").removeClass("on")
  })

  $(".sec1_name .h").mouseover(function(){
    $(".bg3").addClass("on")
    $(".hyeon>span").addClass("on")
  })
  $(".sec1_name .h").mouseout(function(){
    $(".bg3").removeClass("on")
    $(".hyeon>span").removeClass("on")
  })
})
/////////////////////////////////////////////////////////
gsap.to(".border_top",{height: 80+"px", duration: 2, opacity:0});
gsap.to(".sec1_2024",{top: 3+"%", duration: 2});

gsap.to(".border_left",{width: 238+"px", duration: 2, opacity:0});
gsap.to(".sec1_web",{left: 3+"%", duration: 2});

gsap.to(".border_bottom",{height: 74+"px", duration: 2, opacity:0});
gsap.to(".sec1_port",{bottom: 3+"%", duration: 2});

gsap.to(".border_right",{width: 107+"px", duration: 2, opacity:0});
gsap.to(".fa-sun",{right: 3+"%", duration: 2});

setInterval(()=>{
  let today=new Date()
  let hh=addZero(today.getHours())
  let mm=addZero(today.getMinutes())
  let ss=addZero(today.getSeconds())

  document.querySelector('#hours').innerHTML=hh
  document.querySelector('#min').innerHTML=mm
  document.querySelector('#sec').innerHTML=ss

  function addZero(num){
      return(num<10?"0"+num:num)
  }
}, 1000)
/////////////////////////////////////////////////////////

gsap.timeline({
  scrollTrigger:{
      trigger:'.sec02',
      start:'top 50%',
      end:'30% top',
      scrub:2,
      markers:true,
  }
})
.fromTo(".circle",{width:0, height:0,top:'3%'},{width:250,height:250,top:'30%'})


// textBox
gsap.timeline({
  scrollTrigger:{
      trigger:'.sec02 .textBox',
      start:'top 80%',
      end:'100% 80%',
      scrub:2,
      markers:true,
  }
})
.fromTo('.textBox',{top:"50%",opacity:0},{top:'40%',opacity:1})