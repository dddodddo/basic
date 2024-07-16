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

//sec1 _ imgani ////////////////////////////////////////
// console.clear();

const additionalY = {
  val: 0,
};
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  // SET ANIMATION
  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }

          return y;
        }),
      },
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "#section1",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 5000;
      additionalYAnim = gsap.to(additionalY, {
        val: 0,
      });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 6000;
      additionalYAnim = gsap.to(additionalY, {
        val: 0,
      });
    }
  },
});
ScrollTrigger.sort();
ScrollTrigger.refresh();
//clock/////////////////////////////////////////////////////////

let points = document.querySelector(".points");
j = 12;
for (var i = 0; i < 360; i += 6) {
  let point = document.createElement("span");
  point.className = "point";
  if ((i / 6) % 5 == 0) {
    point.className = "point big";
    let text = document.createElement("span");
    text.className = "text";
    text.innerHTML = j;
    text.style.transform = `rotate(${-i}deg) translateY(2px)`;
    if (j == 12) {
      j = 0;
    }
    j = j + 1;
    point.appendChild(text);
  }
  point.style.transform = `rotate(${i}deg) translateY(-100px)`;
  points.appendChild(point);
}

const interval = setInterval(() => {
  var date = new Date();
  let secondsPoint = document.querySelector(".seconds");
  let minutesPoint = document.querySelector(".minutes");
  let hoursPoint = document.querySelector(".hours");

  let secPosition = date.getSeconds() * 6;
  let minPosition = date.getMinutes() * 6;
  let hourPosition = date.getHours() * 30;

  if (secPosition == 0) {
    secondsPoint.style.transition = "none";
  } else {
    secondsPoint.style.transition = "0.25s";
  }
  if (minPosition == 0) {
    minutesPoint.style.transition = "none";
  } else {
    minutesPoint.style.transition = "0.25s";
  }
  if (hourPosition == 0) {
    hoursPoint.style.transition = "none";
  } else {
    hoursPoint.style.transition = "0.25s";
  }

  secondsPoint.style.transform = `rotate(${secPosition - 180}deg)`;
  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;
  hoursPoint.style.transform = `rotate(${hourPosition - 180}deg)`;
});

//lottie////////////////////////////////////////////////////////
// LottieScrollTrigger({
//   target: "#animationWindow",
//   path: "./lottie/Animation_heart.json",
//   speed: "medium",
//   scrub: 2,
// });

