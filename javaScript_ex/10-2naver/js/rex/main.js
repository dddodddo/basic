let id = document.querySelector("#id")
let error = document.querySelectorAll(".error_next_box")
console.log(error)

let pw1 = document.querySelector('#psw1')
let pwImg1 = document.querySelector('#psw1_img1')
let pwMsg = document.querySelector('#alertTxt')

let pw2 = document.querySelector('#psw2')
let pwImg2 = document.querySelector('#pswd2_img1')

let username = document.querySelector('#name')

// id.addEventListener('focusout',function(){
//     checkId()
// })
id.addEventListener('focusout', checkId)
pw1.addEventListener('focusout', checkPw)
pw2.addEventListener('focusout', comparePw)
username.addEventListener('focusout', checkName)




function checkId() {
    let idPattern = /^[a-zA-Z0-9_-]{5,20}$/
    if (id.value === "") { //id가 비어있다면
        error[0].innerHTML = "필수 정보입니다."
        error[0].style.display = "block"
        error[0].style.color = "#f00"

    } else if (!idPattern.test(id.value)) { //test --> 정규식 확인하는 함수
        error[0].innerHTML = "5~20자의 영문 소문자, 대문자, 숫자와 특수기호(_),(-)만 사용가능합니다."
        error[0].style.display = "block"
        error[0].style.color = "#f00"
    } else {
        error[0].innerHTML = "멋진 아이디입니다."
        error[0].style.display = "block"
        error[0].style.color = "#80a600"
    }
}

function checkPw() {
    let pwPattern = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}$/
    console.log(pwPattern.test(pw1.value))
    if (pw1.value === "") {
        error[1].innerHTML = `필수 정보입니다.`
        error[1].style.display = "block"
        pwMsg[1].style.display = "none"
        pwImg1.src="img/m_icon_not_use.png"
    }else if(!pwPattern.test(pw1.value)){
        error[1].innerHTML = `8~16자 영문, 대소문자, 숫자, 특수문자를 사용하세요`
        error[1].style.display = "block"
        pwMsg.innerHTML= "사용불가"
        pwMsg.style.display= "block"
        pwMsg.style.color= "#f00"
        pwImg1.src="img/m_icon_not_use.png"
    }else{
        error[1].style.display = "none"
        pwMsg.innerHTML= "안전"
        pwMsg.style.display= "block"
        pwMsg.style.color= "#03c75a"
        pwImg1.src="img/m_icon_safe.png"
    }
}

function comparePw(){
    if(pw1.value === pw2.value && pw2.value !== ""){
        pwImg2.src="./img/m_icon_check_enable.png"
        error[2].style.display="none"
    }else if(pw1.value !== pw2.value){
        pwImg2.src="./img/m_icon_check_disable.png"
        error[2].style.display="block"
        error[2].innerHTML="비밀번호가 일치하지 않습니다."
    }
    if(pw2.value === ""){
        error[2].style.display="block"
        error[2].innerHTML="필수 정보입니다."
    }
}


function checkName(){
    let namePattern = /^[a-zA-Z가-힣]*$/
    console.log(namePattern.test(username.value))
}