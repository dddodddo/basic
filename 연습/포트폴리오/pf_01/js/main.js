

let tl=gsap.timeline()

tl.to(".topimg1", {
    y:[-100,0],
    ease: "elastic.out(1,0.3)",
    duration: 3,
    stagger:0.2,
    
})

gsap.to(".topimg1", {
    keyframes: {
      
      y: [0, 0, 100, 100, 0],
      ease: "elastic.out(1,0.3)",
    },
    duration: 2
  });