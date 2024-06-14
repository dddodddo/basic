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
// color  #00A87F
// color: rgb(153, 153, 153)

// 마우스 따라 움직이는 법
// SwsImg.style.transform = `translate(${newX}px, ${newY}px)`;
// Sws.style.transform = `translate(${newX}px, ${newY}px)`;

////////////////////////🎁search icon🎁////////////////////////
$(function () {
  let Icon = $(".fa-search");
  Icon.click(function () {
    let currentColor = $(this).css("color");
    Icon.css("color", "rgb(153, 153, 153)");
    if (currentColor == "rgb(153, 153, 153)") {
      $(this).css("color", "#00A87F");
    }
  });
});

////////////////////////🎁clock🎁////////////////////////
function updateClock() {
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("hoursTens").textContent = hours[0];
  document.getElementById("hoursOnes").textContent = hours[1];
  document.getElementById("minTens").textContent = minutes[0];
  document.getElementById("minOnes").textContent = minutes[1];
  document.getElementById("secTens").textContent = seconds[0];
  document.getElementById("secOnes").textContent = seconds[1];
}
setInterval(updateClock, 1000);

////////////////////////🎁mv-video🎁////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".mv",
      start: "top top",
      end: "90% top",
      scrub: 2,
      duration: 3,
      pinSpacing: false,
    },
  })
  .to(".mv", {
    opacity: 0.3,
    duration: 100
  }, 5)
  .to(".mv .nav", {
    x: -30 + "%",
    y: 50 + "%",
    duration: 100
  }, 5)
  .to(
    ".mv .logo img", {
      x: -67 + "%",
      y: 410 + "%",
      scale: 0.2,
      duration: 100
    },
    5
  );

////////////////////////🎁header🎁////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section1",
      start: "top 10%",
      end: "top 10%",
      scrub: 2,
      duration: 10,
      markers: true,
      pinSpacing: false,
    },
  })
  .to(".mv video", {
    opacity: 0
  })
  .to(".mv .nav", {
    opacity: 0
  })
  .to(".mv .logo img", {
    opacity: 0
  })
  .to(".header", {
    opacity: 1
  }, 0.2);


////////////////////////🎁sws_clock🎁////////////////////////
setInterval(() => {
  let today = new Date()

  let options = {
    timeZone: 'Europe/Zurich'
  };
  let timeString = today.toLocaleTimeString('en-GB', options);
  let [hh, mm, ss] = timeString.split(':');

  document.querySelector('#hours').innerHTML = hh
  document.querySelector('#min').innerHTML = mm
  document.querySelector('#sec').innerHTML = ss

}, 1000)
////////////////////////🎁sws mostion🎁////////////////////////
let wrapper = document.querySelector(".section1")
let Sws = document.querySelector(".switzerland")
let SwsImg = document.querySelector(".sub_sws")

wrapper.addEventListener('mouseover', function (e) {
  let wrapperRect = wrapper.getBoundingClientRect();
  console.log(wrapperRect);

  let relX = e.clientX - (wrapperRect.left + wrapperRect.width / 2)
  let relY = e.clientY - (wrapperRect.top + wrapperRect.height / 2)

  let SwsMaxDisplacement = 50
  let SwsImgMaxDisplacement = 75

  let SwsImgMaxDisplacementX = (relX / wrapperRect.width) * SwsImgMaxDisplacement
  let SwsImgMaxDisplacementY = (relY / wrapperRect.height) * SwsImgMaxDisplacement

  let SwsMaxDisplacementX = (relX / wrapperRect.width) * SwsMaxDisplacement
  let SwsMaxDisplacementY = (relY / wrapperRect.height) * SwsMaxDisplacement

  gsap.to(SwsImg, {
    x: SwsImgMaxDisplacementX,
    y: SwsImgMaxDisplacementY,
    duration: 0.3,
    ease: "power3.out"
  })
  gsap.to(Sws, {
    x: -SwsMaxDisplacementX,
    y: SwsMaxDisplacementY,
    duration: 0.3,
    ease: "power3.out"
  })
});

////////////////////////🎁section1 slick🎁////////////////////////
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});