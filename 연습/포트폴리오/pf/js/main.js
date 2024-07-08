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
    { color: "#43c46a", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color3",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#ffae00", duration: 3, ease: "power2.out" }
  )
  .fromTo(
    ".color4",
    { color: "#333", duration: 3, ease: "power2.out" },
    { color: "#7f43c4", duration: 3, ease: "power2.out" }
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
let section = container.querySelectorAll("section");

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

gsap.to(".num", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: ".num",
    start: "right left",
  },
});

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

gsap
.timeline({
  scrollTrigger: {
    trigger: "#section6",
    start: "top top",
    end: "+=1800",
    scrub: 2,
    duration: 2.5,
    pin: true,
  },
})
.to(".header .letters:first-child", {x:() => -innerWidth *3,scale:10,ease: "power2.inOut",duration:2.5})
.to(".header .letters:last-child", {x:() => innerWidth *3,scale:10,ease: "power2.inOut",duration:2.5},"-=2.5")
.to(".img-holder", {rotation:0,clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:2.5},"-=2.3")
.to(".img-holder img", {scale:1,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////
gsap.registerPlugin(ScrollTrigger);

let MAX = 100
let circleProgressInstances = []
document.querySelectorAll(".progress2").forEach((progressEle, index) => {
    let initialValue = document.querySelectorAll(".value-input")[index].value
    let classText = document.querySelectorAll(".skill h3")[index].innerHTML
    let cp = new CircleProgress(progressEle, {
        max: MAX,
        value: 0,
        animationDuration:1500,
        // textFormat: (val)=>val+"%",
        textFormat: (val)=>val,
    });

    circleProgressInstances.push(cp)

    ScrollTrigger.create({
        trigger:".skill",
        start:"top 70%",
        scrub:1,
        markers:true,
        onEnter:()=>{
            cp.value=initialValue;
        },
        onLeaveBack:()=>{
            cp.value=0;
        }
    })

})
////////////////////////////////////////////////////////////////////
