const canvas = document.getElementById('globe');
const ctx = canvas.getContext('2d');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const DOTS_AMOUNT = 1000;
const DOT_RADIUS = 2;
let GLOBE_RADIUS = canvas.width * 0.4;
let GLOBE_CENTER_Z = -GLOBE_RADIUS * 1.5;
let PROJECTION_CENTER_X = canvas.width / 2;
let PROJECTION_CENTER_Y = canvas.height / 2;
let FIELD_OF_VIEW = canvas.width * 0.8;

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xProject = 0;
    this.yProject = 0;
    this.sizeProjection = 0;
  }

  project(sin, cos) {
    const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
    const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
    this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
    this.xProject = rotX * this.sizeProjection + PROJECTION_CENTER_X;
    this.yProject = this.y * this.sizeProjection + PROJECTION_CENTER_Y;
  }

  draw(sin, cos) {
    this.project(sin, cos);
    ctx.beginPath();
    ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
    ctx.fill();
  }
}

function createDots() {
  const dots = [];
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(Math.random() * 2 - 1);
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = GLOBE_RADIUS * Math.cos(phi) + GLOBE_CENTER_Z;
    dots.push(new Dot(x, y, z));
  }
  return dots;
}

function render(a) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const rotation = a * 0.0004;
  const sineRotation = Math.sin(rotation);
  const cosineRotation = Math.cos(rotation);
  dots.forEach(dot => dot.draw(sineRotation, cosineRotation));
  requestAnimationFrame(render);
}

let dots = createDots();
window.addEventListener('resize', () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  GLOBE_RADIUS = canvas.width * 0.4;
  PROJECTION_CENTER_X = canvas.width / 2;
  PROJECTION_CENTER_Y = canvas.height / 2;
  FIELD_OF_VIEW = canvas.width * 0.8;
  dots = createDots();
});
requestAnimationFrame(render);
