// gsap.registerPlugin(ScrollTrigger);

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
console.clear();

gsap.registerPlugin(ScrollTrigger);

const additionalY = {
  val: 0
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
        })
      }
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
        val: 0
      });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 6000;
      additionalYAnim = gsap.to(additionalY, {
        val: 0
      });
    }
  }
});
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
gsap.registerPlugin(ScrollTrigger);
LottieScrollTrigger({
  target: "#animationWindow",
  path: "./lottie/Animation_heart.json",
  speed: "medium",
  scrub: 2,
});


//함수는 한번만 있으면 됨.
function LottieScrollTrigger(vars) {
  let playhead = {
      frame: 0
    },
    target = gsap.utils.toArray(vars.target)[0],
    speeds = {
      slow: "+=2000",
      medium: "+=1000",
      fast: "+=500"
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
document.addEventListener("DOMContentLoaded", function() {
  const apiKey = "8582ffda1c1390cabd3fd5d75d5e5847"; // 여기에 OpenWeatherMap API 키를 입력하세요.
  const weatherContainer = document.querySelector(".weather-container");

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          // const lat = position.coords.latitude;
          // const lon = position.coords.longitude;
          const lat = 37.5665;
          const lon = 126.9780

          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=kr`)
              .then(response => response.json())
              .then(data => {
                  document.getElementById("location").textContent = `${data.name}`;
                  document.getElementById("temperature").textContent = `${data.main.temp} °C`;
                  // document.getElementById("description").textContent = `날씨: ${data.weather[0].description}`;
                  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                  document.getElementById("icon").src = iconUrl;
                  document.getElementById("icon").alt = data.weather[0].description;

                  const timezoneOffset = 9 * 60; // 서울 시간대는 UTC+9
                  const localTime = new Date((data.dt + data.timezone + timezoneOffset * 60) * 1000);
                  const options = {
                      timeZone: 'Asia/Seoul',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      // hour: '2-digit',
                      // minute: '2-digit',
                      // second: '2-digit'
                  };
                  const formatter = new Intl.DateTimeFormat('ko-KR', options);
                  document.getElementById("time").textContent = `${formatter.format(localTime)}`;
              })
              .catch(error => {
                  weatherContainer.innerHTML = `<p>날씨 정보를 불러오는 데 실패했습니다.</p>`;
                  console.error("Error fetching weather data: ", error);
              });
      });
  } else {
      weatherContainer.innerHTML = `<p>위치 정보를 사용할 수 없습니다.</p>`;
  }
});
//////////////////////////////////////////////////////////
document.querySelectorAll(".card").forEach(card => {
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
