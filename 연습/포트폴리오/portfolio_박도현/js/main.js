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
tl.to(".dSvg_left", {opacity: 1}, 2.5);
tl.to(".oSvg", {
  x: 20 + "vw",
  scale: 1,
  duration: 1,
  ease: "power3.in",
  display: "block"
});
tl.to(".dSvg_left", {opacity: 0}, "+=0.5");


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
      // markers: true,
      pin: true
    }
  })
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
    // start: "top 40%",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    duration:2,
    // markers: true,
    // pinSpacing: false,
    pin: true // 시작을 top에서 시작해야 위에 section과 공간이 안생김
  }
})
.to(".sec2_relative", {top:'25%',duration:2.5})
.to(".sec2_imgs", {scale:1,ease: "power3.out",duration:2.5})
.to(".sec2_txt", {ease: "power3.out",duration:2.5,right:"3%",opacity:1},"-=1.7")
.to(".sec2_img1",{top:'-505px',ease: "power3.in",duration:2.5})
.to(".sec2_name",{scale:1.5,opacity:0, right:"4%",ease: "power3.in",duration:2.5},"-=2")
.fromTo(".sec2_firstimg",
  {scale:1.5,ease: "power2.inOut",duration:2.5},
  {scale:1,ease: "power2.inOut",duration:2.5}
,0)
.fromTo(".sec2_job",
  {scale:0.8,opacity:0,ease: "power3.in",duration:2.5},
  {scale:1,opacity:1,ease: "power3.in",duration:2.5}
,"-=2")
.to(".sec2_img2",{opacity:0},"-=0.7")
.fromTo(".sec2_imgCopy",
  {opacity:0},
  {opacity:1,zIndex:10}
  ,"-=1")
//////////////////////////////////////////////
gsap.timeline({
  scrollTrigger: {
    trigger: '#section2',
    start: "80% 60%",
    end: "+=900",
    scrub: 2,
    duration:2,
    // markers: true,
    // pinSpacing: false,
    // pin: true
  }    
})
.to(".sec2_imgCopy", {top: '170%', left: '9.35%',duration:3})
.fromTo(".sec3_cards",
  {top:'30%',ease: "power3.out",duration:2.5,},
  {top:'14%',ease: "power3.out",duration:2.5,}
)
.to(".sec2_secondimgCopy",{height:'700px',ease: "power3.out"},"-=2")
// .to(".sec2_imgCopy",{opacity:0},"-=1")
// .to(".sec2_imgCopy",{opacity:0},"+=0.1")
//////////////////////////////////////////////
gsap.timeline({
  scrollTrigger: {
    trigger: '#section2',
    start: "80% top",
    end: "bottom 5%",
    scrub: 2,
    // markers: true,
    // pinSpacing: false,
    // pin: true
  }    
})
.to(".sec2_imgCopy",{opacity:0},"-=0.1")
.to(".card1",{opacity:1},"-=0.6")

//////////////////////////////////////////////
gsap.timeline({
  scrollTrigger: {
    trigger: '#section3',
    start: "top top",
    end: "+=2500",
    scrub: 2,
    duration:3,
    markers: true,
    // pinSpacing: false,
    pin: true
  }
})
.to(".card1 .front",{rotationY: 180, duration:2.5})
.to(".card1 .back",{rotationY: 0, duration:3},"-=2")

.to(".card2 .front",{rotationY: 180, duration:4},"+=15")
.to(".card2 .back",{rotationY: 0, duration:3},"-=1")

.to(".card3 .front",{rotationY: 180, duration:4},"+=15")
.to(".card3 .back",{rotationY: 0, duration:3},"-=1")
.to(".sec3_cards", {top:'10px',duration:30})
///////////////////////////////////////////////////////
// console.clear();

// // Get the canvas element from the DOM
// const canvas = document.querySelector('#scene');
// canvas.width = canvas.clientWidth;
// canvas.height = canvas.clientHeight;
// // Store the 2D context
// const ctx = canvas.getContext('2d');

// if (window.devicePixelRatio > 1) {
//   canvas.width = canvas.clientWidth * 2;
//   canvas.height = canvas.clientHeight * 2;
//   ctx.scale(2, 2);
// }

// /* ====================== */
// /* ====== VARIABLES ===== */
// /* ====================== */
// let width = canvas.clientWidth; // Width of the canvas
// let height = canvas.clientHeight; // Height of the canvas
// let rotation = 0; // Rotation of the globe
// let dots = []; // Every dots in an array


// /* ====================== */
// /* ====== CONSTANTS ===== */
// /* ====================== */
// /* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
// const DOTS_AMOUNT = 1500; // Amount of dots on the screen
// const DOT_RADIUS = 2; // Radius of the dots
// let GLOBE_RADIUS = width * 0.7; // Radius of the globe
// let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
// let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
// let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
// let FIELD_OF_VIEW = width * 0.8;

// class Dot {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
    
