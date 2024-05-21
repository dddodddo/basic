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
//얼굴
let wrapper=document.querySelector('.tracker')
let emoji=document.querySelector('.emoji')
let emojiFace=document.querySelector('.emoji-face')

let moveEvent=function(e){
    let wrapperRect=wrapper.getBoundingClientRect() //wrapper에 대한 영역(공간) 정보
    console.log(wrapperRect)

    let relX=e.clientX - (wrapperRect.left + wrapperRect.width/2)
    let relY=e.clientY - (wrapperRect.top + wrapperRect.height/2)

    let emojiMaxDisplacement = 50
    let emojiFaceMaxDisplacement = 75

    let emojiFaceDisplacementX =(relX / wrapperRect.width) * emojiFaceMaxDisplacement
    let emojiFaceDisplacementY =(relY / wrapperRect.height) * emojiFaceMaxDisplacement

    let emojiMaxDisplacementX=(relX / wrapperRect.width) *emojiMaxDisplacement
    let emojiMaxDisplacementY=(relY / wrapperRect.height) *emojiMaxDisplacement

    gsap.to(emojiFace,{
      x:emojiFaceDisplacementX,
      y:emojiFaceDisplacementY,
      duration:0.35,
      ease:"power3.out"
    })
    gsap.to(emoji,{
      x:emojiMaxDisplacementX,
      y:emojiMaxDisplacementY,
      duration:0.35,
      ease:"power3.out"
    })
}

// 첫번째 영역
let sticky=document.querySelector('.sticky')

gsap.to(sticky,{
  scrollTrigger:{
    trigger: sticky,
    start:"top top",
    end:"+=150%",
    scrub:1,
  },
  y:250,
  scale:0.75,
  rotation:-15,
  ease:"power3.out"
})

// 두번째 영역
let conScale=document.querySelector('.con-scale')

gsap.fromTo(conScale,{
  y:100,
  scale:0.7,
  rotation:15
},{
  scrollTrigger:{
    trigger:conScale,
    start:"top 80%",
    end:"top 20%",
    scrub:2
  },
  y:0,
  scale:1,
  duration:1,
  rotation:0,
  ease:"power3.out"
})






// wrapper.addEventListener('mousemove',function(){moveEvent()})
wrapper.addEventListener('mousemove',moveEvent)

