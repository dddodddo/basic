gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

/////////////////////////////////////////////////////////

var ripple6 = new RippleEffect({
  parent: document.querySelector('.div5'),
  texture: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Daniele_Levis_Pelusi_2017-03-04_%28Unsplash%29.jpg',
  intensity: 1.2,
  strength: .2,
  waveSpeed: 0.002,
  hover: false //false
});
document.querySelector('.start').addEventListener('click', ripple6.start);
document.querySelector('.start').click()
document.querySelector('.stop').addEventListener('click', ripple6.stop);