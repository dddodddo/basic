// color  #00A87F
// color: rgb(153, 153, 153)

////////////////////////🎁search icon🎁////////////////////////
$(function () {
    let Icon = $(".fa-search")
    Icon.click(function () {
        let currentColor = $(this).css('color')
        Icon.css("color", "rgb(153, 153, 153)")
        if (currentColor == "rgb(153, 153, 153)") {
            $(this).css("color", "#00A87F")
        }
    })
})



////////////////////////🎁clock🎁////////////////////////
// setInterval(()=>{
//     let today=new Date()
//     let hh=addZero(today.getHours())
//     let mm=addZero(today.getMinutes())
//     let ss=addZero(today.getSeconds())
    

//     document.querySelector('#hours').innerHTML=hh
//     document.querySelector('#min').innerHTML=mm
//     document.querySelector('#sec').innerHTML=ss


//     function addZero(num){
//         return(num<10?"0"+num:num)
//     }
// }, 1000)
function updateClock(){
    var now = new Date()
    var hours=String(now.getHours()).padStart(2,"0");
    var minutes=String(now.getMinutes()).padStart(2,"0");
    var seconds=String(now.getSeconds()).padStart(2,"0");

    document.getElementById('hoursTens').textContent = hours[0];
    document.getElementById('hoursOnes').textContent = hours[1];
    document.getElementById('minTens').textContent = minutes[0];
    document.getElementById('minOnes').textContent = minutes[1];
    document.getElementById('secTens').textContent = seconds[0];
    document.getElementById('secOnes').textContent = seconds[1];
}
setInterval(updateClock, 1000);