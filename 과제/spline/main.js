gsap.registerPlugin(ScrollTrigger)

function lenis() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    // console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

}
lenis()
/////////////////////////////////
$(function(){
  $(".nav>ul>li ").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown()
    $("#header").addClass('on')
  })
  $(".nav>ul>li").mouseout(function(){
    $(".nav>ul>li>ul").stop().slideUp()
    $("#header").removeClass('on')
  })
})
/////////////////////////////////
$(document).ready(function(){
  $(".heart").click(function(){
      $(this).toggleClass("far fas");
  });
});
/////////////////////////////////
import {
  Application
} from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
  .load('https://prod.spline.design/7oLggwHQax4cYbuk/scene.splinecode')
  .then(() => {
    let bean = app.findObjectByName('bean')
    console.log(bean)
    let icecoffee = app.findObjectByName('icecoffee')
    let cappuccino = app.findObjectByName('cappuccino')
    let javachip = app.findObjectByName('javachip')
    let blended = app.findObjectByName('blended')
    let tea = app.findObjectByName('tea')

    let objects = [bean, icecoffee, cappuccino, javachip, blended, tea]
        objects.forEach(function(object){
          gsap.set(object.scale,{x:0,y:0,z:0})
          gsap.to(object?.rotation,5,{y:Math.PI*2,repeat:-1,ease:"none"})
        })
        // gsap.set(bean.scale,{x:1,y:1,z:1})
        gsap.set(bean.position,{x:-500,y:0,z:0})
        gsap.set(bean.rotaion,{x:0,y:0,z:0})

///////////////////////////////////////////////

//bean
gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top 55%',
        end: 'bottom 80%',
        scrub:1,
        duration:0.2,
    }
})
.to(bean.scale,{x:1,y:1,z:1})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top 50%',
        end: 'bottom 80%',
        scrub:1,
    }
})
.to(bean.position,{x:500,y:0,z:0})
.to(bean.rotation,{x:0,y:0,z:5})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top top',
        end: 'bottom 90%',
        scrub:1,
    }
})
.to(bean.position,{x:100,y:0,z:0})
.to(bean.rotation,{x:0,y:-0.2,z:0})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'bottom 80%',
        scrub:1,
        markers:true
    }
})
.to(bean.position,{x:10,y:0,z:0})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section4',
        start: 'top 90%',
        end: 'bottom 70%',
        markers:true,
        scrub:1,
    }
})
.to(bean.position,{x:100,y:0,z:0})
.to(bean.rotation,{x:0,y:2,z:0})
.to(bean.scale,{x:2,y:2,z:2})

})