//함수는 한번만 있으면 됨.
function LottieScrollTrigger(vars) {
  let playhead = {
      frame: 0,
    },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = {
      slow: "+=2000",
      medium: "+=1000",
      fast: "+=500",
    },
    st = {
      trigger: target,
      pin: true,
      start: "top top",
      end: speeds[vars.speed] || "+=1000",
      scrub: 1,
    },
    ctx = gsap.context && gsap.context(),
    animation = lottie.loadAnimation({
      container: target,
      renderer: vars.renderer || "svg",
      loop: false,
      autoplay: false,
      path: vars.path,
      rendererSettings: vars.rendererSettings || {
        preserveAspectRatio: "xMidYMid slice",
      },
    });
  for (let p in vars) {
    // let users override the ScrollTrigger defaults
    st[p] = vars[p];
  }
  animation.addEventListener("DOMLoaded", function () {
    let createTween = function () {
      animation.frameTween = gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
      });
      return () => animation.destroy && animation.destroy();
    };
    ctx && ctx.add ? ctx.add(createTween) : createTween();
    // in case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
  });
  return animation;
}
//weather////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "8582ffda1c1390cabd3fd5d75d5e5847"; // 여기에 OpenWeatherMap API 키를 입력하세요.
  const weatherContainer = document.querySelector(".weather-container");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // const lat = position.coords.latitude;
      // const lon = position.coords.longitude;
      const lat = 37.5665;
      const lon = 126.978;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`
      )
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("location").textContent = `${data.name}`;
          document.getElementById(
            "temperature"
          ).textContent = `${data.main.temp} °C`;
          // document.getElementById("description").textContent = `날씨: ${data.weather[0].description}`;
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
          document.getElementById("icon").src = iconUrl;
          document.getElementById("icon").alt = data.weather[0].description;

          const timezoneOffset = 9 * 60; // 서울 시간대는 UTC+9
          const localTime = new Date(
            (data.dt + data.timezone + timezoneOffset * 60) * 1000
          );
          const options = {
            timeZone: "Asia/Seoul",
            year: "numeric",
            month: "long",
            day: "numeric",
            // hour: '2-digit',
            // minute: '2-digit',
            // second: '2-digit'
          };
          const formatter = new Intl.DateTimeFormat("ko-KR", options);
          document.getElementById("time").textContent = `${formatter.format(
            localTime
          )}`;
        })
        .catch((error) => {
          weatherContainer.innerHTML = `<p>날씨 정보를 불러오는 데 실패했습니다.</p>`;
          console.error("Error fetching weather data: ", error);
        });
    });
  } else {
    weatherContainer.innerHTML = `<p>위치 정보를 사용할 수 없습니다.</p>`;
  }
});
//////////////////////////////////////////////////////////
document.querySelectorAll(".card").forEach((card) => {
  let moving = false;
  let offsetX, offsetY, prevX, prevTime;

  card.addEventListener("mousedown", (e) => {
    moving = true;
    card.style.transformOrigin = e.clientX + ", " + e.clientY;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.classList.add("active");
    card.style.cursor = "grabbing";

    prevX = e.clientX;
    prevTime = Date.now();
  });

  document.addEventListener("mousemove", (e) => {
    if (moving) {
      card.style.top = e.clientY - offsetY + "px";
      card.style.left = e.clientX - offsetX + "px";

      const currentTime = Date.now();
      const deltaTime = currentTime - prevTime;
      const deltaX = e.clientX - prevX;
      const velocity = Math.abs(deltaX / deltaTime);
      const maxTilt = 20;
      const tiltAngle = Math.min(velocity * maxTilt, maxTilt);

      if (deltaX > 0) {
        card.style.transform = `rotate(${tiltAngle}deg)`;
      } else {
        card.style.transform = `rotate(-${tiltAngle}deg)`;
      }

      prevX = e.clientX;
      prevTime = currentTime;
    }
  });

  document.addEventListener("mouseup", () => {
    if (moving) {
      moving = false;
      card.classList.remove("active");
      card.style.cursor = "grab";
      card.style.transform = "none";
    }
  });
});
////////////////////////////////////////////////////////////////////
let progressText = document.querySelector(".value");
let progressBar = document.querySelector(".progress");
let pseudoElement = window.getComputedStyle(progressBar, "::before");
let progress = 0;

function updateProgress() {
  if (progress < 100) {
    progress = pseudoElement.getPropertyValue("width");
    progress = progress.slice(0, -2);
    progress = Number(progress) / progressBar.clientWidth;
    progressText.textContent = Math.round(progress * 100) + "%";
    setTimeout(updateProgress, 50);
  }
}

updateProgress();
////////////////////////////////////////////////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#section2",
      start: "top top",
      end: "+=1300",
      scrub: 2,
      duration: 2,
      pin: true,
    },
  })
  .to(".card1", { top: "16%", duration: 5, ease: "power2.out" })
  .to(".card2", { top: "47%", duration: 5, ease: "power2.out" }, "-=2")
  .to(".card3", { top: "51%", duration: 5, ease: "power2.out" }, "-=2")
  .fromTo(
    ".color1",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#437fc4", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color2",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#2D9596", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color3",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#75A47F", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color4",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#4F709C", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color5",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#43a6c4", duration: 3, ease: "power2.out" }
  );
////////////////////////////////////////////////////////////////////
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
  .to("#section3", { background: "#353535", duration: 3 }, "-=3")
  .to(
    ".tilte__left",
    {
      paddingRight: "300px",
      duration: 2.5,
      ease: "power3.inOut",
    },
    "-=5"
  )
  .to(
    ".tilte__right",
    {
      paddingLeft: "500px",
      duration: 2.5,
      ease: "power3.inOut",
    },
    "-=5"
  )
  .to(
    ".content1",
    {
      color: "#fff",
      duration: 2,
      ease: "power3.inOut",
    },
    "-=4"
  )
  .to(
    ".tiles__wrap",
    {
      translateX: "-15%",
      translateZ: "-1503px",
      rotateX: "45deg",
      rotateZ: "0deg",
      duration: 2.5,
      ease: "power1.in",
    },
    "-=3"
  )

  .to(
    ".tiles__title",
    {
      color: "#fff",
      top: 0,
      duration: 2,
      ease: "power3.inOut",
    },
    "-=2"
  )
  .to(
    ".content1",
    {
      marginTop: "30vh",
      duration: 2,
      ease: "power3.inOut",
    },
    "-=1.8"
  );
////////////////////////////////////////////////////////////////////
// Select all tiles__line-img elements
const images = document.querySelectorAll(".tiles__line-img");

// Function to toggle grayscale
function toggleGrayscale() {
  images.forEach((image) => {
    // Generate a random number between 0 and 1
    const random = Math.random();

    // Add class 'gray' or 'color' based on random number
    if (random < 0.5) {
      image.classList.add("gray");
      image.classList.remove("color");
    } else {
      image.classList.remove("gray");
      image.classList.add("color");
    }
  });
}

// Initial call to toggle grayscale
toggleGrayscale();

// Set interval to toggle grayscale every 3 seconds (adjust interval as needed)
setInterval(toggleGrayscale, 3000);

////////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
  const ctl = new CollapsibleTimeline("#timeline");
});

class CollapsibleTimeline {
  constructor(el) {
    this.el = document.querySelector(el);

    this.init();
  }
  init() {
    this.el?.addEventListener("click", this.itemAction.bind(this));
  }
  animateItemAction(button, ctrld, contentHeight, shouldCollapse) {
    const expandedClass = "timeline__item-body--expanded";
    const animOptions = {
      duration: 300,
      easing: "cubic-bezier(0.65,0,0.35,1)",
    };

    if (shouldCollapse) {
      button.ariaExpanded = "false";
      ctrld.ariaHidden = "true";
      ctrld.classList.remove(expandedClass);
      animOptions.duration *= 2;
      this.animation = ctrld.animate(
        [
          { height: `${contentHeight}px` },
          { height: `${contentHeight}px` },
          { height: "0px" },
        ],
        animOptions
      );
    } else {
      button.ariaExpanded = "true";
      ctrld.ariaHidden = "false";
      ctrld.classList.add(expandedClass);
      this.animation = ctrld.animate(
        [{ height: "0px" }, { height: `${contentHeight}px` }],
        animOptions
      );
    }
  }
  itemAction(e) {
    const { target } = e;
    const action = target?.getAttribute("data-action");
    const item = target?.getAttribute("data-item");

    if (action) {
      const targetExpanded = action === "expand" ? "false" : "true";
      const buttons = Array.from(
        this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`)
      );
      const wasExpanded = action === "collapse";

      for (let button of buttons) {
        const buttonID = button.getAttribute("data-item");
        const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
        const contentHeight = ctrld.firstElementChild?.offsetHeight;

        this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
      }
    } else if (item) {
      const button = this.el?.querySelector(`[data-item="${item}"]`);
      const expanded = button?.getAttribute("aria-expanded");

      if (!expanded) return;

      const wasExpanded = expanded === "true";
      const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
      const contentHeight = ctrld.firstElementChild?.offsetHeight;

      this.animateItemAction(button, ctrld, contentHeight, wasExpanded);
    }
  }
}
////////////////////////////////////////////////////////////////////
let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("#section4 section");

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=3300",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 95) +
      "px",
    ease: "none",
    duration: 1,
  })
  .to({}, { duration: 1 / (section.length + 1) });

