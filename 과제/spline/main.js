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

///////////////////////////////////////////////

//bean
gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top 55%',
        end: 'bottom 80%',
        scrub:1,
        markers:true,
        duration:0.2
    }
})
// .to(bean.position,{x:0,y:0,z:0})
.to(bean.scale,{x:1,y:1,z:1})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top 50%',
        end: 'bottom 80%',
        markers:true,
        scrub:1,
    }
})
.to(bean.position,{x:500,y:0,z:0})
.to(bean.rotation,{x:0,y:0,z:Math.PI * 2})

gsap.timeline({
	scrollTrigger: {
    	trigger: '#section3',
        start: 'top top',
        end: 'bottom 90%',
        markers:true,
        scrub:1,
    }
})
.to(bean.position,{x:0,y:-50,z:0})


})