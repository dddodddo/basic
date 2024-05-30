gsap.registerPlugin(ScrollTrigger)

function smooth() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}
smooth()
/////////////////////////////////////////////////////////////
//텍스트 자르기
const text = new SplitType('#title', { types: 'chars' })
/////////////////////////////////////////////////////////////
//텍스트 애니
let tl=gsap.timeline()

tl.from(".title .char",{
    opacity:0,
    yPercent:130,
    duration:2,
    stagger:0.06,
    ease:"expo.out"
})
tl.to(".header__img",{
    clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)`,
    ease:"expo.out",
    duration:2
})
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
