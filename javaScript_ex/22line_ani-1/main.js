// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    //이미지 애니
    let items = document.querySelectorAll('.anime-list li')
    items.forEach(function (el) {
        gsap.set(".hover-img", {
            xPercent: -50,
            yPercent: -50
        })
        let image = el.querySelector(".hover-img")
        let innerImage = el.querySelector(".hover-img img")
        let pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
        let mouse = {
            x: pos.x
        }
        let speed = 0.1
        let xSet = gsap.quickSetter(image, "x", "px")

        window.addEventListener("mousemove", function (e) {
            // console.log(e.x)
            mouse.x = e.x
        })

        gsap.ticker.add(function () { //requestAnimationFrame()
            pos.x += (mouse.x - pos.x)
            xSet(pos.x)
        })

        let direction="",
            oldx=0,
            lastCursorX=null,
            cursorThreshold=150;
        let mousemovemethod=function(e){
        }
        document.addEventListener("mousemove",mousemovemethod)
    })


    //gsap.quickSetter 호출: gsap.quickSetter 메서드를 호출하여 특정 DOM 요소의 특정 CSS 속성을 신속하게 설정할 수 있는 함수를 만듭니다.
    //quickSetter(image,"x","px")image변수의 x값을 (단위는 px) 신속하게 설정
    //xSet(100)을 호출하면 image 요소의 수평 위치가 100 픽셀로 설정됩니다.

    // function ani() {
    //     console.log("애니메이션")
    //     requestAnimationFrame(ani) //setInterval의 진화된 버전
    // }
    // ani()

    //  gsap.ticker.add()
    // 애니메이션 프레임마다 특정 요소의 속성을 업데이트하거나, 사용자 인터랙션을 실시간으로 처리하는 등의 다양한 활용이 가능합니다.


    //글자 애니
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
    let interval = null;
    let list = document.querySelectorAll('.anime-list li')
    // console.log(list) [item,item,item .... 12]
    list.forEach(function (el) {
        // el.onmouseenter=function(){}
        // el.addEventListener('mouseenter',function(){})
        el.addEventListener('mouseenter', function (event) {
            let target_element = event.target.querySelector("h2")
            let iteration = 0;
            // setInterval(할일,시간)//시간마다 할 일
            //setInterval를 멈추고 싶다면 setInterval을 변수에 할당
            // let interval=setInterval(할일,시간)
            //멈출때 clearInterval(변수)//clearInterval(interval)

            // console.log(target_element.innerT)
            // target_element.innerText='메롱'
            // console.log(target_element.dataset.value[0])
            // .map(function(item,index){ //map함수는 배열 안에 요소를 하나씩 불러서 할 일 //새로운 배열을 만든다. //item은 요소를 하나씩 받음. //index는 그 요소의 indx번호
            //     return
            // })

            // console.log(Math.random()) //0이상 1미만 사이의 부동소수점의 숫자
            let interval = setInterval(function () {
                target_element.innerText = target_element.innerText
                    .split("") //배열이 만들어짐
                    .map(function (letter, index) { //위 배열 각각 item의 할 일
                        if (index < iteration) {
                            return target_element.dataset.value[index]
                        }
                        return letters[Math.floor(Math.random() * 26)] /* floor 소수점 아래 숫자들 다 버려라 */
                    })
                    .join("") //배열이었던 글자들을 다시 글자화
                // console.log(target_element.innerText.split(""))

                if (iteration >= target_element.dataset.value.length) {
                    clearInterval(interval)
                }
                iteration += 1 / 3; //iteration=iteration + 1/3
            }, 20)
        })
    })
});