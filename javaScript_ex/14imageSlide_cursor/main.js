let imagesSliders=document.querySelectorAll('.image-slider')
//[item, item]
imagesSliders.forEach(function(imagesSlider){
    let prev=imagesSlider.querySelector('.prev-slide')
    let next=imagesSlider.querySelector('.next-slide')
    let slideNum=imagesSlider.querySelector('.slide-num')
    let tracker=imagesSlider.querySelector('.tracker')
    let images=imagesSlider.querySelectorAll('.image-slider img')

    let slideId=0 //슬라이드 번호
    prev.addEventListener("click",function(){
        slideId --
        if(slideId<0){
            slideId = images.length -1
        }
        slideNum.innerHTML=`${slideId + 1} / ${images.length}`

        //모든 이미지 선택
        images.forEach(function(img){
            img.style.width=0
            img.style.right=0
            img.style.left="initial"
        })
        images[slideId].style.width="100%"
        images[slideId].style.right="initial"
        images[slideId].style.left="0"
    })//click함수

    next.addEventListener("click",function(){
        slideId ++
        if(slideId>images.length - 1){
            slideId = 0
        }
        slideNum.innerHTML=`${slideId + 1} / ${images.length}`

        //모든 이미지 선택
        images.forEach(function(img){
            img.style.width=0
            img.style.left=0
            img.style.right="initial"
        })
        images[slideId].style.width="100%"
        images[slideId].style.left="initial"
        images[slideId].style.right="0"
    })//click함수

    let scrllAmmount=0
    let yPos=imagesSlider.offsetTop// 문서의 top에서 선택한 영역의 top까지의 높이값



})//forEach문