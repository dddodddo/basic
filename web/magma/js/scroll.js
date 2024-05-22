function loco(){
    gsap.registerPlugin(ScrollTrigger)
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh(); 
}
loco()

/////////////////////////
//page2
let clutter=""
//textContent --> 텍스트만 추출하는 방법
let page2_h2=document.querySelector('#page2>h2').textContent
console.log(page2_h2)

/////////////////////////
  