gsap.registerPlugin(ScrollTrigger)
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

///////////////////////////////////

//badge 애니메이션 // 모든 badge에 적용
gsap.to('.badge',{
    rotation:360,
    duration:5,
    ease:"none",
    repeat:-1 //무한반복
})

///////////////////////////////////

// 첫번째 영역
let sticky=document.querySelector('.sticky')
gsap.to(sticky,{

})

//얼굴
let wrapper=document.querySelector('.tracker')
let emoji=document.querySelector('.emoji')
let emojiFace=document.querySelector('.emoji-face')

let moveEvent=function(e){
    let wrapperRect=wrapper.getBoundingClientRect() //wrapper에 대한 영역(공간) 정보
    console.log(wrapperRect)
}

// wrapper.addEventListener('mousemove',function(){moveEvent()})
wrapper.addEventListener('mousemove',moveEvent)