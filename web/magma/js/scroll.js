function loco() {
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
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
loco()

/////////////////////////
//page2
let clutter = ""
//textContent --> 텍스트만 추출하는 방법
let page2_h2 = document.querySelector('#page2>h2').textContent.split("")

page2_h2.forEach(function (dets) {
    clutter += `<span>${dets}</span>`
    //clutter = clutter + `<span>T</span>`
    document.querySelector('#page2>h2').innerHTML = clutter
})

gsap.to("#page2>h2>span", {
    scrollTrigger: {
        trigger: "#page2>h2>span",
        start: "top bottom",
        end: "bottom top",
        scroller: "#main", //locomotive사용시 필수
        scrub: 0.5
    },
    color: "#fff",
    stagger: 0.2,
})

//page2 영역의 배경색 애니
gsap.to("#page2 .background", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        end: "bottom top",
        scroller: "#main", //locomotive사용시 필수
        scrub: 1
    },
    opacity: 0,

})

/////////////////////////

//page3
function canvas() {
    let canvas = document.querySelector("#page3 canvas");
    let context = canvas.getContext("2d"); //canvas 사용시 필수 작성
    console.log(context)

    canvas.width = window.innerWidth; // 화면의 넓이
    canvas.height = window.innerHeight; //화면의 높이

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth; // 화면의 넓이
        canvas.height = window.innerHeight; //화면의 높이
    })

    function files(index) {
        let data = `./img/frames00007.png
        ./img/frames00010.png
        ./img/frames00013.png
        ./img/frames00016.png
        ./img/frames00019.png
        ./img/frames00022.png
        ./img/frames00025.png
        ./img/frames00028.png
        ./img/frames00031.png
        ./img/frames00034.png
        ./img/frames00037.png
        ./img/frames00040.png
        ./img/frames00043.png
        ./img/frames00046.png
        ./img/frames00049.png
        ./img/frames00052.png
        ./img/frames00055.png
        ./img/frames00058.png
        ./img/frames00061.png
        ./img/frames00064.png
        ./img/frames00067.png
        ./img/frames00070.png
        ./img/frames00073.png
        ./img/frames00076.png
        ./img/frames00079.png
        ./img/frames00082.png
        ./img/frames00085.png
        ./img/frames00088.png
        ./img/frames00091.png
        ./img/frames00094.png
        ./img/frames00097.png
        ./img/frames00100.png
        ./img/frames00103.png
        ./img/frames00106.png
        ./img/frames00109.png
        ./img/frames00112.png
        ./img/frames00115.png
        ./img/frames00118.png
        ./img/frames00121.png
        ./img/frames00124.png
        ./img/frames00127.png
        ./img/frames00130.png
        ./img/frames00133.png
        ./img/frames00136.png
        ./img/frames00139.png
        ./img/frames00142.png
        ./img/frames00145.png
        ./img/frames00148.png
        ./img/frames00151.png
        ./img/frames00154.png
        ./img/frames00157.png
        ./img/frames00160.png
        ./img/frames00163.png
        ./img/frames00166.png
        ./img/frames00169.png
        ./img/frames00172.png
        ./img/frames00175.png
        ./img/frames00178.png
        ./img/frames00181.png
        ./img/frames00184.png
        ./img/frames00187.png
        ./img/frames00190.png
        ./img/frames00193.png
        ./img/frames00196.png
        ./img/frames00199.png
        ./img/frames00202.png`
        return data.split("\n")[index] // "\n" --> enter로 인해 떨어트린 효과
    }
    let frameCount=67;
    let images=[]
    let imageSeq={
        frame:0
    }
    for(let i=0; i<frameCount; i++){
        let img=new Image() //이미지 태그 만들기
        img.src=files(i)
        images.push(img)
    }
    // console.log(images)
    gsap.to(imageSeq,{
        frame:frameCount - 1,
        snap:"frame",
        ease:"none",
        scrollTrigger:{
            scrub:0.5,
            trigger:"#page3", 
            start:"top top",
            end:"250% top",
            scroller:"#main" //locomotive에서 스크롤을 감지하는 역할
        },
        onUpdate:render
    })
    images[0].onload=render

    function render(){
        scaleImage(images[imageSeq.frame],context)
    }
    function scaleImage(img,ctx){
        let canvas=ctx.canvas
        let hRatio=canvas.width/img.width
        let vRatio=canvas.height/img.height
        let ratio=Math.max(hRatio,vRatio)
        let centerShift_x=(canvas.width - img.width*ratio)/2
        let centerShift_y=(canvas.height - img.height*ratio)/2

        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width*ratio,
            img.height*ratio
        )
    }//scaleImage
    ScrollTrigger.create({
        trigger:"#page3",
        pin:true,
        scroller:"#main",
        start:"top top",
        end:"250% top"
    })






}
canvas()





/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////