gsap.to(".list", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: ".list",
    start: "right left",
  },
});
gsap.timeline({
  scrollTrigger: {
    trigger: ".line-1",
    start: "right left",
  },
})
.fromTo(".line-1 p", 
  { transform: "translateY(30px)", duration: 1, ease: "power2.inOut" }, 
  { 
    transform: "translateY(0px)", 
    duration: 1, 
    ease: "power2.inOut", 
    stagger: {
      amount: 0.3, 
      from: "start", 
      // 각각의 p 태그에 다른 딜레이를 줄 수 있습니다
      amount: 0.3,
      stagger: (index) => index * 0.2 // index에 따라 딜레이 설정
    }
  }
);

////////////////////////////////////////////////////////////////////
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-3",
      start: "top top",
      end: "+=800",
      scrub: 2,
      duration: 2.5,
      pin: true,
      toggleActions: "play pause reverse reverse",
    },
  })
.from(".row-2", {
  height: "0%",
  duration: 1,
  delay: 0.5,

})

.from(".row li", {
  y: 200,
  opacity: 0,
  ease: "none",
  delay: 2,
  duration: 10,
  stagger: {
    amount: 1,
  },

});
////////////////////////////////////////////////////////////////////
// slide_cir1 요소에 대한 애니메이션
const animation1 = gsap.to(".slide_cir1", {
  backgroundSize:'120%',
  duration: 2,
  ease: "power2.out"
});

