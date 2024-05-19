
// import { Application } from 'https://unpkg.com/@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app
// .load('https://prod.spline.design/lGbFqJJNNEymupwX/scene.splinecode')
// .then(()=>{
  
// })

gsap.registerPlugin(ScrollTrigger)


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


/////////////////////////////////
gsap.to("#section1",{
  scrollTrigger:{
    trigger:'#section1',
    start:"top",
    end:"bottom",
    scrub:1,
    markers:true,
  }
})