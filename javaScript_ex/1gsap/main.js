

//gsap.to(뭐가,{어떻게}) //어떻게 된다
gsap.to('.하나',{x:500, rotation:90, scale:2, duration:1})

//gsap.from(뭐가,{실행문}) //시작은 실행문의 내용 도착은 원래의 위치
gsap.from('.둘',{x:700, scale:3, duration:3})

//gsap.fromTo(뭐가, {시작상태(from)},{종료상태(to)})
gsap.fromTo(
    '.셋', 
    {x:800,y:400,
        opacity:0,
        scale:1,duration:1},
    {x:200,y:0,opacity:1,scale:3,duration:3})