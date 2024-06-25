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

////////////////////////////////////////
 //Mouse cursor
 gsap.set(".cursor", {
  xPercent: -50,
  yPercent: -50
})
let cursor = document.querySelector(".cursor")
let pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}
let mouse = {
  x: pos.x,
  y: pos.y
}
let speed = 0.08

let xSet = gsap.quickSetter(cursor, "x", "px")
let ySet = gsap.quickSetter(cursor, "y", "px")

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x
  mouse.y = e.y
})
gsap.ticker.add(function () {
  let dt = 1.0 - Math.pow((1.0 - speed), gsap.ticker.deltaRatio())
  pos.x += (mouse.x - pos.x) * dt
  pos.y += (mouse.y - pos.y) * dt
  xSet(pos.x)
  ySet(pos.y)
})
////////////////////////////////////////
let tl = gsap.timeline();
tl.to(".dSvg", {
  x: 40 + "vw",
  duration: 2.5,
  ease: "power3.inOut",
  opacity: 1,
}, 0);
tl.to(".dSvg_left", {
  opacity: 1
}, 2.5);
tl.to(".oSvg", {
  x: 20 + "vw",
  scale: 1,
  duration: 1,
  ease: "power3.in",
  display: "block"
});


gsap.timeline({
    scrollTrigger: {
      trigger: '#loading',
      start: "65% 50%",
      end: "bottom 35%",
      scrub: 2,
      duration: 2
    }
  })
  .to(".Svg", {
    scale: 0.1,
    x: -900,
    y: -441,
    position: "fixed"
  })

gsap.timeline({
    scrollTrigger: {
      trigger: '#section1',
      start: "top top",
      end: "+=2000",
      scrub: 2,
      markers: true,
      // duration: 2,
      pin:true
    }
  })
  .to("#header img", {
    pointerEvents: "auto"
  })
  .to("#header .menu", {
    opacity: 1
  },"-=5")
  .to(".container",{opacity:1,duration:2},"-=")

////////////////////////////////////////
