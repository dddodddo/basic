//작은 이미지들 가져오기
let imgs=document.querySelectorAll(".small_img")

// for(let i=0; i<imgs.length; i++){
//     imgs[i].addEventListener("click",function(){
//         console.log(this.getAttribute("data-image"))
//         document.querySelector('#big_img').src=this.getAttribute("data-image")
        

//     })
// }

//forEach() 메서드 사용 [item,item,item]
// imgs.forEach(function(a,b,c){
//     a: 배열 요소들을 순서대로 가져옴
//     b: 순서대로 들어온 a의 인덱스 번호
//     c: 배열 자체
// });

imgs.forEach(function(elem){
        elem.addEventListener('click',function(){
            //data-image
            // console.log(this.getAttribute('data-image'))
            // console.log(this.dataset.image)
            //document.querySelector('#big_img').src=this.dataset.image
            document.querySelector('#big_img').setAttribute("src",this.dataset.image)
        })
    });

