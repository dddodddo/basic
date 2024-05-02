gsap.registerPlugin(ScrollTrigger)

gsap.from(".visual .subtitle",{
    y:50 ,opacity:0, ease:"expo.out", duration:1, delay:0.5
})
gsap.from(".visual .text",{
    y:50 ,opacity:0, ease:"expo.out", duration:1, delay:1
})