gsap.registerPlugin(Flip)

const items = gsap.utils.toArray(".item"),
      details = document.querySelector('.detail'),
      detailContent = document.querySelector('.content'),
      detailImage = document.querySelector('.detail img'),
      detailTitle = document.querySelector('.detail .title'),
      detailSecondary = document.querySelector('.detail .secondary'),
      detailDescription = document.querySelector('.detail .description');


let activeItem; //어떤 항목이 열려있는지 추적함

gsap.set(detailContent,{yPercent:-100})

function showDetails(item){
  let onLoad=()=>{
    // Flip.fit(무엇을, 어디에, 어떻게)
    Flip.fit(details, 어디에, 어떻게)
  }
}
items.forEach((item)=>item.addEventListener("click",()=>showDetails(item)))

gsap.to(".app",{autoAlpha:1,duration:0.2})
gsap.from(".item",{autoAlpha:0,yPercent:30,stagger:0.05})