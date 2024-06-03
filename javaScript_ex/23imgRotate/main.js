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

// smooth()
///////////////////////////////////

let animeCard = document.querySelector(".anime-card-inner")

gsap.set(animeCard, {
  rotateY: 90,
  top: "50%",
  left: "50%",
  xPercent: -50,
  yPercent: -50,
  width: "40vh",
  height: "40vh",
  scale: 1
})

gsap.set(".anime-card-front img", {
  attr: {
    src: "https://www.yudiz.com/codepen/gsap-landing-page/tanjiro.jpg"
  }
})
gsap.set(".anime-card-back img", {
  attr: {
    src: "https://www.yudiz.com/codepen/gsap-landing-page/zenitsu.jpg"
  }
})
gsap.set(".anime-card", {
  x: "50%",
  y: "50%"
})
gsap.set(".banner-content", {
  opacity: 0,
  yPercent: 50
})
gsap.set(".main-txt", {
  opacity: 0,
  yPercent: 50,
  xPercent: -50
})

let mainText = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top 30%",
      end: "bottom 90%",
      scrub: 1
    }
  })
  .to(".main-txt", {
    opacity: 1,
    yPercent: -50,
    duration: 2
  })
  .to(".main-txt", {
    opacity: 0,
    ease: "linear",
    duration: "+=1"
  })

  //글자 묶음
  .to(".banner-content", {
    ease: "linear",
    yPercent: 150,
    opacity: 1
  }, "+=1")


//img set
let tl_img = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "top 70%",
      end: "+=100%",
      scrub: 1
    }
  })
  .to(animeCard, {
    rotationY: 0,
    ease: "Expo.easeIn",
    duration: 2,
    scale:1,
    width: "100vw",
    height: "100vh",
  })
  .to(animeCard,{
    height:"60vh",
    width:"535px",
    left:"calc(50% + 500px)",
    duration:2,
    delay:0.5,
  })