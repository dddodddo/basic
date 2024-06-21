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

/////////////////////////////////////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "30% 20%",
      end: "50% 20%",
      scrub: 1,
      // markers: true,
    },
  })
  .to(".box-area", { top: 900, scale: 0.2 })
  .to(".button", { opacity: 0 }, 0);
/////////////////////////////////////////////////////////

var ripple6 = new RippleEffect({
  parent: document.querySelector(".div5"),
  texture:
    "https://upload.wikimedia.org/wikipedia/commons/3/36/Daniele_Levis_Pelusi_2017-03-04_%28Unsplash%29.jpg",
  intensity: 1.2,
  strength: 0.2,
  waveSpeed: 0.002,
  hover: false, //false
});
document.querySelector(".start").addEventListener("click", ripple6.start);
document.querySelector(".start").click();
document.querySelector(".stop").addEventListener("click", ripple6.stop);

/////////////////////////////////////////////////////////
gsap.to(".border_top", { height: 80 + "px", duration: 2, opacity: 0 });
gsap.to(".sec1_2024", { top: 3 + "%", duration: 2 });

gsap.to(".border_left", { width: 238 + "px", duration: 2, opacity: 0 });
gsap.to(".sec1_web", { left: 3 + "%", duration: 2 });

gsap.to(".border_bottom", { height: 74 + "px", duration: 2, opacity: 0 });
gsap.to(".sec1_port", { bottom: 3 + "%", duration: 2 });

gsap.to(".border_right", { width: 107 + "px", duration: 2, opacity: 0 });
gsap.to(".fa-sun", { right: 3 + "%", duration: 2 });
/////////////////////////////////////////////////////////

setInterval(() => {
  updateTime(1);
  updateTime(2);
  updateTime(3);
  updateTime(4);
  updateTime(5);
}, 1000);

function updateTime(clockNum) {
  let today = new Date();
  let hh = addZero(today.getHours());
  let mm = addZero(today.getMinutes());
  let ss = addZero(today.getSeconds());

  document.querySelector(`#hours${clockNum}`).innerHTML = hh;
  document.querySelector(`#min${clockNum}`).innerHTML = mm;
  document.querySelector(`#sec${clockNum}`).innerHTML = ss;
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}
/////////////////////////////////////////////////////////

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".call",
      start: "top 30%",
      end: "30% 20%",
      scrub: 2,
      // markers: true,
    },
  })
  .fromTo(
    ".circle",
    { width: 0, height: 0, top: 0 },
    { width: 300, height: 300, top: 820 }
  )
  .fromTo(
    ".circle2",
    { width: 0, height: 0, top: -5 },
    { width: 200, height: 100, top: 787 }
  )
  .fromTo(".textBox", { opacity: 0 }, { opacity: 1 });
/////////////////////////////////////////////////////////
let rotationX = 0;
let rotationY = 0;
let mouseX = 0;
let mouseY = 0;
let cube = document.querySelector(".box-area");
let content = document.querySelector(".box-back");

function rotateXAxis(n) {
  rotationX = rotationX + 90 * n;
  rotationY = 0;
  // console.log(rotationX);
  content.style.transform = `rotateX(180deg) rotateY(0deg) translateZ(100px)`;
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg)`;
}

function rotateYAxis(n) {
  rotationY = rotationY + 90 * n;
  rotationX = 0;
  // console.log(rotationY);
  content.style.transform = `rotateX(0deg) rotateY(180deg) translateZ(100px)`;
  cube.style.transform = `rotateX(0deg) rotateY(${rotationY}deg)`;
}

function front() {
  rotationX = 0;
  rotationY = 0;
  cube.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

cube.addEventListener("mousemove", (event) => {
  mouseX = event.clientX - cube.offsetLeft;
  mouseY = event.clientY - cube.offsetTop;

  rotationY = (mouseX / cube.offsetWidth - 0.5) * 180;
  rotationX = (mouseY / cube.offsetHeight - 0.5) * -360;

  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});
///////////////////////////
function spline(el) {
  this.el = el;
  this.cursor = { x: 0, y: 0 };
  this.elPos();
}

// console.log(spline.prototype);
spline.prototype.elPos = function () {
  this.x = this.el.getBoundingClientRect().left;
  this.y = this.el.getBoundingClientRect().top;
};

spline.prototype.setCursorPos = function (x, y) {
  this.cursor.x = x;
  this.cursor.y = y;
  return this;
};

spline.prototype.align = function () {
  let k1 = this.cursor.y - this.y;
  let k2 = this.cursor.x - this.x;

  let rad = Math.atan(Math.abs(k2) / Math.abs(k1));
  let deg = rad * (180 / Math.PI);

  if (k1 > 0 && k2 > 0) deg = 360 - deg;
  else if (k1 <= 0 && k2 > 0) deg = 180 + deg;
  else if (k1 <= 0 && k2 <= 0) deg = 180 - deg;

  this.el.style.transform = "rotate(" + deg + "deg)";
};

function alignAll(x, y) {
  for (var i in sp) {
    sp[i].setCursorPos(x, y).align();
  }
}

let sp = [];
for (let i = 0; i < 180; i++) {
  let div = document.createElement("div");
  div.className = "i" + i;
  document.querySelector(".w").appendChild(div);
  sp.push(new spline(div));
}

window.addEventListener("mousemove", function (ev) {
  alignAll(ev.clientX, ev.clientY);
});

document.querySelector("html").addEventListener("touchmove", function (ev) {
  ev.preventDefault();

  if (ev.changedTouches && ev.changedTouches.length > 0) {
    alignAll(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
  }
});

var s = 0;
window.addEventListener("resize", function () {
  clearTimeout(s);
  s = setTimeout(function () {
    for (var i in sp) {
      sp[i].elPos();
    }
  }, 200);
});
///////////////////////////
