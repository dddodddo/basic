let id=document.querySelector("#id")
let error=document.querySelector(".error_next_box")

// id.addEventListener('focusout',function(){
//     checkId()
// })
id.addEventListener('focusout',checkId)

function checkId(){
    let idPattern=/^[a-zA-Z0-9_-]{5,20}$/
}