// slide_cir2 요소에 대한 애니메이션
const animation2 = gsap.to(".slide_cir2", {
  backgroundSize:'120%',
  duration: 2,
  ease: "power2.out"
});

// slide_model 요소에 대한 애니메이션
const animation3 = gsap.to(".slide_model", {
  backgroundSize:'50%',
  top:'18vh',
  filter:`grayscale(0)`,
  duration: 2.5,
  ease: "power2.out"
});
// Timeline 생성 및 애니메이션 추가
const timeline = gsap.timeline();
timeline.add(animation1)
       .add(animation2, "-=2") // 0.5초 지연 후 애니메이션 실행
       .add(animation3, "-=2") // 0.5초 지연 후 애니메이션 실행

       // ScrollTrigger를 사용하여 #section5에 도달했을 때 Timeline 실행
ScrollTrigger.create({
  trigger: "#section5",
  start: "top 50%",
  end: "bottom top",
  animation: timeline,
  once: true
});
////////////////////////////////////////////////////////////////////
gsap
.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "top top",
    end: "+=500",
    scrub: 2,
    duration: 2.5,
    pin: true,
  },
})
.to("#section5",{background:"#333", duration:1})
////////////////////////////////////////////////////////////////////

gsap
.timeline({
  scrollTrigger: {
    trigger: "#section6",
    start: "top top",
    end: "+=2500",
    scrub: 2,
    duration: 2.5,
    pin: true,
  },
})
.to("#section6",{background:"#333", duration:1})
.to(".header .letters",{color:"#fff", duration:1.5},"-=0.5")
.to(".header .letters:first-child", {x:() => -innerWidth *3,scale:10,ease: "power2.inOut",duration:2.5})
.to(".header .letters:last-child", {x:() => innerWidth *3,scale:10,ease: "power2.inOut",duration:2.5},"-=2.5")
.to(".img-holder", {rotation:0,clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:2.5},"-=2.8")
.to(".img-holder img", {scale:1,duration:5,ease: "power2.inOut"})
.to(".img-holder img", {scale:0.9,duration:5,ease: "power2.in"})

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
let MAX = 100
let circleProgressInstances = []
document.querySelectorAll(".progress2").forEach((progressEle, index) => {
    let initialValue = document.querySelectorAll(".value-input")[index].value
    let cp = new CircleProgress(progressEle, {
        max: MAX,
        value: 0,
        animationDuration:1500,
        // textFormat: (val)=>val+"%",
        textFormat: (val)=>val,
    });

    circleProgressInstances.push(cp)

    ScrollTrigger.create({
        trigger:"#section5",
        start:"top 20%",
        // markers: true,
        scrub:1,
        onEnter:()=>{
            cp.value=initialValue;
        },
        onLeaveBack:()=>{
            cp.value=0;
        }
    })
})


