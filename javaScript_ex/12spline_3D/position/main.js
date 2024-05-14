gsap.registerPlugin(ScrollTrigger)
function lenis(){
    const lenis = new Lenis()
    
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

}
lenis()

//////////////////////////////////////////

import { Application } from 'https://unpkg.com/@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app
.load('https://prod.spline.design/5hoCsSgK2MAG2Jqh/scene.splinecode') //가져왔을 때
.then(()=>{//load가 성공했다면 할 일
    
    let car=app.findObjectByName('car')
    console.log(car)
    

    gsap.to(car.rotation),{
        y:Math.PI * 2 + car.rotation.y,
        duration:10,
        repeat:-1,
        ease:"none",
    }
    
}) 
