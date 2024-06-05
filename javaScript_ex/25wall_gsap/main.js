gsap.registerPlugin(ScrollTrigger);
let world = document.querySelector(".stage")
let stageEle = document.querySelector(".stage")
let houseEle = document.querySelector(".house")

gsap.to(houseEle, {
    ScrollTrigger: {
        trigger: world,
        start: "top top",
        end: "+=400%",
    }
})