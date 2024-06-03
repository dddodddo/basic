// let scrollHeader=function(){}
let scrollHeader=()=>{
    let header=document.querySelector("#header")
    // console.log(scrollY)
    // console.log(pageYOffset)
    //조건문? 참일 때 실행문 : 거짓일 때 실행문;
    pageYOffset>=50?
    header.classList.add("bg-header"):
    header.classList.remove("bg-header")
}
// window.addEventListener("scroll",function(){
//     scrollHeader()
// })
window.addEventListener("scroll",scrollHeader)

//배경테마변경
let themeButton=document.querySelector("#change-theme")
let iconTheme="ri-sun-line"// ri-apps-line
let darkTheme="dark-theme"
let getCurrentTheme=()=>{
    //.classList.contains(클래스명) --> 클래스명을 가지고 있는가 (true/false)
    let result= document.body.classList.contains(darkTheme)?"dark":"light";
   return result;
}
let getCurrentIcon=()=>{
    let result=themeButton.classList.contains(iconTheme)?"ri-apps-line":"ri-sun-line"
    return result
}
//웹 스토어에 값 셋팅
//localStorage.setItem(키:값) ==> 웹스토어에 값을 입력하는 방법
//localStorage.getItem(키) ==> 웹스토어에 값을 가져오는 방법
themeButton.addEventListener("click",()=>{
    //toggle 키 --> 실행과 반실행
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem("selected-theme",getCurrentTheme())
    localStorage.setItem("selected-icon",getCurrentIcon())
})


let selectedTheme=localStorage.getItem("selected-theme")
let selectedIcon=localStorage.getItem("selected-icon")
console.log(selectedTheme)

if(selectedTheme){
    if(selectedTheme == "dark"){
        document.body.classList.add(darkTheme)
    }else{
        document.body.classList.remove(darkTheme)
    }
    if(selectedIcon == "ri-apps-line"){
        themeButton.classList.add(iconTheme)
    }else{
        themeButton.classList.remove(iconTheme)
    }
}


//모바일에서 menu부분
let navToggle=document.querySelector("#nav_toggle")
let navMenu=document.querySelector("#nav_menu")
let navClose=document.querySelector("#nav_close")

navToggle.addEventListener("click",function(){
    navMenu.classList.add("show-menu")
})
navClose.addEventListener("click",function(){
    navMenu.classList.remove("show-menu")
})


//scrollup
let scrollup=()=>{
    // let scrollY=scrollY

    console.log(pageYOffset)
    let scrollup=document.querySelector("#scroll-up")
    pageYOffset>=100?
    scrollup.classList.add("show-scroll"):scrollup.classList.remove("show-scroll")
}

window.addEventListener("scroll",scrollup)