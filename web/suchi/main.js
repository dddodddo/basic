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
    return "메롱"
}
//웹 스토어에 값 셋팅
//localStorage.setItem() ==> 웹스토어에 값을 입력하는 방법
//localStorage.getItem() ==> 웹스토어에 값을 가져오는 방법
themeButton.addEventListener("click",()=>{
    localStorage.setItem("selected-theme",getCurrentTheme())
})