// 기존에 생성된 CircleProgress 인스턴스들을 저장할 배열
let circleProgressInstances2 = [];

// 스킬바 초기화 및 ScrollTrigger 설정 함수
function setupSkills() {
  document.querySelectorAll(".progress3").forEach((progressEle, index) => {
    let initialValue = document.querySelectorAll(".value-input")[index].value;
    let cp = new CircleProgress(progressEle, {
      max: MAX, // 적절한 최대 값 설정
      value: 0, // 초기 값은 0으로 설정
      animationDuration: 1500,
      textFormat: (val) => val, // 텍스트 포맷 설정 (옵션)
    });

    // CircleProgress 인스턴스를 배열에 추가
    circleProgressInstances2.push(cp);

    // ScrollTrigger 생성
    ScrollTrigger.create({
      trigger: ".sec7_skill",
      start: "top 70%",
      scrub: 1,
      onEnter: () => {
        // 스크롤이 화면에 진입했을 때 초기 값으로 설정
        cp.value = initialValue;
      },
      onLeaveBack: () => {
        // 스크롤이 화면을 벗어날 때 다시 초기화
        cp.value = 0;
      },
    });
  });
}

// 모든 [data-to-view] 속성을 가진 요소들에 클릭 이벤트 리스너 추가
document.querySelectorAll('[data-to-view]').forEach((element) => {
  element.addEventListener('click', () => {
    // 기존에 생성된 CircleProgress 인스턴스들을 초기화
    circleProgressInstances2.forEach(cp => {
      cp.value = 0; // 값 초기화
    });
    circleProgressInstances2 = []; // 배열 비우기

    // 새로운 스킬바 설정 함수 호출
    setupSkills();
  });
});

// 페이지 로드 시 스킬바 설정 함수 호출
window.addEventListener('load', setupSkills);




////////////////////////////////////////////////////////////////////
const videos = document.querySelectorAll('video'); // 모든 video 요소 선택

videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
    });
});
////////////////////////////////////////////////////////////////////
var nav = {
  
  init: function(){
    this._bindEvents();
    this._openInitView();
  },
  
  _openInitView: function(){
    //open intial view
    var el = document.querySelector('[data-view-initial]');
    el.classList.add('view--block');
    el.classList.add('view--visible');
  },
  
  _bindEvents: function(){
    var self = this,
        triggers = document.querySelectorAll('[data-to-view]');
    
    //add click event listeners
    //to all view triggers
    [].forEach.call(triggers, function(el){
      el.addEventListener('click', function(){
        var selector = this.getAttribute('data-to-view');
        self._toView(selector);
      }, false);
    });
  },
  
  _toView: function(elSelector){
    var newViewEl = document.querySelector(elSelector),
        currOpenViewEl = document.querySelector('.view--visible'),
        self = this;
    
    //check if new view is the
    //view that is currently open
    if(newViewEl === currOpenViewEl) return;
    
    //close currently open view
    this._closeView(currOpenViewEl, function(done){
      //open new view
      //pass close view done method as callback
      self._openView(newViewEl, done);
    });
  },
  
  _closeView: function(el, callback){
    //move the view to the "up" position
    el.classList.add('view--up');
    el.classList.remove('view--visible');
    
    //trigger the callback x sec into the animation
    setTimeout(function(){
      callback(function(){
        el.classList.remove('view--block');
        el.classList.remove('view--up');
      });
    }, 100);
  },
  
  _openView: function(el, callback){
    //display block the view so its loaded
    //and move the view to the "down" position
    el.classList.add('view--block');
    el.classList.add('view--down');
    
    setTimeout(function(){
      //when the classes are added
      //start the animation by adding the
      //visible class and pulling the view up
      el.classList.add('view--visible');
      
      setTimeout(function(){
        //animation is done
        el.classList.remove('view--down');
        callback();
      }, 600);  
    }, 50);
  }
  
};

