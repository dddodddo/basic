

// let observer=new IntersectionObserver(callback함수,options)

let observer=new IntersectionObserver(function(entry){
  console.log(entry)
  if(entry.isIntersection){
    console.log("title이 보인다.")
  }
})

let title=document.querySelector(".title")
//관찰대상 등록
observer.observe(title)