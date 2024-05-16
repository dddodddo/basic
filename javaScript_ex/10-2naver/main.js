let id=document.querySelector("#id")
let error=document.querySelectorAll(".error_next_box")
console.log(error)
// id.addEventListener('focusout',function(){
//     checkId()
// })
id.addEventListener('focusout',checkId)

function checkId(){
    let idPattern=/^[a-zA-Z0-9_-]{5,20}$/
    if(id.value===""){//id가 비어있다면
        error[0].innerHTML="필수 정보입니다."
        error[0].style.display="block"
        error[0].style.color="#f00"

    }else if(!idPattern.test(id.value)){ //test --> 정규식 확인하는 함수
        error[0].innerHTML="5~20자의 영문 소문자, 대문자, 숫자와 특수기호(_),(-)만 사용가능합니다."
        error[0].style.display="block"
        error[0].style.color="#f00"
    }else{
        error[0].innerHTML="멋진 아이디입니다."
        error[0].style.display="block"
        error[0].style.color="#80a600"
    }
}