nav.init();
////////////////////////////////////////////////////////////////////
gsap
.timeline({
  scrollTrigger: {
    trigger: "#section7",
    start: "top top",
    end: "+=500",
    scrub: 2,
    duration: 2.5,
    pin: true,
  },
})
.to("#section7 .pro",{background:"#cfcfcf", duration:2.5})
////////////////////////////////////////////////////////////////////
let videoSources = [
  "video/hanacard.mp4",
  "video/sushi.mp4",
  "video/ops.mp4",
  "video/zara.mp4",
  "img/6.jpg"
];

let menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach(function (item, index) {
  let copyElements = item.querySelectorAll(".info, .tag");

  copyElements.forEach(function (div) {
    let copy = div.querySelector("p");
    let duplicateCopy = document.createElement("p");
    duplicateCopy.textContent = copy.textContent;
    div.appendChild(duplicateCopy);
  });

  // Copy <a> tag content as well
  let anchor = item.querySelector(".name a");
  let anchorCopy = anchor.cloneNode(true); // <a> 태그를 복제합니다.
  let anchorContainer = item.querySelector(".name"); // 복제할 위치를 찾습니다.
  anchorContainer.appendChild(anchorCopy); // 복제된 <a> 태그를 추가합니다.

  // 마우스 오버 시 애니메이션을 추가합니다.
  item.addEventListener("mouseover", function () {
    mouseoverAnimation(item);
    appendVideo(videoSources[index]);
    gsap.to(anchorCopy, { // 복제된 <a> 태그에 애니메이션을 적용합니다.
      top: "0%", // top 위치를 이동시킵니다.
      duration: 0.3
    });
    gsap.to(anchor, { // 복제된 <a> 태그에 애니메이션을 적용합니다.
      top: "-100%", // top 위치를 이동시킵니다.
      duration: 0.3
    });
  });

  // 마우스 아웃 시 애니메이션을 추가합니다.
  item.addEventListener("mouseout", function () {
    mouseOutAnimation(item);
    gsap.to(anchorCopy, { // 복제된 <a> 태그에 애니메이션을 적용합니다.
      top: "0%", // top 위치를 이동시킵니다.
      duration: 0.3
    });
    gsap.to(anchor, { // 복제된 <a> 태그에 애니메이션을 적용합니다.
      top: "-100%", // top 위치를 이동시킵니다.
      duration: 0.3
    });
  });
});

// 이미지 추가 함수는 그대로 사용합니다.
function appendVideo(src) {
  let preview1 = document.querySelector(".preview-vid-1");

  let video1 = document.createElement("video");
  video1.src = src;
  video1.autoplay = true;
  video1.loop = true;
  video1.muted = true;
  video1.playsInline = true;

  video1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

  preview1.appendChild(video1);

  gsap.to([video1], {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    duration: 1,
    onComplete: function () {
      removeExtraVideo(preview1); // Correct placement of removeExtraVideo call
    }
  });
}

// 이미지 삭제 함수는 그대로 사용합니다.
function removeExtraVideo(container) {
  while (container.children.length > 10) {
    container.removeChild(container.firstChild);
  }
}

