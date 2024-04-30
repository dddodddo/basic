function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#main");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({//LocomotiveScroll 객체를 생성, 스크롤 관련 동작을 제어하는데 사용한다.
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);//LocomotiveScroll의 scroll 이벤트가 발생할 때마다 ScrollTrigger의 update함수를 호출한다. 이것은 ScrollTrigger와의 연동을 설정한다.

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
        return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y;
    },
    //ScrollTrigger의 스크롤프록시(스크롤에 대한 인터페이스를 제어, 조작)를 설정한다. 이 부분은 ScrollTrigger가 LocomotiveScroll와 함께 작동하도록 만듦.
    getBoundingClientRect() {
        return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },//뷰포트의 크기를 반환하는 getBoundingClientRect() 함수를 정의함
    pinType: pageContainer.style.transform ? "transform" : "fixed" //pinType은 #main 요소의 스타일 속성 transform이 설정되어 있으면 transform으로, 그렇지 않으면 fixed로 설정함
});
//refresh 이벤트를 감지하여 locomotiveScroll.update()함수를 호출하여 LocomotiveScroll을 업데이트한다. 스크롤 컨테이너나 내용이 동적으로 변경될 때 사용된다.
ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

ScrollTrigger.refresh(); //ScrollTrigger를 초기화하고 설정을 적용한다.
}
locomotive()