gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

////////////////////////////////////////

let tl = gsap.timeline();
tl.to(".dSvg", {x: 40 + "vw",duration: 2.5,ease: "power3.inOut",opacity: 1,},0);
tl.to(".dSvg_left", {opacity: 1},2.5);
tl.to(".oSvg", {x: 20 + "vw",scale:1,duration: 1,ease: "power3.in",display:"block"});

tl.to(".Svg", {
  scrollTrigger: {
    trigger: '#loading',
    start: "70% 50%",
    end: "+=1000",
    pin:true,
    scrub: 2,
    markers: true,
    // pinSpacing:false,
  },
  scale: 0.1, x:-900, y:-250  
});
