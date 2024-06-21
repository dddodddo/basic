/////////////////////////////////////////////////////////
import { Application } from "https://unpkg.com/@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app
  .load("https://prod.spline.design/JD4-dzrIu1TRmESN/scene.splinecode")
  .then(() => {
    let d = app.findObjectByName("d_icon");
  });

const canvas2 = document.getElementById("canvas3d2");
const app2 = new Application(canvas2);
app2.load("https://prod.spline.design/fwHLgpu-iLu4KWAY/scene.splinecode");
