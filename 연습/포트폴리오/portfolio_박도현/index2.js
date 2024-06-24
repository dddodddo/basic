import "./lottie-abfc99cb.js";
import "./_commonjsHelpers-725317a4.js";
const d = { timeout: 1e4, onlyFirstLoad: !0 };
class l {
  constructor() {
    (this.total = 0), (this.remaining = 0);
  }
  get any() {
    return this.remaining > 0;
  }
  get percent() {
    return this.total === 0 ? 1 : 1 - this.remaining / this.total;
  }
  reset() {
    (this.total = 0), (this.remaining = 0);
  }
  add(e) {
    const s = e || 1;
    (this.total += s), (this.remaining += s);
  }
  remove(e) {
    const s = e || 1;
    this.remaining -= s;
  }
}
let r = !1;
const o = {
  ...d,
  state: {
    startedAt: 0,
    leavingAt: 0,
    isAnimating: !1,
    scriptReady: !1,
    isFirstLoad: !0,
    img: new l(),
    module: new l(),
    progress: 0,
  },
  el: null,
  elProg: null,
  cssVariable: "--percentage",
  cssVariable2: "--percentage2",
  _dataLoad: "loading",
  set dataLoad(t) {
    (this._dataLoad = t),
      (document.body.dataset.load = this.state.isFirstLoad ? "first-" + t : t);
  },
  get dataLoad() {
    return this._dataLoad;
  },
  leavingDuration: 1e3,
  fakeProgressMaxDuration: 1e4,
  fakeProgressMinDuration: 0,
  init(t, e) {
    (this.el = document.querySelector(t)),
      (this.elProg = document.querySelector(e)),
      (this.state.startedAt = performance.now()),
      this.showLoader();
  },
  handleEvent(t) {
    switch (t.type) {
      case "readystatechange":
        document.readyState != "loading" &&
          !r &&
          this.init("body", "[data-load-progress]"),
          (r = !0);
        break;
      case "pjax:complete":
        (this.state.isFirstLoad = !1), this.showLoader();
        break;
    }
  },
  registerEvents() {
    document.addEventListener("readystatechange", this),
      document.addEventListener("pjax:complete", this);
  },
  cleanState() {
    const t = this.state;
    (t.isAnimating = !1),
      (t.progress = 0),
      (t.startedAt = null),
      (t.leavingAt = null),
      t.img.reset(),
      t.module.reset();
  },
  isLoadComplete(t) {
    const e = this.state;
    return e.scriptReady && !e.img.any && !e.module.any
      ? !0
      : t > e.startedAt + d.timeout;
  },
  findPreloads() {
    const t = this.state,
      e = Array.from(document.querySelectorAll("img[data-preload]")).filter(
        (s) => s instanceof HTMLImageElement && !s.complete
      );
    (t.img.total = e.length),
      (t.img.remaining = e.length),
      e.forEach((s) => {
        let a = !1;
        s.addEventListener(
          "load",
          () => {
            (s.dataset.loaded = !0), a || t.img.remaining--, (a = !0);
          },
          { once: !0 }
        ),
          s.addEventListener(
            "error",
            () => {
              (s.dataset.loaded = !0), a || t.img.remaining--, (a = !0);
            },
            { once: !0 }
          );
      });
  },
  findVideoPreloads() {
    this.state,
      document.querySelectorAll("video[data-preload]").forEach((e) => {
        u(e);
      });
  },
  showLoader() {
    const t = performance.now();
    if (!this.state.isFirstLoad && (this.cleanState(), this.onlyFirstLoad))
      return;
    this.findPreloads(), this.findVideoPreloads();
    const e = this.isLoadComplete(t);
    if (this.state.isFirstLoad) {
      if (e) {
        if (this.onFirstLeaving() || this.onFirstDone()) return;
        this.dataLoad = "done";
        return;
      }
    } else if (this.onLoading()) return;
    if (e) {
      this.dataLoad != "done" && (this.dataLoad = "done");
      return;
    }
    (this.dataLoad = "loading"), (this.state.startedAt = t), this.animate(t);
  },
  animate(t) {
    const e = this.dataLoad,
      s = this.isLoadComplete(performance.now()),
      a = this.state,
      n = requestAnimationFrame((i) => this.animate(i));
    if (!s) {
      let i = (t - a.startedAt) / (a.startedAt + this.fakeProgressMaxDuration);
      i > 1 && (i = 1);
      let h =
        a.img.percent * 0.6 + (a.scriptReady ? a.module.percent * 0.4 : 0);
      this.changeProgress(Math.ceil(100 * (i * 0.65 + h * 0.35)));
      return;
    }
    if (a.progress < 100) {
      a.progress < 80 && (a.progress += 5), this.changeProgress(++a.progress);
      return;
    }
    if (
      e == "loading" &&
      ((this.dataLoad = "leaving"),
      (this.state.leavingAt = t),
      (a.isFirstLoad && this.onFirstLeaving()) ||
        (!a.isFirstLoad && this.onLeaving()))
    ) {
      cancelAnimationFrame(n);
      return;
    }
    t < a.leavingAt + this.leavingDuration ||
      (cancelAnimationFrame(n),
      (this.dataLoad = "done"),
      a.isFirstLoad ? this.onFirstDone() : this.onDone());
  },
  changeProgress(t) {
    (this.state.progress = t),
      this.el.style.setProperty(this.cssVariable, t / 100),
      this.el.style.setProperty(this.cssVariable2, t + "%"),
      this.elProg && (this.elProg.dataset.loadProgress = t);
  },
  onFirstLeaving() {
    return !1;
  },
  onFirstDone() {
    return !1;
  },
  onLoading() {
    return !1;
  },
  onLeaving() {
    return !1;
  },
  onDone() {
    return !1;
  },
};
function u(t) {
  var e = new XMLHttpRequest();
  e.open("GET", t.dataset.src, !0),
    (e.responseType = "blob"),
    (e.onload = function () {
      if (this.status === 200) {
        var s = this.response,
          a = URL.createObjectURL(s);
        (t.src = a),
          (video_loaded = !0),
          (t.dataset.loaded = !0),
          "autoplay" in t.dataset &&
            setTimeout(() => {
              t.play();
            }, 100);
      }
      videoLoaded = !0;
    }),
    (e.onerror = function () {
      video_loaded = !0;
    }),
    e.send();
}
window.loader = o;
o.registerEvents();
document.readyState != "loading" &&
  ((r = !0), o.init("body", "[data-load-progress]"));
