// 페이지가 로드될 때 실행되는 코드
document.addEventListener('DOMContentLoaded', function() {
  // 세션 스토리지에서 마지막 위치 정보를 가져옴
  var lastScreen = sessionStorage.getItem('lastScreen');
  
  if (lastScreen) {
      // 저장된 화면 위치로 이동
      window.scrollTo(0, lastScreen);
  }
  
  // 현재 스크롤 위치를 세션 스토리지에 저장
  window.addEventListener('scroll', function() {
      sessionStorage.setItem('lastScreen', window.scrollY);
  });
});



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

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top top",
      end: "+=1500",
      scrub: 2,
      // markers: true,
      pin: true,
    },
  })
  .to(
    "#header .menu-btn", {
      opacity: 1,
    },
    "-=5"
  )
  .to(
    ".container", {
      opacity: 1,
      duration: 2,
    },
    "-="
  )
  .to(".web_portfolio", {
    opacity: 1,
    duration: 2
  }, "-=3")
  .to(".call", {
    opacity: 1,
    duration: 2
  }, "-=3");

////////////////////////////////////////
let pTag1 = document.querySelector(".sec1_txt");

let textArr1 = "2024 web portfolio 2024 web portfolio 2024 web portfolio".split(
  " "
);

let count1 = 0;

initTexts(pTag1, textArr1);

function initTexts(element, textArray) {
  textArray.push(...textArray);
  for (let i = 0; i < textArray.length; i++) {
    //자바스크립트에서 띄어쓰기는 &nbsp;
    //자바스크립트에서 공백은 \u00A0
    element.innerHTML += `${textArray[i]}&nbsp`;
  }
}

function animate() {
  count1++;

  count1 = marqueeText(count1, pTag1, -1);
  requestAnimationFrame(animate);
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
window.addEventListener("scroll", scrollHandler);
animate();
//////////////////////////////////////////////
// pin 시작을 top에서 시작해야 위에 section과 공간이 안생김

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=5500",
      scrub: 2,
      duration: 10,
      pin: true,
    },
  })
  .from(".sec2_relative", {
    top: "65%",
    duration: 15
  })
  .fromTo(".sec2_imgs", {
    scale: 1.6,
    duration: 15
  }, {
    scale: 1,
    duration: 15
  })
  .to(
    ".sec2_txt", {
      ease: "power3.out",
      duration: 30,
      left: "0%",
      opacity: 1
    },
    "-=1.7"
  )
  .to(".sec2_img1", {
    top: "-505px",
    ease: "power3.in",
    duration: 15
  })
  .to(
    ".sec2_name", {
      scale: 1.5,
      opacity: 0,
      right: "4%",
      ease: "power3.in",
      duration: 18
    },
    "-=2"
  )
  .fromTo(
    ".sec2_firstimg", {
      scale: 1.5,
      ease: "power2.inOut",
      duration: 15
    }, {
      scale: 1,
      ease: "power2.inOut",
      duration: 15
    },
    0
  )
  .fromTo(
    ".sec2_job", {
      scale: 0.8,
      opacity: 0,
      ease: "power3.in",
      duration: 14
    }, {
      scale: 1,
      opacity: 1,
      ease: "power3.in",
      duration: 14
    },
    "-=2"
  )
  .to(".sec2_relative", {
    y: -1000,
    duration: 30
  })
  .to(".sec2_cards", {
    y: -1050,
    duration: 20
  }, "-=25")
  .to(".card1 .front", {
    rotationY: 180,
    duration: 12
  })
  .to(".card1 .back", {
    rotationY: 0,
    duration: 12
  }, "-=5")

  .to(".card2 .front", {
    rotationY: 180,
    duration: 12
  }, "+=15")
  .to(".card2 .back", {
    rotationY: 0,
    duration: 12
  }, "-=4")

  .to(".card3 .front", {
    rotationY: 180,
    duration: 12
  }, "+=15")
  .to(".card3 .back", {
    rotationY: 0,
    duration: 12
  }, "-=4")

  .to(".sec2_cards", {
    top: "900px",
    duration: 15
  });

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
// Select all tiles__line-img elements
const images = document.querySelectorAll('.tiles__line-img');

// Function to toggle grayscale
function toggleGrayscale() {
  images.forEach(image => {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Add class 'gray' or 'color' based on random number
    if (random < 0.5) {
      image.classList.add('gray');
      image.classList.remove('color');
    } else {
      image.classList.remove('gray');
      image.classList.add('color');
    }
  });
}

// Initial call to toggle grayscale
toggleGrayscale();

// Set interval to toggle grayscale every 3 seconds (adjust interval as needed)
setInterval(toggleGrayscale, 3000);

///////////////////////////////////////////////////////////////////////
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "#section4",
//       start: "top top",
//       end: "+=2500",
//       scrub: 2,
//       duration: 2,
//       pin: true,
//     },
//   })
//   .fromTo(".awardsSvg",
//     {top:'50%',duration:2.5,scale:1.2,ease: "power1.inOut",},
//     {top:'20%',duration:2.5,scale:1,ease: "power1.inOut",})