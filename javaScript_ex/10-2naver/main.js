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
    }else if(idPattern.test)
}