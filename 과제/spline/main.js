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
  .load('https://prod.spline.design/opY0wfhQp3VV3FNV/scene.splinecode')
  .then(() => {
    let coffeebean = app.findObjectByName('coffee_bean')
    let icecoffee = app.findObjectByName('icecoffee')
    let cappuccino = app.findObjectByName('cappuccino')
    let javachip = app.findObjectByName('javachip')
    let blended = app.findObjectByName('blended')
    let tea = app.findObjectByName('tea')

    let objects=[coffeebean,icecoffee,cappuccino,javachip,blended,tea]

    objects.forEach((object)=>{
      gsap.set(object.scale,{x:0,y:0,z:0})
      gsap.to(object.rotation,10,{y:Math.PI*2,repeat:-1,ease:"none"})
    })
    console.log(coffeebean)
    gsap.set(coffeebean.scale,{x:200,y:200,z:200})
    gsap.set(coffeebean.position,{x:300,y:0,z:0})
    
})