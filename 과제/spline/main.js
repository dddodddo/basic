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
    let coffeebean = app.findObjectByName('coffeebean')
    console.log(app)
    let icecoffee = app.findObjectByName('icecoffee')
    let cappuccino = app.findObjectByName('cappuccino')
    let javachip = app.findObjectByName('javachip')
    let blended = app.findObjectByName('blended')
    let tea = app.findObjectByName('tea')

    let objects=[coffeebean,icecoffee,cappuccino,javachip,blended,tea]
// console.log(objects)
//     objects.forEach(function(object){
//       gsap.to(object.rotation,10,{y:Math.PI*1,repeat:-1,ease:"none"})
//     })

})