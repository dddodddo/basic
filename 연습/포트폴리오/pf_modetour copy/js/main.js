gsap.registerPlugin(ScrollTrigger)


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
function updateClock() {
  var now = new Date()
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById('hoursTens').textContent = hours[0];
  document.getElementById('hoursOnes').textContent = hours[1];
  document.getElementById('minTens').textContent = minutes[0];
  document.getElementById('minOnes').textContent = minutes[1];
  document.getElementById('secTens').textContent = seconds[0];
  document.getElementById('secOnes').textContent = seconds[1];
}
setInterval(updateClock, 1000);



////////////////////////🎁mv-video🎁////////////////////////
gsap.timeline({
  scrollTrigger: {
    trigger: ".mv",
    start:"top top",
    end:"90% top",
    scrub:2,
    duration:3,
    pinSpacing: false
  }
})
.to(".mv",{opacity:0.3,duration:100},5)
.to(".nav",{x:-30+"%",y:48+"%",duration:100},5)
.to(".logo img",{x:-67+"%",y:520+"%",scale:0.2,duration:100},5)

gsap.timeline({
  scrollTrigger: {
    trigger: ".section1",
    start:"top 10%",
    end:"top 10%",
    scrub:2,
    duration:3,
    markers: true,
    pinSpacing: false
  }
})
.to(".mv",{opacity:0,duration:100},5)
.to(".mv .nav",{x:-30+"%",y:50+"%",duration:100},5)
.to(".mv .logo img",{x:-67+"%",y:565+"%",scale:0.2,duration:100},5)

