function spline(el){
    this.el=el
    this.cursor={x:0 ,y:0}
    this.elPos() //요소의 위치를 초기화
}

//요소들의 초기 위치 값 잡기
spline.prototype.elPos=function(){
    this.x=this.el.getBoundingClientRect().left
    this.y=this.el.getBoundingClientRect().top
}

spline.prototype.setCursorPos=function(x,y){
    this.cursor.x=x
    this.cursor.y=y
    console.log(this)
    return this
}

function alignAll(x,y){
    for(let i in sp){
        sp[i].setCursorPos(x,y)
    }
}

window.addEventListener("mousemove",function(ev){
    alignAll(ev.clientX, ev.clientY)
})


let sp=[]
for(let i=0; i<180; i++ ){
    let div = document.createElement("div")
    div.className="i"+ i
    document.querySelector(".w").appendChild(div)
    sp.push(new spline(div))
}

console.log(sp)