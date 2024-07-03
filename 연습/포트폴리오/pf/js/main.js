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

// ////////////////////////////////////////
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
///////////////////////////////////////////////////////////

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
//////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image img');

  images.forEach(image => {
    // Generate a random saturate value between 0.5 and 1.5
    const randomSaturate = Math.random() * (1.5 - 0.5) + 0.5;
    image.style.filter = `saturate(${randomSaturate})`;
  });
});
//////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image img');

  images.forEach(image => {
    // Generate a random saturate value between 0.5 and 1.5
    const randomSaturate = Math.random() * (1.5 - 0.5) + 0.5;
    image.style.filter = `saturate(${randomSaturate})`;
  });
});
//////////////////////////////////////////////////////////
    gsap.registerPlugin(ScrollTrigger)

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