// 마우스 오버 애니메이션 함수 수정 없이 그대로 사용합니다.
function mouseoverAnimation(elem) {
  gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
    top: "-100%",
    duration: 0.3
  });
  gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
    top: "0%",
    duration: 0.3
  });
  gsap.to(elem.querySelectorAll(".name a:nth-child(2) p"), {
    top: "0%",
    duration: 0.3
  });
}

// 마우스 아웃 애니메이션 함수 수정 없이 그대로 사용합니다.
function mouseOutAnimation(elem) {
  gsap.to(elem.querySelectorAll("p:nth-child(1)"), {
    top: "0%",
    duration: 0.3
  });
  gsap.to(elem.querySelectorAll("p:nth-child(2)"), {
    top: "100%",
    duration: 0.3
  });
  gsap.to(elem.querySelectorAll(".name a:nth-child(2) p"), {
    top: "100%",
    duration: 0.3
  });
}

// 기존의 마우스 이벤트 함수는 그대로 사용하되, 이미지 애니메이션은 복제된 <a> 태그에 적용하도록 수정합니다.
document.querySelector(".hoverWrap").addEventListener("mouseout", function () {
  gsap.to(".preview-vid video", {
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    ease: "power3.out",
  });
});

document.querySelector(".hoverWrap").addEventListener("mousemove", function (e) {
  let preview = document.querySelector(".preview");
  gsap.to(preview, {
    x: e.clientX,
    y: e.clientY/1.1,
    ease: "power3.out",
  });
});

////////////////////////////////////////////////////
gsap
.timeline({
  scrollTrigger: {
    trigger: "#section8",
    start: "top top",
    end: "+=500",
    scrub: 2,
    duration: 2.5,
    pin: true,
  },
})
.to("#section8",{background:"#eee", duration:2.5})
gsap
.timeline({
  scrollTrigger: {
    trigger: "#section8",
    start: "top top",
    duration: 2.5,
  },
})
gsap.fromTo("#section8 svg text",
  {fill:"rgba(72,138,20,0)", stroke:"#787878",strokeDashoffset:"25%",strokeDasharray:"0 70%",strokeWidth:2},
  {fill:'#333', stroke:"#787878",strokeDashoffset:"-25%",strokeDasharray:"70% 0",strokeWidth:0},
)
////////////////////////////////////////////////////
/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


////////////////////////////////////////////////////


////////////////////////////////////////////////////

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#section9",
    start: "top top",
    end: "+=4000",
    scrub: 2,
    pin: true,
  },
});

// Animate images with stagger
const images2 = document.querySelectorAll("#section9 .sec9_u_img");
images2.forEach((img, index) => {
  tl2.to(img, { opacity: 0, duration: 2 },); // Overlapping each image fade
  tl2.to(".sec_fin_img",{opacity:0.5,duration: 2.5 })
});

// Animate spans
const spans = document.querySelectorAll("#section9 span");
spans.forEach((span, index) => {
  tl2.fromTo(span, 
    { opacity: 0, filter: "blur(4px)", scale: 0.9, duration: 2.5, }, 
    { opacity: 1, filter: "blur(0)", scale: 1, duration: 2.5, delay: index * 3, ease: "power1.in" }, 
    `-=100` // Starts with images fading
  );
});
tl2.to(spans,{opacity:0,duration:3.5,fontSize:"2vw"},"+=1")
tl2.fromTo("#section10",{height:"-10vh",opacity:0,ease: "power1.inOut",duration:10},
  {height:"30vh",opacity:1,ease: "power1.inOut",duration:10},"-=2")
tl2.to("#section9 .sec9_bg img",{height:"90vh",duration:10},"-=2")
tl2.to("#section9 .animated-title",{opacity:1, duration:2.5})
tl2.to("#section9 .animated-title2",{opacity:1, duration:2.5})
tl2.to("#section9 .sec9_bg_wh",{opacity:0.3, duration:2.5})

////////////////////////////////////////////////////

////////////////////////////////////////////////////

