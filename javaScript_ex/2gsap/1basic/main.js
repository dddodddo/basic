gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
    scrollTrigger:{
        trigger:'.sec02 ul',
        start:"top 90%",
        end:"20% 20%",
        scrub:true,
        markers:true,
    }
})
.from('.sec02 li:nth-child(1)',{y:400},"0.2")
.from('.sec02 li:nth-child(2)',{y:400},"0.4")
.from('.sec02 li:nth-child(3)',{y:400},"0.6")
.from('.sec02 li:nth-child(4)',{y:400},"0.8")