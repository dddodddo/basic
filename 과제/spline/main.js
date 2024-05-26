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
  .load('https://prod.spline.design/hxnaZYm-OEPQwBqF/scene.splinecode')
  .then(() => {
    let bean = app.findObjectByName('bean')
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
        gsap.set(bean.position,{x:-500,y:0,z:0})
        gsap.set(bean.rotation,{x:0,y:0,z:0})

///////////////////////////////////////////////

//bean

gsap.timeline({
  scrollTrigger: {
    trigger: '#section3',
    start: 'top 55%',
    end: 'bottom 80%',
    scrub: 2,
  }
})
.to(bean.scale, { x: 1, y: 1, z: 1 })
.to(bean.position, { x: 500, y: 0, z: 0 })
.to(bean.rotation, { x: 0, y: 0, z: 5 })
.to(bean.position, { x: 100, y: 0, z: 0 })

gsap.timeline({
  scrollTrigger: {
    trigger: '#section4',
    start: 'top 80%',
    end: 'bottom 80%',
    scrub: 2,
  }
})
.to(bean.scale, { x: 1.3, y: 1.3, z: 1.3 })
.to(bean.rotation, { x: 0, y: 16, z: 5 })
.to(bean.position,{x:300, y:0, z:0})
.to(bean.position,{x:0, y:0, z:0})

gsap.timeline({
  scrollTrigger: {
    trigger: '#section5',
    start: 'top 80%',
    end:'bottom 90%',
    scrub: 2,
  }
})
.to(bean.scale, {x:0, y:0, z:0})

//icecoffee
gsap.timeline({
  scrollTrigger: {
    trigger: '#section6',
    start: 'top 100%',
    end:'bottom 80%',
    scrub: 2,
  }
})
.to(icecoffee.position,{x:-300, y:0, z:0},0)
.to(icecoffee.scale, {x:1, y:1, z:1},0)
.to(icecoffee.rotation, { x: 6.3, y: 0, z: 0 },0)

gsap.timeline({
  scrollTrigger: {
    trigger: '#section7',
    start: 'top 100%',
    end: 'bottom 90%',
    scrub: 1,
    markers: true
  }
})
.to(icecoffee.scale, { x: 0, y: 0, z: 0 }, 0)
.to(icecoffee.position, { x: 0, y: 0, z: 0 }, 0)

.to(cappuccino.scale, { x: 1, y: 1, z: 1 })
.to(cappuccino.position, { x: 300, y: 0, z: 0 })




})