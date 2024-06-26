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
    y: -320,
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
      pin: true
    }
  })
  .to(".dSvg_left", {
    opacity: 0
  },0)
  .to("#header img", {
    pointerEvents: "auto"
  })
  .to("#header .menu-btn", {
    opacity: 1
  }, "-=5")
  .to(".container", {
    opacity: 1,
    duration: 2
  },"-=" )
  .to(".web_portfolio",{opacity:1,duration:2},"-=3")
  .to(".call",{opacity:1,duration:2},"-=3")
  
////////////////////////////////////////
let pTag1 = document.querySelector('.sec1_txt');

let textArr1 = '2024 web portfolio 2024 web portfolio 2024 web portfolio'.split(" ");

let count1 = 0;

initTexts(pTag1, textArr1)

function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    //자바스크립트에서 띄어쓰기는 &nbsp;
    //자바스크립트에서 공백은 \u00A0
    element.innerHTML += `${textArray[i]}&nbsp`
  }
}

function animate() {
  count1++;

  count1 = marqueeText(count1, pTag1, -1)
  requestAnimationFrame(animate)
}


function marqueeText(count, element, direction) {
  //scrollHeight --> 보이지 않는 공간까지 공간의 높이값
  //scrollWidth
  if (count > element.scrollWidth / 2) {
    count = 0;
    element.style.transform = `translate(0,0)`;
  }
  element.style.transform = `translate(${count * direction}px,0)`;
  return count;
}

function scrollHandler() {
  count1 += 10;
}
window.addEventListener("scroll", scrollHandler)
animate();
//////////////////////////////////////////////
gsap.timeline({
  scrollTrigger: {
    trigger: '#section2',
    start: "top 40%",
    end: "+=2000",
    scrub: 2,
    duration:2,
    // markers: true,
    pin: true
  }
})
.to(".sec2_relative", {top:'-20%',duration:2.5})
.to(".sec2_imgs", {scale:1,ease: "power3.out",duration:2.5})
.to(".sec2_txt", {ease: "power3.out",duration:2.5,right:0,opacity:1},"-=1.7")
.to(".sec2_img1",{top:'-505px',ease: "power3.in",duration:2.5})
.to(".sec2_name",{scale:2,opacity:0,ease: "power3.in",duration:2.5},"-=2")
.fromTo(".sec2_firstimg",
  {scale:1.5,ease: "power2.inOut",duration:2.5},
  {scale:1,ease: "power2.inOut",duration:2.5}
,0)
.fromTo(".sec2_job",
  {scale:0.8,opacity:0,ease: "power3.in",duration:2.5},
  {scale:1,opacity:1,ease: "power3.in",duration:2.5}
  ,"-=2")
//////////////////////////////////////////////
