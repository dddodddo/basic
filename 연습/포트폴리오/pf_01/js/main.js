

// gsap.from(".topimg1 img", {
//   y: 600,
//   duration: 2,
//   ease: "power4.out",
//   opacity: 0, // 이미지를 처음에 투명하게 설정합니다.
//   onComplete: function() {
//     gsap.to(".topimg1 img", {
//       y: 0,
//       duration: 2, // 이미지가 위로 올라가는 동안의 시간을 조정합니다.
//       ease: "power4.out"
//     });

//     gsap.fromTo(".topimg1 img", {
//       opacity: 0 // 시작 투명도를 0으로 설정합니다.
//     }, {
//       opacity: 1, // 끝 투명도를 1로 설정하여 이미지가 완전히 투명해질 때까지 서서히 증가하도록 합니다.
//       duration: 2, // 투명도가 증가하는 동안의 시간을 조정합니다.
//       delay: 1, // 이미지가 위로 이동한 후에 opacity 애니메이션이 시작하도록 지연시킵니다.
//       ease: "power4.out"
//     });
//   }
// });


  // 이미지 요소를 선택합니다.
  const image = document.querySelector(".topimg1 img");

  // 이미지의 초기 스타일을 설정합니다.
  image.style.opacity = 0;
  image.style.transform = "translateY(600px)";

  // 애니메이션을 적용합니다.
  setTimeout(function() {
    // 이미지가 위로 이동하고 투명도가 증가하는 애니메이션을 적용합니다.
    image.style.transition = "transform 2s, opacity 1.5s";
    image.style.transform = "translateY(0)";
    image.style.opacity = 1;
  }, 500); // 애니메이션을 지연시킵니다.