//     this.xProject = 0;
//     this.yProject = 0;
//     this.sizeProjection = 0;
//   }
//   // Do some math to project the 3D position into the 2D canvas
//   project(sin, cos) {
//     const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
//     const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
//     this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
//     this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
//     this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
//   }
//   // Draw the dot on the canvas
//   draw(sin, cos) {
//     this.project(sin, cos);
//     // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
//     ctx.beginPath();
//     ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
//     ctx.closePath();
//     // Set color here (for example, red color)
//     ctx.fillStyle = 'rgba(0,0,0,0.7)'; // 색상을 여기서 설정
    
//     ctx.fill();
//   }
// }

// function createDots() {
//   // Empty the array of dots
//   dots.length = 0;
  
//   // Create a new dot based on the amount needed
//   for (let i = 0; i < DOTS_AMOUNT; i++) {
//     const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
//     const phi = Math.acos((Math.random() * 2) - 1); // Random value between [-1, 1]
    
//     // Calculate the [x, y, z] coordinates of the dot along the globe
//     const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
//     const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
//     const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
//     dots.push(new Dot(x, y, z));
//   }
// }

// /* ====================== */
// /* ======== RENDER ====== */
// /* ====================== */
// function render(a) {
//   // Clear the scene
//   ctx.clearRect(0, 0, width, height);
  
//   // Increase the globe rotation
//   rotation = a * -0.0001;
  
//   const sineRotation = Math.sin(rotation); // Sine of the rotation
//   const cosineRotation = Math.cos(rotation); // Cosine of the rotation
  
//   // Loop through the dots array and draw every dot
//   for (var i = 0; i < dots.length; i++) {
//     dots[i].draw(sineRotation, cosineRotation);
//   }
  
//   window.requestAnimationFrame(render);
// }


// // Function called after the user resized its screen
// function afterResize () {
//   width = canvas.offsetWidth;
//   height = canvas.offsetHeight;
//   if (window.devicePixelRatio > 1) {
//     canvas.width = canvas.clientWidth * 2;
//     canvas.height = canvas.clientHeight * 2;
//     ctx.scale(2, 2);
//   } else {
//     canvas.width = width;
//     canvas.height = height;
//   }
//   GLOBE_RADIUS = width * 0.7;
//   GLOBE_CENTER_Z = -GLOBE_RADIUS;
//   PROJECTION_CENTER_X = width / 2;
//   PROJECTION_CENTER_Y = height / 2;
//   FIELD_OF_VIEW = width * 0.8;
  
//   createDots(); // Reset all dots
// }

// // Variable used to store a timeout when user resized its screen
// let resizeTimeout;
// // Function called right after user resized its screen
// function onResize () {
//   // Clear the timeout variable
//   resizeTimeout = window.clearTimeout(resizeTimeout);
//   // Store a new timeout to avoid calling afterResize for every resize event
//   resizeTimeout = window.setTimeout(afterResize, 500);
// }
// window.addEventListener('resize', onResize);

// // Populate the dots array with random dots
// createDots();

// // Render the scene
// window.requestAnimationFrame(render);
///////////////////////////////////////////////////////////
const canvas = document.getElementById('globe');
const ctx = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const DOTS_AMOUNT = 1000;
const DOT_RADIUS = 3;
let GLOBE_RADIUS = canvas.width * 1.5;
let GLOBE_CENTER_Z = -GLOBE_RADIUS * 1.5;
let PROJECTION_CENTER_X = canvas.width / 2;
let PROJECTION_CENTER_Y = canvas.height / 2;
let FIELD_OF_VIEW = canvas.width * 0.8;

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xProject = 0;
    this.yProject = 0;
    this.sizeProjection = 0;
    this.alpha = 0.8; // Fixed alpha value
  }

  project(sin, cos) {
    const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
    const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
    this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
    this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
    this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
  }

  draw(sin, cos) {
    this.project(sin, cos);
    ctx.beginPath();
    ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = `rgba(179, 101, 0, ${this.alpha})`; // Use fixed alpha value
    ctx.fill();
  }
}


function createDots() {
  const dots = [];
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
    dots.push(new Dot(x, y, z));
  }
  return dots;
}

function render(a) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Adjust rotation speed here
  const rotationSpeed = -0.0001;
  
  const rotation = a * rotationSpeed;
  const sineRotation = Math.sin(rotation);
  const cosineRotation = Math.cos(rotation);
  
  dots.forEach(dot => dot.draw(sineRotation, cosineRotation));
  
  requestAnimationFrame(render);
}

let dots = createDots();
window.addEventListener('resize', () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  GLOBE_RADIUS = canvas.width * 0.4;
  PROJECTION_CENTER_X = canvas.width / 2;
  PROJECTION_CENTER_Y = canvas.height / 2;
  FIELD_OF_VIEW = canvas.width * 0.8;
  dots = createDots();
});
requestAnimationFrame(render);


