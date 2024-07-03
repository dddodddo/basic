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
  yPercent: -50,
});
let cursor = document.querySelector(".cursor");
let pos = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};
let mouse = {
  x: pos.x,
  y: pos.y,
};
let speed = 0.08;

let xSet = gsap.quickSetter(cursor, "x", "px");
let ySet = gsap.quickSetter(cursor, "y", "px");

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});
gsap.ticker.add(function () {
  let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});
////////////////////////////////////////
let tl = gsap.timeline();
tl.to(
  ".dSvg", {
    x: 60 + "px",
    duration: 2.5,
    ease: "power3.inOut",
    opacity: 1
  },
  0
);
tl.to(".dSvg_left", {
  opacity: 1
}, 2.5);
tl.to(".oSvg", {
  x: 46 + "px",
  scale: 1.8,
  duration: 1,
  ease: "power3.in",
  opacity: 1,
});
tl.to(".dSvg_left", {
  opacity: 0
}, "+=0.5");



//////////////////////////////////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top top",
      end: "+=3500",
      scrub: 2,
      duration: 2,
      pin: true,
    },
  })
  .to(
    ".tilte__left", {
      paddingRight: "300px",
      duration: 2.5,
      ease: "power3.inOut"
    },
    "-=5"
  )
  .to(
    ".tilte__right", {
      paddingLeft: "500px",
      duration: 2.5,
      ease: "power3.inOut"
    },
    "-=5"
  )
  .to(".tiles__wrap",{translateX:"-15%",translateZ:'-1503px', rotateX:'45deg', rotateZ:'0deg',duration: 2.5,ease: "power1.in",},"-=3")
  
  
  .to(
    ".tiles__title", {
      top: "-7vh",
      duration: 2,
      ease: "power3.inOut"
    },
    "-=2"
  )
  .to(
    ".content1", {
      marginTop: "20vh",
      duration: 2,
      ease: "power3.inOut"
    },
    "-=1.8"
  )
///////////////////////////////////////////////////////////////////////
