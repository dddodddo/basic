gsap.registerPlugin(Flip)

let group=document.querySelector(".group")
let button=document.querySelector(".button")
button.addEventListener("click",()=>{
  //F 초기 상태
  let state=Flip.getState(".group, .box")

  //L 마지막 상태
  group.classList.toggle("reorder")

  Flip.from(state,{
    absolute: true, //크기 동일
    duration:0.5,
    stagger:0.2, //규칙적으로 도착함
    ease:"power1.inOut"
  })
  
})