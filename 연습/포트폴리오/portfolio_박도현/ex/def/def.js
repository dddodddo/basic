var U_ = (n, e) => () => (e || n((e = {
  exports: {}
}).exports, e), e.exports);
import {
  g as ac,
  c as to
} from "./_commonjsHelpers-725317a4.js";
import "./modal-99962b9b.js";
import "./lottie-abfc99cb.js";
var rO = U_((cO, Fl) => {
  if (VARS.analytics) {
    let n = function () {
      ga("set", "location", window.location.href), ga("send", "pageview")
    };
    (function (e, t, i, r, s, o, a) {
      e.GoogleAnalyticsObject = s, e[s] = e[s] || function () {
        (e[s].q = e[s].q || []).push(arguments)
      }, e[s].l = 1 * new Date, o = t.createElement(i), a = t.getElementsByTagName(i)[0], o.async = 1, o.src = r, a.parentNode.insertBefore(o, a)
    })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", VARS.analytics, "auto"), ga("send", "pageview"), document.addEventListener("pjax:end", n)
  }
  if (VARS.gtag) {
    let n = function () {
      gtag("event", "pageview", {
        page_path: location.pathname + location.search + location.hash
      })
    };
    document.addEventListener("pjax:end", n)
  }

  function ir(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n
  }

  function fm(n, e) {
    n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.__proto__ = e
  }
  /*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var Zi = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    fo = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    Ad, pi, Nt, dn = 1e8,
    pt = 1 / dn,
    Vu = Math.PI * 2,
    B_ = Vu / 4,
    G_ = 0,
    hm = Math.sqrt,
    X_ = Math.cos,
    Z_ = Math.sin,
    si = function (e) {
      return typeof e == "string"
    },
    zt = function (e) {
      return typeof e == "function"
    },
    pr = function (e) {
      return typeof e == "number"
    },
    Ld = function (e) {
      return typeof e > "u"
    },
    Wn = function (e) {
      return typeof e == "object"
    },
    Fi = function (e) {
      return e !== !1
    },
    Rd = function () {
      return typeof window < "u"
    },
    za = function (e) {
      return zt(e) || si(e)
    },
    pm = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {},
    mi = Array.isArray,
    Uu = /(?:-?\.?\d|\.)+/gi,
    mm = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Xs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Vc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    gm = /[+-]=-?[.\d]+/,
    vm = /[^,'"\[\]\s]+/gi,
    K_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Dt, an, Bu, Id, Ki = {},
    Nl = {},
    ym, bm = function (e) {
      return (Nl = ys(e, Ki)) && ei
    },
    Yd = function (e, t) {
      return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    zl = function (e, t) {
      return !t && console.warn(e)
    },
    _m = function (e, t) {
      return e && (Ki[e] = t) && Nl && (Nl[e] = t) || Ki
    },
    la = function () {
      return 0
    },
    Q_ = {
      suppressEvents: !0,
      isStart: !0,
      kill: !1
    },
    wl = {
      suppressEvents: !0,
      kill: !1
    },
    J_ = {
      suppressEvents: !0
    },
    Fd = {},
    Ir = [],
    Gu = {},
    wm, Vi = {},
    Uc = {},
    gh = 30,
    Sl = [],
    Nd = "",
    zd = function (e) {
      var t = e[0],
        i, r;
      if (Wn(t) || zt(t) || (e = [e]), !(i = (t._gsap || {}).harness)) {
        for (r = Sl.length; r-- && !Sl[r].targetTest(t););
        i = Sl[r]
      }
      for (r = e.length; r--;) e[r] && (e[r]._gsap || (e[r]._gsap = new Vm(e[r], i))) || e.splice(r, 1);
      return e
    },
    cs = function (e) {
      return e._gsap || zd(fn(e))[0]._gsap
    },
    Sm = function (e, t, i) {
      return (i = e[t]) && zt(i) ? e[t]() : Ld(i) && e.getAttribute && e.getAttribute(t) || i
    },
    Ni = function (e, t) {
      return (e = e.split(",")).forEach(t) || e
    },
    qt = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0
    },
    ai = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0
    },
    io = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return e = parseFloat(e), i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
    },
    e1 = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i;);
      return r < i
    },
    Hl = function () {
      var e = Ir.length,
        t = Ir.slice(0),
        i, r;
      for (Gu = {}, Ir.length = 0, i = 0; i < e; i++) r = t[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    },
    xm = function (e, t, i, r) {
      Ir.length && !pi && Hl(), e.render(t, i, r || pi && t < 0 && (e._initted || e._startAt)), Ir.length && !pi && Hl()
    },
    Tm = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(vm).length < 2 ? t : si(e) ? e.trim() : e
    },
    Mm = function (e) {
      return e
    },
    mn = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e
    },
    t1 = function (e) {
      return function (t, i) {
        for (var r in i) r in t || r === "duration" && e || r === "ease" || (t[r] = i[r])
      }
    },
    ys = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e
    },
    vh = function n(e, t) {
      for (var i in t) i !== "__proto__" && i !== "constructor" && i !== "prototype" && (e[i] = Wn(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e
    },
    Wl = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i
    },
    Uo = function (e) {
      var t = e.parent || Dt,
        i = e.keyframes ? t1(mi(e.keyframes)) : mn;
      if (Fi(e.inherit))
        for (; t;) i(e, t.vars.defaults), t = t.parent || t._dp;
      return e
    },
    i1 = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i];);
      return i < 0
    },
    km = function (e, t, i, r, s) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var o = e[r],
        a;
      if (s)
        for (a = t[s]; o && o[s] > a;) o = o._prev;
      return o ? (t._next = o._next, o._next = t) : (t._next = e[i], e[i] = t), t._next ? t._next._prev = t : e[r] = t, t._prev = o, t.parent = t._dp = e, t
    },
    lc = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        o = t._next;
      s ? s._next = o : e[i] === t && (e[i] = o), o ? o._prev = s : e[r] === t && (e[r] = s), t._next = t._prev = t.parent = null
    },
    Hr = function (e, t) {
      e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    us = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i;) i._dirty = 1, i = i.parent;
      return e
    },
    n1 = function (e) {
      for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
      return e
    },
    Xu = function (e, t, i, r) {
      return e._startAt && (pi ? e._startAt.revert(wl) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, r))
    },
    r1 = function n(e) {
      return !e || e._ts && n(e.parent)
    },
    yh = function (e) {
      return e._repeat ? ho(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    ho = function (e, t) {
      var i = Math.floor(e /= t);
      return e && i === e ? i - 1 : i
    },
    jl = function (e, t) {
      return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    cc = function (e) {
      return e._end = ai(e._start + (e._tDur / Math.abs(e._ts || e._rts || pt) || 0))
    },
    uc = function (e, t) {
      var i = e._dp;
      return i && i.smoothChildTiming && e._ts && (e._start = ai(i._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), cc(e), i._dirty || us(i, e)), e
    },
    Pm = function (e, t) {
      var i;
      if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (i = jl(e.rawTime(), t), (!t._dur || Sa(0, t.totalDuration(), i) - t._tTime > pt) && t.render(i, !0)), us(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
          for (i = e; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
        e._zTime = -pt
      }
    },
    An = function (e, t, i, r) {
      return t.parent && Hr(t), t._start = ai((pr(i) ? i : i || e !== Dt ? on(e, i, t) : e._time) + t._delay), t._end = ai(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), km(e, t, "_first", "_last", e._sort ? "_start" : 0), Zu(t) || (e._recent = t), r || Pm(e, t), e._ts < 0 && uc(e, e._tTime), e
    },
    Em = function (e, t) {
      return (Ki.ScrollTrigger || Yd("scrollTrigger", t)) && Ki.ScrollTrigger.create(t, e)
    },
    Om = function (e, t, i, r, s) {
      if (Wd(e, t, s), !e._initted) return 1;
      if (!i && e._pt && !pi && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && wm !== Gi.frame) return Ir.push(e), e._lazy = [s, r], 1
    },
    s1 = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t))
    },
    Zu = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart"
    },
    o1 = function (e, t, i, r) {
      var s = e.ratio,
        o = t < 0 || !t && (!e._start && s1(e) && !(!e._initted && Zu(e)) || (e._ts < 0 || e._dp._ts < 0) && !Zu(e)) ? 0 : 1,
        a = e._rDelay,
        c = 0,
        u, f, h;
      if (a && e._repeat && (c = Sa(0, e._tDur, t), f = ho(c, a), e._yoyo && f & 1 && (o = 1 - o), f !== ho(e._tTime, a) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || pi || r || e._zTime === pt || !t && e._zTime) {
        if (!e._initted && Om(e, t, r, i, c)) return;
        for (h = e._zTime, e._zTime = t || (i ? pt : 0), i || (i = t && !h), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = c, u = e._pt; u;) u.r(o, u.d), u = u._next;
        t < 0 && Xu(e, t, i, !0), e._onUpdate && !i && hn(e, "onUpdate"), c && e._repeat && !i && e.parent && hn(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Hr(e, 1), !i && !pi && (hn(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
      } else e._zTime || (e._zTime = t)
    },
    a1 = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i;) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next
        } else
          for (r = e._last; r && r._start >= i;) {
            if (r.data === "isPause" && r._start < t) return r;
            r = r._prev
          }
    },
    po = function (e, t, i, r) {
      var s = e._repeat,
        o = ai(t) || 0,
        a = e._tTime / e._tDur;
      return a && !r && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : ai(o * (s + 1) + e._rDelay * s) : o, a > 0 && !r && uc(e, e._tTime = e._tDur * a), e.parent && cc(e), i || us(e.parent, e), e
    },
    bh = function (e) {
      return e instanceof Ii ? us(e) : po(e, e._dur)
    },
    l1 = {
      _start: 0,
      endTime: la,
      totalDuration: la
    },
    on = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || l1,
        o = e.duration() >= dn ? s.endTime(!1) : e._dur,
        a, c, u;
      return si(t) && (isNaN(t) || t in r) ? (c = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), c === "<" || c === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (c === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? s : i).totalDuration() / 100 : 1)) : a < 0 ? (t in r || (r[t] = o), r[t]) : (c = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && i && (c = c / 100 * (mi(i) ? i[0] : i).totalDuration()), a > 1 ? n(e, t.substr(0, a - 1), i) + c : o + c)) : t == null ? o : +t
    },
    Bo = function (e, t, i) {
      var r = pr(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a, c;
      if (r && (o.duration = t[1]), o.parent = i, e) {
        for (a = o, c = i; c && !("immediateRender" in a);) a = c.vars.defaults || {}, c = Fi(c.vars.inherit) && c.parent;
        o.immediateRender = Fi(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[s - 1]
      }
      return new Gt(t[0], o, t[s + 1])
    },
    qr = function (e, t) {
      return e || e === 0 ? t(e) : t
    },
    Sa = function (e, t, i) {
      return i < e ? e : i > t ? t : i
    },
    hi = function (e, t) {
      return !si(e) || !(t = K_.exec(e)) ? "" : t[1]
    },
    c1 = function (e, t, i) {
      return qr(i, function (r) {
        return Sa(e, t, r)
      })
    },
    Ku = [].slice,
    Cm = function (e, t) {
      return e && Wn(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Wn(e[0])) && !e.nodeType && e !== an
    },
    u1 = function (e, t, i) {
      return i === void 0 && (i = []), e.forEach(function (r) {
        var s;
        return si(r) && !t || Cm(r, 1) ? (s = i).push.apply(s, fn(r)) : i.push(r)
      }) || i
    },
    fn = function (e, t, i) {
      return Nt && !t && Nt.selector ? Nt.selector(e) : si(e) && !i && (Bu || !mo()) ? Ku.call((t || Id).querySelectorAll(e), 0) : mi(e) ? u1(e, i) : Cm(e) ? Ku.call(e, 0) : e ? [e] : []
    },
    Qu = function (e) {
      return e = fn(e)[0] || zl("Invalid scope") || {},
        function (t) {
          var i = e.current || e.nativeElement || e;
          return fn(t, i.querySelectorAll ? i : i === e ? zl("Invalid scope") || Id.createElement("div") : e)
        }
    },
    Dm = function (e) {
      return e.sort(function () {
        return .5 - Math.random()
      })
    },
    Am = function (e) {
      if (zt(e)) return e;
      var t = Wn(e) ? e : {
          each: e
        },
        i = ds(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        c = isNaN(r) || a,
        u = t.axis,
        f = r,
        h = r;
      return si(r) ? f = h = {
          center: .5,
          edges: .5,
          end: 1
        } [r] || 0 : !a && c && (f = r[0], h = r[1]),
        function (p, m, g) {
          var y = (g || t).length,
            w = o[y],
            S, T, M, k, E, O, P, R, L;
          if (!w) {
            if (L = t.grid === "auto" ? 0 : (t.grid || [1, dn])[1], !L) {
              for (P = -dn; P < (P = g[L++].getBoundingClientRect().left) && L < y;);
              L--
            }
            for (w = o[y] = [], S = c ? Math.min(L, y) * f - .5 : r % L, T = L === dn ? 0 : c ? y * h / L - .5 : r / L | 0, P = 0, R = dn, O = 0; O < y; O++) M = O % L - S, k = T - (O / L | 0), w[O] = E = u ? Math.abs(u === "y" ? k : M) : hm(M * M + k * k), E > P && (P = E), E < R && (R = E);
            r === "random" && Dm(w), w.max = P - R, w.min = R, w.v = y = (parseFloat(t.amount) || parseFloat(t.each) * (L > y ? y - 1 : u ? u === "y" ? y / L : L : Math.max(L, y / L)) || 0) * (r === "edges" ? -1 : 1), w.b = y < 0 ? s - y : s, w.u = hi(t.amount || t.each) || 0, i = i && y < 0 ? jm(i) : i
          }
          return y = (w[p] - w.min) / w.max || 0, ai(w.b + (i ? i(y) : y) * w.v) + w.u
        }
    },
    Ju = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = ai(Math.round(parseFloat(i) / e) * e * t);
        return (r - r % 1) / t + (pr(i) ? 0 : hi(i))
      }
    },
    Lm = function (e, t) {
      var i = mi(e),
        r, s;
      return !i && Wn(e) && (r = i = e.radius || dn, e.values ? (e = fn(e.values), (s = !pr(e[0])) && (r *= r)) : e = Ju(e.increment)), qr(t, i ? zt(e) ? function (o) {
        return s = e(o), Math.abs(s - o) <= r ? s : o
      } : function (o) {
        for (var a = parseFloat(s ? o.x : o), c = parseFloat(s ? o.y : 0), u = dn, f = 0, h = e.length, p, m; h--;) s ? (p = e[h].x - a, m = e[h].y - c, p = p * p + m * m) : p = Math.abs(e[h] - a), p < u && (u = p, f = h);
        return f = !r || u <= r ? e[f] : o, s || f === o || pr(o) ? f : f + hi(o)
      } : Ju(e))
    },
    Rm = function (e, t, i, r) {
      return qr(mi(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return mi(e) ? e[~~(Math.random() * e.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((e - i / 2 + Math.random() * (t - e + i * .99)) / i) * i * r) / r
      })
    },
    d1 = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, o) {
          return o(s)
        }, r)
      }
    },
    f1 = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || hi(i))
      }
    },
    h1 = function (e, t, i) {
      return Ym(e, t, 0, 1, i)
    },
    Im = function (e, t, i) {
      return qr(i, function (r) {
        return e[~~t(r)]
      })
    },
    p1 = function n(e, t, i) {
      var r = t - e;
      return mi(e) ? Im(e, n(0, e.length), t) : qr(i, function (s) {
        return (r + (s - e) % r) % r + e
      })
    },
    m1 = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return mi(e) ? Im(e, n(0, e.length - 1), t) : qr(i, function (o) {
        return o = (s + (o - e) % s) % s || 0, e + (o > r ? s - o : o)
      })
    },
    ca = function (e) {
      for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t));) o = e.indexOf(")", r), a = e.charAt(r + 7) === "[", s = e.substr(r + 7, o - r - 7).match(a ? vm : Uu), i += e.substr(t, r - t) + Rm(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5), t = o + 1;
      return i + e.substr(t, e.length - t)
    },
    Ym = function (e, t, i, r, s) {
      var o = t - e,
        a = r - i;
      return qr(s, function (c) {
        return i + ((c - e) / o * a || 0)
      })
    },
    g1 = function n(e, t, i, r) {
      var s = isNaN(e + t) ? 0 : function (m) {
        return (1 - m) * e + m * t
      };
      if (!s) {
        var o = si(e),
          a = {},
          c, u, f, h, p;
        if (i === !0 && (r = 1) && (i = null), o) e = {
          p: e
        }, t = {
          p: t
        };
        else if (mi(e) && !mi(t)) {
          for (f = [], h = e.length, p = h - 2, u = 1; u < h; u++) f.push(n(e[u - 1], e[u]));
          h--, s = function (g) {
            g *= h;
            var y = Math.min(p, ~~g);
            return f[y](g - y)
          }, i = t
        } else r || (e = ys(mi(e) ? [] : {}, e));
        if (!f) {
          for (c in t) Hd.call(a, e, c, "get", t[c]);
          s = function (g) {
            return $d(g, a) || (o ? e.p : e)
          }
        }
      }
      return qr(i, s)
    },
    _h = function (e, t, i) {
      var r = e.labels,
        s = dn,
        o, a, c;
      for (o in r) a = r[o] - t, a < 0 == !!i && a && s > (a = Math.abs(a)) && (c = o, s = a);
      return c
    },
    hn = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        o = Nt,
        a = e._ctx,
        c, u, f;
      if (s) return c = r[t + "Params"], u = r.callbackScope || e, i && Ir.length && Hl(), a && (Nt = a), f = c ? s.apply(u, c) : s.call(u), Nt = o, f
    },
    No = function (e) {
      return Hr(e), e.scrollTrigger && e.scrollTrigger.kill(!!pi), e.progress() < 1 && hn(e, "onInterrupt"), e
    },
    Zs, Fm = [],
    Nm = function (e) {
      if (Rd() && e) {
        e = !e.name && e.default || e;
        var t = e.name,
          i = zt(e),
          r = t && !i && e.init ? function () {
            this._props = []
          } : e,
          s = {
            init: la,
            render: $d,
            add: Hd,
            kill: A1,
            modifier: D1,
            rawVars: 0
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: qd,
            aliases: {},
            register: 0
          };
        if (mo(), e !== r) {
          if (Vi[t]) return;
          mn(r, mn(Wl(e, s), o)), ys(r.prototype, ys(s, Wl(e, o))), Vi[r.prop = t] = r, e.targetTest && (Sl.push(r), Fd[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        _m(t, r), e.register && e.register(ei, r, zi)
      } else e && Fm.push(e)
    },
    ft = 255,
    zo = {
      aqua: [0, ft, ft],
      lime: [0, ft, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ft],
      navy: [0, 0, 128],
      white: [ft, ft, ft],
      olive: [128, 128, 0],
      yellow: [ft, ft, 0],
      orange: [ft, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ft, 0, 0],
      pink: [ft, 192, 203],
      cyan: [0, ft, ft],
      transparent: [ft, ft, ft, 0]
    },
    Bc = function (e, t, i) {
      return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (i - t) * e * 6 : e < .5 ? i : e * 3 < 2 ? t + (i - t) * (2 / 3 - e) * 6 : t) * ft + .5 | 0
    },
    zm = function (e, t, i) {
      var r = e ? pr(e) ? [e >> 16, e >> 8 & ft, e & ft] : 0 : zo.black,
        s, o, a, c, u, f, h, p, m, g;
      if (!r) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), zo[e]) r = zo[e];
        else if (e.charAt(0) === "#") {
          if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return r = parseInt(e.substr(1, 6), 16), [r >> 16, r >> 8 & ft, r & ft, parseInt(e.substr(7), 16) / 255];
          e = parseInt(e.substr(1), 16), r = [e >> 16, e >> 8 & ft, e & ft]
        } else if (e.substr(0, 3) === "hsl") {
          if (r = g = e.match(Uu), !t) c = +r[0] % 360 / 360, u = +r[1] / 100, f = +r[2] / 100, o = f <= .5 ? f * (u + 1) : f + u - f * u, s = f * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = Bc(c + 1 / 3, s, o), r[1] = Bc(c, s, o), r[2] = Bc(c - 1 / 3, s, o);
          else if (~e.indexOf("=")) return r = e.match(mm), i && r.length < 4 && (r[3] = 1), r
        } else r = e.match(Uu) || zo.transparent;
        r = r.map(Number)
      }
      return t && !g && (s = r[0] / ft, o = r[1] / ft, a = r[2] / ft, h = Math.max(s, o, a), p = Math.min(s, o, a), f = (h + p) / 2, h === p ? c = u = 0 : (m = h - p, u = f > .5 ? m / (2 - h - p) : m / (h + p), c = h === s ? (o - a) / m + (o < a ? 6 : 0) : h === o ? (a - s) / m + 2 : (s - o) / m + 4, c *= 60), r[0] = ~~(c + .5), r[1] = ~~(u * 100 + .5), r[2] = ~~(f * 100 + .5)), i && r.length < 4 && (r[3] = 1), r
    },
    Hm = function (e) {
      var t = [],
        i = [],
        r = -1;
      return e.split(Yr).forEach(function (s) {
        var o = s.match(Xs) || [];
        t.push.apply(t, o), i.push(r += o.length + 1)
      }), t.c = i, t
    },
    wh = function (e, t, i) {
      var r = "",
        s = (e + r).match(Yr),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        c, u, f, h;
      if (!s) return e;
      if (s = s.map(function (p) {
          return (p = zm(p, t, 1)) && o + (t ? p[0] + "," + p[1] + "%," + p[2] + "%," + p[3] : p.join(",")) + ")"
        }), i && (f = Hm(e), c = i.c, c.join(r) !== f.c.join(r)))
        for (u = e.replace(Yr, "1").split(Xs), h = u.length - 1; a < h; a++) r += u[a] + (~c.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (f.length ? f : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(Yr), h = u.length - 1; a < h; a++) r += u[a] + s[a];
      return r + u[h]
    },
    Yr = function () {
      var n = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in zo) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi")
    }(),
    v1 = /hsl[a]?\(/,
    Wm = function (e) {
      var t = e.join(" "),
        i;
      if (Yr.lastIndex = 0, Yr.test(t)) return i = v1.test(t), e[1] = wh(e[1], i), e[0] = wh(e[0], i, Hm(e[1])), !0
    },
    ua, Gi = function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        o = s,
        a = [],
        c, u, f, h, p, m, g = function y(w) {
          var S = n() - r,
            T = w === !0,
            M, k, E, O;
          if (S > e && (i += S - t), r += S, E = r - i, M = E - o, (M > 0 || T) && (O = ++h.frame, p = E - h.time * 1e3, h.time = E = E / 1e3, o += M + (M >= s ? 4 : s - M), k = 1), T || (c = u(y)), k)
            for (m = 0; m < a.length; m++) a[m](E, p, O, w)
        };
      return h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0)
        },
        deltaRatio: function (w) {
          return p / (1e3 / (w || 60))
        },
        wake: function () {
          ym && (!Bu && Rd() && (an = Bu = window, Id = an.document || {}, Ki.gsap = ei, (an.gsapVersions || (an.gsapVersions = [])).push(ei.version), bm(Nl || an.GreenSockGlobals || !an.gsap && an || {}), f = an.requestAnimationFrame, Fm.forEach(Nm)), c && h.sleep(), u = f || function (w) {
            return setTimeout(w, o - h.time * 1e3 + 1 | 0)
          }, ua = 1, g(2))
        },
        sleep: function () {
          (f ? an.cancelAnimationFrame : clearTimeout)(c), ua = 0, u = la
        },
        lagSmoothing: function (w, S) {
          e = w || 1 / 0, t = Math.min(S || 33, e)
        },
        fps: function (w) {
          s = 1e3 / (w || 240), o = h.time * 1e3 + s
        },
        add: function (w, S, T) {
          var M = S ? function (k, E, O, P) {
            w(k, E, O, P), h.remove(M)
          } : w;
          return h.remove(w), a[T ? "unshift" : "push"](M), mo(), M
        },
        remove: function (w, S) {
          ~(S = a.indexOf(w)) && a.splice(S, 1) && m >= S && m--
        },
        _listeners: a
      }, h
    }(),
    mo = function () {
      return !ua && Gi.wake()
    },
    Ue = {},
    y1 = /^[\d.\-M][\d.\-,\s]/,
    b1 = /["']/g,
    _1 = function (e) {
      for (var t = {}, i = e.substr(1, e.length - 3).split(":"), r = i[0], s = 1, o = i.length, a, c, u; s < o; s++) c = i[s], a = s !== o - 1 ? c.lastIndexOf(",") : c.length, u = c.substr(0, a), t[r] = isNaN(u) ? u.replace(b1, "").trim() : +u, r = c.substr(a + 1).trim();
      return t
    },
    w1 = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i)
    },
    S1 = function (e) {
      var t = (e + "").split("("),
        i = Ue[t[0]];
      return i && t.length > 1 && i.config ? i.config.apply(null, ~e.indexOf("{") ? [_1(t[1])] : w1(e).split(",").map(Tm)) : Ue._CE && y1.test(e) ? Ue._CE("", e) : i
    },
    jm = function (e) {
      return function (t) {
        return 1 - e(1 - t)
      }
    },
    qm = function n(e, t) {
      for (var i = e._first, r; i;) i instanceof Ii ? n(i, t) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== t && (i.timeline ? n(i.timeline, t) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = t)), i = i._next
    },
    ds = function (e, t) {
      return e && (zt(e) ? e : Ue[e] || S1(e)) || t
    },
    Ms = function (e, t, i, r) {
      i === void 0 && (i = function (c) {
        return 1 - t(1 - c)
      }), r === void 0 && (r = function (c) {
        return c < .5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2
      });
      var s = {
          easeIn: t,
          easeOut: i,
          easeInOut: r
        },
        o;
      return Ni(e, function (a) {
        Ue[a] = Ki[a] = s, Ue[o = a.toLowerCase()] = i;
        for (var c in s) Ue[o + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")] = Ue[a + "." + c] = s[c]
      }), s
    },
    $m = function (e) {
      return function (t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
      }
    },
    Gc = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? .3 : .45)) / (t < 1 ? t : 1),
        o = s / Vu * (Math.asin(1 / r) || 0),
        a = function (f) {
          return f === 1 ? 1 : r * Math.pow(2, -10 * f) * Z_((f - o) * s) + 1
        },
        c = e === "out" ? a : e === "in" ? function (u) {
          return 1 - a(1 - u)
        } : $m(a);
      return s = Vu / s, c.config = function (u, f) {
        return n(e, u, f)
      }, c
    },
    Xc = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0
        },
        r = e === "out" ? i : e === "in" ? function (s) {
          return 1 - i(1 - s)
        } : $m(i);
      return r.config = function (s) {
        return n(e, s)
      }, r
    };
  Ni("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    Ms(n + ",Power" + (t - 1), e ? function (i) {
      return Math.pow(i, t)
    } : function (i) {
      return i
    }, function (i) {
      return 1 - Math.pow(1 - i, t)
    }, function (i) {
      return i < .5 ? Math.pow(i * 2, t) / 2 : 1 - Math.pow((1 - i) * 2, t) / 2
    })
  });
  Ue.Linear.easeNone = Ue.none = Ue.Linear.easeIn;
  Ms("Elastic", Gc("in"), Gc("out"), Gc());
  (function (n, e) {
    var t = 1 / e,
      i = 2 * t,
      r = 2.5 * t,
      s = function (a) {
        return a < t ? n * a * a : a < i ? n * Math.pow(a - 1.5 / e, 2) + .75 : a < r ? n * (a -= 2.25 / e) * a + .9375 : n * Math.pow(a - 2.625 / e, 2) + .984375
      };
    Ms("Bounce", function (o) {
      return 1 - s(1 - o)
    }, s)
  })(7.5625, 2.75);
  Ms("Expo", function (n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0
  });
  Ms("Circ", function (n) {
    return -(hm(1 - n * n) - 1)
  });
  Ms("Sine", function (n) {
    return n === 1 ? 1 : -X_(n * B_) + 1
  });
  Ms("Back", Xc("in"), Xc("out"), Xc());
  Ue.SteppedEase = Ue.steps = Ki.SteppedEase = {
    config: function (e, t) {
      e === void 0 && (e = 1);
      var i = 1 / e,
        r = e + (t ? 0 : 1),
        s = t ? 1 : 0,
        o = 1 - pt;
      return function (a) {
        return ((r * Sa(0, o, a) | 0) + s) * i
      }
    }
  };
  fo.ease = Ue["quad.out"];
  Ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (n) {
    return Nd += n + "," + n + "Params,"
  });
  var Vm = function (e, t) {
      this.id = G_++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Sm, this.set = t ? t.getSetter : qd
    },
    da = function () {
      function n(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, po(this, +t.duration, 1, 1), this.data = t.data, Nt && (this._ctx = Nt, Nt.data.push(this)), ua || Gi.wake()
      }
      var e = n.prototype;
      return e.delay = function (i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay
      }, e.duration = function (i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
      }, e.totalDuration = function (i) {
        return arguments.length ? (this._dirty = 0, po(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, e.totalTime = function (i, r) {
        if (mo(), !arguments.length) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (uc(this, i), !s._dp || s.parent || Pm(s, this); s && s.parent;) s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
          !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && An(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === pt || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), xm(this, i, r)), this
      }, e.time = function (i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + yh(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
      }, e.totalProgress = function (i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
      }, e.progress = function (i, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + yh(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
      }, e.iteration = function (i, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * s, r) : this._repeat ? ho(this._tTime, s) + 1 : 1
      }, e.timeScale = function (i) {
        if (!arguments.length) return this._rts === -pt ? 0 : this._rts;
        if (this._rts === i) return this;
        var r = this.parent && this._ts ? jl(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0, this._ts = this._ps || i === -pt ? 0 : this._rts, this.totalTime(Sa(-Math.abs(this._delay), this._tDur, r), !0), cc(this), n1(this)
      }, e.paused = function (i) {
        return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (mo(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== pt && (this._tTime -= pt)))), this) : this._ps
      }, e.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return r && (r._sort || !this.parent) && An(r, this, i - this._delay), this
        }
        return this._start
      }, e.endTime = function (i) {
        return this._start + (Fi(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, e.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? jl(r.rawTime(i), this) : this._tTime : this._tTime
      }, e.revert = function (i) {
        i === void 0 && (i = J_);
        var r = pi;
        return pi = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), pi = r, this
      }, e.globalTime = function (i) {
        for (var r = this, s = arguments.length ? i : r.rawTime(); r;) s = r._start + s / (r._ts || 1), r = r._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : s
      }, e.repeat = function (i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, bh(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
      }, e.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return this._rDelay = i, bh(this), r ? this.time(r) : this
        }
        return this._rDelay
      }, e.yoyo = function (i) {
        return arguments.length ? (this._yoyo = i, this) : this._yoyo
      }, e.seek = function (i, r) {
        return this.totalTime(on(this, i), Fi(r))
      }, e.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, Fi(r))
      }, e.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1)
      }, e.reverse = function (i, r) {
        return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1)
      }, e.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0)
      }, e.resume = function () {
        return this.paused(!1)
      }, e.reversed = function (i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -pt : 0)), this) : this._rts < 0
      }, e.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -pt, this
      }, e.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          s;
        return !!(!i || this._ts && this._initted && i.isActive() && (s = i.rawTime(!0)) >= r && s < this.endTime(!0) - pt)
      }, e.eventCallback = function (i, r, s) {
        var o = this.vars;
        return arguments.length > 1 ? (r ? (o[i] = r, s && (o[i + "Params"] = s), i === "onUpdate" && (this._onUpdate = r)) : delete o[i], this) : o[i]
      }, e.then = function (i) {
        var r = this;
        return new Promise(function (s) {
          var o = zt(i) ? i : Mm,
            a = function () {
              var u = r.then;
              r.then = null, zt(o) && (o = o(r)) && (o.then || o === r) && (r.then = u), s(o), r.then = u
            };
          r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        })
      }, e.kill = function () {
        No(this)
      }, n
    }();
  mn(da.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -pt,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Ii = function (n) {
    fm(e, n);

    function e(i, r) {
      var s;
      return i === void 0 && (i = {}), s = n.call(this, i) || this, s.labels = {}, s.smoothChildTiming = !!i.smoothChildTiming, s.autoRemoveChildren = !!i.autoRemoveChildren, s._sort = Fi(i.sortChildren), Dt && An(i.parent || Dt, ir(s), r), i.reversed && s.reverse(), i.paused && s.paused(!0), i.scrollTrigger && Em(ir(s), i.scrollTrigger), s
    }
    var t = e.prototype;
    return t.to = function (r, s, o) {
      return Bo(0, arguments, this), this
    }, t.from = function (r, s, o) {
      return Bo(1, arguments, this), this
    }, t.fromTo = function (r, s, o, a) {
      return Bo(2, arguments, this), this
    }, t.set = function (r, s, o) {
      return s.duration = 0, s.parent = this, Uo(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new Gt(r, s, on(this, o), 1), this
    }, t.call = function (r, s, o) {
      return An(this, Gt.delayedCall(0, r, s), o)
    }, t.staggerTo = function (r, s, o, a, c, u, f) {
      return o.duration = s, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = f, o.parent = this, new Gt(r, o, on(this, c)), this
    }, t.staggerFrom = function (r, s, o, a, c, u, f) {
      return o.runBackwards = 1, Uo(o).immediateRender = Fi(o.immediateRender), this.staggerTo(r, s, o, a, c, u, f)
    }, t.staggerFromTo = function (r, s, o, a, c, u, f, h) {
      return a.startAt = o, Uo(a).immediateRender = Fi(a.immediateRender), this.staggerTo(r, s, a, c, u, f, h)
    }, t.render = function (r, s, o) {
      var a = this._time,
        c = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = r <= 0 ? 0 : ai(r),
        h = this._zTime < 0 != r < 0 && (this._initted || !u),
        p, m, g, y, w, S, T, M, k, E, O, P;
      if (this !== Dt && f > c && r >= 0 && (f = c), f !== this._tTime || o || h) {
        if (a !== this._time && u && (f += this._time - a, r += this._time - a), p = f, k = this._start, M = this._ts, S = !M, h && (u || (a = this._zTime), (r || !s) && (this._zTime = r)), this._repeat) {
          if (O = this._yoyo, w = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(w * 100 + r, s, o);
          if (p = ai(f % w), f === c ? (y = this._repeat, p = u) : (y = ~~(f / w), y && y === f / w && (p = u, y--), p > u && (p = u)), E = ho(this._tTime, w), !a && this._tTime && E !== y && this._tTime - E * w - this._dur <= 0 && (E = y), O && y & 1 && (p = u - p, P = 1), y !== E && !this._lock) {
            var R = O && E & 1,
              L = R === (O && y & 1);
            if (y < E && (R = !R), a = R ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (P ? 0 : ai(y * w)), s, !u)._lock = 0, this._tTime = f, !s && this.parent && hn(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || S !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (u = this._dur, c = this._tDur, L && (this._lock = 2, a = R ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !S) return this;
            qm(this, P)
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (T = a1(this, ai(a), ai(p)), T && (f -= p - (p = T._start))), this._tTime = f, this._time = p, this._act = !M, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && p && !s && !y && (hn(this, "onStart"), this._tTime !== f)) return this;
        if (p >= a && r >= 0)
          for (m = this._first; m;) {
            if (g = m._next, (m._act || p >= m._start) && m._ts && T !== m) {
              if (m.parent !== this) return this.render(r, s, o);
              if (m.render(m._ts > 0 ? (p - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (p - m._start) * m._ts, s, o), p !== this._time || !this._ts && !S) {
                T = 0, g && (f += this._zTime = -pt);
                break
              }
            }
            m = g
          } else {
            m = this._last;
            for (var F = r < 0 ? r : p; m;) {
              if (g = m._prev, (m._act || F <= m._end) && m._ts && T !== m) {
                if (m.parent !== this) return this.render(r, s, o);
                if (m.render(m._ts > 0 ? (F - m._start) * m._ts : (m._dirty ? m.totalDuration() : m._tDur) + (F - m._start) * m._ts, s, o || pi && (m._initted || m._startAt)), p !== this._time || !this._ts && !S) {
                  T = 0, g && (f += this._zTime = F ? -pt : pt);
                  break
                }
              }
              m = g
            }
          }
        if (T && !s && (this.pause(), T.render(p >= a ? 0 : -pt)._zTime = p >= a ? 1 : -1, this._ts)) return this._start = k, cc(this), this.render(r, s, o);
        this._onUpdate && !s && hn(this, "onUpdate", !0), (f === c && this._tTime >= this.totalDuration() || !f && a) && (k === this._start || Math.abs(M) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (f === c && this._ts > 0 || !f && this._ts < 0) && Hr(this, 1), !s && !(r < 0 && !a) && (f || a || !c) && (hn(this, f === c && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < c && this.timeScale() > 0) && this._prom())))
      }
      return this
    }, t.add = function (r, s) {
      var o = this;
      if (pr(s) || (s = on(this, s, r)), !(r instanceof da)) {
        if (mi(r)) return r.forEach(function (a) {
          return o.add(a, s)
        }), this;
        if (si(r)) return this.addLabel(r, s);
        if (zt(r)) r = Gt.delayedCall(0, r);
        else return this
      }
      return this !== r ? An(this, r, s) : this
    }, t.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -dn);
      for (var c = [], u = this._first; u;) u._start >= a && (u instanceof Gt ? s && c.push(u) : (o && c.push(u), r && c.push.apply(c, u.getChildren(!0, s, o)))), u = u._next;
      return c
    }, t.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--;)
        if (s[o].vars.id === r) return s[o]
    }, t.remove = function (r) {
      return si(r) ? this.removeLabel(r) : zt(r) ? this.killTweensOf(r) : (lc(this, r), r === this._recent && (this._recent = this._last), us(this))
    }, t.totalTime = function (r, s) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ai(Gi.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), n.prototype.totalTime.call(this, r, s), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function (r, s) {
      return this.labels[r] = on(this, s), this
    }, t.removeLabel = function (r) {
      return delete this.labels[r], this
    }, t.addPause = function (r, s, o) {
      var a = Gt.delayedCall(0, s || la, o);
      return a.data = "isPause", this._hasPause = 1, An(this, a, on(this, r))
    }, t.removePause = function (r) {
      var s = this._first;
      for (r = on(this, r); s;) s._start === r && s.data === "isPause" && Hr(s), s = s._next
    }, t.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), c = a.length; c--;) Pr !== a[c] && a[c].kill(r, s);
      return this
    }, t.getTweensOf = function (r, s) {
      for (var o = [], a = fn(r), c = this._first, u = pr(s), f; c;) c instanceof Gt ? e1(c._targets, a) && (u ? (!Pr || c._initted && c._ts) && c.globalTime(0) <= s && c.globalTime(c.totalDuration()) > s : !s || c.isActive()) && o.push(c) : (f = c.getTweensOf(a, s)).length && o.push.apply(o, f), c = c._next;
      return o
    }, t.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        a = on(o, r),
        c = s,
        u = c.startAt,
        f = c.onStart,
        h = c.onStartParams,
        p = c.immediateRender,
        m, g = Gt.to(o, mn({
          ease: s.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: a,
          overwrite: "auto",
          duration: s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || pt,
          onStart: function () {
            if (o.pause(), !m) {
              var w = s.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
              g._dur !== w && po(g, w, 0, 1).render(g._time, !0, !0), m = 1
            }
            f && f.apply(g, h || [])
          }
        }, s));
      return p ? g.render(0) : g
    }, t.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, mn({
        startAt: {
          time: on(this, r)
        }
      }, o))
    }, t.recent = function () {
      return this._recent
    }, t.nextLabel = function (r) {
      return r === void 0 && (r = this._time), _h(this, on(this, r))
    }, t.previousLabel = function (r) {
      return r === void 0 && (r = this._time), _h(this, on(this, r), 1)
    }, t.currentLabel = function (r) {
      return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + pt)
    }, t.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, c = this.labels, u; a;) a._start >= o && (a._start += r, a._end += r), a = a._next;
      if (s)
        for (u in c) c[u] >= o && (c[u] += r);
      return us(this)
    }, t.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s;) s.invalidate(r), s = s._next;
      return n.prototype.invalidate.call(this, r)
    }, t.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s;) o = s._next, this.remove(s), s = o;
      return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), us(this)
    }, t.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        c = dn,
        u, f, h;
      if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
      if (o._dirty) {
        for (h = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > c && o._sort && a._ts && !o._lock ? (o._lock = 1, An(o, a, f - a._delay, 1)._lock = 0) : c = f, f < 0 && a._ts && (s -= f, (!h && !o._dp || h && h.smoothChildTiming) && (o._start += f / o._ts, o._time -= f, o._tTime -= f), o.shiftChildren(-f, !1, -1 / 0), c = 0), a._end > s && a._ts && (s = a._end), a = u;
        po(o, o === Dt && o._time > s ? o._time : s, 1, 1), o._dirty = 0
      }
      return o._tDur
    }, e.updateRoot = function (r) {
      if (Dt._ts && (xm(Dt, jl(r, Dt)), wm = Gi.frame), Gi.frame >= gh) {
        gh += Zi.autoSleep || 120;
        var s = Dt._first;
        if ((!s || !s._ts) && Zi.autoSleep && Gi._listeners.length < 2) {
          for (; s && !s._ts;) s = s._next;
          s || Gi.sleep()
        }
      }
    }, e
  }(da);
  mn(Ii.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var x1 = function (e, t, i, r, s, o, a) {
      var c = new zi(this._pt, e, t, 0, 1, Km, null, s),
        u = 0,
        f = 0,
        h, p, m, g, y, w, S, T;
      for (c.b = i, c.e = r, i += "", r += "", (S = ~r.indexOf("random(")) && (r = ca(r)), o && (T = [i, r], o(T, e, t), i = T[0], r = T[1]), p = i.match(Vc) || []; h = Vc.exec(r);) g = h[0], y = r.substring(u, h.index), m ? m = (m + 1) % 5 : y.substr(-5) === "rgba(" && (m = 1), g !== p[f++] && (w = parseFloat(p[f - 1]) || 0, c._pt = {
        _next: c._pt,
        p: y || f === 1 ? y : ",",
        s: w,
        c: g.charAt(1) === "=" ? io(w, g) - w : parseFloat(g) - w,
        m: m && m < 4 ? Math.round : 0
      }, u = Vc.lastIndex);
      return c.c = u < r.length ? r.substring(u, r.length) : "", c.fp = a, (gm.test(r) || S) && (c.e = 0), this._pt = c, c
    },
    Hd = function (e, t, i, r, s, o, a, c, u, f) {
      zt(r) && (r = r(s || 0, e, o));
      var h = e[t],
        p = i !== "get" ? i : zt(h) ? u ? e[t.indexOf("set") || !zt(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h,
        m = zt(h) ? u ? E1 : Xm : jd,
        g;
      if (si(r) && (~r.indexOf("random(") && (r = ca(r)), r.charAt(1) === "=" && (g = io(p, r) + (hi(p) || 0), (g || g === 0) && (r = g))), !f || p !== r || ed) return !isNaN(p * r) && r !== "" ? (g = new zi(this._pt, e, t, +p || 0, r - (p || 0), typeof h == "boolean" ? C1 : Zm, 0, m), u && (g.fp = u), a && g.modifier(a, this, e), this._pt = g) : (!h && !(t in e) && Yd(t, r), x1.call(this, e, t, p, r, m, c || Zi.stringFilter, u))
    },
    T1 = function (e, t, i, r, s) {
      if (zt(e) && (e = Go(e, s, t, i, r)), !Wn(e) || e.style && e.nodeType || mi(e) || pm(e)) return si(e) ? Go(e, s, t, i, r) : e;
      var o = {},
        a;
      for (a in e) o[a] = Go(e[a], s, t, i, r);
      return o
    },
    Um = function (e, t, i, r, s, o) {
      var a, c, u, f;
      if (Vi[e] && (a = new Vi[e]).init(s, a.rawVars ? t[e] : T1(t[e], r, s, o, i), i, r, o) !== !1 && (i._pt = c = new zi(i._pt, s, e, 0, 1, a.render, a, 0, a.priority), i !== Zs))
        for (u = i._ptLookup[i._targets.indexOf(s)], f = a._props.length; f--;) u[a._props[f]] = c;
      return a
    },
    Pr, ed, Wd = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        c = r.lazy,
        u = r.onUpdate,
        f = r.onUpdateParams,
        h = r.callbackScope,
        p = r.runBackwards,
        m = r.yoyoEase,
        g = r.keyframes,
        y = r.autoRevert,
        w = e._dur,
        S = e._startAt,
        T = e._targets,
        M = e.parent,
        k = M && M.data === "nested" ? M.vars.targets : T,
        E = e._overwrite === "auto" && !Ad,
        O = e.timeline,
        P, R, L, F, I, D, q, Z, B, se, re, le, we;
      if (O && (!g || !s) && (s = "none"), e._ease = ds(s, fo.ease), e._yEase = m ? jm(ds(m === !0 ? s : m, fo.ease)) : 0, m && e._yoyo && !e._repeat && (m = e._yEase, e._yEase = e._ease, e._ease = m), e._from = !O && !!r.runBackwards, !O || g && !r.stagger) {
        if (Z = T[0] ? cs(T[0]).harness : 0, le = Z && r[Z.prop], P = Wl(r, Fd), S && (S._zTime < 0 && S.progress(1), t < 0 && p && a && !y ? S.render(-1, !0) : S.revert(p && w ? wl : Q_), S._lazy = 0), o) {
          if (Hr(e._startAt = Gt.set(T, mn({
              data: "isStart",
              overwrite: !1,
              parent: M,
              immediateRender: !0,
              lazy: !S && Fi(c),
              startAt: null,
              delay: 0,
              onUpdate: u,
              onUpdateParams: f,
              callbackScope: h,
              stagger: 0
            }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (pi || !a && !y) && e._startAt.revert(wl), a && w && t <= 0 && i <= 0) {
            t && (e._zTime = t);
            return
          }
        } else if (p && w && !S) {
          if (t && (a = !1), L = mn({
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !S && Fi(c),
              immediateRender: a,
              stagger: 0,
              parent: M
            }, P), le && (L[Z.prop] = le), Hr(e._startAt = Gt.set(T, L)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (pi ? e._startAt.revert(wl) : e._startAt.render(-1, !0)), e._zTime = t, !a) n(e._startAt, pt, pt);
          else if (!t) return
        }
        for (e._pt = e._ptCache = 0, c = w && Fi(c) || c && !w, R = 0; R < T.length; R++) {
          if (I = T[R], q = I._gsap || zd(T)[R]._gsap, e._ptLookup[R] = se = {}, Gu[q.id] && Ir.length && Hl(), re = k === T ? R : k.indexOf(I), Z && (B = new Z).init(I, le || P, e, re, k) !== !1 && (e._pt = F = new zi(e._pt, I, B.name, 0, 1, B.render, B, 0, B.priority), B._props.forEach(function (A) {
              se[A] = F
            }), B.priority && (D = 1)), !Z || le)
            for (L in P) Vi[L] && (B = Um(L, P, e, re, I, k)) ? B.priority && (D = 1) : se[L] = F = Hd.call(e, I, L, "get", P[L], re, k, 0, r.stringFilter);
          e._op && e._op[R] && e.kill(I, e._op[R]), E && e._pt && (Pr = e, Dt.killTweensOf(I, se, e.globalTime(t)), we = !e.parent, Pr = 0), e._pt && c && (Gu[q.id] = 1)
        }
        D && Qm(e), e._onInit && e._onInit(e)
      }
      e._onUpdate = u, e._initted = (!e._op || e._pt) && !we, g && t <= 0 && O.render(dn, !0, !0)
    },
    M1 = function (e, t, i, r, s, o, a) {
      var c = (e._pt && e._ptCache || (e._ptCache = {}))[t],
        u, f, h, p;
      if (!c)
        for (c = e._ptCache[t] = [], h = e._ptLookup, p = e._targets.length; p--;) {
          if (u = h[p][t], u && u.d && u.d._pt)
            for (u = u.d._pt; u && u.p !== t && u.fp !== t;) u = u._next;
          if (!u) return ed = 1, e.vars[t] = "+=0", Wd(e, a), ed = 0, 1;
          c.push(u)
        }
      for (p = c.length; p--;) f = c[p], u = f._pt || f, u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + o * u.c, u.c = i - u.s, f.e && (f.e = qt(i) + hi(f.e)), f.b && (f.b = u.s + hi(f.b))
    },
    k1 = function (e, t) {
      var i = e[0] ? cs(e[0]).harness : 0,
        r = i && i.aliases,
        s, o, a, c;
      if (!r) return t;
      s = ys({}, t);
      for (o in r)
        if (o in s)
          for (c = r[o].split(","), a = c.length; a--;) s[c[a]] = s[o];
      return s
    },
    P1 = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        o, a;
      if (mi(t)) a = i[e] || (i[e] = []), t.forEach(function (c, u) {
        return a.push({
          t: u / (t.length - 1) * 100,
          v: c,
          e: s
        })
      });
      else
        for (o in t) a = i[o] || (i[o] = []), o === "ease" || a.push({
          t: parseFloat(e),
          v: t[o],
          e: s
        })
    },
    Go = function (e, t, i, r, s) {
      return zt(e) ? e.call(t, i, r, s) : si(e) && ~e.indexOf("random(") ? ca(e) : e
    },
    Bm = Nd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Gm = {};
  Ni(Bm + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return Gm[n] = 1
  });
  var Gt = function (n) {
    fm(e, n);

    function e(i, r, s, o) {
      var a;
      typeof r == "number" && (s.duration = r, r = s, s = null), a = n.call(this, o ? r : Uo(r)) || this;
      var c = a.vars,
        u = c.duration,
        f = c.delay,
        h = c.immediateRender,
        p = c.stagger,
        m = c.overwrite,
        g = c.keyframes,
        y = c.defaults,
        w = c.scrollTrigger,
        S = c.yoyoEase,
        T = r.parent || Dt,
        M = (mi(i) || pm(i) ? pr(i[0]) : "length" in r) ? [i] : fn(i),
        k, E, O, P, R, L, F, I;
      if (a._targets = M.length ? zd(M) : zl("GSAP target " + i + " not found. https://greensock.com", !Zi.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = m, g || p || za(u) || za(f)) {
        if (r = a.vars, k = a.timeline = new Ii({
            data: "nested",
            defaults: y || {},
            targets: T && T.data === "nested" ? T.vars.targets : M
          }), k.kill(), k.parent = k._dp = ir(a), k._start = 0, p || za(u) || za(f)) {
          if (P = M.length, F = p && Am(p), Wn(p))
            for (R in p) ~Bm.indexOf(R) && (I || (I = {}), I[R] = p[R]);
          for (E = 0; E < P; E++) O = Wl(r, Gm), O.stagger = 0, S && (O.yoyoEase = S), I && ys(O, I), L = M[E], O.duration = +Go(u, ir(a), E, L, M), O.delay = (+Go(f, ir(a), E, L, M) || 0) - a._delay, !p && P === 1 && O.delay && (a._delay = f = O.delay, a._start += f, O.delay = 0), k.to(L, O, F ? F(E, L, M) : 0), k._ease = Ue.none;
          k.duration() ? u = f = 0 : a.timeline = 0
        } else if (g) {
          Uo(mn(k.vars.defaults, {
            ease: "none"
          })), k._ease = ds(g.ease || r.ease || "none");
          var D = 0,
            q, Z, B;
          if (mi(g)) g.forEach(function (se) {
            return k.to(M, se, ">")
          }), k.duration();
          else {
            O = {};
            for (R in g) R === "ease" || R === "easeEach" || P1(R, g[R], O, g.easeEach);
            for (R in O)
              for (q = O[R].sort(function (se, re) {
                  return se.t - re.t
                }), D = 0, E = 0; E < q.length; E++) Z = q[E], B = {
                ease: Z.e,
                duration: (Z.t - (E ? q[E - 1].t : 0)) / 100 * u
              }, B[R] = Z.v, k.to(M, B, D), D += B.duration;
            k.duration() < u && k.to({}, {
              duration: u - k.duration()
            })
          }
        }
        u || a.duration(u = k.duration())
      } else a.timeline = 0;
      return m === !0 && !Ad && (Pr = ir(a), Dt.killTweensOf(M), Pr = 0), An(T, ir(a), s), r.reversed && a.reverse(), r.paused && a.paused(!0), (h || !u && !g && a._start === ai(T._time) && Fi(h) && r1(ir(a)) && T.data !== "nested") && (a._tTime = -pt, a.render(Math.max(0, -f) || 0)), w && Em(ir(a), w), a
    }
    var t = e.prototype;
    return t.render = function (r, s, o) {
      var a = this._time,
        c = this._tDur,
        u = this._dur,
        f = r < 0,
        h = r > c - pt && !f ? c : r < pt ? 0 : r,
        p, m, g, y, w, S, T, M, k;
      if (!u) o1(this, r, s, o);
      else if (h !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
        if (p = h, M = this.timeline, this._repeat) {
          if (y = u + this._rDelay, this._repeat < -1 && f) return this.totalTime(y * 100 + r, s, o);
          if (p = ai(h % y), h === c ? (g = this._repeat, p = u) : (g = ~~(h / y), g && g === h / y && (p = u, g--), p > u && (p = u)), S = this._yoyo && g & 1, S && (k = this._yEase, p = u - p), w = ho(this._tTime, y), p === a && !o && this._initted) return this._tTime = h, this;
          g !== w && (M && this._yEase && qm(M, S), this.vars.repeatRefresh && !S && !this._lock && (this._lock = o = 1, this.render(ai(y * g), !0).invalidate()._lock = 0))
        }
        if (!this._initted) {
          if (Om(this, f ? r : p, o, s, h)) return this._tTime = 0, this;
          if (a !== this._time) return this;
          if (u !== this._dur) return this.render(r, s, o)
        }
        if (this._tTime = h, this._time = p, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = T = (k || this._ease)(p / u), this._from && (this.ratio = T = 1 - T), p && !a && !s && !g && (hn(this, "onStart"), this._tTime !== h)) return this;
        for (m = this._pt; m;) m.r(T, m.d), m = m._next;
        M && M.render(r < 0 ? r : !p && S ? -pt : M._dur * M._ease(p / this._dur), s, o) || this._startAt && (this._zTime = r), this._onUpdate && !s && (f && Xu(this, r, s, o), hn(this, "onUpdate")), this._repeat && g !== w && this.vars.onRepeat && !s && this.parent && hn(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && Xu(this, r, !0, !0), (r || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Hr(this, 1), !s && !(f && !a) && (h || a || S) && (hn(this, h === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < c && this.timeScale() > 0) && this._prom()))
      }
      return this
    }, t.targets = function () {
      return this._targets
    }, t.invalidate = function (r) {
      return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), n.prototype.invalidate.call(this, r)
    }, t.resetTo = function (r, s, o, a) {
      ua || Gi.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return this._initted || Wd(this, c), u = this._ease(c / this._dur), M1(this, r, s, o, a, u, c) ? this.resetTo(r, s, o, a) : (uc(this, 0), this.parent || km(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function (r, s) {
      if (s === void 0 && (s = "all"), !r && (!s || s === "all")) return this._lazy = this._pt = 0, this.parent ? No(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return this.timeline.killTweensOf(r, s, Pr && Pr.vars.overwrite !== !0)._first || No(this), this.parent && o !== this.timeline.totalDuration() && po(this, this._dur * this.timeline._tDur / o, 0, 1), this
      }
      var a = this._targets,
        c = r ? fn(r) : a,
        u = this._ptLookup,
        f = this._pt,
        h, p, m, g, y, w, S;
      if ((!s || s === "all") && i1(a, c)) return s === "all" && (this._pt = 0), No(this);
      for (h = this._op = this._op || [], s !== "all" && (si(s) && (y = {}, Ni(s, function (T) {
          return y[T] = 1
        }), s = y), s = k1(a, s)), S = a.length; S--;)
        if (~c.indexOf(a[S])) {
          p = u[S], s === "all" ? (h[S] = s, g = p, m = {}) : (m = h[S] = h[S] || {}, g = s);
          for (y in g) w = p && p[y], w && ((!("kill" in w.d) || w.d.kill(y) === !0) && lc(this, w, "_pt"), delete p[y]), m !== "all" && (m[y] = 1)
        } return this._initted && !this._pt && f && No(this), this
    }, e.to = function (r, s) {
      return new e(r, s, arguments[2])
    }, e.from = function (r, s) {
      return Bo(1, arguments)
    }, e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a
      })
    }, e.fromTo = function (r, s, o) {
      return Bo(2, arguments)
    }, e.set = function (r, s) {
      return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(r, s)
    }, e.killTweensOf = function (r, s, o) {
      return Dt.killTweensOf(r, s, o)
    }, e
  }(da);
  mn(Gt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  Ni("staggerTo,staggerFrom,staggerFromTo", function (n) {
    Gt[n] = function () {
      var e = new Ii,
        t = Ku.call(arguments, 0);
      return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t)
    }
  });
  var jd = function (e, t, i) {
      return e[t] = i
    },
    Xm = function (e, t, i) {
      return e[t](i)
    },
    E1 = function (e, t, i, r) {
      return e[t](r.fp, i)
    },
    O1 = function (e, t, i) {
      return e.setAttribute(t, i)
    },
    qd = function (e, t) {
      return zt(e[t]) ? Xm : Ld(e[t]) && e.setAttribute ? O1 : jd
    },
    Zm = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    C1 = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Km = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * e) : Math.round((i.s + i.c * e) * 1e4) / 1e4) + r, i = i._next;
        r += t.c
      }
      t.set(t.t, t.p, r, t)
    },
    $d = function (e, t) {
      for (var i = t._pt; i;) i.r(e, i.d), i = i._next
    },
    D1 = function (e, t, i, r) {
      for (var s = this._pt, o; s;) o = s._next, s.p === r && s.modifier(e, t, i), s = o
    },
    A1 = function (e) {
      for (var t = this._pt, i, r; t;) r = t._next, t.p === e && !t.op || t.op === e ? lc(this, t, "_pt") : t.dep || (i = 1), t = r;
      return !i
    },
    L1 = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r)
    },
    Qm = function (e) {
      for (var t = e._pt, i, r, s, o; t;) {
        for (i = t._next, r = s; r && r.pr > t.pr;) r = r._next;
        (t._prev = r ? r._prev : o) ? t._prev._next = t: s = t, (t._next = r) ? r._prev = t : o = t, t = i
      }
      e._pt = s
    },
    zi = function () {
      function n(t, i, r, s, o, a, c, u, f) {
        this.t = i, this.s = s, this.c = o, this.p = r, this.r = a || Zm, this.d = c || this, this.set = u || jd, this.pr = f || 0, this._next = t, t && (t._prev = this)
      }
      var e = n.prototype;
      return e.modifier = function (i, r, s) {
        this.mSet = this.mSet || this.set, this.set = L1, this.m = i, this.mt = s, this.tween = r
      }, n
    }();
  Ni(Nd + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (n) {
    return Fd[n] = 1
  });
  Ki.TweenMax = Ki.TweenLite = Gt;
  Ki.TimelineLite = Ki.TimelineMax = Ii;
  Dt = new Ii({
    sortChildren: !1,
    defaults: fo,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  });
  Zi.stringFilter = Wm;
  var fs = [],
    xl = {},
    R1 = [],
    Sh = 0,
    I1 = 0,
    Zc = function (e) {
      return (xl[e] || R1).map(function (t) {
        return t()
      })
    },
    td = function () {
      var e = Date.now(),
        t = [];
      e - Sh > 2 && (Zc("matchMediaInit"), fs.forEach(function (i) {
        var r = i.queries,
          s = i.conditions,
          o, a, c, u;
        for (a in r) o = an.matchMedia(r[a]).matches, o && (c = 1), o !== s[a] && (s[a] = o, u = 1);
        u && (i.revert(), c && t.push(i))
      }), Zc("matchMediaRevert"), t.forEach(function (i) {
        return i.onMatch(i)
      }), Sh = e, Zc("matchMedia"))
    },
    Jm = function () {
      function n(t, i) {
        this.selector = i && Qu(i), this.data = [], this._r = [], this.isReverted = !1, this.id = I1++, t && this.add(t)
      }
      var e = n.prototype;
      return e.add = function (i, r, s) {
        zt(i) && (s = r, r = i, i = zt);
        var o = this,
          a = function () {
            var u = Nt,
              f = o.selector,
              h;
            return u && u !== o && u.data.push(o), s && (o.selector = Qu(s)), Nt = o, h = r.apply(o, arguments), zt(h) && o._r.push(h), Nt = u, o.selector = f, o.isReverted = !1, h
          };
        return o.last = a, i === zt ? a(o) : i ? o[i] = a : a
      }, e.ignore = function (i) {
        var r = Nt;
        Nt = null, i(this), Nt = r
      }, e.getTweens = function () {
        var i = [];
        return this.data.forEach(function (r) {
          return r instanceof n ? i.push.apply(i, r.getTweens()) : r instanceof Gt && !(r.parent && r.parent.data === "nested") && i.push(r)
        }), i
      }, e.clear = function () {
        this._r.length = this.data.length = 0
      }, e.kill = function (i, r) {
        var s = this;
        if (i) {
          var o = this.getTweens();
          this.data.forEach(function (c) {
            c.data === "isFlip" && (c.revert(), c.getChildren(!0, !0, !1).forEach(function (u) {
              return o.splice(o.indexOf(u), 1)
            }))
          }), o.map(function (c) {
            return {
              g: c.globalTime(0),
              t: c
            }
          }).sort(function (c, u) {
            return u.g - c.g || -1 / 0
          }).forEach(function (c) {
            return c.t.revert(i)
          }), this.data.forEach(function (c) {
            return !(c instanceof Gt) && c.revert && c.revert(i)
          }), this._r.forEach(function (c) {
            return c(i, s)
          }), this.isReverted = !0
        } else this.data.forEach(function (c) {
          return c.kill && c.kill()
        });
        if (this.clear(), r)
          for (var a = fs.length; a--;) fs[a].id === this.id && fs.splice(a, 1)
      }, e.revert = function (i) {
        this.kill(i || {})
      }, n
    }(),
    Y1 = function () {
      function n(t) {
        this.contexts = [], this.scope = t
      }
      var e = n.prototype;
      return e.add = function (i, r, s) {
        Wn(i) || (i = {
          matches: i
        });
        var o = new Jm(0, s || this.scope),
          a = o.conditions = {},
          c, u, f;
        Nt && !o.selector && (o.selector = Nt.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = i;
        for (u in i) u === "all" ? f = 1 : (c = an.matchMedia(i[u]), c && (fs.indexOf(o) < 0 && fs.push(o), (a[u] = c.matches) && (f = 1), c.addListener ? c.addListener(td) : c.addEventListener("change", td)));
        return f && r(o), this
      }, e.revert = function (i) {
        this.kill(i || {})
      }, e.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0)
        })
      }, n
    }(),
    ql = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        t.forEach(function (r) {
          return Nm(r)
        })
      },
      timeline: function (e) {
        return new Ii(e)
      },
      getTweensOf: function (e, t) {
        return Dt.getTweensOf(e, t)
      },
      getProperty: function (e, t, i, r) {
        si(e) && (e = fn(e)[0]);
        var s = cs(e || {}).get,
          o = i ? Mm : Tm;
        return i === "native" && (i = ""), e && (t ? o((Vi[t] && Vi[t].get || s)(e, t, i, r)) : function (a, c, u) {
          return o((Vi[a] && Vi[a].get || s)(e, a, c, u))
        })
      },
      quickSetter: function (e, t, i) {
        if (e = fn(e), e.length > 1) {
          var r = e.map(function (f) {
              return ei.quickSetter(f, t, i)
            }),
            s = r.length;
          return function (f) {
            for (var h = s; h--;) r[h](f)
          }
        }
        e = e[0] || {};
        var o = Vi[t],
          a = cs(e),
          c = a.harness && (a.harness.aliases || {})[t] || t,
          u = o ? function (f) {
            var h = new o;
            Zs._pt = 0, h.init(e, i ? f + i : f, Zs, 0, [e]), h.render(1, h), Zs._pt && $d(1, Zs)
          } : a.set(e, c);
        return o ? u : function (f) {
          return u(e, c, i ? f + i : f, a, 1)
        }
      },
      quickTo: function (e, t, i) {
        var r, s = ei.to(e, ys((r = {}, r[t] = "+=0.1", r.paused = !0, r), i || {})),
          o = function (c, u, f) {
            return s.resetTo(t, c, u, f)
          };
        return o.tween = s, o
      },
      isTweening: function (e) {
        return Dt.getTweensOf(e, !0).length > 0
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = ds(e.ease, fo.ease)), vh(fo, e || {})
      },
      config: function (e) {
        return vh(Zi, e || {})
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return a && !Vi[a] && !Ki[a] && zl(t + " effect requires " + a + " plugin.")
        }), Uc[t] = function (a, c, u) {
          return i(fn(a), mn(c || {}, s), u)
        }, o && (Ii.prototype[t] = function (a, c, u) {
          return this.add(Uc[t](a, Wn(c) ? c : (u = c) && {}, this), u)
        })
      },
      registerEase: function (e, t) {
        Ue[e] = ds(t)
      },
      parseEase: function (e, t) {
        return arguments.length ? ds(e, t) : Ue
      },
      getById: function (e) {
        return Dt.getById(e)
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new Ii(e),
          r, s;
        for (i.smoothChildTiming = Fi(e.smoothChildTiming), Dt.remove(i), i._dp = 0, i._time = i._tTime = Dt._time, r = Dt._first; r;) s = r._next, (t || !(!r._dur && r instanceof Gt && r.vars.onComplete === r._targets[0])) && An(i, r, r._start - r._delay), r = s;
        return An(Dt, i, 0), i
      },
      context: function (e, t) {
        return e ? new Jm(e, t) : Nt
      },
      matchMedia: function (e) {
        return new Y1(e)
      },
      matchMediaRefresh: function () {
        return fs.forEach(function (e) {
          var t = e.conditions,
            i, r;
          for (r in t) t[r] && (t[r] = !1, i = 1);
          i && e.revert()
        }) || td()
      },
      addEventListener: function (e, t) {
        var i = xl[e] || (xl[e] = []);
        ~i.indexOf(t) || i.push(t)
      },
      removeEventListener: function (e, t) {
        var i = xl[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1)
      },
      utils: {
        wrap: p1,
        wrapYoyo: m1,
        distribute: Am,
        random: Rm,
        snap: Lm,
        normalize: h1,
        getUnit: hi,
        clamp: c1,
        splitColor: zm,
        toArray: fn,
        selector: Qu,
        mapRange: Ym,
        pipe: d1,
        unitize: f1,
        interpolate: g1,
        shuffle: Dm
      },
      install: bm,
      effects: Uc,
      ticker: Gi,
      updateRoot: Ii.updateRoot,
      plugins: Vi,
      globalTimeline: Dt,
      core: {
        PropTween: zi,
        globals: _m,
        Tween: Gt,
        Timeline: Ii,
        Animation: da,
        getCache: cs,
        _removeLinkedListItem: lc,
        reverting: function () {
          return pi
        },
        context: function (e) {
          return e && Nt && (Nt.data.push(e), e._ctx = Nt), Nt
        },
        suppressOverwrites: function (e) {
          return Ad = e
        }
      }
    };
  Ni("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return ql[n] = Gt[n]
  });
  Gi.add(Ii.updateRoot);
  Zs = ql.to({}, {
    duration: 0
  });
  var F1 = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t;) i = i._next;
      return i
    },
    N1 = function (e, t) {
      var i = e._targets,
        r, s, o;
      for (r in t)
        for (s = i.length; s--;) o = e._ptLookup[s][r], o && (o = o.d) && (o._pt && (o = F1(o, r)), o && o.modifier && o.modifier(t[r], e, i[s], r))
    },
    Kc = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, o) {
          o._onInit = function (a) {
            var c, u;
            if (si(s) && (c = {}, Ni(s, function (f) {
                return c[f] = 1
              }), s = c), t) {
              c = {};
              for (u in s) c[u] = t(s[u]);
              s = c
            }
            N1(a, s)
          }
        }
      }
    },
    ei = ql.registerPlugin({
      name: "attr",
      init: function (e, t, i, r, s) {
        var o, a, c;
        this.tween = i;
        for (o in t) c = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (c || 0) + "", t[o], r, s, 0, 0, o), a.op = o, a.b = c, this._props.push(o)
      },
      render: function (e, t) {
        for (var i = t._pt; i;) pi ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), i = i._next
      }
    }, {
      name: "endArray",
      init: function (e, t) {
        for (var i = t.length; i--;) this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1)
      }
    }, Kc("roundProps", Ju), Kc("modifiers"), Kc("snap", Lm)) || ql;
  Gt.version = Ii.version = ei.version = "3.12.2";
  ym = 1;
  Rd() && mo();
  var eg = Ue.Power0,
    ks = Ue.Power1,
    z1 = Ue.Power2,
    H1 = Ue.Power3;
  Ue.Power4;
  Ue.Linear;
  Ue.Quad;
  Ue.Cubic;
  Ue.Quart;
  Ue.Quint;
  Ue.Strong;
  Ue.Elastic;
  Ue.Back;
  Ue.SteppedEase;
  Ue.Bounce;
  var W1 = Ue.Sine;
  Ue.Expo;
  Ue.Circ;
  /*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var xh, Er, no, Vd, ss, Th, Ud, j1 = function () {
      return typeof window < "u"
    },
    mr = {},
    ts = 180 / Math.PI,
    ro = Math.PI / 180,
    Fs = Math.atan2,
    Mh = 1e8,
    Bd = /([A-Z])/g,
    q1 = /(left|right|width|margin|padding|x)/i,
    $1 = /[\s,\(]\S/,
    Rn = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    id = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    V1 = function (e, t) {
      return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    U1 = function (e, t) {
      return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    B1 = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -.5 : .5)) + t.u, t)
    },
    tg = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    ig = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    G1 = function (e, t, i) {
      return e.style[t] = i
    },
    X1 = function (e, t, i) {
      return e.style.setProperty(t, i)
    },
    Z1 = function (e, t, i) {
      return e._gsap[t] = i
    },
    K1 = function (e, t, i) {
      return e._gsap.scaleX = e._gsap.scaleY = i
    },
    Q1 = function (e, t, i, r, s) {
      var o = e._gsap;
      o.scaleX = o.scaleY = i, o.renderTransform(s, o)
    },
    J1 = function (e, t, i, r, s) {
      var o = e._gsap;
      o[t] = i, o.renderTransform(s, o)
    },
    At = "transform",
    Sn = At + "Origin",
    ew = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style;
      if (e in mr && s) {
        if (this.tfm = this.tfm || {}, e !== "transform") e = Rn[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function (o) {
          return i.tfm[o] = rr(r, o)
        }) : this.tfm[e] = r._gsap.x ? r._gsap[e] : rr(r, e);
        else return Rn.transform.split(",").forEach(function (o) {
          return n.call(i, o, t)
        });
        if (this.props.indexOf(At) >= 0) return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Sn, t, "")), e = At
      }(s || t) && this.props.push(e, t, s[e])
    },
    ng = function (e) {
      e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    tw = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s, o;
      for (s = 0; s < e.length; s += 3) e[s + 1] ? t[e[s]] = e[s + 2] : e[s + 2] ? i[e[s]] = e[s + 2] : i.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(Bd, "-$1").toLowerCase());
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg && (r.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), s = Ud(), (!s || !s.isStart) && !i[At] && (ng(i), r.uncache = 1)
      }
    },
    rg = function (e, t) {
      var i = {
        target: e,
        props: [],
        revert: tw,
        save: ew
      };
      return e._gsap || ei.core.getCache(e), t && t.split(",").forEach(function (r) {
        return i.save(r)
      }), i
    },
    sg, nd = function (e, t) {
      var i = Er.createElementNS ? Er.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Er.createElement(e);
      return i.style ? i : Er.createElement(e)
    },
    zn = function n(e, t, i) {
      var r = getComputedStyle(e);
      return r[t] || r.getPropertyValue(t.replace(Bd, "-$1").toLowerCase()) || r.getPropertyValue(t) || !i && n(e, go(t) || t, 1) || ""
    },
    kh = "O,Moz,ms,Ms,Webkit".split(","),
    go = function (e, t, i) {
      var r = t || ss,
        s = r.style,
        o = 5;
      if (e in s && !i) return e;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(kh[o] + e in s););
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? kh[o] : "") + e
    },
    rd = function () {
      j1() && window.document && (xh = window, Er = xh.document, no = Er.documentElement, ss = nd("div") || {
        style: {}
      }, nd("div"), At = go(At), Sn = At + "Origin", ss.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", sg = !!go("perspective"), Ud = ei.core.reverting, Vd = 1)
    },
    Qc = function n(e) {
      var t = nd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText,
        o;
      if (no.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
        o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = n
      } catch {} else this._gsapBBox && (o = this._gsapBBox());
      return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), no.removeChild(t), this.style.cssText = s, o
    },
    Ph = function (e, t) {
      for (var i = t.length; i--;)
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i])
    },
    og = function (e) {
      var t;
      try {
        t = e.getBBox()
      } catch {
        t = Qc.call(e, !0)
      }
      return t && (t.width || t.height) || e.getBBox === Qc || (t = Qc.call(e, !0)), t && !t.width && !t.x && !t.y ? {
        x: +Ph(e, ["x", "cx", "x1"]) || 0,
        y: +Ph(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      } : t
    },
    ag = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && og(e))
    },
    fa = function (e, t) {
      if (t) {
        var i = e.style;
        t in mr && t !== Sn && (t = At), i.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), i.removeProperty(t.replace(Bd, "-$1").toLowerCase())) : i.removeAttribute(t)
      }
    },
    Or = function (e, t, i, r, s, o) {
      var a = new zi(e._pt, t, i, 0, 1, o ? ig : tg);
      return e._pt = a, a.b = r, a.e = s, e._props.push(i), a
    },
    Eh = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    iw = {
      grid: 1,
      flex: 1
    },
    Wr = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = ss.style,
        c = q1.test(t),
        u = e.tagName.toLowerCase() === "svg",
        f = (u ? "client" : "offset") + (c ? "Width" : "Height"),
        h = 100,
        p = r === "px",
        m = r === "%",
        g, y, w, S;
      return r === o || !s || Eh[r] || Eh[o] ? s : (o !== "px" && !p && (s = n(e, t, i, "px")), S = e.getCTM && ag(e), (m || o === "%") && (mr[t] || ~t.indexOf("adius")) ? (g = S ? e.getBBox()[c ? "width" : "height"] : e[f], qt(m ? s / g * h : s / 100 * g)) : (a[c ? "width" : "height"] = h + (p ? o : r), y = ~t.indexOf("adius") || r === "em" && e.appendChild && !u ? e : e.parentNode, S && (y = (e.ownerSVGElement || {}).parentNode), (!y || y === Er || !y.appendChild) && (y = Er.body), w = y._gsap, w && m && w.width && c && w.time === Gi.time && !w.uncache ? qt(s / w.width * h) : ((m || o === "%") && !iw[zn(y, "display")] && (a.position = zn(e, "position")), y === e && (a.position = "static"), y.appendChild(ss), g = ss[f], y.removeChild(ss), a.position = "absolute", c && m && (w = cs(y), w.time = Gi.time, w.width = y[f]), qt(p ? g * s / h : g && s ? h / g * s : 0))))
    },
    rr = function (e, t, i, r) {
      var s;
      return Vd || rd(), t in Rn && t !== "transform" && (t = Rn[t], ~t.indexOf(",") && (t = t.split(",")[0])), mr[t] && t !== "transform" ? (s = pa(e, r), s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Vl(zn(e, Sn)) + " " + s.zOrigin + "px") : (s = e.style[t], (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) && (s = $l[t] && $l[t](e, t, i) || zn(e, t) || Sm(e, t) || (t === "opacity" ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? Wr(e, t, s, i) + i : s
    },
    nw = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = go(t, e, 1),
          o = s && zn(e, s, 1);
        o && o !== i ? (t = s, i = o) : t === "borderColor" && (i = zn(e, "borderTopColor"))
      }
      var a = new zi(this._pt, e.style, t, 0, 1, Km),
        c = 0,
        u = 0,
        f, h, p, m, g, y, w, S, T, M, k, E;
      if (a.b = i, a.e = r, i += "", r += "", r === "auto" && (e.style[t] = r, r = zn(e, t) || r, e.style[t] = i), f = [i, r], Wm(f), i = f[0], r = f[1], p = i.match(Xs) || [], E = r.match(Xs) || [], E.length) {
        for (; h = Xs.exec(r);) w = h[0], T = r.substring(c, h.index), g ? g = (g + 1) % 5 : (T.substr(-5) === "rgba(" || T.substr(-5) === "hsla(") && (g = 1), w !== (y = p[u++] || "") && (m = parseFloat(y) || 0, k = y.substr((m + "").length), w.charAt(1) === "=" && (w = io(m, w) + k), S = parseFloat(w), M = w.substr((S + "").length), c = Xs.lastIndex - M.length, M || (M = M || Zi.units[t] || k, c === r.length && (r += M, a.e += M)), k !== M && (m = Wr(e, t, y, M) || 0), a._pt = {
          _next: a._pt,
          p: T || u === 1 ? T : ",",
          s: m,
          c: S - m,
          m: g && g < 4 || t === "zIndex" ? Math.round : 0
        });
        a.c = c < r.length ? r.substring(c, r.length) : ""
      } else a.r = t === "display" && r === "none" ? ig : tg;
      return gm.test(r) && (a.e = 0), this._pt = a, a
    },
    Oh = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    rw = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (i === "top" || i === "bottom" || r === "left" || r === "right") && (e = i, i = r, r = e), t[0] = Oh[i] || i, t[1] = Oh[r] || r, t.join(" ")
    },
    sw = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          o = i._gsap,
          a, c, u;
        if (s === "all" || s === !0) r.cssText = "", c = 1;
        else
          for (s = s.split(","), u = s.length; --u > -1;) a = s[u], mr[a] && (c = 1, a = a === "transformOrigin" ? Sn : At), fa(i, a);
        c && (fa(i, At), o && (o.svg && i.removeAttribute("transform"), pa(i, 1), o.uncache = 1, ng(r)))
      }
    },
    $l = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var o = e._pt = new zi(e._pt, t, i, 0, 0, sw);
          return o.u = r, o.pr = -10, o.tween = s, e._props.push(i), 1
        }
      }
    },
    ha = [1, 0, 0, 1, 0, 0],
    lg = {},
    cg = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Ch = function (e) {
      var t = zn(e, At);
      return cg(t) ? ha : t.substr(7).match(mm).map(qt)
    },
    Gd = function (e, t) {
      var i = e._gsap || cs(e),
        r = e.style,
        s = Ch(e),
        o, a, c, u;
      return i.svg && e.getAttribute("transform") ? (c = e.transform.baseVal.consolidate().matrix, s = [c.a, c.b, c.c, c.d, c.e, c.f], s.join(",") === "1,0,0,1,0,0" ? ha : s) : (s === ha && !e.offsetParent && e !== no && !i.svg && (c = r.display, r.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (u = 1, a = e.nextElementSibling, no.appendChild(e)), s = Ch(e), c ? r.display = c : fa(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : no.removeChild(e))), t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s)
    },
    sd = function (e, t, i, r, s, o) {
      var a = e._gsap,
        c = s || Gd(e, !0),
        u = a.xOrigin || 0,
        f = a.yOrigin || 0,
        h = a.xOffset || 0,
        p = a.yOffset || 0,
        m = c[0],
        g = c[1],
        y = c[2],
        w = c[3],
        S = c[4],
        T = c[5],
        M = t.split(" "),
        k = parseFloat(M[0]) || 0,
        E = parseFloat(M[1]) || 0,
        O, P, R, L;
      i ? c !== ha && (P = m * w - g * y) && (R = k * (w / P) + E * (-y / P) + (y * T - w * S) / P, L = k * (-g / P) + E * (m / P) - (m * T - g * S) / P, k = R, E = L) : (O = og(e), k = O.x + (~M[0].indexOf("%") ? k / 100 * O.width : k), E = O.y + (~(M[1] || M[0]).indexOf("%") ? E / 100 * O.height : E)), r || r !== !1 && a.smooth ? (S = k - u, T = E - f, a.xOffset = h + (S * m + T * y) - S, a.yOffset = p + (S * g + T * w) - T) : a.xOffset = a.yOffset = 0, a.xOrigin = k, a.yOrigin = E, a.smooth = !!r, a.origin = t, a.originIsAbsolute = !!i, e.style[Sn] = "0px 0px", o && (Or(o, a, "xOrigin", u, k), Or(o, a, "yOrigin", f, E), Or(o, a, "xOffset", h, a.xOffset), Or(o, a, "yOffset", p, a.yOffset)), e.setAttribute("data-svg-origin", k + " " + E)
    },
    pa = function (e, t) {
      var i = e._gsap || new Vm(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        c = getComputedStyle(e),
        u = zn(e, Sn) || "0",
        f, h, p, m, g, y, w, S, T, M, k, E, O, P, R, L, F, I, D, q, Z, B, se, re, le, we, A, ye, je, H, V, N;
      return f = h = p = y = w = S = T = M = k = 0, m = g = 1, i.svg = !!(e.getCTM && ag(e)), c.translate && ((c.translate !== "none" || c.scale !== "none" || c.rotate !== "none") && (r[At] = (c.translate !== "none" ? "translate3d(" + (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") + (c.scale !== "none" ? "scale(" + c.scale.split(" ").join(",") + ") " : "") + (c[At] !== "none" ? c[At] : "")), r.scale = r.rotate = r.translate = "none"), P = Gd(e, i.svg), i.svg && (i.uncache ? (le = e.getBBox(), u = i.xOrigin - le.x + "px " + (i.yOrigin - le.y) + "px", re = "") : re = !t && e.getAttribute("data-svg-origin"), sd(e, re || u, !!re || i.originIsAbsolute, i.smooth !== !1, P)), E = i.xOrigin || 0, O = i.yOrigin || 0, P !== ha && (I = P[0], D = P[1], q = P[2], Z = P[3], f = B = P[4], h = se = P[5], P.length === 6 ? (m = Math.sqrt(I * I + D * D), g = Math.sqrt(Z * Z + q * q), y = I || D ? Fs(D, I) * ts : 0, T = q || Z ? Fs(q, Z) * ts + y : 0, T && (g *= Math.abs(Math.cos(T * ro))), i.svg && (f -= E - (E * I + O * q), h -= O - (E * D + O * Z))) : (N = P[6], H = P[7], A = P[8], ye = P[9], je = P[10], V = P[11], f = P[12], h = P[13], p = P[14], R = Fs(N, je), w = R * ts, R && (L = Math.cos(-R), F = Math.sin(-R), re = B * L + A * F, le = se * L + ye * F, we = N * L + je * F, A = B * -F + A * L, ye = se * -F + ye * L, je = N * -F + je * L, V = H * -F + V * L, B = re, se = le, N = we), R = Fs(-q, je), S = R * ts, R && (L = Math.cos(-R), F = Math.sin(-R), re = I * L - A * F, le = D * L - ye * F, we = q * L - je * F, V = Z * F + V * L, I = re, D = le, q = we), R = Fs(D, I), y = R * ts, R && (L = Math.cos(R), F = Math.sin(R), re = I * L + D * F, le = B * L + se * F, D = D * L - I * F, se = se * L - B * F, I = re, B = le), w && Math.abs(w) + Math.abs(y) > 359.9 && (w = y = 0, S = 180 - S), m = qt(Math.sqrt(I * I + D * D + q * q)), g = qt(Math.sqrt(se * se + N * N)), R = Fs(B, se), T = Math.abs(R) > 2e-4 ? R * ts : 0, k = V ? 1 / (V < 0 ? -V : V) : 0), i.svg && (re = e.getAttribute("transform"), i.forceCSS = e.setAttribute("transform", "") || !cg(zn(e, At)), re && e.setAttribute("transform", re))), Math.abs(T) > 90 && Math.abs(T) < 270 && (s ? (m *= -1, T += y <= 0 ? 180 : -180, y += y <= 0 ? 180 : -180) : (g *= -1, T += T <= 0 ? 180 : -180)), t = t || i.uncache, i.x = f - ((i.xPercent = f && (!t && i.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * i.xPercent / 100 : 0) + o, i.y = h - ((i.yPercent = h && (!t && i.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * i.yPercent / 100 : 0) + o, i.z = p + o, i.scaleX = qt(m), i.scaleY = qt(g), i.rotation = qt(y) + a, i.rotationX = qt(w) + a, i.rotationY = qt(S) + a, i.skewX = T + a, i.skewY = M + a, i.transformPerspective = k + o, (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[Sn] = Vl(u)), i.xOffset = i.yOffset = 0, i.force3D = Zi.force3D, i.renderTransform = i.svg ? aw : sg ? ug : ow, i.uncache = 0, i
    },
    Vl = function (e) {
      return (e = e.split(" "))[0] + " " + e[1]
    },
    Jc = function (e, t, i) {
      var r = hi(t);
      return qt(parseFloat(t) + parseFloat(Wr(e, "x", i + "px", r))) + r
    },
    ow = function (e, t) {
      t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, ug(e, t)
    },
    Xr = "0deg",
    Oo = "0px",
    Zr = ") ",
    ug = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        c = i.z,
        u = i.rotation,
        f = i.rotationY,
        h = i.rotationX,
        p = i.skewX,
        m = i.skewY,
        g = i.scaleX,
        y = i.scaleY,
        w = i.transformPerspective,
        S = i.force3D,
        T = i.target,
        M = i.zOrigin,
        k = "",
        E = S === "auto" && e && e !== 1 || S === !0;
      if (M && (h !== Xr || f !== Xr)) {
        var O = parseFloat(f) * ro,
          P = Math.sin(O),
          R = Math.cos(O),
          L;
        O = parseFloat(h) * ro, L = Math.cos(O), o = Jc(T, o, P * L * -M), a = Jc(T, a, -Math.sin(O) * -M), c = Jc(T, c, R * L * -M + M)
      }
      w !== Oo && (k += "perspective(" + w + Zr), (r || s) && (k += "translate(" + r + "%, " + s + "%) "), (E || o !== Oo || a !== Oo || c !== Oo) && (k += c !== Oo || E ? "translate3d(" + o + ", " + a + ", " + c + ") " : "translate(" + o + ", " + a + Zr), u !== Xr && (k += "rotate(" + u + Zr), f !== Xr && (k += "rotateY(" + f + Zr), h !== Xr && (k += "rotateX(" + h + Zr), (p !== Xr || m !== Xr) && (k += "skew(" + p + ", " + m + Zr), (g !== 1 || y !== 1) && (k += "scale(" + g + ", " + y + Zr), T.style[At] = k || "translate(0, 0)"
    },
    aw = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        c = i.rotation,
        u = i.skewX,
        f = i.skewY,
        h = i.scaleX,
        p = i.scaleY,
        m = i.target,
        g = i.xOrigin,
        y = i.yOrigin,
        w = i.xOffset,
        S = i.yOffset,
        T = i.forceCSS,
        M = parseFloat(o),
        k = parseFloat(a),
        E, O, P, R, L;
      c = parseFloat(c), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, c += f), c || u ? (c *= ro, u *= ro, E = Math.cos(c) * h, O = Math.sin(c) * h, P = Math.sin(c - u) * -p, R = Math.cos(c - u) * p, u && (f *= ro, L = Math.tan(u - f), L = Math.sqrt(1 + L * L), P *= L, R *= L, f && (L = Math.tan(f), L = Math.sqrt(1 + L * L), E *= L, O *= L)), E = qt(E), O = qt(O), P = qt(P), R = qt(R)) : (E = h, R = p, O = P = 0), (M && !~(o + "").indexOf("px") || k && !~(a + "").indexOf("px")) && (M = Wr(m, "x", o, "px"), k = Wr(m, "y", a, "px")), (g || y || w || S) && (M = qt(M + g - (g * E + y * P) + w), k = qt(k + y - (g * O + y * R) + S)), (r || s) && (L = m.getBBox(), M = qt(M + r / 100 * L.width), k = qt(k + s / 100 * L.height)), L = "matrix(" + E + "," + O + "," + P + "," + R + "," + M + "," + k + ")", m.setAttribute("transform", L), T && (m.style[At] = L)
    },
    lw = function (e, t, i, r, s) {
      var o = 360,
        a = si(s),
        c = parseFloat(s) * (a && ~s.indexOf("rad") ? ts : 1),
        u = c - r,
        f = r + u + "deg",
        h, p;
      return a && (h = s.split("_")[1], h === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), h === "cw" && u < 0 ? u = (u + o * Mh) % o - ~~(u / o) * o : h === "ccw" && u > 0 && (u = (u - o * Mh) % o - ~~(u / o) * o)), e._pt = p = new zi(e._pt, t, i, r, u, V1), p.e = f, p.u = "deg", e._props.push(i), p
    },
    Dh = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e
    },
    cw = function (e, t, i) {
      var r = Dh({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a, c, u, f, h, p, m, g;
      r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), o[At] = t, a = pa(i, 1), fa(i, At), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[At], o[At] = t, a = pa(i, 1), o[At] = u);
      for (c in mr) u = r[c], f = a[c], u !== f && s.indexOf(c) < 0 && (m = hi(u), g = hi(f), h = m !== g ? Wr(i, c, u, g) : parseFloat(u), p = parseFloat(f), e._pt = new zi(e._pt, a, c, h, p - h, id), e._pt.u = g || 0, e._props.push(c));
      Dh(a, r)
    };
  Ni("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (a) {
        return e < 2 ? n + a : "border" + a + n
      });
    $l[e > 1 ? "border" + n : n] = function (a, c, u, f, h) {
      var p, m;
      if (arguments.length < 4) return p = o.map(function (g) {
        return rr(a, g, u)
      }), m = p.join(" "), m.split(p[0]).length === 5 ? p[0] : m;
      p = (f + "").split(" "), m = {}, o.forEach(function (g, y) {
        return m[g] = p[y] = p[y] || p[(y - 1) / 2 | 0]
      }), a.init(c, m, h)
    }
  });
  var Xd = {
    name: "css",
    register: rd,
    targetTest: function (e) {
      return e.style && e.nodeType
    },
    init: function (e, t, i, r, s) {
      var o = this._props,
        a = e.style,
        c = i.vars.startAt,
        u, f, h, p, m, g, y, w, S, T, M, k, E, O, P, R;
      Vd || rd(), this.styles = this.styles || rg(e), R = this.styles.props, this.tween = i;
      for (y in t)
        if (y !== "autoRound" && (f = t[y], !(Vi[y] && Um(y, t, i, r, e, s)))) {
          if (m = typeof f, g = $l[y], m === "function" && (f = f.call(i, r, e, s), m = typeof f), m === "string" && ~f.indexOf("random(") && (f = ca(f)), g) g(this, e, y, f, i) && (P = 1);
          else if (y.substr(0, 2) === "--") u = (getComputedStyle(e).getPropertyValue(y) + "").trim(), f += "", Yr.lastIndex = 0, Yr.test(u) || (w = hi(u), S = hi(f)), S ? w !== S && (u = Wr(e, y, u, S) + S) : w && (f += w), this.add(a, "setProperty", u, f, r, s, 0, 0, y), o.push(y), R.push(y, 0, a[y]);
          else if (m !== "undefined") {
            if (c && y in c ? (u = typeof c[y] == "function" ? c[y].call(i, r, e, s) : c[y], si(u) && ~u.indexOf("random(") && (u = ca(u)), hi(u + "") || (u += Zi.units[y] || hi(rr(e, y)) || ""), (u + "").charAt(1) === "=" && (u = rr(e, y))) : u = rr(e, y), p = parseFloat(u), T = m === "string" && f.charAt(1) === "=" && f.substr(0, 2), T && (f = f.substr(2)), h = parseFloat(f), y in Rn && (y === "autoAlpha" && (p === 1 && rr(e, "visibility") === "hidden" && h && (p = 0), R.push("visibility", 0, a.visibility), Or(this, a, "visibility", p ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), y !== "scale" && y !== "transform" && (y = Rn[y], ~y.indexOf(",") && (y = y.split(",")[0]))), M = y in mr, M) {
              if (this.styles.save(y), k || (E = e._gsap, E.renderTransform && !t.parseTransform || pa(e, t.parseTransform), O = t.smoothOrigin !== !1 && E.smooth, k = this._pt = new zi(this._pt, a, At, 0, 1, E.renderTransform, E, 0, -1), k.dep = 1), y === "scale") this._pt = new zi(this._pt, E, "scaleY", E.scaleY, (T ? io(E.scaleY, T + h) : h) - E.scaleY || 0, id), this._pt.u = 0, o.push("scaleY", y), y += "X";
              else if (y === "transformOrigin") {
                R.push(Sn, 0, a[Sn]), f = rw(f), E.svg ? sd(e, f, 0, O, 0, this) : (S = parseFloat(f.split(" ")[2]) || 0, S !== E.zOrigin && Or(this, E, "zOrigin", E.zOrigin, S), Or(this, a, y, Vl(u), Vl(f)));
                continue
              } else if (y === "svgOrigin") {
                sd(e, f, 1, O, 0, this);
                continue
              } else if (y in lg) {
                lw(this, E, y, p, T ? io(p, T + f) : f);
                continue
              } else if (y === "smoothOrigin") {
                Or(this, E, "smooth", E.smooth, f);
                continue
              } else if (y === "force3D") {
                E[y] = f;
                continue
              } else if (y === "transform") {
                cw(this, f, e);
                continue
              }
            } else y in a || (y = go(y) || y);
            if (M || (h || h === 0) && (p || p === 0) && !$1.test(f) && y in a) w = (u + "").substr((p + "").length), h || (h = 0), S = hi(f) || (y in Zi.units ? Zi.units[y] : w), w !== S && (p = Wr(e, y, u, S)), this._pt = new zi(this._pt, M ? E : a, y, p, (T ? io(p, T + h) : h) - p, !M && (S === "px" || y === "zIndex") && t.autoRound !== !1 ? B1 : id), this._pt.u = S || 0, w !== S && S !== "%" && (this._pt.b = u, this._pt.r = U1);
            else if (y in a) nw.call(this, e, y, u, T ? T + f : f);
            else if (y in e) this.add(e, y, u || e[y], T ? T + f : f, r, s);
            else if (y !== "parseTransform") {
              Yd(y, f);
              continue
            }
            M || (y in a ? R.push(y, 0, a[y]) : R.push(y, 1, u || e[y])), o.push(y)
          }
        } P && Qm(this)
    },
    render: function (e, t) {
      if (t.tween._time || !Ud())
        for (var i = t._pt; i;) i.r(e, i.d), i = i._next;
      else t.styles.revert()
    },
    get: rr,
    aliases: Rn,
    getSetter: function (e, t, i) {
      var r = Rn[t];
      return r && r.indexOf(",") < 0 && (t = r), t in mr && t !== Sn && (e._gsap.x || rr(e, "x")) ? i && Th === i ? t === "scale" ? K1 : Z1 : (Th = i || {}) && (t === "scale" ? Q1 : J1) : e.style && !Ld(e.style[t]) ? G1 : ~t.indexOf("-") ? X1 : qd(e, t)
    },
    core: {
      _removeProperty: fa,
      _getMatrix: Gd
    }
  };
  ei.utils.checkPrefix = go;
  ei.core.getStyleSaver = rg;
  (function (n, e, t, i) {
    var r = Ni(n + "," + e + "," + t, function (s) {
      mr[s] = 1
    });
    Ni(e, function (s) {
      Zi.units[s] = "deg", lg[s] = 1
    }), Rn[r[13]] = n + "," + e, Ni(i, function (s) {
      var o = s.split(":");
      Rn[o[1]] = r[o[0]]
    })
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  Ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (n) {
    Zi.units[n] = "px"
  });
  ei.registerPlugin(Xd);
  /*!
   * paths 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var uw = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    dw = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    fw = Math.PI / 180,
    Ha = Math.sin,
    Wa = Math.cos,
    Xo = Math.abs,
    Co = Math.sqrt,
    hw = function (e) {
      return typeof e == "number"
    },
    Ah = 1e5,
    Sr = function (e) {
      return Math.round(e * Ah) / Ah || 0
    };

  function pw(n, e, t, i, r, s, o) {
    for (var a = n.length, c, u, f, h, p; --a > -1;)
      for (c = n[a], u = c.length, f = 0; f < u; f += 2) h = c[f], p = c[f + 1], c[f] = h * e + p * i + s, c[f + 1] = h * t + p * r + o;
    return n._dirty = 1, n
  }

  function mw(n, e, t, i, r, s, o, a, c) {
    if (!(n === a && e === c)) {
      t = Xo(t), i = Xo(i);
      var u = r % 360 * fw,
        f = Wa(u),
        h = Ha(u),
        p = Math.PI,
        m = p * 2,
        g = (n - a) / 2,
        y = (e - c) / 2,
        w = f * g + h * y,
        S = -h * g + f * y,
        T = w * w,
        M = S * S,
        k = T / (t * t) + M / (i * i);
      k > 1 && (t = Co(k) * t, i = Co(k) * i);
      var E = t * t,
        O = i * i,
        P = (E * O - E * M - O * T) / (E * M + O * T);
      P < 0 && (P = 0);
      var R = (s === o ? -1 : 1) * Co(P),
        L = R * (t * S / i),
        F = R * -(i * w / t),
        I = (n + a) / 2,
        D = (e + c) / 2,
        q = I + (f * L - h * F),
        Z = D + (h * L + f * F),
        B = (w - L) / t,
        se = (S - F) / i,
        re = (-w - L) / t,
        le = (-S - F) / i,
        we = B * B + se * se,
        A = (se < 0 ? -1 : 1) * Math.acos(B / Co(we)),
        ye = (B * le - se * re < 0 ? -1 : 1) * Math.acos((B * re + se * le) / Co(we * (re * re + le * le)));
      isNaN(ye) && (ye = p), !o && ye > 0 ? ye -= m : o && ye < 0 && (ye += m), A %= m, ye %= m;
      var je = Math.ceil(Xo(ye) / (m / 4)),
        H = [],
        V = ye / je,
        N = 4 / 3 * Ha(V / 2) / (1 + Wa(V / 2)),
        te = f * t,
        j = h * t,
        ae = h * -i,
        fe = f * i,
        _e;
      for (_e = 0; _e < je; _e++) r = A + _e * V, w = Wa(r), S = Ha(r), B = Wa(r += V), se = Ha(r), H.push(w - N * S, S + N * w, B + N * se, se - N * B, B, se);
      for (_e = 0; _e < H.length; _e += 2) w = H[_e], S = H[_e + 1], H[_e] = w * te + S * ae + q, H[_e + 1] = w * j + S * fe + Z;
      return H[_e - 2] = a, H[_e - 1] = c, H
    }
  }

  function gw(n) {
    var e = (n + "").replace(dw, function (L) {
        var F = +L;
        return F < 1e-4 && F > -1e-4 ? 0 : F
      }).match(uw) || [],
      t = [],
      i = 0,
      r = 0,
      s = 2 / 3,
      o = e.length,
      a = 0,
      c = "ERROR: malformed path: " + n,
      u, f, h, p, m, g, y, w, S, T, M, k, E, O, P, R = function (F, I, D, q) {
        T = (D - F) / 3, M = (q - I) / 3, y.push(F + T, I + M, D - T, q - M, D, q)
      };
    if (!n || !isNaN(e[0]) || isNaN(e[1])) return console.log(c), t;
    for (u = 0; u < o; u++)
      if (E = m, isNaN(e[u]) ? (m = e[u].toUpperCase(), g = m !== e[u]) : u--, h = +e[u + 1], p = +e[u + 2], g && (h += i, p += r), u || (w = h, S = p), m === "M") y && (y.length < 8 ? t.length -= 1 : a += y.length), i = w = h, r = S = p, y = [h, p], t.push(y), u += 2, m = "L";
      else if (m === "C") y || (y = [0, 0]), g || (i = r = 0), y.push(h, p, i + e[u + 3] * 1, r + e[u + 4] * 1, i += e[u + 5] * 1, r += e[u + 6] * 1), u += 6;
    else if (m === "S") T = i, M = r, (E === "C" || E === "S") && (T += i - y[y.length - 4], M += r - y[y.length - 3]), g || (i = r = 0), y.push(T, M, h, p, i += e[u + 3] * 1, r += e[u + 4] * 1), u += 4;
    else if (m === "Q") T = i + (h - i) * s, M = r + (p - r) * s, g || (i = r = 0), i += e[u + 3] * 1, r += e[u + 4] * 1, y.push(T, M, i + (h - i) * s, r + (p - r) * s, i, r), u += 4;
    else if (m === "T") T = i - y[y.length - 4], M = r - y[y.length - 3], y.push(i + T, r + M, h + (i + T * 1.5 - h) * s, p + (r + M * 1.5 - p) * s, i = h, r = p), u += 2;
    else if (m === "H") R(i, r, i = h, r), u += 1;
    else if (m === "V") R(i, r, i, r = h + (g ? r - i : 0)), u += 1;
    else if (m === "L" || m === "Z") m === "Z" && (h = w, p = S, y.closed = !0), (m === "L" || Xo(i - h) > .5 || Xo(r - p) > .5) && (R(i, r, h, p), m === "L" && (u += 2)), i = h, r = p;
    else if (m === "A") {
      if (O = e[u + 4], P = e[u + 5], T = e[u + 6], M = e[u + 7], f = 7, O.length > 1 && (O.length < 3 ? (M = T, T = P, f--) : (M = P, T = O.substr(2), f -= 2), P = O.charAt(1), O = O.charAt(0)), k = mw(i, r, +e[u + 1], +e[u + 2], +e[u + 3], +O, +P, (g ? i : 0) + T * 1, (g ? r : 0) + M * 1), u += f, k)
        for (f = 0; f < k.length; f++) y.push(k[f]);
      i = y[y.length - 2], r = y[y.length - 1]
    } else console.log(c);
    return u = y.length, u < 6 ? (t.pop(), u = 0) : y[0] === y[u - 2] && y[1] === y[u - 1] && (y.closed = !0), t.totalPoints = a + u, t
  }

  function vw(n) {
    hw(n[0]) && (n = [n]);
    var e = "",
      t = n.length,
      i, r, s, o;
    for (r = 0; r < t; r++) {
      for (o = n[r], e += "M" + Sr(o[0]) + "," + Sr(o[1]) + " C", i = o.length, s = 2; s < i; s++) e += Sr(o[s++]) + "," + Sr(o[s++]) + " " + Sr(o[s++]) + "," + Sr(o[s++]) + " " + Sr(o[s++]) + "," + Sr(o[s]) + " ";
      o.closed && (e += "z")
    }
    return e
  }
  /*!
   * CustomEase 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var Ri, dg, fg = function () {
      return Ri || typeof window < "u" && (Ri = window.gsap) && Ri.registerPlugin && Ri
    },
    Lh = function () {
      Ri = fg(), Ri ? (Ri.registerEase("_CE", dc.create), dg = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    },
    yw = 1e20,
    ja = function (e) {
      return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
    },
    bw = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    _w = /[cLlsSaAhHvVtTqQ]/g,
    ww = function (e) {
      var t = e.length,
        i = yw,
        r;
      for (r = 1; r < t; r += 6) + e[r] < i && (i = +e[r]);
      return i
    },
    Sw = function (e, t, i) {
      !i && i !== 0 && (i = Math.max(+e[e.length - 1], +e[1]));
      var r = +e[0] * -1,
        s = -i,
        o = e.length,
        a = 1 / (+e[o - 2] + r),
        c = -t || (Math.abs(+e[o - 1] - +e[1]) < .01 * (+e[o - 2] - +e[0]) ? ww(e) + s : +e[o - 1] + s),
        u;
      for (c ? c = 1 / c : c = -a, u = 0; u < o; u += 2) e[u] = (+e[u] + r) * a, e[u + 1] = (+e[u + 1] + s) * c
    },
    xw = function n(e, t, i, r, s, o, a, c, u, f, h) {
      var p = (e + i) / 2,
        m = (t + r) / 2,
        g = (i + s) / 2,
        y = (r + o) / 2,
        w = (s + a) / 2,
        S = (o + c) / 2,
        T = (p + g) / 2,
        M = (m + y) / 2,
        k = (g + w) / 2,
        E = (y + S) / 2,
        O = (T + k) / 2,
        P = (M + E) / 2,
        R = a - e,
        L = c - t,
        F = Math.abs((i - a) * L - (r - c) * R),
        I = Math.abs((s - a) * L - (o - c) * R),
        D;
      return f || (f = [{
        x: e,
        y: t
      }, {
        x: a,
        y: c
      }], h = 1), f.splice(h || f.length - 1, 0, {
        x: O,
        y: P
      }), (F + I) * (F + I) > u * (R * R + L * L) && (D = f.length, n(e, t, p, m, T, M, O, P, u, f, h), n(O, P, k, E, w, S, a, c, u, f, h + 1 + (f.length - D))), f
    },
    dc = function () {
      function n(t, i, r) {
        dg || Lh(), this.id = t, this.setData(i, r)
      }
      var e = n.prototype;
      return e.setData = function (i, r) {
        r = r || {}, i = i || "0,0,1,1";
        var s = i.match(bw),
          o = 1,
          a = [],
          c = [],
          u = r.precision || 1,
          f = u <= 1,
          h, p, m, g, y, w, S, T, M;
        if (this.data = i, (_w.test(i) || ~i.indexOf("M") && i.indexOf("C") < 0) && (s = gw(i)[0]), h = s.length, h === 4) s.unshift(0, 0), s.push(1, 1), h = 8;
        else if ((h - 2) % 6) throw "Invalid CustomEase";
        for ((+s[0] != 0 || +s[h - 2] != 1) && Sw(s, r.height, r.originY), this.segment = s, g = 2; g < h; g += 6) p = {
          x: +s[g - 2],
          y: +s[g - 1]
        }, m = {
          x: +s[g + 4],
          y: +s[g + 5]
        }, a.push(p, m), xw(p.x, p.y, +s[g], +s[g + 1], +s[g + 2], +s[g + 3], m.x, m.y, 1 / (u * 2e5), a, a.length - 1);
        for (h = a.length, g = 0; g < h; g++) S = a[g], T = a[g - 1] || S, (S.x > T.x || T.y !== S.y && T.x === S.x || S === T) && S.x <= 1 ? (T.cx = S.x - T.x, T.cy = S.y - T.y, T.n = S, T.nx = S.x, f && g > 1 && Math.abs(T.cy / T.cx - a[g - 2].cy / a[g - 2].cx) > 2 && (f = 0), T.cx < o && (T.cx ? o = T.cx : (T.cx = .001, g === h - 1 && (T.x -= .001, o = Math.min(o, .001), f = 0)))) : (a.splice(g--, 1), h--);
        if (h = 1 / o + 1 | 0, y = 1 / h, w = 0, S = a[0], f) {
          for (g = 0; g < h; g++) M = g * y, S.nx < M && (S = a[++w]), p = S.y + (M - S.x) / S.cx * S.cy, c[g] = {
            x: M,
            cx: y,
            y: p,
            cy: 0,
            nx: 9
          }, g && (c[g - 1].cy = p - c[g - 1].y);
          c[h - 1].cy = a[a.length - 1].y - p
        } else {
          for (g = 0; g < h; g++) S.nx < g * y && (S = a[++w]), c[g] = S;
          w < a.length - 1 && (c[g - 1] = a[a.length - 2])
        }
        return this.ease = function (k) {
          var E = c[k * h | 0] || c[h - 1];
          return E.nx < k && (E = E.n), E.y + (k - E.x) / E.cx * E.cy
        }, this.ease.custom = this, this.id && Ri && Ri.registerEase(this.id, this.ease), this
      }, e.getSVGData = function (i) {
        return n.getSVGData(this, i)
      }, n.create = function (i, r, s) {
        return new n(i, r, s).ease
      }, n.register = function (i) {
        Ri = i, Lh()
      }, n.get = function (i) {
        return Ri.parseEase(i)
      }, n.getSVGData = function (i, r) {
        r = r || {};
        var s = r.width || 100,
          o = r.height || 100,
          a = r.x || 0,
          c = (r.y || 0) + o,
          u = Ri.utils.toArray(r.path)[0],
          f, h, p, m, g, y, w, S, T, M;
        if (r.invert && (o = -o, c = 0), typeof i == "string" && (i = Ri.parseEase(i)), i.custom && (i = i.custom), i instanceof n) f = vw(pw([i.segment], s, 0, 0, -o, a, c));
        else {
          for (f = [a, c], w = Math.max(5, (r.precision || 1) * 200), m = 1 / w, w += 2, S = 5 / w, T = ja(a + m * s), M = ja(c + i(m) * -o), h = (M - c) / (T - a), p = 2; p < w; p++) g = ja(a + p * m * s), y = ja(c + i(p * m) * -o), (Math.abs((y - M) / (g - T) - h) > S || p === w - 1) && (f.push(T, M), h = (y - M) / (g - T)), T = g, M = y;
          f = "M" + f.join(",")
        }
        return u && u.setAttribute("d", f), f
      }, n
    }();
  fg() && Ri.registerPlugin(dc);
  dc.version = "3.12.2";

  function Rh(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }
  }

  function Tw(n, e, t) {
    return e && Rh(n.prototype, e), t && Rh(n, t), n
  }
  /*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var li, od, Xi, Cr, Dr, so, hg, is, Zo, pg, or, bn, mg, gg = function () {
      return li || typeof window < "u" && (li = window.gsap) && li.registerPlugin && li
    },
    vg = 1,
    Ks = [],
    qe = [],
    Hn = [],
    Ko = Date.now,
    ad = function (e, t) {
      return t
    },
    Mw = function () {
      var e = Zo.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, qe), r.push.apply(r, Hn), qe = i, Hn = r, ad = function (o, a) {
        return t[o](a)
      }
    },
    Fr = function (e, t) {
      return ~Hn.indexOf(e) && Hn[Hn.indexOf(e) + 1][t]
    },
    Qo = function (e) {
      return !!~pg.indexOf(e)
    },
    xi = function (e, t, i, r, s) {
      return e.addEventListener(t, i, {
        passive: !r,
        capture: !!s
      })
    },
    Si = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r)
    },
    qa = "scrollLeft",
    $a = "scrollTop",
    ld = function () {
      return or && or.isPressed || qe.cache++
    },
    Ul = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          vg && (Xi.history.scrollRestoration = "manual");
          var o = or && or.isPressed;
          s = r.v = Math.round(s) || (or && or.iOS ? 1 : 0), e(s), r.cacheID = qe.cache, o && ad("ss", s)
        } else(t || qe.cache !== r.cacheID || ad("ref")) && (r.cacheID = qe.cache, r.v = e());
        return r.v + r.offset
      };
      return i.offset = 0, e && i
    },
    Ei = {
      s: qa,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Ul(function (n) {
        return arguments.length ? Xi.scrollTo(n, Qt.sc()) : Xi.pageXOffset || Cr[qa] || Dr[qa] || so[qa] || 0
      })
    },
    Qt = {
      s: $a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ei,
      sc: Ul(function (n) {
        return arguments.length ? Xi.scrollTo(Ei.sc(), n) : Xi.pageYOffset || Cr[$a] || Dr[$a] || so[$a] || 0
      })
    },
    Li = function (e, t) {
      return (t && t._ctx && t._ctx.selector || li.utils.toArray)(e)[0] || (typeof e == "string" && li.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    jr = function (e, t) {
      var i = t.s,
        r = t.sc;
      Qo(e) && (e = Cr.scrollingElement || Dr);
      var s = qe.indexOf(e),
        o = r === Qt.sc ? 1 : 2;
      !~s && (s = qe.push(e) - 1), qe[s + o] || xi(e, "scroll", ld);
      var a = qe[s + o],
        c = a || (qe[s + o] = Ul(Fr(e, i), !0) || (Qo(e) ? r : Ul(function (u) {
          return arguments.length ? e[i] = u : e[i]
        })));
      return c.target = e, a || (c.smooth = li.getProperty(e, "scrollBehavior") === "smooth"), c
    },
    cd = function (e, t, i) {
      var r = e,
        s = e,
        o = Ko(),
        a = o,
        c = t || 50,
        u = Math.max(500, c * 3),
        f = function (g, y) {
          var w = Ko();
          y || w - o > c ? (s = r, r = g, a = o, o = w) : i ? r += g : r = s + (g - s) / (w - a) * (o - a)
        },
        h = function () {
          s = r = i ? 0 : r, a = o = 0
        },
        p = function (g) {
          var y = a,
            w = s,
            S = Ko();
          return (g || g === 0) && g !== r && f(g), o === a || S - a > u ? 0 : (r + (i ? w : -w)) / ((i ? S : o) - y) * 1e3
        };
      return {
        update: f,
        reset: h,
        getVelocity: p
      }
    },
    Do = function (e, t) {
      return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    Ih = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i
    },
    yg = function () {
      Zo = li.core.globals().ScrollTrigger, Zo && Zo.core && Mw()
    },
    bg = function (e) {
      return li = e || gg(), li && typeof document < "u" && document.body && (Xi = window, Cr = document, Dr = Cr.documentElement, so = Cr.body, pg = [Xi, Cr, Dr, so], li.utils.clamp, mg = li.core.context || function () {}, is = "onpointerenter" in so ? "pointer" : "mouse", hg = Zt.isTouch = Xi.matchMedia && Xi.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Xi || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, bn = Zt.eventTypes = ("ontouchstart" in Dr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Dr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return vg = 0
      }, 500), yg(), od = 1), od
    };
  Ei.op = Qt;
  qe.cache = 0;
  var Zt = function () {
    function n(t) {
      this.init(t)
    }
    var e = n.prototype;
    return e.init = function (i) {
      od || bg(li) || console.warn("Please gsap.registerPlugin(Observer)"), Zo || yg();
      var r = i.tolerance,
        s = i.dragMinimum,
        o = i.type,
        a = i.target,
        c = i.lineHeight,
        u = i.debounce,
        f = i.preventDefault,
        h = i.onStop,
        p = i.onStopDelay,
        m = i.ignore,
        g = i.wheelSpeed,
        y = i.event,
        w = i.onDragStart,
        S = i.onDragEnd,
        T = i.onDrag,
        M = i.onPress,
        k = i.onRelease,
        E = i.onRight,
        O = i.onLeft,
        P = i.onUp,
        R = i.onDown,
        L = i.onChangeX,
        F = i.onChangeY,
        I = i.onChange,
        D = i.onToggleX,
        q = i.onToggleY,
        Z = i.onHover,
        B = i.onHoverEnd,
        se = i.onMove,
        re = i.ignoreCheck,
        le = i.isNormalizer,
        we = i.onGestureStart,
        A = i.onGestureEnd,
        ye = i.onWheel,
        je = i.onEnable,
        H = i.onDisable,
        V = i.onClick,
        N = i.scrollSpeed,
        te = i.capture,
        j = i.allowClicks,
        ae = i.lockAxis,
        fe = i.onLockAxis;
      this.target = a = Li(a) || Dr, this.vars = i, m && (m = li.utils.toArray(m)), r = r || 1e-9, s = s || 0, g = g || 1, N = N || 1, o = o || "wheel,touch,pointer", u = u !== !1, c || (c = parseFloat(Xi.getComputedStyle(so).lineHeight) || 22);
      var _e, Ae, Lt, Ye, ut, $t, xt, z = this,
        U = 0,
        Y = 0,
        Q = jr(a, Ei),
        K = jr(a, Qt),
        ue = Q(),
        Te = K(),
        at = ~o.indexOf("touch") && !~o.indexOf("pointer") && bn[0] === "pointerdown",
        Se = Qo(a),
        Pe = a.ownerDocument || Cr,
        nt = [0, 0, 0],
        Ee = [0, 0, 0],
        ee = 0,
        st = function () {
          return ee = Ko()
        },
        de = function (ge, $e) {
          return (z.event = ge) && m && ~m.indexOf(ge.target) || $e && at && ge.pointerType !== "touch" || re && re(ge, $e)
        },
        Ht = function () {
          z._vx.reset(), z._vy.reset(), Ae.pause(), h && h(z)
        },
        Di = function () {
          var ge = z.deltaX = Ih(nt),
            $e = z.deltaY = Ih(Ee),
            Tt = Math.abs(ge) >= r,
            ne = Math.abs($e) >= r;
          I && (Tt || ne) && I(z, ge, $e, nt, Ee), Tt && (E && z.deltaX > 0 && E(z), O && z.deltaX < 0 && O(z), L && L(z), D && z.deltaX < 0 != U < 0 && D(z), U = z.deltaX, nt[0] = nt[1] = nt[2] = 0), ne && (R && z.deltaY > 0 && R(z), P && z.deltaY < 0 && P(z), F && F(z), q && z.deltaY < 0 != Y < 0 && q(z), Y = z.deltaY, Ee[0] = Ee[1] = Ee[2] = 0), (Ye || Lt) && (se && se(z), Lt && (T(z), Lt = !1), Ye = !1), $t && !($t = !1) && fe && fe(z), ut && (ye(z), ut = !1), _e = 0
        },
        bi = function (ge, $e, Tt) {
          nt[Tt] += ge, Ee[Tt] += $e, z._vx.update(ge), z._vy.update($e), u ? _e || (_e = requestAnimationFrame(Di)) : Di()
        },
        en = function (ge, $e) {
          ae && !xt && (z.axis = xt = Math.abs(ge) > Math.abs($e) ? "x" : "y", $t = !0), xt !== "y" && (nt[2] += ge, z._vx.update(ge, !0)), xt !== "x" && (Ee[2] += $e, z._vy.update($e, !0)), u ? _e || (_e = requestAnimationFrame(Di)) : Di()
        },
        mt = function (ge) {
          if (!de(ge, 1)) {
            ge = Do(ge, f);
            var $e = ge.clientX,
              Tt = ge.clientY,
              ne = $e - z.x,
              Fe = Tt - z.y,
              $ = z.isDragging;
            z.x = $e, z.y = Tt, ($ || Math.abs(z.startX - $e) >= s || Math.abs(z.startY - Tt) >= s) && (T && (Lt = !0), $ || (z.isDragging = !0), en(ne, Fe), $ || w && w(z))
          }
        },
        _i = z.onPress = function (be) {
          de(be, 1) || be && be.button || (z.axis = xt = null, Ae.pause(), z.isPressed = !0, be = Do(be), U = Y = 0, z.startX = z.x = be.clientX, z.startY = z.y = be.clientY, z._vx.reset(), z._vy.reset(), xi(le ? a : Pe, bn[1], mt, f, !0), z.deltaX = z.deltaY = 0, M && M(z))
        },
        Kt = z.onRelease = function (be) {
          if (!de(be, 1)) {
            Si(le ? a : Pe, bn[1], mt, !0);
            var ge = !isNaN(z.y - z.startY),
              $e = z.isDragging && (Math.abs(z.x - z.startX) > 3 || Math.abs(z.y - z.startY) > 3),
              Tt = Do(be);
            !$e && ge && (z._vx.reset(), z._vy.reset(), f && j && li.delayedCall(.08, function () {
              if (Ko() - ee > 300 && !be.defaultPrevented) {
                if (be.target.click) be.target.click();
                else if (Pe.createEvent) {
                  var ne = Pe.createEvent("MouseEvents");
                  ne.initMouseEvent("click", !0, !0, Xi, 1, Tt.screenX, Tt.screenY, Tt.clientX, Tt.clientY, !1, !1, !1, !1, 0, null), be.target.dispatchEvent(ne)
                }
              }
            })), z.isDragging = z.isGesturing = z.isPressed = !1, h && !le && Ae.restart(!0), S && $e && S(z), k && k(z, $e)
          }
        },
        Oe = function (ge) {
          return ge.touches && ge.touches.length > 1 && (z.isGesturing = !0) && we(ge, z.isDragging)
        },
        Le = function () {
          return (z.isGesturing = !1) || A(z)
        },
        Ke = function (ge) {
          if (!de(ge)) {
            var $e = Q(),
              Tt = K();
            bi(($e - ue) * N, (Tt - Te) * N, 1), ue = $e, Te = Tt, h && Ae.restart(!0)
          }
        },
        dt = function (ge) {
          if (!de(ge)) {
            ge = Do(ge, f), ye && (ut = !0);
            var $e = (ge.deltaMode === 1 ? c : ge.deltaMode === 2 ? Xi.innerHeight : 1) * g;
            bi(ge.deltaX * $e, ge.deltaY * $e, 0), h && !le && Ae.restart(!0)
          }
        },
        Rt = function (ge) {
          if (!de(ge)) {
            var $e = ge.clientX,
              Tt = ge.clientY,
              ne = $e - z.x,
              Fe = Tt - z.y;
            z.x = $e, z.y = Tt, Ye = !0, (ne || Fe) && en(ne, Fe)
          }
        },
        ci = function (ge) {
          z.event = ge, Z(z)
        },
        It = function (ge) {
          z.event = ge, B(z)
        },
        Yt = function (ge) {
          return de(ge) || Do(ge, f) && V(z)
        };
      Ae = z._dc = li.delayedCall(p || .25, Ht).pause(), z.deltaX = z.deltaY = 0, z._vx = cd(0, 50, !0), z._vy = cd(0, 50, !0), z.scrollX = Q, z.scrollY = K, z.isDragging = z.isGesturing = z.isPressed = !1, mg(this), z.enable = function (be) {
        return z.isEnabled || (xi(Se ? Pe : a, "scroll", ld), o.indexOf("scroll") >= 0 && xi(Se ? Pe : a, "scroll", Ke, f, te), o.indexOf("wheel") >= 0 && xi(a, "wheel", dt, f, te), (o.indexOf("touch") >= 0 && hg || o.indexOf("pointer") >= 0) && (xi(a, bn[0], _i, f, te), xi(Pe, bn[2], Kt), xi(Pe, bn[3], Kt), j && xi(a, "click", st, !1, !0), V && xi(a, "click", Yt), we && xi(Pe, "gesturestart", Oe), A && xi(Pe, "gestureend", Le), Z && xi(a, is + "enter", ci), B && xi(a, is + "leave", It), se && xi(a, is + "move", Rt)), z.isEnabled = !0, be && be.type && _i(be), je && je(z)), z
      }, z.disable = function () {
        z.isEnabled && (Ks.filter(function (be) {
          return be !== z && Qo(be.target)
        }).length || Si(Se ? Pe : a, "scroll", ld), z.isPressed && (z._vx.reset(), z._vy.reset(), Si(le ? a : Pe, bn[1], mt, !0)), Si(Se ? Pe : a, "scroll", Ke, te), Si(a, "wheel", dt, te), Si(a, bn[0], _i, te), Si(Pe, bn[2], Kt), Si(Pe, bn[3], Kt), Si(a, "click", st, !0), Si(a, "click", Yt), Si(Pe, "gesturestart", Oe), Si(Pe, "gestureend", Le), Si(a, is + "enter", ci), Si(a, is + "leave", It), Si(a, is + "move", Rt), z.isEnabled = z.isPressed = z.isDragging = !1, H && H(z))
      }, z.kill = z.revert = function () {
        z.disable();
        var be = Ks.indexOf(z);
        be >= 0 && Ks.splice(be, 1), or === z && (or = 0)
      }, Ks.push(z), le && Qo(a) && (or = z), z.enable(y)
    }, Tw(n, [{
      key: "velocityX",
      get: function () {
        return this._vx.getVelocity()
      }
    }, {
      key: "velocityY",
      get: function () {
        return this._vy.getVelocity()
      }
    }]), n
  }();
  Zt.version = "3.12.2";
  Zt.create = function (n) {
    return new Zt(n)
  };
  Zt.register = bg;
  Zt.getAll = function () {
    return Ks.slice()
  };
  Zt.getById = function (n) {
    return Ks.filter(function (e) {
      return e.vars.id === n
    })[0]
  };
  gg() && li.registerPlugin(Zt);
  /*!
   * ScrollToPlugin 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var Oi, _g, dr, In, Nr, wg, Sg, Va, xg = function () {
      return typeof window < "u"
    },
    Tg = function () {
      return Oi || xg() && (Oi = window.gsap) && Oi.registerPlugin && Oi
    },
    Mg = function (e) {
      return typeof e == "string"
    },
    Yh = function (e) {
      return typeof e == "function"
    },
    ma = function (e, t) {
      var i = t === "x" ? "Width" : "Height",
        r = "scroll" + i,
        s = "client" + i;
      return e === dr || e === In || e === Nr ? Math.max(In[r], Nr[r]) - (dr["inner" + i] || In[s] || Nr[s]) : e[r] - e["offset" + i]
    },
    va = function (e, t) {
      var i = "scroll" + (t === "x" ? "Left" : "Top");
      return e === dr && (e.pageXOffset != null ? i = "page" + t.toUpperCase() + "Offset" : e = In[i] != null ? In : Nr),
        function () {
          return e[i]
        }
    },
    kw = function (e, t, i, r) {
      if (Yh(e) && (e = e(t, i, r)), typeof e != "object") return Mg(e) && e !== "max" && e.charAt(1) !== "=" ? {
        x: e,
        y: e
      } : {
        y: e
      };
      if (e.nodeType) return {
        y: e,
        x: e
      };
      var s = {},
        o;
      for (o in e) s[o] = o !== "onAutoKill" && Yh(e[o]) ? e[o](t, i, r) : e[o];
      return s
    },
    kg = function (e, t) {
      if (e = wg(e)[0], !e || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
      var i = e.getBoundingClientRect(),
        r = !t || t === dr || t === Nr,
        s = r ? {
          top: In.clientTop - (dr.pageYOffset || In.scrollTop || Nr.scrollTop || 0),
          left: In.clientLeft - (dr.pageXOffset || In.scrollLeft || Nr.scrollLeft || 0)
        } : t.getBoundingClientRect(),
        o = {
          x: i.left - s.left,
          y: i.top - s.top
        };
      return !r && t && (o.x += va(t, "x")(), o.y += va(t, "y")()), o
    },
    Fh = function (e, t, i, r, s) {
      return !isNaN(e) && typeof e != "object" ? parseFloat(e) - s : Mg(e) && e.charAt(1) === "=" ? parseFloat(e.substr(2)) * (e.charAt(0) === "-" ? -1 : 1) + r - s : e === "max" ? ma(t, i) - s : Math.min(ma(t, i), kg(e, t)[i] - s)
    },
    Nh = function () {
      Oi = Tg(), xg() && Oi && typeof document < "u" && document.body && (dr = window, Nr = document.body, In = document.documentElement, wg = Oi.utils.toArray, Oi.config({
        autoKillThreshold: 7
      }), Sg = Oi.config(), _g = 1)
    },
    yo = {
      version: "3.12.2",
      name: "scrollTo",
      rawVars: 1,
      register: function (e) {
        Oi = e, Nh()
      },
      init: function (e, t, i, r, s) {
        _g || Nh();
        var o = this,
          a = Oi.getProperty(e, "scrollSnapType");
        o.isWin = e === dr, o.target = e, o.tween = i, t = kw(t, r, e, s), o.vars = t, o.autoKill = !!t.autoKill, o.getX = va(e, "x"), o.getY = va(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), Va || (Va = Oi.core.globals().ScrollTrigger), Oi.getProperty(e, "scrollBehavior") === "smooth" && Oi.set(e, {
          scrollBehavior: "auto"
        }), a && a !== "none" && (o.snap = 1, o.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), t.x != null ? (o.add(o, "x", o.x, Fh(t.x, e, "x", o.x, t.offsetX || 0), r, s), o._props.push("scrollTo_x")) : o.skipX = 1, t.y != null ? (o.add(o, "y", o.y, Fh(t.y, e, "y", o.y, t.offsetY || 0), r, s), o._props.push("scrollTo_y")) : o.skipY = 1
      },
      render: function (e, t) {
        for (var i = t._pt, r = t.target, s = t.tween, o = t.autoKill, a = t.xPrev, c = t.yPrev, u = t.isWin, f = t.snap, h = t.snapInline, p, m, g, y, w; i;) i.r(e, i.d), i = i._next;
        p = u || !t.skipX ? t.getX() : a, m = u || !t.skipY ? t.getY() : c, g = m - c, y = p - a, w = Sg.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), o && (!t.skipX && (y > w || y < -w) && p < ma(r, "x") && (t.skipX = 1), !t.skipY && (g > w || g < -w) && m < ma(r, "y") && (t.skipY = 1), t.skipX && t.skipY && (s.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(s, t.vars.onAutoKillParams || []))), u ? dr.scrollTo(t.skipX ? p : t.x, t.skipY ? m : t.y) : (t.skipY || (r.scrollTop = t.y), t.skipX || (r.scrollLeft = t.x)), f && (e === 1 || e === 0) && (m = r.scrollTop, p = r.scrollLeft, h ? r.style.scrollSnapType = h : r.style.removeProperty("scroll-snap-type"), r.scrollTop = m + 1, r.scrollLeft = p + 1, r.scrollTop = m, r.scrollLeft = p), t.xPrev = t.x, t.yPrev = t.y, Va && Va.update()
      },
      kill: function (e) {
        var t = e === "scrollTo";
        (t || e === "scrollTo_x") && (this.skipX = 1), (t || e === "scrollTo_y") && (this.skipY = 1)
      }
    };
  yo.max = ma;
  yo.getOffset = kg;
  yo.buildGetter = va;
  Tg() && Oi.registerPlugin(yo);
  /*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var ce, Us, Ve, Ct, _n, _t, Pg, Bl, Gl, Qs, Tl, Ua, ui, fc, ud, Ti, zh, Hh, Bs, Eg, eu, Og, Wi, Cg, Dg, Ag, Mr, dd, Zd, oo, Kd, tu, Ba = 1,
    ki = Date.now,
    iu = ki(),
    pn = 0,
    Ho = 0,
    Wh = function (e, t, i) {
      var r = qi(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return i["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
    },
    jh = function (e, t) {
      return t && (!qi(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
    },
    Pw = function n() {
      return Ho && requestAnimationFrame(n)
    },
    qh = function () {
      return fc = 1
    },
    $h = function () {
      return fc = 0
    },
    Cn = function (e) {
      return e
    },
    Wo = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0
    },
    Lg = function () {
      return typeof window < "u"
    },
    Rg = function () {
      return ce || Lg() && (ce = window.gsap) && ce.registerPlugin && ce
    },
    bs = function (e) {
      return !!~Pg.indexOf(e)
    },
    Ig = function (e) {
      return (e === "Height" ? Kd : Ve["inner" + e]) || _n["client" + e] || _t["client" + e]
    },
    Yg = function (e) {
      return Fr(e, "getBoundingClientRect") || (bs(e) ? function () {
        return Cl.width = Ve.innerWidth, Cl.height = Kd, Cl
      } : function () {
        return sr(e)
      })
    },
    Ew = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        o = i.a;
      return (o = Fr(e, "getBoundingClientRect")) ? function () {
        return o()[r]
      } : function () {
        return (t ? Ig(s) : e["client" + s]) || 0
      }
    },
    Ow = function (e, t) {
      return !t || ~Hn.indexOf(e) ? Yg(e) : function () {
        return Cl
      }
    },
    ar = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(0, (i = "scroll" + r) && (o = Fr(e, i)) ? o() - Yg(e)()[s] : bs(e) ? (_n[i] || _t[i]) - Ig(r) : e[i] - e["offset" + r])
    },
    Ga = function (e, t) {
      for (var i = 0; i < Bs.length; i += 3)(!t || ~t.indexOf(Bs[i + 1])) && e(Bs[i], Bs[i + 1], Bs[i + 2])
    },
    qi = function (e) {
      return typeof e == "string"
    },
    Ci = function (e) {
      return typeof e == "function"
    },
    Ml = function (e) {
      return typeof e == "number"
    },
    ns = function (e) {
      return typeof e == "object"
    },
    Ao = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause()
    },
    nu = function (e, t) {
      if (e.enabled) {
        var i = t(e);
        i && i.totalTime && (e.callbackAnimation = i)
      }
    },
    Ns = Math.abs,
    Fg = "left",
    Ng = "top",
    Qd = "right",
    Jd = "bottom",
    hs = "width",
    ps = "height",
    Jo = "Right",
    ea = "Left",
    ta = "Top",
    ia = "Bottom",
    Ut = "padding",
    ln = "margin",
    vo = "Width",
    ef = "Height",
    oi = "px",
    cn = function (e) {
      return Ve.getComputedStyle(e)
    },
    Cw = function (e) {
      var t = cn(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
    },
    Vh = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e
    },
    sr = function (e, t) {
      var i = t && cn(e)[ud] !== "matrix(1, 0, 0, 1, 0, 0)" && ce.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r
    },
    fd = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0
    },
    zg = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t
    },
    Dw = function (e) {
      return function (t) {
        return ce.utils.snap(zg(e), t)
      }
    },
    tf = function (e) {
      var t = ce.utils.snap(e),
        i = Array.isArray(e) && e.slice(0).sort(function (r, s) {
          return r - s
        });
      return i ? function (r, s, o) {
        o === void 0 && (o = .001);
        var a;
        if (!s) return t(r);
        if (s > 0) {
          for (r -= o, a = 0; a < i.length; a++)
            if (i[a] >= r) return i[a];
          return i[a - 1]
        } else
          for (a = i.length, r += o; a--;)
            if (i[a] <= r) return i[a];
        return i[0]
      } : function (r, s, o) {
        o === void 0 && (o = .001);
        var a = t(r);
        return !s || Math.abs(a - r) < o || a - r < 0 == s < 0 ? a : t(s < 0 ? r - e : r + e)
      }
    },
    Aw = function (e) {
      return function (t, i) {
        return tf(zg(e))(t, i.direction)
      }
    },
    Xa = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r)
      })
    },
    ni = function (e, t, i, r, s) {
      return e.addEventListener(t, i, {
        passive: !r,
        capture: !!s
      })
    },
    ii = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r)
    },
    Za = function (e, t, i) {
      i = i && i.wheelHandler, i && (e(t, "wheel", i), e(t, "touchmove", i))
    },
    Uh = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    Ka = {
      toggleActions: "play",
      anticipatePin: 0
    },
    Xl = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    kl = function (e, t) {
      if (qi(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), e = e.substr(0, i - 1)), e = r + (e in Xl ? Xl[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
      }
      return e
    },
    Qa = function (e, t, i, r, s, o, a, c) {
      var u = s.startColor,
        f = s.endColor,
        h = s.fontSize,
        p = s.indent,
        m = s.fontWeight,
        g = Ct.createElement("div"),
        y = bs(i) || Fr(i, "pinType") === "fixed",
        w = e.indexOf("scroller") !== -1,
        S = y ? _t : i,
        T = e.indexOf("start") !== -1,
        M = T ? u : f,
        k = "border-color:" + M + ";font-size:" + h + ";color:" + M + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return k += "position:" + ((w || c) && y ? "fixed;" : "absolute;"), (w || c || !y) && (k += (r === Qt ? Qd : Jd) + ":" + (o + parseFloat(p)) + "px;"), a && (k += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), g._isStart = T, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = k, g.innerText = t || t === 0 ? e + "-" + t : e, S.children[0] ? S.insertBefore(g, S.children[0]) : S.appendChild(g), g._offset = g["offset" + r.op.d2], Pl(g, 0, r, T), g
    },
    Pl = function (e, t, i, r) {
      var s = {
          display: "block"
        },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      e._isFlipped = r, s[i.a + "Percent"] = r ? -100 : 0, s[i.a] = r ? "1px" : 0, s["border" + o + vo] = 1, s["border" + a + vo] = 0, s[i.p] = t + "px", ce.set(e, s)
    },
    He = [],
    hd = {},
    ya, Bh = function () {
      return ki() - pn > 34 && (ya || (ya = requestAnimationFrame(fr)))
    },
    zs = function () {
      (!Wi || !Wi.isPressed || Wi.startX > _t.clientWidth) && (qe.cache++, Wi ? ya || (ya = requestAnimationFrame(fr)) : fr(), pn || ws("scrollStart"), pn = ki())
    },
    ru = function () {
      Ag = Ve.innerWidth, Dg = Ve.innerHeight
    },
    jo = function () {
      qe.cache++, !ui && !Og && !Ct.fullscreenElement && !Ct.webkitFullscreenElement && (!Cg || Ag !== Ve.innerWidth || Math.abs(Ve.innerHeight - Dg) > Ve.innerHeight * .25) && Bl.restart(!0)
    },
    _s = {},
    Lw = [],
    Hg = function n() {
      return ii(pe, "scrollEnd", n) || os(!0)
    },
    ws = function (e) {
      return _s[e] && _s[e].map(function (t) {
        return t()
      }) || Lw
    },
    ji = [],
    Wg = function (e) {
      for (var t = 0; t < ji.length; t += 5)(!e || ji[t + 4] && ji[t + 4].query === e) && (ji[t].style.cssText = ji[t + 1], ji[t].getBBox && ji[t].setAttribute("transform", ji[t + 2] || ""), ji[t + 3].uncache = 1)
    },
    nf = function (e, t) {
      var i;
      for (Ti = 0; Ti < He.length; Ti++) i = He[Ti], i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      t && Wg(t), t || ws("revert")
    },
    jg = function (e, t) {
      qe.cache++, (t || !Mi) && qe.forEach(function (i) {
        return Ci(i) && i.cacheID++ && (i.rec = 0)
      }), qi(e) && (Ve.history.scrollRestoration = Zd = e)
    },
    Mi, ms = 0,
    Gh, Rw = function () {
      if (Gh !== ms) {
        var e = Gh = ms;
        requestAnimationFrame(function () {
          return e === ms && os(!0)
        })
      }
    },
    qg = function () {
      _t.appendChild(oo), Kd = oo.offsetHeight || Ve.innerHeight, _t.removeChild(oo)
    },
    os = function (e, t) {
      if (pn && !e) {
        ni(pe, "scrollEnd", Hg);
        return
      }
      qg(), Mi = pe.isRefreshing = !0, qe.forEach(function (r) {
        return Ci(r) && ++r.cacheID && (r.rec = r())
      });
      var i = ws("refreshInit");
      Eg && pe.sort(), t || nf(), qe.forEach(function (r) {
        Ci(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0))
      }), He.slice(0).forEach(function (r) {
        return r.refresh()
      }), He.forEach(function (r, s) {
        if (r._subPinOffset && r.pin) {
          var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = r.pin[o];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - a), r.refresh()
        }
      }), He.forEach(function (r) {
        var s = ar(r.scroller, r._dir);
        (r.vars.end === "max" || r._endClamp && r.end > s) && r.setPositions(r.start, Math.max(r.start + 1, s), !0)
      }), i.forEach(function (r) {
        return r && r.render && r.render(-1)
      }), qe.forEach(function (r) {
        Ci(r) && (r.smooth && requestAnimationFrame(function () {
          return r.target.style.scrollBehavior = "smooth"
        }), r.rec && r(r.rec))
      }), jg(Zd, 1), Bl.pause(), ms++, Mi = 2, fr(2), He.forEach(function (r) {
        return Ci(r.vars.onRefresh) && r.vars.onRefresh(r)
      }), Mi = pe.isRefreshing = !1, ws("refresh")
    },
    pd = 0,
    El = 1,
    na, fr = function (e) {
      if (!Mi || e === 2) {
        pe.isUpdating = !0, na && na.update(0);
        var t = He.length,
          i = ki(),
          r = i - iu >= 50,
          s = t && He[0].scroll();
        if (El = pd > s ? -1 : 1, Mi || (pd = s), r && (pn && !fc && i - pn > 200 && (pn = 0, ws("scrollEnd")), Tl = iu, iu = i), El < 0) {
          for (Ti = t; Ti-- > 0;) He[Ti] && He[Ti].update(0, r);
          El = 1
        } else
          for (Ti = 0; Ti < t; Ti++) He[Ti] && He[Ti].update(0, r);
        pe.isUpdating = !1
      }
      ya = 0
    },
    md = [Fg, Ng, Jd, Qd, ln + ia, ln + Jo, ln + ta, ln + ea, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Ol = md.concat([hs, ps, "boxSizing", "max" + vo, "max" + ef, "position", ln, Ut, Ut + ta, Ut + Jo, Ut + ia, Ut + ea]),
    Iw = function (e, t, i) {
      ao(i);
      var r = e._gsap;
      if (r.spacerIsNative) ao(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t))
      }
      e._gsap.swappedIn = !1
    },
    su = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = md.length, o = t.style, a = e.style, c; s--;) c = md[s], o[c] = i[c];
        o.position = i.position === "absolute" ? "absolute" : "relative", i.display === "inline" && (o.display = "inline-block"), a[Jd] = a[Qd] = "auto", o.flexBasis = i.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[hs] = fd(e, Ei) + oi, o[ps] = fd(e, Qt) + oi, o[Ut] = a[ln] = a[Ng] = a[Fg] = "0", ao(r), a[hs] = a["max" + vo] = i[hs], a[ps] = a["max" + ef] = i[ps], a[Ut] = i[Ut], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
      }
    },
    Yw = /([A-Z])/g,
    ao = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s, o;
        for ((e.t._gsap || ce.core.getCache(e.t)).uncache = 1; r < i; r += 2) o = e[r + 1], s = e[r], o ? t[s] = o : t[s] && t.removeProperty(s.replace(Yw, "-$1").toLowerCase())
      }
    },
    Ja = function (e) {
      for (var t = Ol.length, i = e.style, r = [], s = 0; s < t; s++) r.push(Ol[s], i[Ol[s]]);
      return r.t = e, r
    },
    Fw = function (e, t, i) {
      for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2) a = e[o], r.push(a, a in t ? t[a] : e[o + 1]);
      return r.t = e.t, r
    },
    Cl = {
      left: 0,
      top: 0
    },
    Xh = function (e, t, i, r, s, o, a, c, u, f, h, p, m, g) {
      Ci(e) && (e = e(c)), qi(e) && e.substr(0, 3) === "max" && (e = p + (e.charAt(4) === "=" ? kl("0" + e.substr(3), i) : 0));
      var y = m ? m.time() : 0,
        w, S, T;
      if (m && m.seek(0), isNaN(e) || (e = +e), Ml(e)) m && (e = ce.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, p, e)), a && Pl(a, i, r, !0);
      else {
        Ci(t) && (t = t(c));
        var M = (e || "0").split(" "),
          k, E, O, P;
        T = Li(t, c) || _t, k = sr(T) || {}, (!k || !k.left && !k.top) && cn(T).display === "none" && (P = T.style.display, T.style.display = "block", k = sr(T), P ? T.style.display = P : T.style.removeProperty("display")), E = kl(M[0], k[r.d]), O = kl(M[1] || "0", i), e = k[r.p] - u[r.p] - f + E + s - O, a && Pl(a, O, r, i - O < 20 || a._isStart && O > 20), i -= i - O
      }
      if (g && (c[g] = e || -.001, e < 0 && (e = 0)), o) {
        var R = e + i,
          L = o._isStart;
        w = "scroll" + r.d2, Pl(o, R, r, L && R > 20 || !L && (h ? Math.max(_t[w], _n[w]) : o.parentNode[w]) <= R + 1), h && (u = sr(a), h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + oi))
      }
      return m && T && (w = sr(T), m.seek(p), S = sr(T), m._caScrollDist = w[r.p] - S[r.p], e = e / m._caScrollDist * p), m && m.seek(y), m ? e : Math.round(e)
    },
    Nw = /(webkit|moz|length|cssText|inset)/i,
    Zh = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          o, a;
        if (t === _t) {
          e._stOrig = s.cssText, a = cn(e);
          for (o in a) !+o && !Nw.test(o) && a[o] && typeof s[o] == "string" && o !== "0" && (s[o] = a[o]);
          s.top = i, s.left = r
        } else s.cssText = e._stOrig;
        ce.core.getCache(e).uncache = 1, t.appendChild(e)
      }
    },
    $g = function (e, t, i) {
      var r = t,
        s = r;
      return function (o) {
        var a = Math.round(e());
        return a !== r && a !== s && Math.abs(a - r) > 3 && Math.abs(a - s) > 3 && (o = a, i && i()), s = r, r = o, o
      }
    },
    el = function (e, t, i) {
      var r = {};
      r[t.p] = "+=" + i, ce.set(e, r)
    },
    Kh = function (e, t) {
      var i = jr(e, t),
        r = "_scroll" + t.p2,
        s = function o(a, c, u, f, h) {
          var p = o.tween,
            m = c.onComplete,
            g = {};
          u = u || i();
          var y = $g(i, u, function () {
            p.kill(), o.tween = 0
          });
          return h = f && h || 0, f = f || a - u, p && p.kill(), c[r] = a, c.modifiers = g, g[r] = function () {
            return y(u + f * p.ratio + h * p.ratio * p.ratio)
          }, c.onUpdate = function () {
            qe.cache++, fr()
          }, c.onComplete = function () {
            o.tween = 0, m && m.call(p)
          }, p = o.tween = ce.to(e, c), p
        };
      return e[r] = i, i.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0)
      }, ni(e, "wheel", i.wheelHandler), pe.isTouch && ni(e, "touchmove", i.wheelHandler), s
    },
    pe = function () {
      function n(t, i) {
        Us || n.register(ce) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), dd(this), this.init(t, i)
      }
      var e = n.prototype;
      return e.init = function (i, r) {
        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ho) {
          this.update = this.refresh = this.kill = Cn;
          return
        }
        i = Vh(qi(i) || Ml(i) || i.nodeType ? {
          trigger: i
        } : i, Ka);
        var s = i,
          o = s.onUpdate,
          a = s.toggleClass,
          c = s.id,
          u = s.onToggle,
          f = s.onRefresh,
          h = s.scrub,
          p = s.trigger,
          m = s.pin,
          g = s.pinSpacing,
          y = s.invalidateOnRefresh,
          w = s.anticipatePin,
          S = s.onScrubComplete,
          T = s.onSnapComplete,
          M = s.once,
          k = s.snap,
          E = s.pinReparent,
          O = s.pinSpacer,
          P = s.containerAnimation,
          R = s.fastScrollEnd,
          L = s.preventOverlaps,
          F = i.horizontal || i.containerAnimation && i.horizontal !== !1 ? Ei : Qt,
          I = !h && h !== 0,
          D = Li(i.scroller || Ve),
          q = ce.core.getCache(D),
          Z = bs(D),
          B = ("pinType" in i ? i.pinType : Fr(D, "pinType") || Z && "fixed") === "fixed",
          se = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
          re = I && i.toggleActions.split(" "),
          le = "markers" in i ? i.markers : Ka.markers,
          we = Z ? 0 : parseFloat(cn(D)["border" + F.p2 + vo]) || 0,
          A = this,
          ye = i.onRefreshInit && function () {
            return i.onRefreshInit(A)
          },
          je = Ew(D, Z, F),
          H = Ow(D, Z),
          V = 0,
          N = 0,
          te = 0,
          j = jr(D, F),
          ae, fe, _e, Ae, Lt, Ye, ut, $t, xt, z, U, Y, Q, K, ue, Te, at, Se, Pe, nt, Ee, ee, st, de, Ht, Di, bi, en, mt, _i, Kt, Oe, Le, Ke, dt, Rt, ci, It, Yt;
        if (A._startClamp = A._endClamp = !1, A._dir = F, w *= 45, A.scroller = D, A.scroll = P ? P.time.bind(P) : j, Ae = j(), A.vars = i, r = r || i.animation, "refreshPriority" in i && (Eg = 1, i.refreshPriority === -9999 && (na = A)), q.tweenScroll = q.tweenScroll || {
            top: Kh(D, Qt),
            left: Kh(D, Ei)
          }, A.tweenTo = ae = q.tweenScroll[F.p], A.scrubDuration = function (ne) {
            Le = Ml(ne) && ne, Le ? Oe ? Oe.duration(ne) : Oe = ce.to(r, {
              ease: "expo",
              totalProgress: "+=0",
              duration: Le,
              paused: !0,
              onComplete: function () {
                return S && S(A)
              }
            }) : (Oe && Oe.progress(1).kill(), Oe = 0)
          }, r && (r.vars.lazy = !1, r._initted && !A.isReverted || r.vars.immediateRender !== !1 && i.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), A.animation = r.pause(), r.scrollTrigger = A, A.scrubDuration(h), _i = 0, c || (c = r.vars.id)), k && ((!ns(k) || k.push) && (k = {
            snapTo: k
          }), "scrollBehavior" in _t.style && ce.set(Z ? [_t, _n] : D, {
            scrollBehavior: "auto"
          }), qe.forEach(function (ne) {
            return Ci(ne) && ne.target === (Z ? Ct.scrollingElement || _n : D) && (ne.smooth = !1)
          }), _e = Ci(k.snapTo) ? k.snapTo : k.snapTo === "labels" ? Dw(r) : k.snapTo === "labelsDirectional" ? Aw(r) : k.directional !== !1 ? function (ne, Fe) {
            return tf(k.snapTo)(ne, ki() - N < 500 ? 0 : Fe.direction)
          } : ce.utils.snap(k.snapTo), Ke = k.duration || {
            min: .1,
            max: 2
          }, Ke = ns(Ke) ? Qs(Ke.min, Ke.max) : Qs(Ke, Ke), dt = ce.delayedCall(k.delay || Le / 2 || .1, function () {
            var ne = j(),
              Fe = ki() - N < 500,
              $ = ae.tween;
            if ((Fe || Math.abs(A.getVelocity()) < 10) && !$ && !fc && V !== ne) {
              var Ne = (ne - Ye) / K,
                Vt = r && !I ? r.totalProgress() : Ne,
                xe = Fe ? 0 : (Vt - Kt) / (ki() - Tl) * 1e3 || 0,
                gt = ce.utils.clamp(-Ne, 1 - Ne, Ns(xe / 2) * xe / .185),
                Me = Ne + (k.inertia === !1 ? 0 : gt),
                Et = Qs(0, 1, _e(Me, A)),
                vt = Math.round(Ye + Et * K),
                ke = k,
                Wt = ke.onStart,
                Be = ke.onInterrupt,
                Qe = ke.onComplete;
              if (ne <= ut && ne >= Ye && vt !== ne) {
                if ($ && !$._initted && $.data <= Ns(vt - ne)) return;
                k.inertia === !1 && (gt = Et - Ne), ae(vt, {
                  duration: Ke(Ns(Math.max(Ns(Me - Vt), Ns(Et - Vt)) * .185 / xe / .05 || 0)),
                  ease: k.ease || "power3",
                  data: Ns(vt - ne),
                  onInterrupt: function () {
                    return dt.restart(!0) && Be && Be(A)
                  },
                  onComplete: function () {
                    A.update(), V = j(), _i = Kt = r && !I ? r.totalProgress() : A.progress, T && T(A), Qe && Qe(A)
                  }
                }, ne, gt * K, vt - ne - gt * K), Wt && Wt(A, ae.tween)
              }
            } else A.isActive && V !== ne && dt.restart(!0)
          }).pause()), c && (hd[c] = A), p = A.trigger = Li(p || m !== !0 && m), Yt = p && p._gsap && p._gsap.stRevert, Yt && (Yt = Yt(A)), m = m === !0 ? p : Li(m), qi(a) && (a = {
            targets: p,
            className: a
          }), m && (g === !1 || g === ln || (g = !g && m.parentNode && m.parentNode.style && cn(m.parentNode).display === "flex" ? !1 : Ut), A.pin = m, fe = ce.core.getCache(m), fe.spacer ? ue = fe.pinState : (O && (O = Li(O), O && !O.nodeType && (O = O.current || O.nativeElement), fe.spacerIsNative = !!O, O && (fe.spacerState = Ja(O))), fe.spacer = Se = O || Ct.createElement("div"), Se.classList.add("pin-spacer"), c && Se.classList.add("pin-spacer-" + c), fe.pinState = ue = Ja(m)), i.force3D !== !1 && ce.set(m, {
            force3D: !0
          }), A.spacer = Se = fe.spacer, mt = cn(m), de = mt[g + F.os2], nt = ce.getProperty(m), Ee = ce.quickSetter(m, F.a, oi), su(m, Se, mt), at = Ja(m)), le) {
          Y = ns(le) ? Vh(le, Uh) : Uh, z = Qa("scroller-start", c, D, F, Y, 0), U = Qa("scroller-end", c, D, F, Y, 0, z), Pe = z["offset" + F.op.d2];
          var be = Li(Fr(D, "content") || D);
          $t = this.markerStart = Qa("start", c, be, F, Y, Pe, 0, P), xt = this.markerEnd = Qa("end", c, be, F, Y, Pe, 0, P), P && (It = ce.quickSetter([$t, xt], F.a, oi)), !B && !(Hn.length && Fr(D, "fixedMarkers") === !0) && (Cw(Z ? _t : D), ce.set([z, U], {
            force3D: !0
          }), Di = ce.quickSetter(z, F.a, oi), en = ce.quickSetter(U, F.a, oi))
        }
        if (P) {
          var ge = P.vars.onUpdate,
            $e = P.vars.onUpdateParams;
          P.eventCallback("onUpdate", function () {
            A.update(0, 0, 1), ge && ge.apply(P, $e || [])
          })
        }
        if (A.previous = function () {
            return He[He.indexOf(A) - 1]
          }, A.next = function () {
            return He[He.indexOf(A) + 1]
          }, A.revert = function (ne, Fe) {
            if (!Fe) return A.kill(!0);
            var $ = ne !== !1 || !A.enabled,
              Ne = ui;
            $ !== A.isReverted && ($ && (Rt = Math.max(j(), A.scroll.rec || 0), te = A.progress, ci = r && r.progress()), $t && [$t, xt, z, U].forEach(function (Vt) {
              return Vt.style.display = $ ? "none" : "block"
            }), $ && (ui = A, A.update($)), m && (!E || !A.isActive) && ($ ? Iw(m, Se, ue) : su(m, Se, cn(m), Ht)), $ || A.update($), ui = Ne, A.isReverted = $)
          }, A.refresh = function (ne, Fe, $, Ne) {
            if (!((ui || !A.enabled) && !Fe)) {
              if (m && ne && pn) {
                ni(n, "scrollEnd", Hg);
                return
              }!Mi && ye && ye(A), ui = A, ae.tween && !$ && (ae.tween.kill(), ae.tween = 0), Oe && Oe.pause(), y && r && r.revert({
                kill: !1
              }).invalidate(), A.isReverted || A.revert(!0, !0), A._subPinOffset = !1;
              var Vt = je(),
                xe = H(),
                gt = P ? P.duration() : ar(D, F),
                Me = K <= .01,
                Et = 0,
                vt = Ne || 0,
                ke = ns($) ? $.end : i.end,
                Wt = i.endTrigger || p,
                Be = ns($) ? $.start : i.start || (i.start === 0 || !p ? 0 : m ? "0 0" : "0 100%"),
                Qe = A.pinnedContainer = i.pinnedContainer && Li(i.pinnedContainer, A),
                Ft = p && Math.max(0, He.indexOf(A)) || 0,
                Ot = Ft,
                yt, ti, Un, Os, ze, Mt, tn, Cs, So, $r, nn, Vr, Ds;
              for (le && ns($) && (Vr = ce.getProperty(z, F.p), Ds = ce.getProperty(U, F.p)); Ot--;) Mt = He[Ot], Mt.end || Mt.refresh(0, 1) || (ui = A), tn = Mt.pin, tn && (tn === p || tn === m || tn === Qe) && !Mt.isReverted && ($r || ($r = []), $r.unshift(Mt), Mt.revert(!0, !0)), Mt !== He[Ot] && (Ft--, Ot--);
              for (Ci(Be) && (Be = Be(A)), Be = Wh(Be, "start", A), Ye = Xh(Be, p, Vt, F, j(), $t, z, A, xe, we, B, gt, P, A._startClamp && "_startClamp") || (m ? -.001 : 0), Ci(ke) && (ke = ke(A)), qi(ke) && !ke.indexOf("+=") && (~ke.indexOf(" ") ? ke = (qi(Be) ? Be.split(" ")[0] : "") + ke : (Et = kl(ke.substr(2), Vt), ke = qi(Be) ? Be : (P ? ce.utils.mapRange(0, P.duration(), P.scrollTrigger.start, P.scrollTrigger.end, Ye) : Ye) + Et, Wt = p)), ke = Wh(ke, "end", A), ut = Math.max(Ye, Xh(ke || (Wt ? "100% 0" : gt), Wt, Vt, F, j() + Et, xt, U, A, xe, we, B, gt, P, A._endClamp && "_endClamp")) || -.001, Et = 0, Ot = Ft; Ot--;) Mt = He[Ot], tn = Mt.pin, tn && Mt.start - Mt._pinPush <= Ye && !P && Mt.end > 0 && (yt = Mt.end - (A._startClamp ? Math.max(0, Mt.start) : Mt.start), (tn === p && Mt.start - Mt._pinPush < Ye || tn === Qe) && isNaN(Be) && (Et += yt * (1 - Mt.progress)), tn === m && (vt += yt));
              if (Ye += Et, ut += Et, A._startClamp && (A._startClamp += Et), A._endClamp && !Mi && (A._endClamp = ut || -.001, ut = Math.min(ut, ar(D, F))), K = ut - Ye || (Ye -= .01) && .001, Me && (te = ce.utils.clamp(0, 1, ce.utils.normalize(Ye, ut, Rt))), A._pinPush = vt, $t && Et && (yt = {}, yt[F.a] = "+=" + Et, Qe && (yt[F.p] = "-=" + j()), ce.set([$t, xt], yt)), m) yt = cn(m), Os = F === Qt, Un = j(), ee = parseFloat(nt(F.a)) + vt, !gt && ut > 1 && (nn = (Z ? Ct.scrollingElement || _n : D).style, nn = {
                style: nn,
                value: nn["overflow" + F.a.toUpperCase()]
              }, Z && cn(_t)["overflow" + F.a.toUpperCase()] !== "scroll" && (nn.style["overflow" + F.a.toUpperCase()] = "scroll")), su(m, Se, yt), at = Ja(m), ti = sr(m, !0), Cs = B && jr(D, Os ? Ei : Qt)(), g && (Ht = [g + F.os2, K + vt + oi], Ht.t = Se, Ot = g === Ut ? fd(m, F) + K + vt : 0, Ot && Ht.push(F.d, Ot + oi), ao(Ht), Qe && He.forEach(function (Ur) {
                Ur.pin === Qe && Ur.vars.pinSpacing !== !1 && (Ur._subPinOffset = !0)
              }), B && j(Rt)), B && (ze = {
                top: ti.top + (Os ? Un - Ye : Cs) + oi,
                left: ti.left + (Os ? Cs : Un - Ye) + oi,
                boxSizing: "border-box",
                position: "fixed"
              }, ze[hs] = ze["max" + vo] = Math.ceil(ti.width) + oi, ze[ps] = ze["max" + ef] = Math.ceil(ti.height) + oi, ze[ln] = ze[ln + ta] = ze[ln + Jo] = ze[ln + ia] = ze[ln + ea] = "0", ze[Ut] = yt[Ut], ze[Ut + ta] = yt[Ut + ta], ze[Ut + Jo] = yt[Ut + Jo], ze[Ut + ia] = yt[Ut + ia], ze[Ut + ea] = yt[Ut + ea], Te = Fw(ue, ze, E), Mi && j(0)), r ? (So = r._initted, eu(1), r.render(r.duration(), !0, !0), st = nt(F.a) - ee + K + vt, bi = Math.abs(K - st) > 1, B && bi && Te.splice(Te.length - 2, 2), r.render(0, !0, !0), So || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), eu(0)) : st = K, nn && (nn.value ? nn.style["overflow" + F.a.toUpperCase()] = nn.value : nn.style.removeProperty("overflow-" + F.a));
              else if (p && j() && !P)
                for (ti = p.parentNode; ti && ti !== _t;) ti._pinOffset && (Ye -= ti._pinOffset, ut -= ti._pinOffset), ti = ti.parentNode;
              $r && $r.forEach(function (Ur) {
                return Ur.revert(!1, !0)
              }), A.start = Ye, A.end = ut, Ae = Lt = Mi ? Rt : j(), !P && !Mi && (Ae < Rt && j(Rt), A.scroll.rec = 0), A.revert(!1, !0), N = ki(), dt && (V = -1, dt.restart(!0)), ui = 0, r && I && (r._initted || ci) && r.progress() !== ci && r.progress(ci || 0, !0).render(r.time(), !0, !0), (Me || te !== A.progress || P) && (r && !I && r.totalProgress(P && Ye < -.001 && !te ? ce.utils.normalize(Ye, ut, 0) : te, !0), A.progress = Me || (Ae - Ye) / K === te ? 0 : te), m && g && (Se._pinOffset = Math.round(A.progress * st)), Oe && Oe.invalidate(), isNaN(Vr) || (Vr -= ce.getProperty(z, F.p), Ds -= ce.getProperty(U, F.p), el(z, F, Vr), el($t, F, Vr - (Ne || 0)), el(U, F, Ds), el(xt, F, Ds - (Ne || 0))), Me && !Mi && A.update(), f && !Mi && !Q && (Q = !0, f(A), Q = !1)
            }
          }, A.getVelocity = function () {
            return (j() - Lt) / (ki() - Tl) * 1e3 || 0
          }, A.endAnimation = function () {
            Ao(A.callbackAnimation), r && (Oe ? Oe.progress(1) : r.paused() ? I || Ao(r, A.direction < 0, 1) : Ao(r, r.reversed()))
          }, A.labelToScroll = function (ne) {
            return r && r.labels && (Ye || A.refresh() || Ye) + r.labels[ne] / r.duration() * K || 0
          }, A.getTrailing = function (ne) {
            var Fe = He.indexOf(A),
              $ = A.direction > 0 ? He.slice(0, Fe).reverse() : He.slice(Fe + 1);
            return (qi(ne) ? $.filter(function (Ne) {
              return Ne.vars.preventOverlaps === ne
            }) : $).filter(function (Ne) {
              return A.direction > 0 ? Ne.end <= Ye : Ne.start >= ut
            })
          }, A.update = function (ne, Fe, $) {
            if (!(P && !$ && !ne)) {
              var Ne = Mi === !0 ? Rt : A.scroll(),
                Vt = ne ? 0 : (Ne - Ye) / K,
                xe = Vt < 0 ? 0 : Vt > 1 ? 1 : Vt || 0,
                gt = A.progress,
                Me, Et, vt, ke, Wt, Be, Qe, Ft;
              if (Fe && (Lt = Ae, Ae = P ? j() : Ne, k && (Kt = _i, _i = r && !I ? r.totalProgress() : xe)), w && !xe && m && !ui && !Ba && pn && Ye < Ne + (Ne - Lt) / (ki() - Tl) * w && (xe = 1e-4), xe !== gt && A.enabled) {
                if (Me = A.isActive = !!xe && xe < 1, Et = !!gt && gt < 1, Be = Me !== Et, Wt = Be || !!xe != !!gt, A.direction = xe > gt ? 1 : -1, A.progress = xe, Wt && !ui && (vt = xe && !gt ? 0 : xe === 1 ? 1 : gt === 1 ? 2 : 3, I && (ke = !Be && re[vt + 1] !== "none" && re[vt + 1] || re[vt], Ft = r && (ke === "complete" || ke === "reset" || ke in r))), L && (Be || Ft) && (Ft || h || !r) && (Ci(L) ? L(A) : A.getTrailing(L).forEach(function (Un) {
                    return Un.endAnimation()
                  })), I || (Oe && !ui && !Ba ? (Oe._dp._time - Oe._start !== Oe._time && Oe.render(Oe._dp._time - Oe._start), Oe.resetTo ? Oe.resetTo("totalProgress", xe, r._tTime / r._tDur) : (Oe.vars.totalProgress = xe, Oe.invalidate().restart())) : r && r.totalProgress(xe, !!(ui && (N || ne)))), m) {
                  if (ne && g && (Se.style[g + F.os2] = de), !B) Ee(Wo(ee + st * xe));
                  else if (Wt) {
                    if (Qe = !ne && xe > gt && ut + 1 > Ne && Ne + 1 >= ar(D, F), E)
                      if (!ne && (Me || Qe)) {
                        var Ot = sr(m, !0),
                          yt = Ne - Ye;
                        Zh(m, _t, Ot.top + (F === Qt ? yt : 0) + oi, Ot.left + (F === Qt ? 0 : yt) + oi)
                      } else Zh(m, Se);
                    ao(Me || Qe ? Te : at), bi && xe < 1 && Me || Ee(ee + (xe === 1 && !Qe ? st : 0))
                  }
                }
                k && !ae.tween && !ui && !Ba && dt.restart(!0), a && (Be || M && xe && (xe < 1 || !tu)) && Gl(a.targets).forEach(function (Un) {
                  return Un.classList[Me || M ? "add" : "remove"](a.className)
                }), o && !I && !ne && o(A), Wt && !ui ? (I && (Ft && (ke === "complete" ? r.pause().totalProgress(1) : ke === "reset" ? r.restart(!0).pause() : ke === "restart" ? r.restart(!0) : r[ke]()), o && o(A)), (Be || !tu) && (u && Be && nu(A, u), se[vt] && nu(A, se[vt]), M && (xe === 1 ? A.kill(!1, 1) : se[vt] = 0), Be || (vt = xe === 1 ? 1 : 3, se[vt] && nu(A, se[vt]))), R && !Me && Math.abs(A.getVelocity()) > (Ml(R) ? R : 2500) && (Ao(A.callbackAnimation), Oe ? Oe.progress(1) : Ao(r, ke === "reverse" ? 1 : !xe, 1))) : I && o && !ui && o(A)
              }
              if (en) {
                var ti = P ? Ne / P.duration() * (P._caScrollDist || 0) : Ne;
                Di(ti + (z._isFlipped ? 1 : 0)), en(ti)
              }
              It && It(-Ne / P.duration() * (P._caScrollDist || 0))
            }
          }, A.enable = function (ne, Fe) {
            A.enabled || (A.enabled = !0, ni(D, "resize", jo), Z || ni(D, "scroll", zs), ye && ni(n, "refreshInit", ye), ne !== !1 && (A.progress = te = 0, Ae = Lt = V = j()), Fe !== !1 && A.refresh())
          }, A.getTween = function (ne) {
            return ne && ae ? ae.tween : Oe
          }, A.setPositions = function (ne, Fe, $, Ne) {
            if (P) {
              var Vt = P.scrollTrigger,
                xe = P.duration(),
                gt = Vt.end - Vt.start;
              ne = Vt.start + gt * ne / xe, Fe = Vt.start + gt * Fe / xe
            }
            A.refresh(!1, !1, {
              start: jh(ne, $ && !!A._startClamp),
              end: jh(Fe, $ && !!A._endClamp)
            }, Ne), A.update()
          }, A.adjustPinSpacing = function (ne) {
            if (Ht && ne) {
              var Fe = Ht.indexOf(F.d) + 1;
              Ht[Fe] = parseFloat(Ht[Fe]) + ne + oi, Ht[1] = parseFloat(Ht[1]) + ne + oi, ao(Ht)
            }
          }, A.disable = function (ne, Fe) {
            if (A.enabled && (ne !== !1 && A.revert(!0, !0), A.enabled = A.isActive = !1, Fe || Oe && Oe.pause(), Rt = 0, fe && (fe.uncache = 1), ye && ii(n, "refreshInit", ye), dt && (dt.pause(), ae.tween && ae.tween.kill() && (ae.tween = 0)), !Z)) {
              for (var $ = He.length; $--;)
                if (He[$].scroller === D && He[$] !== A) return;
              ii(D, "resize", jo), Z || ii(D, "scroll", zs)
            }
          }, A.kill = function (ne, Fe) {
            A.disable(ne, Fe), Oe && !Fe && Oe.kill(), c && delete hd[c];
            var $ = He.indexOf(A);
            $ >= 0 && He.splice($, 1), $ === Ti && El > 0 && Ti--, $ = 0, He.forEach(function (Ne) {
              return Ne.scroller === A.scroller && ($ = 1)
            }), $ || Mi || (A.scroll.rec = 0), r && (r.scrollTrigger = null, ne && r.revert({
              kill: !1
            }), Fe || r.kill()), $t && [$t, xt, z, U].forEach(function (Ne) {
              return Ne.parentNode && Ne.parentNode.removeChild(Ne)
            }), na === A && (na = 0), m && (fe && (fe.uncache = 1), $ = 0, He.forEach(function (Ne) {
              return Ne.pin === m && $++
            }), $ || (fe.spacer = 0)), i.onKill && i.onKill(A)
          }, He.push(A), A.enable(!1, !1), Yt && Yt(A), r && r.add && !K) {
          var Tt = A.update;
          A.update = function () {
            A.update = Tt, Ye || ut || A.refresh()
          }, ce.delayedCall(.01, A.update), K = .01, Ye = ut = 0
        } else A.refresh();
        m && Rw()
      }, n.register = function (i) {
        return Us || (ce = i || Rg(), Lg() && window.document && n.enable(), Us = Ho), Us
      }, n.defaults = function (i) {
        if (i)
          for (var r in i) Ka[r] = i[r];
        return Ka
      }, n.disable = function (i, r) {
        Ho = 0, He.forEach(function (o) {
          return o[r ? "kill" : "disable"](i)
        }), ii(Ve, "wheel", zs), ii(Ct, "scroll", zs), clearInterval(Ua), ii(Ct, "touchcancel", Cn), ii(_t, "touchstart", Cn), Xa(ii, Ct, "pointerdown,touchstart,mousedown", qh), Xa(ii, Ct, "pointerup,touchend,mouseup", $h), Bl.kill(), Ga(ii);
        for (var s = 0; s < qe.length; s += 3) Za(ii, qe[s], qe[s + 1]), Za(ii, qe[s], qe[s + 2])
      }, n.enable = function () {
        if (Ve = window, Ct = document, _n = Ct.documentElement, _t = Ct.body, ce && (Gl = ce.utils.toArray, Qs = ce.utils.clamp, dd = ce.core.context || Cn, eu = ce.core.suppressOverwrites || Cn, Zd = Ve.history.scrollRestoration || "auto", pd = Ve.pageYOffset, ce.core.globals("ScrollTrigger", n), _t)) {
          Ho = 1, oo = document.createElement("div"), oo.style.height = "100vh", oo.style.position = "absolute", qg(), Pw(), Zt.register(ce), n.isTouch = Zt.isTouch, Mr = Zt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ni(Ve, "wheel", zs), Pg = [Ve, Ct, _n, _t], ce.matchMedia ? (n.matchMedia = function (c) {
            var u = ce.matchMedia(),
              f;
            for (f in c) u.add(f, c[f]);
            return u
          }, ce.addEventListener("matchMediaInit", function () {
            return nf()
          }), ce.addEventListener("matchMediaRevert", function () {
            return Wg()
          }), ce.addEventListener("matchMedia", function () {
            os(0, 1), ws("matchMedia")
          }), ce.matchMedia("(orientation: portrait)", function () {
            return ru(), ru
          })) : console.warn("Requires GSAP 3.11.0 or later"), ru(), ni(Ct, "scroll", zs);
          var i = _t.style,
            r = i.borderTopStyle,
            s = ce.core.Animation.prototype,
            o, a;
          for (s.revert || Object.defineProperty(s, "revert", {
              value: function () {
                return this.time(-.01, !0)
              }
            }), i.borderTopStyle = "solid", o = sr(_t), Qt.m = Math.round(o.top + Qt.sc()) || 0, Ei.m = Math.round(o.left + Ei.sc()) || 0, r ? i.borderTopStyle = r : i.removeProperty("border-top-style"), Ua = setInterval(Bh, 250), ce.delayedCall(.5, function () {
              return Ba = 0
            }), ni(Ct, "touchcancel", Cn), ni(_t, "touchstart", Cn), Xa(ni, Ct, "pointerdown,touchstart,mousedown", qh), Xa(ni, Ct, "pointerup,touchend,mouseup", $h), ud = ce.utils.checkPrefix("transform"), Ol.push(ud), Us = ki(), Bl = ce.delayedCall(.2, os).pause(), Bs = [Ct, "visibilitychange", function () {
              var c = Ve.innerWidth,
                u = Ve.innerHeight;
              Ct.hidden ? (zh = c, Hh = u) : (zh !== c || Hh !== u) && jo()
            }, Ct, "DOMContentLoaded", os, Ve, "load", os, Ve, "resize", jo], Ga(ni), He.forEach(function (c) {
              return c.enable(0, 1)
            }), a = 0; a < qe.length; a += 3) Za(ii, qe[a], qe[a + 1]), Za(ii, qe[a], qe[a + 2])
        }
      }, n.config = function (i) {
        "limitCallbacks" in i && (tu = !!i.limitCallbacks);
        var r = i.syncInterval;
        r && clearInterval(Ua) || (Ua = r) && setInterval(Bh, r), "ignoreMobileResize" in i && (Cg = n.isTouch === 1 && i.ignoreMobileResize), "autoRefreshEvents" in i && (Ga(ii) || Ga(ni, i.autoRefreshEvents || "none"), Og = (i.autoRefreshEvents + "").indexOf("resize") === -1)
      }, n.scrollerProxy = function (i, r) {
        var s = Li(i),
          o = qe.indexOf(s),
          a = bs(s);
        ~o && qe.splice(o, a ? 6 : 2), r && (a ? Hn.unshift(Ve, r, _t, r, _n, r) : Hn.unshift(s, r))
      }, n.clearMatchMedia = function (i) {
        He.forEach(function (r) {
          return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0)
        })
      }, n.isInViewport = function (i, r, s) {
        var o = (qi(i) ? Li(i) : i).getBoundingClientRect(),
          a = o[s ? hs : ps] * r || 0;
        return s ? o.right - a > 0 && o.left + a < Ve.innerWidth : o.bottom - a > 0 && o.top + a < Ve.innerHeight
      }, n.positionInViewport = function (i, r, s) {
        qi(i) && (i = Li(i));
        var o = i.getBoundingClientRect(),
          a = o[s ? hs : ps],
          c = r == null ? a / 2 : r in Xl ? Xl[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
        return s ? (o.left + c) / Ve.innerWidth : (o.top + c) / Ve.innerHeight
      }, n.killAll = function (i) {
        if (He.slice(0).forEach(function (s) {
            return s.vars.id !== "ScrollSmoother" && s.kill()
          }), i !== !0) {
          var r = _s.killAll || [];
          _s = {}, r.forEach(function (s) {
            return s()
          })
        }
      }, n
    }();
  pe.version = "3.12.2";
  pe.saveStyles = function (n) {
    return n ? Gl(n).forEach(function (e) {
      if (e && e.style) {
        var t = ji.indexOf(e);
        t >= 0 && ji.splice(t, 5), ji.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ce.core.getCache(e), dd())
      }
    }) : ji
  };
  pe.revert = function (n, e) {
    return nf(!n, e)
  };
  pe.create = function (n, e) {
    return new pe(n, e)
  };
  pe.refresh = function (n) {
    return n ? jo() : (Us || pe.register()) && os(!0)
  };
  pe.update = function (n) {
    return ++qe.cache && fr(n === !0 ? 2 : 0)
  };
  pe.clearScrollMemory = jg;
  pe.maxScroll = function (n, e) {
    return ar(n, e ? Ei : Qt)
  };
  pe.getScrollFunc = function (n, e) {
    return jr(Li(n), e ? Ei : Qt)
  };
  pe.getById = function (n) {
    return hd[n]
  };
  pe.getAll = function () {
    return He.filter(function (n) {
      return n.vars.id !== "ScrollSmoother"
    })
  };
  pe.isScrolling = function () {
    return !!pn
  };
  pe.snapDirectional = tf;
  pe.addEventListener = function (n, e) {
    var t = _s[n] || (_s[n] = []);
    ~t.indexOf(e) || t.push(e)
  };
  pe.removeEventListener = function (n, e) {
    var t = _s[n],
      i = t && t.indexOf(e);
    i >= 0 && t.splice(i, 1)
  };
  pe.batch = function (n, e) {
    var t = [],
      i = {},
      r = e.interval || .016,
      s = e.batchMax || 1e9,
      o = function (u, f) {
        var h = [],
          p = [],
          m = ce.delayedCall(r, function () {
            f(h, p), h = [], p = []
          }).pause();
        return function (g) {
          h.length || m.restart(!0), h.push(g.trigger), p.push(g), s <= h.length && m.progress(1)
        }
      },
      a;
    for (a in e) i[a] = a.substr(0, 2) === "on" && Ci(e[a]) && a !== "onRefreshInit" ? o(a, e[a]) : e[a];
    return Ci(s) && (s = s(), ni(pe, "refresh", function () {
      return s = e.batchMax()
    })), Gl(n).forEach(function (c) {
      var u = {};
      for (a in i) u[a] = i[a];
      u.trigger = c, t.push(pe.create(u))
    }), t
  };
  var Qh = function (e, t, i, r) {
      return t > r ? e(r) : t < 0 && e(0), i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
    },
    ou = function n(e, t) {
      t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (Zt.isTouch ? " pinch-zoom" : "") : "none", e === _n && n(_t, t)
    },
    tl = {
      auto: 1,
      scroll: 1
    },
    zw = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || ce.core.getCache(s),
        a = ki(),
        c;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; s && s !== _t && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(tl[(c = cn(s)).overflowY] || tl[c.overflowX]));) s = s.parentNode;
        o._isScroll = s && s !== i && !bs(s) && (tl[(c = cn(s)).overflowY] || tl[c.overflowX]), o._isScrollT = a
      }(o._isScroll || r === "x") && (t.stopPropagation(), t._gsapAllow = !0)
    },
    Vg = function (e, t, i, r) {
      return Zt.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: r = r && zw,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && ni(Ct, Zt.eventTypes[0], ep, !1, !0)
        },
        onDisable: function () {
          return ii(Ct, Zt.eventTypes[0], ep, !0)
        }
      })
    },
    Hw = /(input|label|select|textarea)/i,
    Jh, ep = function (e) {
      var t = Hw.test(e.target.tagName);
      (t || Jh) && (e._gsapAllow = !0, Jh = t)
    },
    Ww = function (e) {
      ns(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a, c, u = Li(e.target) || _n,
        f = ce.core.globals().ScrollSmoother,
        h = f && f.get(),
        p = Mr && (e.content && Li(e.content) || h && e.content !== !1 && !h.smooth() && h.content()),
        m = jr(u, Qt),
        g = jr(u, Ei),
        y = 1,
        w = (Zt.isTouch && Ve.visualViewport ? Ve.visualViewport.scale * Ve.visualViewport.width : Ve.outerWidth) / Ve.innerWidth,
        S = 0,
        T = Ci(r) ? function () {
          return r(a)
        } : function () {
          return r || 2.8
        },
        M, k, E = Vg(u, e.type, !0, s),
        O = function () {
          return k = !1
        },
        P = Cn,
        R = Cn,
        L = function () {
          c = ar(u, Qt), R = Qs(Mr ? 1 : 0, c), i && (P = Qs(0, ar(u, Ei))), M = ms
        },
        F = function () {
          p._gsap.y = Wo(parseFloat(p._gsap.y) + m.offset) + "px", p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(p._gsap.y) + ", 0, 1)", m.offset = m.cacheID = 0
        },
        I = function () {
          if (k) {
            requestAnimationFrame(O);
            var le = Wo(a.deltaY / 2),
              we = R(m.v - le);
            if (p && we !== m.v + m.offset) {
              m.offset = we - m.v;
              var A = Wo((parseFloat(p && p._gsap.y) || 0) - m.offset);
              p.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + A + ", 0, 1)", p._gsap.y = A + "px", m.cacheID = qe.cache, fr()
            }
            return !0
          }
          m.offset && F(), k = !0
        },
        D, q, Z, B, se = function () {
          L(), D.isActive() && D.vars.scrollY > c && (m() > c ? D.progress(1) && m(c) : D.resetTo("scrollY", c))
        };
      return p && ce.set(p, {
        y: "+=0"
      }), e.ignoreCheck = function (re) {
        return Mr && re.type === "touchmove" && I() || y > 1.05 && re.type !== "touchstart" || a.isGesturing || re.touches && re.touches.length > 1
      }, e.onPress = function () {
        k = !1;
        var re = y;
        y = Wo((Ve.visualViewport && Ve.visualViewport.scale || 1) / w), D.pause(), re !== y && ou(u, y > 1.01 ? !0 : i ? !1 : "x"), q = g(), Z = m(), L(), M = ms
      }, e.onRelease = e.onGestureStart = function (re, le) {
        if (m.offset && F(), !le) B.restart(!0);
        else {
          qe.cache++;
          var we = T(),
            A, ye;
          i && (A = g(), ye = A + we * .05 * -re.velocityX / .227, we *= Qh(g, A, ye, ar(u, Ei)), D.vars.scrollX = P(ye)), A = m(), ye = A + we * .05 * -re.velocityY / .227, we *= Qh(m, A, ye, ar(u, Qt)), D.vars.scrollY = R(ye), D.invalidate().duration(we).play(.01), (Mr && D.vars.scrollY >= c || A >= c - 1) && ce.to({}, {
            onUpdate: se,
            duration: we
          })
        }
        o && o(re)
      }, e.onWheel = function () {
        D._ts && D.pause(), ki() - S > 1e3 && (M = 0, S = ki())
      }, e.onChange = function (re, le, we, A, ye) {
        if (ms !== M && L(), le && i && g(P(A[2] === le ? q + (re.startX - re.x) : g() + le - A[1])), we) {
          m.offset && F();
          var je = ye[2] === we,
            H = je ? Z + re.startY - re.y : m() + we - ye[1],
            V = R(H);
          je && H !== V && (Z += V - H), m(V)
        }(we || le) && fr()
      }, e.onEnable = function () {
        ou(u, i ? !1 : "x"), pe.addEventListener("refresh", se), ni(Ve, "resize", se), m.smooth && (m.target.style.scrollBehavior = "auto", m.smooth = g.smooth = !1), E.enable()
      }, e.onDisable = function () {
        ou(u, !0), ii(Ve, "resize", se), pe.removeEventListener("refresh", se), E.kill()
      }, e.lockAxis = e.lockAxis !== !1, a = new Zt(e), a.iOS = Mr, Mr && !m() && m(1), Mr && ce.ticker.add(Cn), B = a._dc, D = ce.to(a, {
        ease: "power4",
        paused: !0,
        scrollX: i ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: $g(m, m(), function () {
            return D.pause()
          })
        },
        onUpdate: fr,
        onComplete: B.vars.onComplete
      }), a
    };
  pe.sort = function (n) {
    return He.sort(n || function (e, t) {
      return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    })
  };
  pe.observe = function (n) {
    return new Zt(n)
  };
  pe.normalizeScroll = function (n) {
    if (typeof n > "u") return Wi;
    if (n === !0 && Wi) return Wi.enable();
    if (n === !1) return Wi && Wi.kill();
    var e = n instanceof Zt ? n : Ww(n);
    return Wi && Wi.target === e.target && Wi.kill(), bs(e.target) && (Wi = e), e
  };
  pe.core = {
    _getVelocityProp: cd,
    _inputObserver: Vg,
    _scrollers: qe,
    _proxies: Hn,
    bridge: {
      ss: function () {
        pn || ws("scrollStart"), pn = ki()
      },
      ref: function () {
        return ui
      }
    }
  };
  Rg() && ce.registerPlugin(pe);

  function tp(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }
  }

  function jw(n, e, t) {
    return e && tp(n.prototype, e), t && tp(n, t), n
  }
  /*!
   * ScrollSmoother 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */
  var rt, il, di, Js, qo, En, rs, ip, Ie, Dn, nl, np, rp, sp, op, Ug = function () {
      return typeof window < "u"
    },
    Bg = function () {
      return rt || Ug() && (rt = window.gsap) && rt.registerPlugin && rt
    },
    qw = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0
    },
    xr = function (e) {
      return Ie.maxScroll(e || di)
    },
    $w = function (e, t) {
      var i = e.parentNode || qo,
        r = e.getBoundingClientRect(),
        s = i.getBoundingClientRect(),
        o = s.top - r.top,
        a = s.bottom - r.bottom,
        c = (Math.abs(o) > Math.abs(a) ? o : a) / (1 - t),
        u = -c * t,
        f, h;
      return c > 0 && (f = s.height / (di.innerHeight + s.height), h = f === .5 ? s.height * 2 : Math.min(s.height, Math.abs(-c * f / (2 * f - 1))) * 2 * (t || 1), u += t ? -h * t : -h / 2, c += h), {
        change: c,
        offset: u
      }
    },
    Vw = function (e) {
      var t = Js.querySelector(".ScrollSmoother-wrapper");
      return t || (t = Js.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
    },
    Xt = function () {
      function n(e) {
        var t = this;
        il || n.register(rt) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Dn && Dn.kill(), Dn = this, sp(this);
        var i = e,
          r = i.smoothTouch,
          s = i.onUpdate,
          o = i.onStop,
          a = i.smooth,
          c = i.onFocusIn,
          u = i.normalizeScroll,
          f = i.wholePixels,
          h, p, m, g, y, w, S, T, M, k, E, O, P, R = this,
          L = e.effectsPrefix || "",
          F = Ie.getScrollFunc(di),
          I = Ie.isTouch === 1 ? r === !0 ? .8 : parseFloat(r) || 0 : a === 0 || a === !1 ? 0 : parseFloat(a) || .8,
          D = I && +e.speed || 1,
          q = 0,
          Z = 0,
          B = 1,
          se = np(0),
          re = function () {
            return se.update(-q)
          },
          le = {
            y: 0
          },
          we = function () {
            return h.style.overflow = "visible"
          },
          A, ye = function (Y) {
            Y.update();
            var Q = Y.getTween();
            Q && (Q.pause(), Q._time = Q._dur, Q._tTime = Q._tDur), A = !1, Y.animation.progress(Y.progress, !0)
          },
          je = function (Y, Q) {
            (Y !== q && !k || Q) && (f && (Y = Math.round(Y)), I && (h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + Y + ", 0, 1)", h._gsap.y = Y + "px"), Z = Y - q, q = Y, Ie.isUpdating || n.isRefreshing || Ie.update())
          },
          H = function (Y) {
            return arguments.length ? (Y < 0 && (Y = 0), le.y = -Y, A = !0, k ? q = -Y : je(-Y), Ie.isRefreshing ? g.update() : F(Y / D), this) : -q
          },
          V = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function () {
            if (!Ie.isRefreshing) {
              var U = xr(p) * D;
              U < -q && H(U), op.restart(!0)
            }
          }),
          N, te = function (Y) {
            p.scrollTop = 0, !(Y.target.contains && Y.target.contains(p) || c && c(t, Y) === !1) && (Ie.isInViewport(Y.target) || Y.target === N || t.scrollTo(Y.target, !1, "center center"), N = Y.target)
          },
          j = function (Y, Q) {
            if (Y < Q.start) return Y;
            var K = isNaN(Q.ratio) ? 1 : Q.ratio,
              ue = Q.end - Q.start,
              Te = Y - Q.start,
              at = Q.offset || 0,
              Se = Q.pins || [],
              Pe = Se.offset || 0,
              nt = Q._startClamp && Q.start <= 0 || Q.pins && Q.pins.offset ? 0 : Q._endClamp && Q.end === xr() ? 1 : .5;
            return Se.forEach(function (Ee) {
              ue -= Ee.distance, Ee.nativeStart <= Y && (Te -= Ee.distance)
            }), Pe && (Te *= (ue - Pe / K) / ue), Y + (Te - at * nt) / K - Te
          },
          ae = function U(Y, Q, K) {
            K || (Y.pins.length = Y.pins.offset = 0);
            var ue = Y.pins,
              Te = Y.markers,
              at, Se, Pe, nt, Ee, ee, st, de;
            for (st = 0; st < Q.length; st++)
              if (de = Q[st], Y.trigger && de.trigger && Y !== de && (de.trigger === Y.trigger || de.pinnedContainer === Y.trigger || Y.trigger.contains(de.trigger)) && (Ee = de._startNative || de._startClamp || de.start, ee = de._endNative || de._endClamp || de.end, Pe = j(Ee, Y), nt = de.pin && ee > 0 ? Pe + (ee - Ee) : j(ee, Y), de.setPositions(Pe, nt, !0, (de._startClamp ? Math.max(0, Pe) : Pe) - Ee), de.markerStart && Te.push(rt.quickSetter([de.markerStart, de.markerEnd], "y", "px")), de.pin && de.end > 0 && !K)) {
                if (at = de.end - de.start, Se = Y._startClamp && de.start < 0, Se) {
                  if (Y.start > 0) {
                    Y.setPositions(0, Y.end + (Y._startNative - Y.start), !0), U(Y, Q);
                    return
                  }
                  at += de.start, ue.offset = -de.start
                }
                ue.push({
                  start: de.start,
                  nativeStart: Ee,
                  end: de.end,
                  distance: at,
                  trig: de
                }), Y.setPositions(Y.start, Y.end + (Se ? -de.start : at), !0)
              }
          },
          fe = function (Y, Q) {
            y.forEach(function (K) {
              return ae(K, Y, Q)
            })
          },
          _e = function () {
            we(), requestAnimationFrame(we), y && (Ie.getAll().forEach(function (Y) {
              Y._startNative = Y.start, Y._endNative = Y.end
            }), y.forEach(function (Y) {
              var Q = Y._startClamp || Y.start,
                K = Y.autoSpeed ? Math.min(xr(), Y.end) : Q + Math.abs((Y.end - Q) / Y.ratio),
                ue = K - Y.end;
              if (Q -= ue / 2, K -= ue / 2, Q > K) {
                var Te = Q;
                Q = K, K = Te
              }
              Y._startClamp && Q < 0 ? (K = Y.ratio < 0 ? xr() : Y.end / Y.ratio, ue = K - Y.end, Q = 0) : (Y.ratio < 0 || Y._endClamp && K >= xr()) && (K = xr(), Q = Y.ratio < 0 || Y.ratio > 1 ? 0 : K - (K - Y.start) / Y.ratio, ue = (K - Q) * Y.ratio - (Y.end - Y.start)), Y.offset = ue || 1e-4, Y.pins.length = Y.pins.offset = 0, Y.setPositions(Q, K, !0)
            }), fe(Ie.sort())), se.reset()
          },
          Ae = function () {
            return Ie.addEventListener("refresh", _e)
          },
          Lt = function () {
            return y && y.forEach(function (Y) {
              return Y.vars.onRefresh(Y)
            })
          },
          Ye = function () {
            return y && y.forEach(function (Y) {
              return Y.vars.onRefreshInit(Y)
            }), Lt
          },
          ut = function (Y, Q, K, ue) {
            return function () {
              var Te = typeof Q == "function" ? Q(K, ue) : Q;
              Te || Te === 0 || (Te = ue.getAttribute("data-" + L + Y) || (Y === "speed" ? 1 : 0)), ue.setAttribute("data-" + L + Y, Te);
              var at = (Te + "").substr(0, 6) === "clamp(";
              return {
                clamp: at,
                value: at ? Te.substr(6, Te.length - 7) : Te
              }
            }
          },
          $t = function (Y, Q, K, ue, Te) {
            Te = (typeof Te == "function" ? Te(ue, Y) : Te) || 0;
            var at = ut("speed", Q, ue, Y),
              Se = ut("lag", K, ue, Y),
              Pe = rt.getProperty(Y, "y"),
              nt = Y._gsap,
              Ee, ee, st, de, Ht, Di, bi = [],
              en = function () {
                Q = at(), K = parseFloat(Se().value), Ee = parseFloat(Q.value) || 1, st = Q.value === "auto", Ht = st || ee && ee._startClamp && ee.start <= 0 || bi.offset ? 0 : ee && ee._endClamp && ee.end === xr() ? 1 : .5, de && de.kill(), de = K && rt.to(Y, {
                  ease: nl,
                  overwrite: !1,
                  y: "+=0",
                  duration: K
                }), ee && (ee.ratio = Ee, ee.autoSpeed = st)
              },
              mt = function () {
                nt.y = Pe + "px", nt.renderTransform(1), en()
              },
              _i = [],
              Kt = 0,
              Oe = function (Ke) {
                if (st) {
                  mt();
                  var dt = $w(Y, ip(0, 1, -Ke.start / (Ke.end - Ke.start)));
                  Kt = dt.change, Di = dt.offset
                } else Di = bi.offset || 0, Kt = (Ke.end - Ke.start - Di) * (1 - Ee);
                bi.forEach(function (Rt) {
                  return Kt -= Rt.distance * (1 - Ee)
                }), Ke.offset = Kt || .001, Ke.vars.onUpdate(Ke), de && de.progress(1)
              };
            return en(), (Ee !== 1 || st || de) && (ee = Ie.create({
              trigger: st ? Y.parentNode : Y,
              start: function () {
                return Q.clamp ? "clamp(top bottom+=" + Te + ")" : "top bottom+=" + Te
              },
              end: function () {
                return Q.value < 0 ? "max" : Q.clamp ? "clamp(bottom top-=" + Te + ")" : "bottom top-=" + Te
              },
              scroller: p,
              scrub: !0,
              refreshPriority: -999,
              onRefreshInit: mt,
              onRefresh: Oe,
              onKill: function (Ke) {
                var dt = y.indexOf(Ke);
                dt >= 0 && y.splice(dt, 1), mt()
              },
              onUpdate: function (Ke) {
                var dt = Pe + Kt * (Ke.progress - Ht),
                  Rt = bi.length,
                  ci = 0,
                  It, Yt, be;
                if (Ke.offset) {
                  if (Rt) {
                    for (Yt = -q, be = Ke.end; Rt--;) {
                      if (It = bi[Rt], It.trig.isActive || Yt >= It.start && Yt <= It.end) {
                        de && (It.trig.progress += It.trig.direction < 0 ? .001 : -.001, It.trig.update(0, 0, 1), de.resetTo("y", parseFloat(nt.y), -Z, !0), B && de.progress(1));
                        return
                      }
                      Yt > It.end && (ci += It.distance), be -= It.distance
                    }
                    dt = Pe + ci + Kt * ((rt.utils.clamp(Ke.start, Ke.end, Yt) - Ke.start - ci) / (be - Ke.start) - Ht)
                  }
                  _i.length && !st && _i.forEach(function (ge) {
                    return ge(dt - ci)
                  }), dt = qw(dt + Di), de ? (de.resetTo("y", dt, -Z, !0), B && de.progress(1)) : (nt.y = dt + "px", nt.renderTransform(1))
                }
              }
            }), Oe(ee), rt.core.getCache(ee.trigger).stRevert = Ye, ee.startY = Pe, ee.pins = bi, ee.markers = _i, ee.ratio = Ee, ee.autoSpeed = st, Y.style.willChange = "transform"), ee
          };
        Ae(), Ie.addEventListener("killAll", Ae), rt.delayedCall(.5, function () {
          return B = 0
        }), this.scrollTop = H, this.scrollTo = function (U, Y, Q) {
          var K = rt.utils.clamp(0, xr(), isNaN(U) ? t.offset(U, Q) : +U);
          Y ? k ? rt.to(t, {
            duration: I,
            scrollTop: K,
            overwrite: "auto",
            ease: nl
          }) : F(K) : H(K)
        }, this.offset = function (U, Y) {
          U = rs(U)[0];
          var Q = U.style.cssText,
            K = Ie.create({
              trigger: U,
              start: Y || "top top"
            }),
            ue;
          return y && (B ? Ie.refresh() : fe([K], !0)), ue = K.start / D, K.kill(!1), U.style.cssText = Q, rt.core.getCache(U).uncache = 1, ue
        };

        function xt() {
          return m = h.clientHeight, h.style.overflow = "visible", En.style.height = di.innerHeight + (m - di.innerHeight) / D + "px", m - di.innerHeight
        }
        this.content = function (U) {
          if (arguments.length) {
            var Y = rs(U || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || En.children[0];
            return Y !== h && (h = Y, M = h.getAttribute("style") || "", V && V.observe(h), rt.set(h, {
              overflow: "visible",
              width: "100%",
              boxSizing: "border-box",
              y: "+=0"
            }), I || rt.set(h, {
              clearProps: "transform"
            })), this
          }
          return h
        }, this.wrapper = function (U) {
          return arguments.length ? (p = rs(U || "#smooth-wrapper")[0] || Vw(h), T = p.getAttribute("style") || "", xt(), rt.set(p, I ? {
            overflow: "hidden",
            position: "fixed",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          } : {
            overflow: "visible",
            position: "relative",
            width: "100%",
            height: "auto",
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto"
          }), this) : p
        }, this.effects = function (U, Y) {
          var Q;
          if (y || (y = []), !U) return y.slice(0);
          U = rs(U), U.forEach(function (Ee) {
            for (var ee = y.length; ee--;) y[ee].trigger === Ee && y[ee].kill()
          }), Y = Y || {};
          var K = Y,
            ue = K.speed,
            Te = K.lag,
            at = K.effectsPadding,
            Se = [],
            Pe, nt;
          for (Pe = 0; Pe < U.length; Pe++) nt = $t(U[Pe], ue, Te, Pe, at), nt && Se.push(nt);
          return (Q = y).push.apply(Q, Se), Se
        }, this.sections = function (U, Y) {
          var Q;
          if (w || (w = []), !U) return w.slice(0);
          var K = rs(U).map(function (ue) {
            return Ie.create({
              trigger: ue,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: function (at) {
                ue.style.opacity = at.isActive ? "1" : "0", ue.style.pointerEvents = at.isActive ? "all" : "none"
              }
            })
          });
          return Y && Y.add ? (Q = w).push.apply(Q, K) : w = K.slice(0), K
        }, this.content(e.content), this.wrapper(e.wrapper), this.render = function (U) {
          return je(U || U === 0 ? U : q)
        }, this.getVelocity = function () {
          return se.getVelocity(-q)
        }, Ie.scrollerProxy(p, {
          scrollTop: H,
          scrollHeight: function () {
            return xt() && En.scrollHeight
          },
          fixedMarkers: e.fixedMarkers !== !1 && !!I,
          content: h,
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: di.innerWidth,
              height: di.innerHeight
            }
          }
        }), Ie.defaults({
          scroller: p
        });
        var z = Ie.getAll().filter(function (U) {
          return U.scroller === di || U.scroller === p
        });
        z.forEach(function (U) {
          return U.revert(!0, !0)
        }), g = Ie.create({
          animation: rt.fromTo(le, {
            y: 0
          }, {
            y: function () {
              return -xt()
            },
            immediateRender: !1,
            ease: "none",
            data: "ScrollSmoother",
            duration: 100,
            onUpdate: function () {
              if (this._dur) {
                var Y = A;
                Y && (ye(g), le.y = q), je(le.y, Y), re(), s && !k && s(R)
              }
            }
          }),
          onRefreshInit: function (Y) {
            if (!n.isRefreshing) {
              if (n.isRefreshing = !0, y) {
                var Q = Ie.getAll().filter(function (ue) {
                  return !!ue.pin
                });
                y.forEach(function (ue) {
                  ue.vars.pinnedContainer || Q.forEach(function (Te) {
                    if (Te.pin.contains(ue.trigger)) {
                      var at = ue.vars;
                      at.pinnedContainer = Te.pin, ue.vars = null, ue.init(at, ue.animation)
                    }
                  })
                })
              }
              var K = Y.getTween();
              P = K && K._end > K._dp._time, O = q, le.y = 0, I && (Ie.isTouch === 1 && (p.style.position = "absolute"), p.scrollTop = 0, Ie.isTouch === 1 && (p.style.position = "fixed"))
            }
          },
          onRefresh: function (Y) {
            Y.animation.invalidate(), Y.setPositions(Y.start, xt() / D), P || ye(Y), le.y = -F() * D, je(le.y), B || Y.animation.progress(rt.utils.clamp(0, 1, O / D / -Y.end)), P && (Y.progress -= .001, Y.update()), n.isRefreshing = !1
          },
          id: "ScrollSmoother",
          scroller: di,
          invalidateOnRefresh: !0,
          start: 0,
          refreshPriority: -9999,
          end: function () {
            return xt() / D
          },
          onScrubComplete: function () {
            se.reset(), o && o(t)
          },
          scrub: I || !0
        }), this.smooth = function (U) {
          return arguments.length && (I = U || 0, D = I && +e.speed || 1, g.scrubDuration(U)), g.getTween() ? g.getTween().duration() : 0
        }, g.getTween() && (g.getTween().vars.ease = e.ease || nl), this.scrollTrigger = g, e.effects && this.effects(e.effects === !0 ? "[data-" + L + "speed], [data-" + L + "lag]" : e.effects, {
          effectsPadding: e.effectsPadding
        }), e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections), z.forEach(function (U) {
          U.vars.scroller = p, U.revert(!1, !0), U.init(U.vars, U.animation)
        }), this.paused = function (U, Y) {
          return arguments.length ? (!!k !== U && (U ? (g.getTween() && g.getTween().pause(), F(-q / D), se.reset(), E = Ie.normalizeScroll(), E && E.disable(), k = Ie.observe({
            preventDefault: !0,
            type: "wheel,touch,scroll",
            debounce: !1,
            allowClicks: !0,
            onChangeY: function () {
              return H(-q)
            }
          }), k.nested = rp(qo, "wheel,touch,scroll", !0, Y !== !1)) : (k.nested.kill(), k.kill(), k = 0, E && E.enable(), g.progress = (-q / D - g.start) / (g.end - g.start), ye(g))), this) : !!k
        }, this.kill = this.revert = function () {
          t.paused(!1), ye(g), g.kill();
          for (var U = (y || []).concat(w || []), Y = U.length; Y--;) U[Y].kill();
          Ie.scrollerProxy(p), Ie.removeEventListener("killAll", Ae), Ie.removeEventListener("refresh", _e), p.style.cssText = T, h.style.cssText = M;
          var Q = Ie.defaults({});
          Q && Q.scroller === p && Ie.defaults({
            scroller: di
          }), t.normalizer && Ie.normalizeScroll(!1), clearInterval(S), Dn = null, V && V.disconnect(), En.style.removeProperty("height"), di.removeEventListener("focusin", te)
        }, this.refresh = function (U, Y) {
          return g.refresh(U, Y)
        }, u && (this.normalizer = Ie.normalizeScroll(u === !0 ? {
          debounce: !0,
          content: !I && h
        } : u)), Ie.config(e), "overscrollBehavior" in di.getComputedStyle(En) && rt.set([En, qo], {
          overscrollBehavior: "none"
        }), "scrollBehavior" in di.getComputedStyle(En) && rt.set([En, qo], {
          scrollBehavior: "auto"
        }), di.addEventListener("focusin", te), S = setInterval(re, 250), Js.readyState === "loading" || requestAnimationFrame(function () {
          return Ie.refresh()
        })
      }
      return n.register = function (t) {
        return il || (rt = t || Bg(), Ug() && window.document && (di = window, Js = document, qo = Js.documentElement, En = Js.body), rt && (rs = rt.utils.toArray, ip = rt.utils.clamp, nl = rt.parseEase("expo"), sp = rt.core.context || function () {}, Ie = rt.core.globals().ScrollTrigger, rt.core.globals("ScrollSmoother", n), En && Ie && (op = rt.delayedCall(.2, function () {
          return Ie.isRefreshing || Dn && Dn.refresh()
        }).pause(), np = Ie.core._getVelocityProp, rp = Ie.core._inputObserver, n.refresh = Ie.refresh, il = 1))), il
      }, jw(n, [{
        key: "progress",
        get: function () {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
      }]), n
    }();
  Xt.version = "3.12.2";
  Xt.create = function (n) {
    return Dn && n && Dn.content() === rs(n.content)[0] ? Dn : new Xt(n)
  };
  Xt.get = function () {
    return Dn
  };
  Bg() && rt.registerPlugin(Xt);
  var et = ei.registerPlugin(Xd) || ei;
  et.core.Tween;
  et.registerPlugin(Xt, pe);
  (function () {
    const n = "menu-active",
      e = "menu-leave",
      t = document.body.classList;
    Array.from(document.querySelectorAll(".menu--wrapper, #bt-menu, [data-modal],.modal"));
    let i = document.querySelector(".menu lottie-player");
    const r = {
      get isOpen() {
        return t.contains(n)
      },
      open() {
        t.add(n), document.dispatchEvent(new CustomEvent("menu:open")), setTimeout(() => {
          i.lottie.play()
        }, 500);
        let a = Xt.get();
        a && a.paused(!0)
      },
      close(a = 800) {
        if (!t.contains(n)) return;
        document.dispatchEvent(new CustomEvent("menu:close"));
        let c = Xt.get();
        c && c.paused(!1), t.remove(n), t.add(e), setTimeout(() => {
          t.remove(e), i.lottie.stop()
        }, 800)
      }
    };
    document.getElementById("bt-menu").addEventListener("click", () => {
      r.isOpen ? r.close() : r.open()
    }), document.querySelectorAll("[data-menu-close]").forEach(a => {
      a.addEventListener("click", () => r.close())
    })
  })();

  function Uw(n) {
    let e = "",
      t = ".8s",
      i = "ease-in-out",
      r = "",
      s = "",
      o = "both";
    for (let c = 0; c < n.length; c++) {
      const u = n[c],
        f = Number.parseFloat(u);
      if (c == 0) {
        e = u;
        continue
      }
      if (c == 1) {
        isNaN(f) ? au(u) ? i = Dl[u] : u === "infinite" && (r = "0s", s = u) : t = u;
        continue
      }
      if (c == 2) {
        isNaN(f) ? u == "-" ? r = "0s" : au(u) ? i = Dl[u] : u === "infinite" && (r = "0s", s = u) : r = u;
        continue
      }
      if (c == 3) {
        !isNaN(f) && !r ? r = u : !isNaN(f) && r ? s = u : u == "-" ? r = "0s" : au(u) ? i = Dl[u] : u === "infinite" && (r = "0s", s = u);
        continue
      }
      c == 4 && (isNaN(u) ? u === "infinite" && (s = u) : s = u)
    }
    let a = `${e} ${t} ${i}`;
    return r && (a += " " + r), s && (a += " " + s), a += " " + o, a
  }

  function au(n) {
    return !!Dl[n]
  }
  const Dl = {
    ease: "ease",
    linear: "linear",
    "ease-in": "ease-in",
    "ease-out": "ease-out",
    "ease-in-out": "ease-in-out",
    "ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
    "ease-in-cubic": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
    "ease-in-quart": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
    "ease-in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
    "ease-in-sine": "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
    "ease-in-expo": "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
    "ease-in-circ": "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
    "ease-in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    "ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    "ease-out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
    "ease-out-quart": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    "ease-out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
    "ease-out-sine": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
    "ease-out-expo": "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
    "ease-out-circ": "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
    "ease-in-out-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
    "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    "ease-in-out-quart": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
    "ease-in-out-quint": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
    "ease-in-out-sine": "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
    "ease-in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
    "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
    "ease-in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
  };

  function Bw(n) {
    const e = /([^,\s].[^,]*)/g,
      t = /.+?(?=:)/,
      i = /(?!.+?:)[^:\s]\S+|-|\d+/g,
      r = [],
      s = n.match(e);
    return s ? (s.forEach(o => {
      const a = o.match(t),
        c = o.match(i);
      r.push({
        key: a ? a[0] : null,
        values: c
      })
    }), r) : null
  }
  let rf = [],
    Hi = "";
  const Gg = function () {
    const n = window.innerWidth;
    n < 768 && (Hi = "phone"), n >= 768 && n <= 1200 && (Hi = "tablet"), n > 1200 && (Hi = "desktop")
  };
  Gg();
  window.addEventListener("resize", Gg);
  const Xg = new IntersectionObserver(n => {
      n.forEach(e => {
        const t = rf.filter(s => s.trigger === e.target),
          i = e.isIntersecting,
          r = e.boundingClientRect.top < 0;
        t.forEach(s => {
          if (!s.el.isConnected || i && !s.isConnected) {
            s.isConnected = s.el.isConnected;
            return
          }
          if (i && !s.animated || i && s.loop[Hi]) {
            let a = function () {
                s.animated = !0, s.el.classList.add("aos-animate"), s[Hi] && (s.el.style.animation = s[Hi], s.el.classList.add(s[Hi].match(/^\S+/)[0]))
              },
              o = 0;
            Hi == "phone" && s.el.dataset.delayPhone ? o = s.el.dataset.delayPhone : Hi == "tablet" && s.el.dataset.delayTablet ? o = s.el.dataset.delayTablet : Hi == "desktop" && s.el.dataset.delayDesktop ? o = s.el.dataset.delayDesktop : s.el.dataset.delay && (o = s.el.dataset.delay), o > 0 ? setTimeout(() => {
              a()
            }, o) : a()
          }
          if (!i && s.loop[Hi] && !r) {
            if (s[Hi]) {
              s.el.style.animation = "";
              const o = s[Hi].match(/^\S+/);
              o && s.el.classList.remove(o[0])
            }
            s.el.classList.remove("aos-animate")
          }
        })
      })
    }),
    Zg = new MutationObserver(() => {
      sf()
    }),
    sf = function () {
      rf = [], Xg.disconnect(), Zg.disconnect(), document.querySelectorAll("[data-aos]").forEach(e => {
        Gw(e)
      })
    };

  function Gw(n) {
    const e = {
        el: n,
        isConnected: n.isConnected,
        trigger: n,
        loop: {
          desktop: !1,
          tablet: !1,
          phone: !1
        },
        animated: !1,
        desktop: null,
        tablet: null,
        phone: null
      },
      t = Bw(n.dataset.aos);
    t && t.forEach(i => {
      if (i.key === "trigger") {
        let s = n.closest(i.values[0]);
        s || (s = document.querySelector(i.values[0])), e.trigger = s;
        return
      }
      if (i.values[0] === "loop") {
        i.key ? (i.key.includes("d") && (e.loop.desktop = !0), i.key.includes("t") && (e.loop.tablet = !0), i.key.includes("p") && (e.loop.phone = !0)) : (e.loop.desktop = !0, e.loop.tablet = !0, e.loop.phone = !0);
        return
      }
      const r = Uw(i.values);
      if (!i.key) {
        e.desktop = r, e.tablet = r, e.phone = r;
        return
      }
      i.key.includes("d") && (e.desktop = r), i.key.includes("t") && (e.tablet = r), i.key.includes("p") && (e.phone = r)
    }), Xg.observe(e.trigger), Zg.observe(e.el, {
      attributeFilter: ["data-aos"]
    }), rf.push(e)
  }
  const Xw = {
    rootMargin: "0px",
    threshold: 0,
    load: function (e) {
      if (e.nodeName.toLowerCase() === "picture") {
        let r = e.querySelector("source").getAttribute("srcset"),
          s = new Image;
        s.src = r, e.append(s), s.onload = function () {
          Zl(e)
        }
      }
      if (e.nodeName.toLowerCase() === "iframe" && e.getAttribute("data-src") && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-loaded", "true")), e.nodeName.toLowerCase() === "video" && !e.getAttribute("data-src") && e.children) {
        e.setAttribute("poster", e.getAttribute("data-poster")), b = e.children;
        for (var t, i = 0; i <= b.length - 1; i++)(t = b[i].getAttribute("data-src")) && (b[i].src = t);
        e.load()
      }
      e.getAttribute("data-src") && (e.src = e.getAttribute("data-src")), e.getAttribute("data-srcset") && e.setAttribute("srcset", e.getAttribute("data-srcset")), e.getAttribute("data-background-image") && (e.style.backgroundImage = "url('" + e.getAttribute("data-background-image") + "')"), e.getAttribute("data-toggle-class") && e.classList.toggle(e.getAttribute("data-toggle-class"))
    },
    loaded: function (e) {
      e.onload = t => {
        Zl(t.target)
      }
    }
  };

  function Zl(n) {
    n.setAttribute("data-loaded", !0), n.parentElement.setAttribute("data-loaded", !0)
  }
  const gd = function (n) {
      return n.getAttribute("data-loaded") === "true"
    },
    Zw = function (e, t) {
      return function (i, r) {
        i.forEach(function (s) {
          (s.intersectionRatio > 0 || s.isIntersecting) && (r.unobserve(s.target), gd(s.target) || (e(s.target), t(s.target)))
        })
      }
    },
    Kw = function (e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
      return e instanceof Element ? [e] : e instanceof NodeList ? e : t.querySelectorAll(e)
    };

  function Qw(t = ".lozad", i = {}) {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ".lozad",
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = Object.assign({}, Xw, i),
      s = r.root,
      o = r.rootMargin,
      a = r.threshold,
      c = r.load,
      u = r.loaded,
      f = void 0;
    return typeof window < "u" && window.IntersectionObserver && (f = new IntersectionObserver(Zw(c, u), {
      root: s,
      rootMargin: o,
      threshold: a
    })), {
      observe: function () {
        for (var p = Kw(t, s), m = 0; m < p.length; m++)
          if (!gd(p[m])) {
            if (f) {
              f.observe(p[m]);
              continue
            }
            c(p[m]), Zl(p[m]), u(p[m])
          }
      },
      triggerLoad: function (p) {
        gd(p) || (c(p), Zl(p), u(p))
      },
      observer: f
    }
  }

  function Kg() {
    var n = Qw("[data-lazy]", {
      threshold: .01,
      rootMargin: "1000px 0px"
    });
    n.observe();
    let e = document.querySelectorAll("video[data-play-pause]"),
      t = new IntersectionObserver(function (s, o) {
        s.forEach(function (a, c) {
          a.intersectionRatio == 0 && !a.target.paused ? (a.target.pause(), this["isPaused" + c] = !0) : (this["isPaused" + c] == !0 || a.target.hasAttribute("autoplay")) && (a.target.play(), this["isPaused" + c] = !1)
        })
      }, {
        threshold: 0
      });
    e.forEach(function (s) {
      t.observe(s)
    });
    let i = document.querySelectorAll("[data-play-toggle]"),
      r = new IntersectionObserver(function (s, o) {
        s.forEach(function (a) {
          var c = document.querySelector("#" + a.target.id + " .swiper-container").swiper;
          a.intersectionRatio > 0 ? c.autoplay.start() : c.autoplay.stop()
        })
      }, {
        threshold: 0,
        rootMargin: "0px"
      });
    i.forEach(function (s) {
      r.observe(s)
    })
  }
  var vd = {
      exports: {}
    },
    bo = function (n, e, t) {
      return n instanceof HTMLCollection || n instanceof NodeList || n instanceof Array ? Array.prototype.forEach.call(n, e, t) : e.call(t, n)
    },
    Jw = function (n) {
      var e = n.text || n.textContent || n.innerHTML || "",
        t = n.src || "",
        i = n.parentNode || document.querySelector("head") || document.documentElement,
        r = document.createElement("script");
      if (e.match("document.write")) return console && console.log && console.log("Script contains document.write. Can�셳 be executed correctly. Code skipped ", n), !1;
      if (r.type = "text/javascript", r.id = n.id, t !== "" && (r.src = t, r.async = !1), e !== "") try {
        r.appendChild(document.createTextNode(e))
      } catch {
        r.text = e
      }
      return i.appendChild(r), (i instanceof HTMLHeadElement || i instanceof HTMLBodyElement) && i.contains(r) && i.removeChild(r), !0
    },
    eS = bo,
    ap = Jw,
    tS = function (n) {
      n.tagName.toLowerCase() === "script" && ap(n), eS(n.querySelectorAll("script"), function (e) {
        (!e.type || e.type.toLowerCase() === "text/javascript") && (e.parentNode && e.parentNode.removeChild(e), ap(e))
      })
    },
    iS = bo,
    hc = function (n, e, t, i) {
      e = typeof e == "string" ? e.split(" ") : e, e.forEach(function (r) {
        iS(n, function (s) {
          s.addEventListener(r, t, i)
        })
      })
    },
    lp = hc,
    of = {
      outerHTML: function (n, e) {
        n.outerHTML = e.outerHTML, this.onSwitch()
      },
      innerHTML: function (n, e) {
        n.innerHTML = e.innerHTML, e.className === "" ? n.removeAttribute("class") : n.className = e.className, this.onSwitch()
      },
      switchElementsAlt: function (n, e) {
        if (n.innerHTML = e.innerHTML, e.hasAttributes())
          for (var t = e.attributes, i = 0; i < t.length; i++) n.attributes.setNamedItem(t[i].cloneNode());
        this.onSwitch()
      },
      replaceNode: function (n, e) {
        n.parentNode.replaceChild(e, n), this.onSwitch()
      },
      sideBySide: function (n, e, t, i) {
        var r = Array.prototype.forEach,
          s = [],
          o = [],
          a = document.createDocumentFragment(),
          c = "animationend webkitAnimationEnd MSAnimationEnd oanimationend",
          u = 0,
          f = (function (h) {
            h.target === h.currentTarget && (u--, u <= 0 && s && (s.forEach(function (p) {
              p.parentNode && p.parentNode.removeChild(p)
            }), o.forEach(function (p) {
              p.className = p.className.replace(p.getAttribute("data-pjax-classes"), ""), p.removeAttribute("data-pjax-classes")
            }), o = null, s = null, this.onSwitch()))
          }).bind(this);
        i = i || {}, r.call(n.childNodes, function (h) {
          s.push(h), h.classList && !h.classList.contains("js-Pjax-remove") && (h.hasAttribute("data-pjax-classes") && (h.className = h.className.replace(h.getAttribute("data-pjax-classes"), ""), h.removeAttribute("data-pjax-classes")), h.classList.add("js-Pjax-remove"), i.callbacks && i.callbacks.removeElement && i.callbacks.removeElement(h), i.classNames && (h.className += " " + i.classNames.remove + " " + (t.backward ? i.classNames.backward : i.classNames.forward)), u++, lp(h, c, f, !0))
        }), r.call(e.childNodes, function (h) {
          if (h.classList) {
            var p = "";
            i.classNames && (p = " js-Pjax-add " + i.classNames.add + " " + (t.backward ? i.classNames.forward : i.classNames.backward)), i.callbacks && i.callbacks.addElement && i.callbacks.addElement(h), h.className += p, h.setAttribute("data-pjax-classes", p), o.push(h), a.appendChild(h), u++, lp(h, c, f, !0)
          }
        }), n.className = e.className, n.appendChild(a)
      }
    },
    cp = of ,
    nS = function (n) {
      return n = n || {}, n.elements = n.elements || "a[href], form[action]", n.selectors = n.selectors || ["title", ".js-Pjax"], n.switches = n.switches || {}, n.switchesOptions = n.switchesOptions || {}, n.history = typeof n.history > "u" ? !0 : n.history, n.analytics = typeof n.analytics == "function" || n.analytics === !1 ? n.analytics : rS, n.scrollTo = typeof n.scrollTo > "u" ? 0 : n.scrollTo, n.scrollRestoration = typeof n.scrollRestoration < "u" ? n.scrollRestoration : !0, n.cacheBust = typeof n.cacheBust > "u" ? !0 : n.cacheBust, n.debug = n.debug || !1, n.timeout = n.timeout || 0, n.currentUrlFullReload = typeof n.currentUrlFullReload > "u" ? !1 : n.currentUrlFullReload, n.switches.head || (n.switches.head = cp.switchElementsAlt), n.switches.body || (n.switches.body = cp.switchElementsAlt), n
    };

  function rS() {
    window._gaq && _gaq.push(["_trackPageview"]), window.ga && ga("send", "pageview", {
      page: location.pathname,
      title: document.title
    })
  }
  var Qg = function () {
      var n = 0;
      return function () {
        var e = "pjax" + new Date().getTime() + "_" + n;
        return n++, e
      }
    }(),
    sS = bo,
    Jg = function (n, e, t) {
      e = typeof e == "string" ? e.split(" ") : e, e.forEach(function (i) {
        var r;
        r = document.createEvent("HTMLEvents"), r.initEvent(i, !0, !0), r.eventName = i, t && Object.keys(t).forEach(function (s) {
          r[s] = t[s]
        }), sS(n, function (s) {
          var o = !1;
          !s.parentNode && s !== document && s !== window && (o = !0, document.body.appendChild(s)), s.dispatchEvent(r), o && s.parentNode.removeChild(s)
        })
      })
    },
    pc = function (n) {
      if (n === null || typeof n != "object") return n;
      var e = n.constructor();
      for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
      return e
    },
    oS = function (e, t, i) {
      for (var r = 0; r < t.length; r++)
        for (var s = e.querySelectorAll(t[r]), o = 0; o < s.length; o++)
          if (s[o].contains(i)) return !0;
      return !1
    },
    aS = function (n) {
      if (n == null) return null;
      for (var e = Object(n), t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        if (i != null)
          for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
      }
      return e
    },
    e0 = function () {},
    lu, up;

  function lS() {
    return up || (up = 1, lu = function () {
      this.options.debug && console && (typeof console.log == "function" ? console.log.apply(console, arguments) : console.log && console.log(arguments))
    }), lu
  }
  var cu, dp;

  function cS() {
    if (dp) return cu;
    dp = 1;
    var n = "data-pjax-state";
    return cu = function (e) {
      switch (e.tagName.toLowerCase()) {
        case "a":
          e.hasAttribute(n) || this.attachLink(e);
          break;
        case "form":
          e.hasAttribute(n) || this.attachForm(e);
          break;
        default:
          throw "Pjax can only be applied on <a> or <form> submit"
      }
    }, cu
  }
  var uu, fp;

  function uS() {
    if (fp) return uu;
    fp = 1;
    var n = hc,
      e = pc,
      t = "data-pjax-state",
      i = function (o, a) {
        if (!s(a)) {
          var c = e(this.options),
            u = r(o, a);
          if (u) {
            o.setAttribute(t, u);
            return
          }
          if (a.preventDefault(), this.options.currentUrlFullReload && o.href === window.location.href.split("#")[0]) {
            o.setAttribute(t, "reload"), this.reload();
            return
          }
          o.setAttribute(t, "load"), c.triggerElement = o, this.loadUrl(o.href, c)
        }
      };

    function r(o, a) {
      if (a.which > 1 || a.metaKey || a.ctrlKey || a.shiftKey || a.altKey) return "modifier";
      if (o.protocol !== window.location.protocol || o.host !== window.location.host) return "external";
      if (o.hash && o.href.replace(o.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
      if (o.href === window.location.href.split("#")[0] + "#") return "anchor-empty"
    }
    var s = function (o) {
      return o.defaultPrevented || o.returnValue === !1
    };
    return uu = function (o) {
      var a = this;
      o.setAttribute(t, ""), n(o, "click", function (c) {
        i.call(a, o, c)
      }), n(o, "keyup", (function (c) {
        c.keyCode === 13 && i.call(a, o, c)
      }).bind(this))
    }, uu
  }
  var du, hp;

  function dS() {
    if (hp) return du;
    hp = 1;
    var n = hc,
      e = pc,
      t = "data-pjax-state",
      i = function (a, c) {
        if (!o(c)) {
          var u = e(this.options);
          u.requestOptions = {
            requestUrl: a.getAttribute("action") || window.location.href,
            requestMethod: a.getAttribute("method") || "GET"
          };
          var f = document.createElement("a");
          f.setAttribute("href", u.requestOptions.requestUrl);
          var h = s(f, u);
          if (h) {
            a.setAttribute(t, h);
            return
          }
          c.preventDefault(), a.enctype === "multipart/form-data" ? u.requestOptions.formData = new FormData(a) : u.requestOptions.requestParams = r(a), a.setAttribute(t, "submit"), u.triggerElement = a, this.loadUrl(f.href, u)
        }
      };

    function r(a) {
      for (var c = [], u = a.elements, f = 0; f < u.length; f++) {
        var h = u[f],
          p = h.tagName.toLowerCase();
        if (h.name && h.attributes !== void 0 && p !== "button") {
          var m = h.attributes.type;
          if (!m || m.value !== "checkbox" && m.value !== "radio" || h.checked) {
            var g = [];
            if (p === "select")
              for (var y, w = 0; w < h.options.length; w++) y = h.options[w], y.selected && !y.disabled && g.push(y.hasAttribute("value") ? y.value : y.text);
            else g.push(h.value);
            for (var S = 0; S < g.length; S++) c.push({
              name: encodeURIComponent(h.name),
              value: encodeURIComponent(g[S])
            })
          }
        }
      }
      return c
    }

    function s(a, c) {
      if (a.protocol !== window.location.protocol || a.host !== window.location.host) return "external";
      if (a.hash && a.href.replace(a.hash, "") === window.location.href.replace(location.hash, "")) return "anchor";
      if (a.href === window.location.href.split("#")[0] + "#") return "anchor-empty";
      if (c.currentUrlFullReload && a.href === window.location.href.split("#")[0]) return "reload"
    }
    var o = function (a) {
      return a.defaultPrevented || a.returnValue === !1
    };
    return du = function (a) {
      var c = this;
      a.setAttribute(t, ""), n(a, "submit", function (u) {
        i.call(c, a, u)
      })
    }, du
  }
  var fu, pp;

  function fS() {
    if (pp) return fu;
    pp = 1;
    var n = bo;
    return fu = function (e, t, i, r) {
      r = r || document, e.forEach(function (s) {
        n(r.querySelectorAll(s), t, i)
      })
    }, fu
  }
  var hu, mp;

  function hS() {
    if (mp) return hu;
    mp = 1;
    var n = bo,
      e = of ;
    return hu = function (t, i, r, s, o, a) {
      var c = [];
      r.forEach(function (u) {
        var f = s.querySelectorAll(u),
          h = o.querySelectorAll(u);
        if (this.log && this.log("Pjax switch", u, f, h), f.length !== h.length) throw "DOM doesn�셳 look the same on new loaded page: ��" + u + "�� - new " + f.length + ", old " + h.length;
        n(f, function (p, m) {
          var g = h[m];
          this.log && this.log("newEl", p, "oldEl", g);
          var y = t[u] ? t[u].bind(this, g, p, a, i[u]) : e.outerHTML.bind(this, g, p, a);
          c.push(y)
        }, this)
      }, this), this.state.numPendingSwitches = c.length, c.forEach(function (u) {
        u()
      })
    }, hu
  }
  var pu, gp;

  function pS() {
    if (gp) return pu;
    gp = 1;
    var n = e0;
    return pu = function (e) {
      e && e.readyState < 4 && (e.onreadystatechange = n, e.abort())
    }, pu
  }
  var mu, vp;

  function mS() {
    return vp || (vp = 1, mu = function (n, e, t) {
      var i = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
        r = n.indexOf("?") !== -1 ? "&" : "?";
      return n.match(i) ? n.replace(i, "$1" + e + "=" + t + "$2") : n + r + e + "=" + t
    }), mu
  }
  var gu, yp;

  function gS() {
    if (yp) return gu;
    yp = 1;
    var n = mS();
    return gu = function (e, t, i) {
      t = t || {};
      var r, s = t.requestOptions || {},
        o = (s.requestMethod || "GET").toUpperCase(),
        a = s.requestParams || null,
        c = s.formData || null,
        u = null,
        f = new XMLHttpRequest,
        h = t.timeout || 0;
      if (f.onreadystatechange = function () {
          f.readyState === 4 && (f.status === 200 ? i(f.responseText, f, e, t) : f.status !== 0 && i(null, f, e, t))
        }, f.onerror = function (p) {
          console.log(p), i(null, f, e, t)
        }, f.ontimeout = function () {
          i(null, f, e, t)
        }, a && a.length) switch (r = a.map(function (p) {
        return p.name + "=" + p.value
      }).join("&"), o) {
        case "GET":
          e = e.split("?")[0], e += "?" + r;
          break;
        case "POST":
          u = r;
          break
      } else c && (u = c);
      return t.cacheBust && (e = n(e, "t", Date.now())), f.open(o, e, !0), f.timeout = h, f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f.setRequestHeader("X-PJAX", "true"), f.setRequestHeader("X-PJAX-Selectors", JSON.stringify(t.selectors)), u && o === "POST" && !c && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.send(u), f
    }, gu
  }
  var vu, bp;

  function vS() {
    if (bp) return vu;
    bp = 1;
    var n = pc,
      e = Qg,
      t = Jg;
    return vu = function (i, r, s, o) {
      if (o = n(o || this.options), o.request = r, i === !1) {
        t(document, "pjax:complete pjax:error", o);
        return
      }
      var a = window.history.state || {};
      window.history.replaceState({
        url: a.url || window.location.href,
        title: a.title || document.title,
        uid: a.uid || e(),
        scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop]
      }, document.title, window.location.href);
      var c = s;
      r.responseURL ? s !== r.responseURL && (s = r.responseURL) : r.getResponseHeader("X-PJAX-URL") ? s = r.getResponseHeader("X-PJAX-URL") : r.getResponseHeader("X-XHR-Redirected-To") && (s = r.getResponseHeader("X-XHR-Redirected-To"));
      var u = document.createElement("a");
      u.href = c;
      var f = u.hash;
      u.href = s, f && !u.hash && (u.hash = f, s = u.href), this.state.href = s, this.state.options = o;
      try {
        this.loadContent(i, o)
      } catch (h) {
        if (t(document, "pjax:error", o), this.options.debug) throw h;
        return console && console.error && console.error("Pjax switch fail: ", h), this.latestChance(s)
      }
    }, vu
  }
  var yu, _p;

  function yS() {
    return _p || (_p = 1, yu = function () {
      return window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
    }), yu
  }
  var bS = tS,
    wp = bo,
    _S = nS,
    wS = of ,
    yd = Qg,
    SS = hc,
    rl = Jg,
    t0 = pc,
    xS = oS,
    TS = aS,
    Sp = e0,
    kr = function (n) {
      this.state = {
        numPendingSwitches: 0,
        href: null,
        options: null
      }, this.options = _S(n), this.log("Pjax options", this.options), this.options.scrollRestoration && "scrollRestoration" in history && (history.scrollRestoration = "manual"), this.maxUid = this.lastUid = yd(), this.parseDOM(document), SS(window, "popstate", (function (e) {
        if (e.state) {
          var t = t0(this.options);
          t.url = e.state.url, t.title = e.state.title, t.history = !1, t.scrollPos = e.state.scrollPos, e.state.uid < this.lastUid ? t.backward = !0 : t.forward = !0, this.lastUid = e.state.uid, this.loadUrl(e.state.url, t)
        }
      }).bind(this))
    };
  kr.switches = wS;
  kr.prototype = {
    log: lS(),
    getElements: function (n) {
      return n.querySelectorAll(this.options.elements)
    },
    parseDOM: function (n) {
      var e = cS();
      wp(this.getElements(n), e, this)
    },
    refresh: function (n) {
      this.parseDOM(n || document)
    },
    reload: function () {
      window.location.reload()
    },
    attachLink: uS(),
    attachForm: dS(),
    forEachSelectors: function (n, e, t) {
      return fS().bind(this)(this.options.selectors, n, e, t)
    },
    switchSelectors: function (n, e, t, i) {
      return hS().bind(this)(this.options.switches, this.options.switchesOptions, n, e, t, i)
    },
    latestChance: function (n) {
      window.location = n
    },
    onSwitch: function () {
      rl(window, "resize scroll"), this.state.numPendingSwitches--, this.state.numPendingSwitches === 0 && this.afterAllSwitches()
    },
    loadContent: function (n, e) {
      if (typeof n != "string") {
        rl(document, "pjax:complete pjax:error", e);
        return
      }
      var t = document.implementation.createHTMLDocument("pjax"),
        i = /<html[^>]+>/gi,
        r = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,
        s = n.match(i);
      if (s && s.length && (s = s[0].match(r), s.length && (s.shift(), s.forEach(function (o) {
          var a = o.trim().split("=");
          a.length === 1 ? t.documentElement.setAttribute(a[0], !0) : t.documentElement.setAttribute(a[0], a[1].slice(1, -1))
        }))), t.documentElement.innerHTML = n, this.log("load content", t.documentElement.attributes, t.documentElement.innerHTML.length), document.activeElement && xS(document, this.options.selectors, document.activeElement)) try {
        document.activeElement.blur()
      } catch {}
      this.switchSelectors(this.options.selectors, t, document, e)
    },
    abortRequest: pS(),
    doRequest: gS(),
    handleResponse: vS(),
    loadUrl: function (n, e) {
      e = typeof e == "object" ? TS({}, this.options, e) : t0(this.options), this.log("load href", n, e), this.abortRequest(this.request), rl(document, "pjax:send", e), this.request = this.doRequest(n, e, this.handleResponse.bind(this))
    },
    afterAllSwitches: function () {
      var n = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();
      n && document.activeElement !== n && n.focus(), this.options.selectors.forEach(function (o) {
        wp(document.querySelectorAll(o), function (a) {
          bS(a)
        })
      });
      var e = this.state;
      if (e.options.history && (window.history.state || (this.lastUid = this.maxUid = yd(), window.history.replaceState({
          url: window.location.href,
          title: document.title,
          uid: this.maxUid,
          scrollPos: [0, 0]
        }, document.title)), this.lastUid = this.maxUid = yd(), window.history.pushState({
          url: e.href,
          title: e.options.title,
          uid: this.maxUid,
          scrollPos: [0, 0]
        }, e.options.title, e.href)), this.forEachSelectors(function (o) {
          this.parseDOM(o)
        }, this), rl(document, "pjax:complete pjax:success", e.options), typeof e.options.analytics == "function" && e.options.analytics(), e.options.history) {
        var t = document.createElement("a");
        if (t.href = this.state.href, t.hash) {
          var i = t.hash.slice(1);
          i = decodeURIComponent(i);
          var r = 0,
            s = document.getElementById(i) || document.getElementsByName(i)[0];
          if (s && s.offsetParent)
            do r += s.offsetTop, s = s.offsetParent; while (s);
          window.scrollTo(0, r)
        } else e.options.scrollTo !== !1 && (e.options.scrollTo.length > 1 ? window.scrollTo(e.options.scrollTo[0], e.options.scrollTo[1]) : window.scrollTo(0, e.options.scrollTo))
      } else e.options.scrollRestoration && e.options.scrollPos && window.scrollTo(e.options.scrollPos[0], e.options.scrollPos[1]);
      this.state = {
        numPendingSwitches: 0,
        href: null,
        options: null
      }
    }
  };
  kr.isSupported = yS();
  if (kr.isSupported()) vd.exports = kr;
  else {
    var xp = Sp;
    for (var bu in kr.prototype) kr.prototype.hasOwnProperty(bu) && typeof kr.prototype[bu] == "function" && (xp[bu] = Sp);
    vd.exports = xp
  }
  var MS = vd.exports;
  const i0 = ac(MS);
  let Tp = "",
    _u = "";
  class kS {
    constructor() {
      this.currentPageId = document.querySelector(".wrapper").id
    }
    get currentPageId() {
      return Tp
    }
    set currentPageId(e) {
      Tp = e.substring(3), document.body.dataset.pg = e, this.nextPageId = ""
    }
    get nextPageId() {
      return _u
    }
    set nextPageId(e) {
      _u = e.substring(3), document.body.dataset.pgNext = e.length > 0 ? "pg-" + _u : ""
    }
    get token() {
      return document.querySelector('meta[name="csrf-token"]').content
    }
  }
  const Kl = new kS;

  function PS() {
    document.querySelectorAll("modal-group.active", "modal-item.active").forEach(n => {
      document.dispatchEvent(new CustomEvent("modal:close")), document.removeEventListener("keydown", this), document.body.dataset.modalState = "leave", n.classList.remove("active"), n.classList.add("leave"), setTimeout(() => {
        n.classList.remove("leave"), delete document.body.dataset.modalState, delete document.body.dataset.modal, delete document.body.dataset.modalItem
      }, 800)
    })
  }
  i0.prototype.getElements = function () {
    let n = Array.from(document.querySelectorAll("a:not(.no-pjax):not([data-fancybox])"));
    n = n.filter(o => o.href.includes(location.hostname)), n.forEach(o => {
      o.addEventListener("click", function () {
        PS(), document.body.dataset.pgPrev = document.body.dataset.pg, o.dataset.pgActive && (document.body.dataset.pgNext = o.dataset.pgActive)
      })
    }), Array.from(document.querySelectorAll("[data-url]")).forEach(o => o.onclick = () => {
      Al.loadUrl(o.dataset.url)
    });

    function t(o) {
      return new URLSearchParams(new FormData(o)).toString()
    }

    function i(o) {
      return o.split("?")[0]
    }

    function r(o) {
      const a = t(o.target.form),
        c = i(o.target.form.action),
        u = a ? `${c}?${a}` : c;
      document.body.dataset.pgPrev = document.body.dataset.pg, o.target.form.dataset.pgActive && (document.body.dataset.pgNext = o.target.form.dataset.pgActive), Al.loadUrl(u)
    }
    return Array.from(document.querySelectorAll("form[data-pjax]")).forEach(o => {
      if (o.dataset.eventsAttached) return;
      o.querySelectorAll("select.submit-on-change").forEach(c => {
        c.addEventListener("change", r)
      }), o.addEventListener("submit", function (c) {
        if (c.preventDefault(), document.body.dataset.pgPrev = document.body.dataset.pg, o.dataset.pgActive && (document.body.dataset.pgNext = o.dataset.pgActive), o.method.toUpperCase() === "GET") {
          const u = t(o),
            f = i(o.action),
            h = u ? `${f}?${u}` : f;
          Al.loadUrl(h)
        }
      }), o.dataset.eventsAttached = "true"
    }), n
  };
  const sl = (window.innerWidth < 1025, 900),
    Al = new i0({
      elements: "a[href]",
      cacheBust: !1,
      debug: !1,
      selectors: ["title", "#scripts", ".wrapper"],
      maxCacheLength: 20,
      timeout: 0,
      scrollTo: 0,
      switches: {
        title: function (n, e, t) {
          setTimeout(() => {
            document.title = e.textContent, this.onSwitch()
          }, sl)
        },
        "#scripts": function (n, e, t) {
          setTimeout(() => {
            n.innerHTML = e.innerHTML, this.onSwitch()
          }, sl)
        },
        ".wrapper": function (n, e, t) {
          Kl.nextPageId = e.id, setTimeout(() => {
            document.dispatchEvent(new CustomEvent("pjax:switch"))
          }, sl - 10), setTimeout(() => {
            n.outerHTML = e.outerHTML, Kl.currentPageId = e.id, this.onSwitch()
          }, sl)
        }
      }
    });

  function $o(n) {
    throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
  }
  var ES = {
    exports: {}
  };
  (function (n, e) {
    (function (t) {
      n.exports = t()
    })(function () {
      return function t(i, r, s) {
        function o(u, f) {
          if (!r[u]) {
            if (!i[u]) {
              var h = typeof $o == "function" && $o;
              if (!f && h) return h(u, !0);
              if (a) return a(u, !0);
              var p = new Error("Cannot find module '" + u + "'");
              throw p.code = "MODULE_NOT_FOUND", p
            }
            var m = r[u] = {
              exports: {}
            };
            i[u][0].call(m.exports, function (g) {
              return o(i[u][1][g] || g)
            }, m, m.exports, t, i, r, s)
          }
          return r[u].exports
        }
        for (var a = typeof $o == "function" && $o, c = 0; c < s.length; c++) o(s[c]);
        return o
      }({
        1: [function (t, i, r) {
          i.exports = function (s) {
            var o = 2.5949095;
            return (s *= 2) < 1 ? s * s * ((o + 1) * s - o) * .5 : .5 * ((s -= 2) * s * ((o + 1) * s + o) + 2)
          }
        }, {}],
        2: [function (t, i, r) {
          i.exports = function (s) {
            var o = 1.70158;
            return s * s * ((o + 1) * s - o)
          }
        }, {}],
        3: [function (t, i, r) {
          i.exports = function (s) {
            var o = 1.70158;
            return --s * s * ((o + 1) * s + o) + 1
          }
        }, {}],
        4: [function (t, i, r) {
          var s = t("./bounce-out");
          i.exports = function (o) {
            return o < .5 ? .5 * (1 - s(1 - 2 * o)) : .5 * s(2 * o - 1) + .5
          }
        }, {
          "./bounce-out": 6
        }],
        5: [function (t, i, r) {
          var s = t("./bounce-out");
          i.exports = function (o) {
            return 1 - s(1 - o)
          }
        }, {
          "./bounce-out": 6
        }],
        6: [function (t, i, r) {
          i.exports = function (s) {
            var o = s * s;
            return s < 4 / 11 ? 7.5625 * o : s < 8 / 11 ? 9.075 * o - 9.9 * s + 3.4 : s < .9 ? 4356 / 361 * o - 35442 / 1805 * s + 16061 / 1805 : 10.8 * s * s - 20.52 * s + 10.72
          }
        }, {}],
        7: [function (t, i, r) {
          i.exports = function (s) {
            return (s *= 2) < 1 ? -.5 * (Math.sqrt(1 - s * s) - 1) : .5 * (Math.sqrt(1 - (s -= 2) * s) + 1)
          }
        }, {}],
        8: [function (t, i, r) {
          i.exports = function (s) {
            return 1 - Math.sqrt(1 - s * s)
          }
        }, {}],
        9: [function (t, i, r) {
          i.exports = function (s) {
            return Math.sqrt(1 - --s * s)
          }
        }, {}],
        10: [function (t, i, r) {
          i.exports = function (s) {
            return s < .5 ? 4 * s * s * s : .5 * Math.pow(2 * s - 2, 3) + 1
          }
        }, {}],
        11: [function (t, i, r) {
          i.exports = function (s) {
            return s * s * s
          }
        }, {}],
        12: [function (t, i, r) {
          i.exports = function (s) {
            var o = s - 1;
            return o * o * o + 1
          }
        }, {}],
        13: [function (t, i, r) {
          i.exports = function (s) {
            return s < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * s) * Math.pow(2, 10 * (2 * s - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * s - 1 + 1)) * Math.pow(2, -10 * (2 * s - 1)) + 1
          }
        }, {}],
        14: [function (t, i, r) {
          i.exports = function (s) {
            return Math.sin(13 * s * Math.PI / 2) * Math.pow(2, 10 * (s - 1))
          }
        }, {}],
        15: [function (t, i, r) {
          i.exports = function (s) {
            return Math.sin(-13 * (s + 1) * Math.PI / 2) * Math.pow(2, -10 * s) + 1
          }
        }, {}],
        16: [function (t, i, r) {
          i.exports = function (s) {
            return s === 0 || s === 1 ? s : s < .5 ? .5 * Math.pow(2, 20 * s - 10) : -.5 * Math.pow(2, 10 - 20 * s) + 1
          }
        }, {}],
        17: [function (t, i, r) {
          i.exports = function (s) {
            return s === 0 ? s : Math.pow(2, 10 * (s - 1))
          }
        }, {}],
        18: [function (t, i, r) {
          i.exports = function (s) {
            return s === 1 ? s : 1 - Math.pow(2, -10 * s)
          }
        }, {}],
        19: [function (t, i, r) {
          i.exports = {
            backInOut: t("./back-in-out"),
            backIn: t("./back-in"),
            backOut: t("./back-out"),
            bounceInOut: t("./bounce-in-out"),
            bounceIn: t("./bounce-in"),
            bounceOut: t("./bounce-out"),
            circInOut: t("./circ-in-out"),
            circIn: t("./circ-in"),
            circOut: t("./circ-out"),
            cubicInOut: t("./cubic-in-out"),
            cubicIn: t("./cubic-in"),
            cubicOut: t("./cubic-out"),
            elasticInOut: t("./elastic-in-out"),
            elasticIn: t("./elastic-in"),
            elasticOut: t("./elastic-out"),
            expoInOut: t("./expo-in-out"),
            expoIn: t("./expo-in"),
            expoOut: t("./expo-out"),
            linear: t("./linear"),
            quadInOut: t("./quad-in-out"),
            quadIn: t("./quad-in"),
            quadOut: t("./quad-out"),
            quartInOut: t("./quart-in-out"),
            quartIn: t("./quart-in"),
            quartOut: t("./quart-out"),
            quintInOut: t("./quint-in-out"),
            quintIn: t("./quint-in"),
            quintOut: t("./quint-out"),
            sineInOut: t("./sine-in-out"),
            sineIn: t("./sine-in"),
            sineOut: t("./sine-out")
          }
        }, {
          "./back-in": 2,
          "./back-in-out": 1,
          "./back-out": 3,
          "./bounce-in": 5,
          "./bounce-in-out": 4,
          "./bounce-out": 6,
          "./circ-in": 8,
          "./circ-in-out": 7,
          "./circ-out": 9,
          "./cubic-in": 11,
          "./cubic-in-out": 10,
          "./cubic-out": 12,
          "./elastic-in": 14,
          "./elastic-in-out": 13,
          "./elastic-out": 15,
          "./expo-in": 17,
          "./expo-in-out": 16,
          "./expo-out": 18,
          "./linear": 20,
          "./quad-in": 22,
          "./quad-in-out": 21,
          "./quad-out": 23,
          "./quart-in": 25,
          "./quart-in-out": 24,
          "./quart-out": 26,
          "./quint-in": 28,
          "./quint-in-out": 27,
          "./quint-out": 29,
          "./sine-in": 31,
          "./sine-in-out": 30,
          "./sine-out": 32
        }],
        20: [function (t, i, r) {
          i.exports = function (s) {
            return s
          }
        }, {}],
        21: [function (t, i, r) {
          i.exports = function (s) {
            return (s /= .5) < 1 ? .5 * s * s : -.5 * (--s * (s - 2) - 1)
          }
        }, {}],
        22: [function (t, i, r) {
          i.exports = function (s) {
            return s * s
          }
        }, {}],
        23: [function (t, i, r) {
          i.exports = function (s) {
            return -s * (s - 2)
          }
        }, {}],
        24: [function (t, i, r) {
          i.exports = function (s) {
            return s < .5 ? 8 * Math.pow(s, 4) : -8 * Math.pow(s - 1, 4) + 1
          }
        }, {}],
        25: [function (t, i, r) {
          i.exports = function (s) {
            return Math.pow(s, 4)
          }
        }, {}],
        26: [function (t, i, r) {
          i.exports = function (s) {
            return Math.pow(s - 1, 3) * (1 - s) + 1
          }
        }, {}],
        27: [function (t, i, r) {
          i.exports = function (s) {
            return (s *= 2) < 1 ? .5 * s * s * s * s * s : .5 * ((s -= 2) * s * s * s * s + 2)
          }
        }, {}],
        28: [function (t, i, r) {
          i.exports = function (s) {
            return s * s * s * s * s
          }
        }, {}],
        29: [function (t, i, r) {
          i.exports = function (s) {
            return --s * s * s * s * s + 1
          }
        }, {}],
        30: [function (t, i, r) {
          i.exports = function (s) {
            return -.5 * (Math.cos(Math.PI * s) - 1)
          }
        }, {}],
        31: [function (t, i, r) {
          i.exports = function (s) {
            var o = Math.cos(s * Math.PI * .5);
            return Math.abs(o) < 1e-14 ? 1 : 1 - o
          }
        }, {}],
        32: [function (t, i, r) {
          i.exports = function (s) {
            return Math.sin(s * Math.PI / 2)
          }
        }, {}],
        33: [function (t, i, r) {
          i.exports = function (s, o) {
            o || (o = [0, ""]), s = String(s);
            var a = parseFloat(s, 10);
            return o[0] = a, o[1] = s.match(/[\d.\-\+]*\s*(.*)/)[1] || "", o
          }
        }, {}],
        34: [function (t, i, r) {
          Object.defineProperty(r, "__esModule", {
            value: !0
          }), r.create = void 0;
          var s = a(t("parse-unit")),
            o = a(t("eases"));

          function a(P) {
            return P && P.__esModule ? P : {
              default: P
            }
          }

          function c(P) {
            return (c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (R) {
              return typeof R
            } : function (R) {
              return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
            })(P)
          }
          var u, f, h, p = [],
            m = typeof window < "u",
            g = function () {
              return (document.scrollingElement || document.documentElement).scrollTop
            },
            y = function () {
              return window.innerHeight || window.outerHeight
            },
            w = function (P) {
              return isNaN((0, s.default)(P)[0]) === !1
            },
            S = function (P) {
              var R = (0, s.default)(P);
              return {
                value: R[0],
                unit: R[1]
              }
            },
            T = function (P) {
              return String(P).match(/^[a-z]+-[a-z]+$/) !== null
            },
            M = function (P, R) {
              return P === !0 ? R.elem : P instanceof HTMLElement ? R.direct : R.global
            },
            k = function (P, R) {
              var L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : g(),
                F = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : y(),
                I = R.getBoundingClientRect(),
                D = P.match(/^[a-z]+/)[0],
                q = P.match(/[a-z]+$/)[0],
                Z = 0;
              return q === "top" && (Z -= 0), q === "middle" && (Z -= F / 2), q === "bottom" && (Z -= F), D === "top" && (Z += I.top + L), D === "middle" && (Z += I.top + L + I.height / 2), D === "bottom" && (Z += I.top + L + I.height), "".concat(Z, "px")
            },
            E = function (P) {
              var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : g(),
                L = P.getData(),
                F = L.to.value - L.from.value,
                I = R - L.from.value,
                D = I / (F / 100),
                q = Math.min(Math.max(D, 0), 100),
                Z = M(L.direct, {
                  global: document.documentElement,
                  elem: L.elem,
                  direct: L.direct
                }),
                B = Object.keys(L.props).reduce(function (le, we) {
                  var A = L.props[we],
                    ye = A.from.unit || A.to.unit,
                    je = A.from.value - A.to.value,
                    H = A.timing(q / 100),
                    V = A.from.value - je * H,
                    N = Math.round(1e4 * V) / 1e4;
                  return le[we] = N + ye, le
                }, {}),
                se = D >= 0 && D <= 100,
                re = D < 0 || D > 100;
              return se === !0 && L.inside(P, D, B), re === !0 && L.outside(P, D, B), {
                elem: Z,
                props: B
              }
            },
            O = function (P, R) {
              Object.keys(R).forEach(function (L) {
                return function (F, I) {
                  F.style.setProperty(I.key, I.value)
                }(P, {
                  key: L,
                  value: R[L]
                })
              })
            };
          r.create = function (P) {
            var R = null,
              L = !1,
              F = {
                isActive: function () {
                  return L
                },
                getData: function () {
                  return R
                },
                calculate: function () {
                  R = function () {
                    var D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if ((D = Object.assign({}, D)).inside == null && (D.inside = function () {}), D.outside == null && (D.outside = function () {}), D.direct == null && (D.direct = !1), D.track == null && (D.track = !0), D.props == null && (D.props = {}), D.from == null) throw new Error("Missing property `from`");
                    if (D.to == null) throw new Error("Missing property `to`");
                    if (typeof D.inside != "function") throw new Error("Property `inside` must be undefined or a function");
                    if (typeof D.outside != "function") throw new Error("Property `outside` must be undefined or a function");
                    if (typeof D.direct != "boolean" && D.direct instanceof HTMLElement == 0) throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
                    if (D.direct === !0 && D.elem == null) throw new Error("Property `elem` is required when `direct` is true");
                    if (typeof D.track != "boolean") throw new Error("Property `track` must be undefined or a boolean");
                    if (c(D.props) !== "object") throw new Error("Property `props` must be undefined or an object");
                    if (D.elem == null) {
                      if (w(D.from) === !1) throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                      if (w(D.to) === !1) throw new Error("Property `to` must be a absolute value when no `elem` has been provided")
                    } else T(D.from) === !0 && (D.from = k(D.from, D.elem)), T(D.to) === !0 && (D.to = k(D.to, D.elem));
                    return D.from = S(D.from), D.to = S(D.to), D.props = Object.keys(D.props).reduce(function (q, Z) {
                      var B = Object.assign({}, D.props[Z]);
                      if (w(B.from) === !1) throw new Error("Property `from` of prop must be a absolute value");
                      if (w(B.to) === !1) throw new Error("Property `from` of prop must be a absolute value");
                      if (B.from = S(B.from), B.to = S(B.to), B.timing == null && (B.timing = o.default.linear), typeof B.timing != "string" && typeof B.timing != "function") throw new Error("Property `timing` of prop must be undefined, a string or a function");
                      if (typeof B.timing == "string" && o.default[B.timing] == null) throw new Error("Unknown timing for property `timing` of prop");
                      return typeof B.timing == "string" && (B.timing = o.default[B.timing]), q[Z] = B, q
                    }, {}), D
                  }(P)
                },
                update: function () {
                  var D = E(F),
                    q = D.elem,
                    Z = D.props;
                  return O(q, Z), Z
                },
                start: function () {
                  L = !0
                },
                stop: function () {
                  L = !1
                },
                destroy: function () {
                  p[I] = void 0
                }
              },
              I = p.push(F) - 1;
            return F.calculate(), F
          }, m === !0 ? (function P(R, L) {
            var F = function () {
                requestAnimationFrame(function () {
                  return P(R, L)
                })
              },
              I = function (q) {
                return q.filter(function (Z) {
                  return Z != null && Z.isActive()
                })
              }(p);
            if (I.length === 0) return F();
            var D = g();
            if (L === D) return F();
            L = D, I.map(function (q) {
              return E(q, D)
            }).forEach(function (q) {
              var Z = q.elem,
                B = q.props;
              return O(Z, B)
            }), F()
          }(), window.addEventListener("resize", (u = function () {
            (function (P) {
              return P.filter(function (R) {
                return R != null && R.getData().track
              })
            })(p).forEach(function (P) {
              P.calculate(), P.update()
            })
          }, f = 50, h = null, function () {
            for (var P = arguments.length, R = new Array(P), L = 0; L < P; L++) R[L] = arguments[L];
            clearTimeout(h), h = setTimeout(function () {
              return u.apply(void 0, R)
            }, f)
          }))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")
        }, {
          eases: 19,
          "parse-unit": 33
        }]
      }, {}, [34])(34)
    })
  })(ES);
  const Ce = {
      isPhone: !1,
      isTablet: !1,
      isMobile: !1,
      isDesktop: !1,
      isPhonePlus: !1,
      isIphone: !1,
      isSafariDesktop: !1,
      isMacChrome: !1,
      isMac: !1,
      isFirefox: !1,
      size: "",
      width: 0,
      height: 0,
      tresholdPhone: 768,
      tresholdTablet: 1025
    },
    OS = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    Mp = navigator.userAgent,
    CS = navigator.vendor;
  Ce.isSafariDesktop = /Safari/i.test(Mp) && /Apple Computer/.test(CS) && !/Mobi|Android/i.test(Mp);
  Ce.isMac = navigator.userAgent.indexOf("Mac OS X") != -1;
  Ce.isIphone = navigator.userAgent.match(/iPhone/i);
  Ce.isMac && window.chrome && (Ce.isMac = !1, Ce.isMacChrome = !0);
  Ce.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const n0 = function () {
    let n = window.innerWidth,
      e = window.innerHeight;
    Ce.isPhone = n < Ce.tresholdPhone, Ce.isTablet = n >= Ce.tresholdPhone && n <= Ce.tresholdTablet, Ce.isMobile = n <= Ce.tresholdTablet || OS == !0, Ce.isDesktop = n >= Ce.tresholdTablet, Ce.phonePlus = n >= Ce.tresholdPhone, Ce.isPhone && (Ce.size = "phone"), Ce.isTablet && (Ce.size = "tablet"), Ce.isDesktop && (Ce.size = "desktop"), Ce.width = n, Ce.height = e
  };
  window.addEventListener("resize", n0);
  n0();
  (function () {
    const n = function (i) {
        t.bind(this)(!0, i)
      },
      e = function (i) {
        t.bind(this)(!1, i)
      },
      t = function (i = !0, r) {
        const {
          delay: s = -1,
          leave: o = !0,
          leaveDelay: a = 600
        } = r || {};
        if (i) this.futureActiveState = !0, s < 0 ? (this.classList.remove("leave"), this.classList.add("active")) : setTimeout(() => {
          this.futureActiveState && (this.classList.remove("leave"), this.classList.add("active"))
        }, s);
        else {
          this.futureActiveState = !1;
          let u = c.bind(this);
          s < 0 ? u() : setTimeout(() => {
            this.futureActiveState === !1 && u()
          }, s)
        }

        function c() {
          this.classList.contains("active") && (this.classList.remove("active"), o && (this.classList.add("leave"), setTimeout(() => {
            this.classList.remove("leave")
          }, a)))
        }
      };
    HTMLElement.prototype.addActive = n, HTMLElement.prototype.removeActive = e
  })();

  function DS(n) {
    const {
      disabledState: e = "",
      clickDiv: t = !1,
      baseElement: i = document.getElementById("wrapper-cursor"),
      cursorElement: r = i,
      defaultCursor: s = "default"
    } = n || {};
    let o = 0,
      a = 0,
      c = !1,
      u = [],
      f = s,
      h = "",
      p = !0,
      m = performance.now(),
      g = [];
    document.addEventListener("mousemove", T, {
      passive: !0
    }), document.addEventListener("click", S, {
      passive: !0
    }), document.addEventListener("mouseout", y, {
      passive: !0
    }), document.addEventListener("scroll", w, {
      passive: !0
    });

    function y(E) {
      E.toElement === null && (p = !1)
    }

    function w() {
      c === !1 && (c = !0, setTimeout(M, 100))
    }

    function S() {
      if (i.dataset.clicked = !0, setTimeout(() => {
          i.dataset.clicked = !1
        }, 350), M(), t) {
        let E = document.createElement("div");
        E.dataset.cursor = f != "" ? `${f}-click` : "click", E.style.top = o + "px", E.style.left = a + "px", E.style.position = "fixed", document.body.appendChild(E), setTimeout(document.body.removeChild, 1e3, E)
      }
    }

    function T(E) {
      a = E.clientX, o = E.clientY, p = !0, c === !1 && (c = !0, setTimeout(M, 100)), performance.now() - m > 10 && window.requestAnimationFrame(function (O) {
        r.style.transform = `translate3d(${a}px, ${o}px, 0px)`, m = O
      })
    }

    function M() {
      u = document.elementsFromPoint(a, o);
      let E = !1,
        O = !1,
        P = !1;
      u.slice().reverse().forEach(R => {
        if (R.nodeName === "IFRAME" && (p = !1), "cursorTitle" in R.dataset && (h = R.dataset.cursorTitle, P = !0), "cursorStyle" in R.dataset && (f = R.dataset.cursorStyle, E = !0), E == !1 && g.length > 0) {
          let L = g.find(F => F.e === R.nodeName.toLowerCase());
          L != null && (f = L.r, O = !0)
        }
      }), P === !1 && (h = ""), E === !1 && O === !1 && (f = s), c = !1, i.dataset.cursorTitle = p ? h : "", i.dataset.cursor = p ? f : e
    }

    function k(E, O) {
      g.push({
        e: E,
        r: O
      })
    }
    return {
      AddDefault: k
    }
  }
  class xa {
    constructor({
      pageName: e,
      main: t,
      init: i,
      destroy: r
    }) {
      this.pageName = e, this.init = i || s, this.main = t, this.destroy = r || s, this.transitionDelayDesktop = 600, this.transitionDelayMobile = 300;

      function s() {
        return !0
      }
    }
  }
  class AS {
    constructor() {
      this.pages = [], this.currentPage = {}, this.lastPage = {}, this.firstPage = !0, document.addEventListener("pjax:send", this), document.addEventListener("pjax:complete", this), document.addEventListener("pjax:error", this)
    }
    handleEvent(e) {
      switch (e.type) {
        case "pjax:send":
          this.currentPage && this.currentPage.destroy();
          break;
        case "pjax:complete":
          this.firstPage = !1, this.updateCurrent() && this.runCurrent();
          break;
        case "pjax:error":
          const t = e.triggerElement.href;
          location.assign(t);
          break
      }
    }
    updateCurrent() {
      const e = this.pages.find(t => t.pageName.includes(Kl.currentPageId));
      return e ? this.firstPage ? (this.currentPage = e, !0) : (this.lastPage = this.currentPage, this.currentPage = e, !0) : (console.warn(`js da p찼gina ${Kl.currentPageId} n찾o encontrado`), this.currentPage = null, !1)
    }
    runCurrent() {
      const e = this.currentPage;
      try {
        e.init()
      } catch (t) {
        console.error(`Erro no init da p찼gina ${e.pageName}: ${t}`)
      }
      try {
        e.main()
      } catch (t) {
        console.error(`Erro no main da p찼gina ${e.pageName}: ${t}`)
      }
    }
    add(e) {
      this.pages.push(e)
    }
  }
  var jn = ei.registerPlugin(Xd) || ei;
  jn.core.Tween;
  jn.registerPlugin(pe, ks);

  function bd() {
    document.querySelectorAll(".marquee-trigger:not(js-running)").forEach(n => {
      n.classList.add("js-running");
      let e = n.querySelector(".marquee"),
        t = n.querySelector(".marquee-item");
      if (!t) return;
      let i = Math.ceil(window.innerWidth * 1.5 / t.getBoundingClientRect().width);
      for (let w = 0; w < i; w++) {
        let S = t.cloneNode(!0);
        e.appendChild(S)
      }
      let r = !1;
      e.dataset.reverse && (r = !0);
      let s = 0,
        o = e.dataset.marqueeSpeed ? parseFloat(e.dataset.marqueeSpeed) : 2,
        a = {
          speed: o
        };
      const c = e.dataset.marqueeSpeedHover ? parseFloat(e.dataset.marqueeSpeedHover) : .5;
      let u = null,
        f = window.scrollY,
        h = 1;
      const p = () => {
        window.scrollY < f ? h = -1 : h = 1, r && (h = h * -1), f = window.scrollY
      };
      window.addEventListener("scroll", p, {
        passive: !0
      }), window.addEventListener("pjax:send", function () {
        window.removeEventListener("scroll", p, {
          passive: !0
        })
      }, {
        once: !0
      });

      function m() {
        s -= a.speed * h, e.style.transform = `translate3d(${s}px,0,0)`, s <= -t.getBoundingClientRect().width && (s = 0), h === -1 && s >= 0 && (s = -t.getBoundingClientRect().width), u = requestAnimationFrame(m)
      }
      m();
      let g = {
        root: null,
        rootMargin: "0px",
        threshold: .1
      };
      new IntersectionObserver((w, S) => {
        w.forEach(T => {
          T.isIntersecting ? m() : cancelAnimationFrame(u)
        })
      }, g).observe(n), e.addEventListener("mouseenter", () => {
        jn.to(a, {
          speed: c,
          ease: "power1.out",
          duration: .3
        })
      }), e.addEventListener("mouseleave", () => {
        jn.to(a, {
          speed: o,
          ease: "power1.out",
          duration: .3
        })
      })
    })
  }
  jn.registerPlugin(pe, ks);

  function r0() {
    let n = document.querySelectorAll(".prev-section"),
      e = document.querySelectorAll(".prev-section .row"),
      t = jn.timeline({
        scrollTrigger: {
          trigger: n,
          endTrigger: ".wrapper",
          start: "80% bottom",
          end: "bottom bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
    t.fromTo("#footer", {
      y: "30vh"
    }, {
      y: 0
    }), t.to(e, {
      y: "30vh",
      ease: "none"
    }, "<+.05"), t.to(e, {
      autoAlpha: 0,
      ease: "Power1.easeIn"
    }, "<"), t.to("#footer .footer-logo #D", {
      y: "0",
      duration: ".3"
    }, ">-.2"), t.to("#footer .footer-logo #E", {
      y: "0",
      duration: ".3"
    }, "<+.05"), t.to("#footer .footer-logo #F", {
      y: "0",
      duration: ".3"
    }, "<+.05")
  }
  et.registerPlugin(pe, eg);
  const LS = "home";
  // <!-- home-history end💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡 -->
  function RS() {
    if (document.body.dataset.load == "first-done" ? setTimeout(() => {
        bd()
      }, 600) : document.addEventListener("load:leaving", function () {
        setTimeout(() => {
          bd()
        }, 600)
      }), Ce.isDesktop) {
      r0(), et.timeline({
        scrollTrigger: {
          trigger: ".home-history",
          start: "top bottom",
          end: "45% bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: 1,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      }).to(".home-intro .container-fluid", {
        autoAlpha: 0,
        duration: .05
      }).to(".home-intro .marquee-section .container-img", {
        scale: "1.5"
      }, "<").to(".home-intro .marquee-section", {
        y: "-100vh"
      }, "<");
      let t = et.timeline({
        scrollTrigger: {
          trigger: ".home-history",
          start: "17% bottom",
          end: "90% bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: 1,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      t.fromTo(".home-history .img-transition", {
        scale: "1.5",
        yPercent: 50
      }, {
        scale: "1.5",
        yPercent: 0,
        duration: .7,
        ease: "Power0.easeOut"
      }), t.fromTo(".home-history .img-transition .media", {
        scale: "1.4",
        yPercent: -20
      }, {
        scale: "1.4",
        duration: 1,
        yPercent: 0,
        ease: "Power0.easeOut"
      }, "<"), t.to(".home-history .img-transition", {
        scale: "1",
        duration: .8,
        ease: "Power0.easeOut"
      }), t.to(".home-history .img-transition .media", {
        scale: "1",
        duration: .8
      }, "<"), t.fromTo(".home-history .number-transition .number-19 .number-left", {
        x: "50vw"
      }, {
        x: "0",
        duration: 1.2
      }, "<"), t.fromTo(".home-history .number-transition .number-19 .number-right", {
        x: "60vw"
      }, {
        x: "0",
        duration: 1.2
      }, "<+.06"), t.to(".home-history .number-transition", {
        overflow: "visible"
      }), t.to(".home-history .img-transition .first-img", {
        height: "0",
        duration: 1.3
      }, "<+.2"), t.fromTo(".home-history .img-transition .second-img", {
        scale: "1.1"
      }, {
        scale: "1",
        duration: 1.3
      }, "<"), t.fromTo(".home-history .number-transition .number-86 .number-left", {
        x: "8rem",
        scale: 0,
        autoAlpha: 0
      }, {
        x: 0,
        scale: 1,
        autoAlpha: 1,
        duration: .8
      }, "<+.15"), t.fromTo(".home-history .number-transition .number-86 .number-right", {
        scale: 0,
        autoAlpha: 0
      }, {
        scale: 1,
        autoAlpha: 1,
        duration: .8
      }, "<"), t.to(".home-history .number-transition .number-19 .number-left ", {
        scale: 2,
        x: "-15rem"
      }, "<"), t.to(".home-history .number-transition .number-19 .number-right ", {
        scale: 2,
        x: "5rem"
      }, "<"), t.to(".home-history .number-transition .number-19 ", {
        autoAlpha: 0
      }, ">-.5"), t.to(".home-history .img-transition", {
        y: "-50vh",
        duration: 1,
        ease: "Power0.easeInOut"
      }, ">+1"), t.to(".home-history .number-transition .number-86 .number-right", {
        y: "-50vh",
        duration: 1,
        ease: "none"
      }, "<+.1"), t.to(".home-history .number-transition .number-86 .number-left", {
        y: "-50vh",
        duration: 1,
        ease: "none"
      }, "<+.2");
      

      let i = et.timeline({
        scrollTrigger: {
          trigger: ".home-imersao",
          start: "top bottom",
          end: "bottom bottom",
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0,
          onEnterBack: () => {
            document.querySelector("#header").dataset.getSection = ""
          }
        }
      });
      i.fromTo(".home-imersao .bg-color", {
        y: "100vh",
        x: "-100vw",
        borderTopRightRadius: "120rem"
      }, {
        y: 0,
        x: 0,
        borderTopRightRadius: "45rem",
        duration: 1
      }), i.to(".home-imersao .column-imersao", {
        opacity: 1,
        ease: "none"
      }), i.fromTo(".home-imersao .white-circle", {
        scale: 0
      }, {
        scale: 1
      }, "<"), i.to(".home-imersao .text-imersao .inner-container", {
        y: "-70%",
        duration: "1.5"
      }, "<+.5"), i.to(".home-imersao .text-imersao .gradiente", {
        autoAlpha: 0
      }, "<+1"), i.fromTo(".home-imersao .text-imersao", {
        autoAlpha: 1
      }, {
        autoAlpha: 0
      }), i.to(".home-imersao .white-circle", {
        x: "-58vw"
      }, "<+.3"), i.add(function () {
        document.querySelector("#header").dataset.getSection = "dark"
      })
    } else {
      let e = et.timeline({
        scrollTrigger: {
          trigger: ".home-history",
          start: "top bottom",
          end: "center bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      e.to(".home-intro .marquee-section .container-img", {
        scale: "1.5"
      }, "<"), e.to(".home-intro .marquee-section", {
        yPercent: -100
      }, "<");
      let t = et.timeline({
        scrollTrigger: {
          trigger: ".home-history",
          start: "35% bottom",
          end: "70% bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: 1,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      t.fromTo(".home-history .img-transition", {
        scale: "1.5",
        yPercent: 50
      }, {
        scale: "1.5",
        yPercent: 0,
        duration: .7,
        ease: "Power0.easeOut"
      }), t.fromTo(".home-history .img-transition .media", {
        scale: "1.4",
        yPercent: -20
      }, {
        scale: "1.4",
        duration: 1,
        yPercent: 0,
        ease: "Power0.easeOut"
      }, "<"), t.to(".home-history .img-transition", {
        scale: "1",
        duration: .8,
        ease: "Power0.easeOut"
      }), t.to(".home-history .img-transition .media", {
        scale: "1",
        duration: .8
      }, "<"), t.fromTo(".home-history .number-transition .number-19 .number-left", {
        y: "90vh"
      }, {
        y: "0"
      }, "<"), t.fromTo(".home-history .number-transition .number-19 .number-right", {
        y: "90vh"
      }, {
        y: "0"
      }, "<+.08"), t.to(".home-history .img-transition .first-img", {
        height: "0",
        duration: 1
      }, ">+.5"), t.to(".home-history .number-transition", {
        overflow: "visible"
      }, "<"), t.fromTo(".home-history .number-transition .number-86 .number-left", {
        x: "2rem",
        scale: 0,
        autoAlpha: 0
      }, {
        x: 0,
        scale: 1,
        autoAlpha: 1
      }, "<"), t.fromTo(".home-history .number-transition .number-86 .number-right", {
        x: "-1.5rem",
        scale: 0,
        autoAlpha: 0
      }, {
        x: 0,
        scale: 1,
        autoAlpha: 1
      }, "<"), t.to(".home-history .number-transition .number-19 .number-left ", {
        scale: 1.5,
        x: "-1rem"
      }, "<+.01"), t.to(".home-history .number-transition .number-19 .number-right ", {
        scale: 1.5,
        x: "5rem"
      }, "<"), t.to(".home-history .number-transition .number-19 ", {
        autoAlpha: 0
      }, "<+.03");
      let i = et.timeline({
        scrollTrigger: {
          trigger: ".home-imersao",
          start: "10% bottom",
          end: "bottom bottom",
          markers: !1,
          scrub: 1,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      i.fromTo(".home-imersao .bg-color", {
        y: "100vh",
        x: "-100vw",
        borderTopRightRadius: "120rem"
      }, {
        y: 0,
        x: 0,
        borderTopRightRadius: "12rem"
      }), i.to(".home-imersao .column-imersao", {
        opacity: 1
      }, "<+.5"), i.fromTo(".home-imersao .white-circle", {
        scale: 0
      }, {
        scale: 1
      }), i.to(".home-imersao .text-imersao .inner-container", {
        y: "-70%",
        duration: "1.5"
      }, "<+.2"), i.to(".home-imersao .text-imersao .gradiente", {
        autoAlpha: 0
      }, "<+.5"), i.fromTo(".home-imersao .text-imersao", {
        autoAlpha: 1
      }, {
        autoAlpha: 0
      }), i.to(".home-imersao .white-circle", {
        x: "-100%",
        y: "-50vh",
        scale: 1.8
      }, "<+.3")
    }
    et.timeline({
      scrollTrigger: {
        trigger: ".home-portfolio",
        start: "top bottom",
        end: "75% bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    }).fromTo(".home-portfolio .container-img", {
      scale: 0
    }, {
      scale: 1
    })
  }
// <!-- home-history end💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡💛🧡❤💛🧡💛🧡 -->


  const IS = new xa({
    pageName: LS,
    main: RS
  });
  (function () {
    let e = 0,
      t = 0,
      i = 0,
      r = window.innerHeight,
      s = f().scrollHeight;
    document.body.dataset.scrollDirection = "initial", document.body.dataset.scrollPosition = "top";

    function o() {
      const h = scrollY;
      t != 0 && h <= 0 ? (document.body.dataset.scrollDirection = "initial", t = 0) : t != 1 && e > h && h > 0 ? (document.body.dataset.scrollDirection = "up", t = 1) : t != 2 && e < h && h > 0 && (document.body.dataset.scrollDirection = "down", t = 2), e = h, i != 0 && h <= r * .5 ? (document.body.dataset.scrollPosition = "top", i = 0) : i != 1 && h >= r * .5 && !(h + r >= s - r * .3) ? (document.body.dataset.scrollPosition = "center", i = 1) : i != 2 && h + r >= s - r * .3 && (document.body.dataset.scrollPosition = "bottom", i = 2)
    }
    window.addEventListener("scroll", () => {
      o()
    }, {
      passive: !0
    }), window.addEventListener("resize", () => {
      r = window.innerHeight, s = f().scrollHeight
    }), new MutationObserver(() => {
      s = f().scrollHeight
    }).observe(document.body, {
      childList: !0,
      subtree: !0
    });
    let c;

    function u() {
      !c && (c = document.querySelector(".vs-scroll-view"), !c) || (s = f().scrollHeight)
    }
    setInterval(() => {
      u()
    }, 100);

    function f() {
      let h;
      return window.innerWidth > 1025, h = document.body, h
    }
  })();

  function YS(n) {
    n.addEventListener("keydown", t => {
      const i = n.value;
      let r = n.selectionStart;
      if (t.key === "Delete") {
        const s = n.value.charAt(n.selectionStart);
        (s === "," || s === ".") && (t.preventDefault(), n.value = i.slice(0, r) + i.slice(r + 2), n.setSelectionRange(r, r), e())
      }
      if (t.key === "Backspace") {
        const s = n.value.charAt(n.selectionStart - 1);
        (s === "," || s === ".") && (t.preventDefault(), n.value = i.slice(0, r - 2) + i.slice(r), n.setSelectionRange(r - 2, r - 2), e())
      }
    }), n.addEventListener("input", e);

    function e() {
      const t = n.value.includes("-"),
        i = n.value.replace(/[^\d]/g, "").replace(/^0+/g, ""),
        r = i.length;
      let s = n.selectionStart - n.value.replace(/[^,.]/g, "").length,
        o = "";
      if (r > 2) {
        let a = i.substr(0, r - 2),
          c = "," + i.substr(r - 2, r);
        s++;
        let u = "";
        for (let f = 0; f < a.length; f++)(a.length - f) % 3 === 0 && f != 0 && (u += ".", s++), u += a[f];
        o = u + c
      } else r == 1 ? (o = "0,0" + i, s += 3) : r == 2 && (o = "0," + i, s += 2);
      t && (o = "-" + o), n.value = o, s < 0 && (s = 0), n.setSelectionRange(s, s)
    }
  } //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var s0;

  function ie() {
    return s0.apply(null, arguments)
  }

  function FS(n) {
    s0 = n
  }

  function Tn(n) {
    return n instanceof Array || Object.prototype.toString.call(n) === "[object Array]"
  }

  function gs(n) {
    return n != null && Object.prototype.toString.call(n) === "[object Object]"
  }

  function tt(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e)
  }

  function af(n) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(n).length === 0;
    var e;
    for (e in n)
      if (tt(n, e)) return !1;
    return !0
  }

  function Ai(n) {
    return n === void 0
  }

  function gr(n) {
    return typeof n == "number" || Object.prototype.toString.call(n) === "[object Number]"
  }

  function Ta(n) {
    return n instanceof Date || Object.prototype.toString.call(n) === "[object Date]"
  }

  function o0(n, e) {
    var t = [],
      i, r = n.length;
    for (i = 0; i < r; ++i) t.push(e(n[i], i));
    return t
  }

  function Ar(n, e) {
    for (var t in e) tt(e, t) && (n[t] = e[t]);
    return tt(e, "toString") && (n.toString = e.toString), tt(e, "valueOf") && (n.valueOf = e.valueOf), n
  }

  function $n(n, e, t, i) {
    return C0(n, e, t, i, !0).utc()
  }

  function NS() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }
  }

  function De(n) {
    return n._pf == null && (n._pf = NS()), n._pf
  }
  var _d;
  Array.prototype.some ? _d = Array.prototype.some : _d = function (n) {
    var e = Object(this),
      t = e.length >>> 0,
      i;
    for (i = 0; i < t; i++)
      if (i in e && n.call(this, e[i], i, e)) return !0;
    return !1
  };

  function lf(n) {
    if (n._isValid == null) {
      var e = De(n),
        t = _d.call(e.parsedDateParts, function (r) {
          return r != null
        }),
        i = !isNaN(n._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && t);
      if (n._strict && (i = i && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(n)) n._isValid = i;
      else return i
    }
    return n._isValid
  }

  function mc(n) {
    var e = $n(NaN);
    return n != null ? Ar(De(e), n) : De(e).userInvalidated = !0, e
  }
  var kp = ie.momentProperties = [],
    wu = !1;

  function cf(n, e) {
    var t, i, r, s = kp.length;
    if (Ai(e._isAMomentObject) || (n._isAMomentObject = e._isAMomentObject), Ai(e._i) || (n._i = e._i), Ai(e._f) || (n._f = e._f), Ai(e._l) || (n._l = e._l), Ai(e._strict) || (n._strict = e._strict), Ai(e._tzm) || (n._tzm = e._tzm), Ai(e._isUTC) || (n._isUTC = e._isUTC), Ai(e._offset) || (n._offset = e._offset), Ai(e._pf) || (n._pf = De(e)), Ai(e._locale) || (n._locale = e._locale), s > 0)
      for (t = 0; t < s; t++) i = kp[t], r = e[i], Ai(r) || (n[i] = r);
    return n
  }

  function Ma(n) {
    cf(this, n), this._d = new Date(n._d != null ? n._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wu === !1 && (wu = !0, ie.updateOffset(this), wu = !1)
  }

  function Mn(n) {
    return n instanceof Ma || n != null && n._isAMomentObject != null
  }

  function a0(n) {
    ie.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + n)
  }

  function gn(n, e) {
    var t = !0;
    return Ar(function () {
      if (ie.deprecationHandler != null && ie.deprecationHandler(null, n), t) {
        var i = [],
          r, s, o, a = arguments.length;
        for (s = 0; s < a; s++) {
          if (r = "", typeof arguments[s] == "object") {
            r += `
[` + s + "] ";
            for (o in arguments[0]) tt(arguments[0], o) && (r += o + ": " + arguments[0][o] + ", ");
            r = r.slice(0, -2)
          } else r = arguments[s];
          i.push(r)
        }
        a0(n + `
Arguments: ` + Array.prototype.slice.call(i).join("") + `
` + new Error().stack), t = !1
      }
      return e.apply(this, arguments)
    }, e)
  }
  var Pp = {};

  function l0(n, e) {
    ie.deprecationHandler != null && ie.deprecationHandler(n, e), Pp[n] || (a0(e), Pp[n] = !0)
  }
  ie.suppressDeprecationWarnings = !1;
  ie.deprecationHandler = null;

  function Vn(n) {
    return typeof Function < "u" && n instanceof Function || Object.prototype.toString.call(n) === "[object Function]"
  }

  function zS(n) {
    var e, t;
    for (t in n) tt(n, t) && (e = n[t], Vn(e) ? this[t] = e : this["_" + t] = e);
    this._config = n, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }

  function wd(n, e) {
    var t = Ar({}, n),
      i;
    for (i in e) tt(e, i) && (gs(n[i]) && gs(e[i]) ? (t[i] = {}, Ar(t[i], n[i]), Ar(t[i], e[i])) : e[i] != null ? t[i] = e[i] : delete t[i]);
    for (i in n) tt(n, i) && !tt(e, i) && gs(n[i]) && (t[i] = Ar({}, t[i]));
    return t
  }

  function uf(n) {
    n != null && this.set(n)
  }
  var Sd;
  Object.keys ? Sd = Object.keys : Sd = function (n) {
    var e, t = [];
    for (e in n) tt(n, e) && t.push(e);
    return t
  };
  var HS = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };

  function WS(n, e, t) {
    var i = this._calendar[n] || this._calendar.sameElse;
    return Vn(i) ? i.call(e, t) : i
  }

  function qn(n, e, t) {
    var i = "" + Math.abs(n),
      r = e - i.length,
      s = n >= 0;
    return (s ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
  }
  var df = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    ol = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Su = {},
    lo = {};

  function me(n, e, t, i) {
    var r = i;
    typeof i == "string" && (r = function () {
      return this[i]()
    }), n && (lo[n] = r), e && (lo[e[0]] = function () {
      return qn(r.apply(this, arguments), e[1], e[2])
    }), t && (lo[t] = function () {
      return this.localeData().ordinal(r.apply(this, arguments), n)
    })
  }

  function jS(n) {
    return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
  }

  function qS(n) {
    var e = n.match(df),
      t, i;
    for (t = 0, i = e.length; t < i; t++) lo[e[t]] ? e[t] = lo[e[t]] : e[t] = jS(e[t]);
    return function (r) {
      var s = "",
        o;
      for (o = 0; o < i; o++) s += Vn(e[o]) ? e[o].call(r, n) : e[o];
      return s
    }
  }

  function Ll(n, e) {
    return n.isValid() ? (e = c0(e, n.localeData()), Su[e] = Su[e] || qS(e), Su[e](n)) : n.localeData().invalidDate()
  }

  function c0(n, e) {
    var t = 5;

    function i(r) {
      return e.longDateFormat(r) || r
    }
    for (ol.lastIndex = 0; t >= 0 && ol.test(n);) n = n.replace(ol, i), ol.lastIndex = 0, t -= 1;
    return n
  }
  var $S = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };

  function VS(n) {
    var e = this._longDateFormat[n],
      t = this._longDateFormat[n.toUpperCase()];
    return e || !t ? e : (this._longDateFormat[n] = t.match(df).map(function (i) {
      return i === "MMMM" || i === "MM" || i === "DD" || i === "dddd" ? i.slice(1) : i
    }).join(""), this._longDateFormat[n])
  }
  var US = "Invalid date";

  function BS() {
    return this._invalidDate
  }
  var GS = "%d",
    XS = /\d{1,2}/;

  function ZS(n) {
    return this._ordinal.replace("%d", n)
  }
  var KS = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };

  function QS(n, e, t, i) {
    var r = this._relativeTime[t];
    return Vn(r) ? r(n, e, t, i) : r.replace(/%d/i, n)
  }

  function JS(n, e) {
    var t = this._relativeTime[n > 0 ? "future" : "past"];
    return Vn(t) ? t(e) : t.replace(/%s/i, e)
  }
  var ra = {};

  function vi(n, e) {
    var t = n.toLowerCase();
    ra[t] = ra[t + "s"] = ra[e] = n
  }

  function vn(n) {
    return typeof n == "string" ? ra[n] || ra[n.toLowerCase()] : void 0
  }

  function ff(n) {
    var e = {},
      t, i;
    for (i in n) tt(n, i) && (t = vn(i), t && (e[t] = n[i]));
    return e
  }
  var u0 = {};

  function yi(n, e) {
    u0[n] = e
  }

  function ex(n) {
    var e = [],
      t;
    for (t in n) tt(n, t) && e.push({
      unit: t,
      priority: u0[t]
    });
    return e.sort(function (i, r) {
      return i.priority - r.priority
    }), e
  }

  function gc(n) {
    return n % 4 === 0 && n % 100 !== 0 || n % 400 === 0
  }

  function un(n) {
    return n < 0 ? Math.ceil(n) || 0 : Math.floor(n)
  }

  function We(n) {
    var e = +n,
      t = 0;
    return e !== 0 && isFinite(e) && (t = un(e)), t
  }

  function _o(n, e) {
    return function (t) {
      return t != null ? (d0(this, n, t), ie.updateOffset(this, e), this) : Ql(this, n)
    }
  }

  function Ql(n, e) {
    return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + e]() : NaN
  }

  function d0(n, e, t) {
    n.isValid() && !isNaN(t) && (e === "FullYear" && gc(n.year()) && n.month() === 1 && n.date() === 29 ? (t = We(t), n._d["set" + (n._isUTC ? "UTC" : "") + e](t, n.month(), Sc(t, n.month()))) : n._d["set" + (n._isUTC ? "UTC" : "") + e](t))
  }

  function tx(n) {
    return n = vn(n), Vn(this[n]) ? this[n]() : this
  }

  function ix(n, e) {
    if (typeof n == "object") {
      n = ff(n);
      var t = ex(n),
        i, r = t.length;
      for (i = 0; i < r; i++) this[t[i].unit](n[t[i].unit])
    } else if (n = vn(n), Vn(this[n])) return this[n](e);
    return this
  }
  var f0 = /\d/,
    Qi = /\d\d/,
    h0 = /\d{3}/,
    hf = /\d{4}/,
    vc = /[+-]?\d{6}/,
    St = /\d\d?/,
    p0 = /\d\d\d\d?/,
    m0 = /\d\d\d\d\d\d?/,
    yc = /\d{1,3}/,
    pf = /\d{1,4}/,
    bc = /[+-]?\d{1,6}/,
    wo = /\d+/,
    _c = /[+-]?\d+/,
    nx = /Z|[+-]\d\d:?\d\d/gi,
    wc = /Z|[+-]\d\d(?::?\d\d)?/gi,
    rx = /[+-]?\d+(\.\d{1,3})?/,
    ka = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Jl;
  Jl = {};

  function oe(n, e, t) {
    Jl[n] = Vn(e) ? e : function (i, r) {
      return i && t ? t : e
    }
  }

  function sx(n, e) {
    return tt(Jl, n) ? Jl[n](e._strict, e._locale) : new RegExp(ox(n))
  }

  function ox(n) {
    return Bi(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, i, r, s) {
      return t || i || r || s
    }))
  }

  function Bi(n) {
    return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  var xd = {};

  function ct(n, e) {
    var t, i = e,
      r;
    for (typeof n == "string" && (n = [n]), gr(e) && (i = function (s, o) {
        o[e] = We(s)
      }), r = n.length, t = 0; t < r; t++) xd[n[t]] = i
  }

  function Pa(n, e) {
    ct(n, function (t, i, r, s) {
      r._w = r._w || {}, e(t, r._w, r, s)
    })
  }

  function ax(n, e, t) {
    e != null && tt(xd, n) && xd[n](e, t._a, t, n)
  }
  var gi = 0,
    lr = 1,
    Ln = 2,
    Jt = 3,
    wn = 4,
    cr = 5,
    as = 6,
    lx = 7,
    cx = 8;

  function ux(n, e) {
    return (n % e + e) % e
  }
  var jt;
  Array.prototype.indexOf ? jt = Array.prototype.indexOf : jt = function (n) {
    var e;
    for (e = 0; e < this.length; ++e)
      if (this[e] === n) return e;
    return -1
  };

  function Sc(n, e) {
    if (isNaN(n) || isNaN(e)) return NaN;
    var t = ux(e, 12);
    return n += (e - t) / 12, t === 1 ? gc(n) ? 29 : 28 : 31 - t % 7 % 2
  }
  me("M", ["MM", 2], "Mo", function () {
    return this.month() + 1
  });
  me("MMM", 0, 0, function (n) {
    return this.localeData().monthsShort(this, n)
  });
  me("MMMM", 0, 0, function (n) {
    return this.localeData().months(this, n)
  });
  vi("month", "M");
  yi("month", 8);
  oe("M", St);
  oe("MM", St, Qi);
  oe("MMM", function (n, e) {
    return e.monthsShortRegex(n)
  });
  oe("MMMM", function (n, e) {
    return e.monthsRegex(n)
  });
  ct(["M", "MM"], function (n, e) {
    e[lr] = We(n) - 1
  });
  ct(["MMM", "MMMM"], function (n, e, t, i) {
    var r = t._locale.monthsParse(n, i, t._strict);
    r != null ? e[lr] = r : De(t).invalidMonth = n
  });
  var dx = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    g0 = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    v0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    fx = ka,
    hx = ka;

  function px(n, e) {
    return n ? Tn(this._months) ? this._months[n.month()] : this._months[(this._months.isFormat || v0).test(e) ? "format" : "standalone"][n.month()] : Tn(this._months) ? this._months : this._months.standalone
  }

  function mx(n, e) {
    return n ? Tn(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[v0.test(e) ? "format" : "standalone"][n.month()] : Tn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }

  function gx(n, e, t) {
    var i, r, s, o = n.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) s = $n([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
    return t ? e === "MMM" ? (r = jt.call(this._shortMonthsParse, o), r !== -1 ? r : null) : (r = jt.call(this._longMonthsParse, o), r !== -1 ? r : null) : e === "MMM" ? (r = jt.call(this._shortMonthsParse, o), r !== -1 ? r : (r = jt.call(this._longMonthsParse, o), r !== -1 ? r : null)) : (r = jt.call(this._longMonthsParse, o), r !== -1 ? r : (r = jt.call(this._shortMonthsParse, o), r !== -1 ? r : null))
  }

  function vx(n, e, t) {
    var i, r, s;
    if (this._monthsParseExact) return gx.call(this, n, e, t);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
      if (r = $n([2e3, i]), t && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), !t && !this._monthsParse[i] && (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), t && e === "MMMM" && this._longMonthsParse[i].test(n)) return i;
      if (t && e === "MMM" && this._shortMonthsParse[i].test(n)) return i;
      if (!t && this._monthsParse[i].test(n)) return i
    }
  }

  function y0(n, e) {
    var t;
    if (!n.isValid()) return n;
    if (typeof e == "string") {
      if (/^\d+$/.test(e)) e = We(e);
      else if (e = n.localeData().monthsParse(e), !gr(e)) return n
    }
    return t = Math.min(n.date(), Sc(n.year(), e)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](e, t), n
  }

  function b0(n) {
    return n != null ? (y0(this, n), ie.updateOffset(this, !0), this) : Ql(this, "Month")
  }

  function yx() {
    return Sc(this.year(), this.month())
  }

  function bx(n) {
    return this._monthsParseExact ? (tt(this, "_monthsRegex") || _0.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : (tt(this, "_monthsShortRegex") || (this._monthsShortRegex = fx), this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }

  function _x(n) {
    return this._monthsParseExact ? (tt(this, "_monthsRegex") || _0.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : (tt(this, "_monthsRegex") || (this._monthsRegex = hx), this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex)
  }

  function _0() {
    function n(o, a) {
      return a.length - o.length
    }
    var e = [],
      t = [],
      i = [],
      r, s;
    for (r = 0; r < 12; r++) s = $n([2e3, r]), e.push(this.monthsShort(s, "")), t.push(this.months(s, "")), i.push(this.months(s, "")), i.push(this.monthsShort(s, ""));
    for (e.sort(n), t.sort(n), i.sort(n), r = 0; r < 12; r++) e[r] = Bi(e[r]), t[r] = Bi(t[r]);
    for (r = 0; r < 24; r++) i[r] = Bi(i[r]);
    this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
  }
  me("Y", 0, 0, function () {
    var n = this.year();
    return n <= 9999 ? qn(n, 4) : "+" + n
  });
  me(0, ["YY", 2], 0, function () {
    return this.year() % 100
  });
  me(0, ["YYYY", 4], 0, "year");
  me(0, ["YYYYY", 5], 0, "year");
  me(0, ["YYYYYY", 6, !0], 0, "year");
  vi("year", "y");
  yi("year", 1);
  oe("Y", _c);
  oe("YY", St, Qi);
  oe("YYYY", pf, hf);
  oe("YYYYY", bc, vc);
  oe("YYYYYY", bc, vc);
  ct(["YYYYY", "YYYYYY"], gi);
  ct("YYYY", function (n, e) {
    e[gi] = n.length === 2 ? ie.parseTwoDigitYear(n) : We(n)
  });
  ct("YY", function (n, e) {
    e[gi] = ie.parseTwoDigitYear(n)
  });
  ct("Y", function (n, e) {
    e[gi] = parseInt(n, 10)
  });

  function sa(n) {
    return gc(n) ? 366 : 365
  }
  ie.parseTwoDigitYear = function (n) {
    return We(n) + (We(n) > 68 ? 1900 : 2e3)
  };
  var w0 = _o("FullYear", !0);

  function wx() {
    return gc(this.year())
  }

  function Sx(n, e, t, i, r, s, o) {
    var a;
    return n < 100 && n >= 0 ? (a = new Date(n + 400, e, t, i, r, s, o), isFinite(a.getFullYear()) && a.setFullYear(n)) : a = new Date(n, e, t, i, r, s, o), a
  }

  function ba(n) {
    var e, t;
    return n < 100 && n >= 0 ? (t = Array.prototype.slice.call(arguments), t[0] = n + 400, e = new Date(Date.UTC.apply(null, t)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(n)) : e = new Date(Date.UTC.apply(null, arguments)), e
  }

  function ec(n, e, t) {
    var i = 7 + e - t,
      r = (7 + ba(n, 0, i).getUTCDay() - e) % 7;
    return -r + i - 1
  }

  function S0(n, e, t, i, r) {
    var s = (7 + t - i) % 7,
      o = ec(n, i, r),
      a = 1 + 7 * (e - 1) + s + o,
      c, u;
    return a <= 0 ? (c = n - 1, u = sa(c) + a) : a > sa(n) ? (c = n + 1, u = a - sa(n)) : (c = n, u = a), {
      year: c,
      dayOfYear: u
    }
  }

  function _a(n, e, t) {
    var i = ec(n.year(), e, t),
      r = Math.floor((n.dayOfYear() - i - 1) / 7) + 1,
      s, o;
    return r < 1 ? (o = n.year() - 1, s = r + hr(o, e, t)) : r > hr(n.year(), e, t) ? (s = r - hr(n.year(), e, t), o = n.year() + 1) : (o = n.year(), s = r), {
      week: s,
      year: o
    }
  }

  function hr(n, e, t) {
    var i = ec(n, e, t),
      r = ec(n + 1, e, t);
    return (sa(n) - i + r) / 7
  }
  me("w", ["ww", 2], "wo", "week");
  me("W", ["WW", 2], "Wo", "isoWeek");
  vi("week", "w");
  vi("isoWeek", "W");
  yi("week", 5);
  yi("isoWeek", 5);
  oe("w", St);
  oe("ww", St, Qi);
  oe("W", St);
  oe("WW", St, Qi);
  Pa(["w", "ww", "W", "WW"], function (n, e, t, i) {
    e[i.substr(0, 1)] = We(n)
  });

  function xx(n) {
    return _a(n, this._week.dow, this._week.doy).week
  }
  var Tx = {
    dow: 0,
    doy: 6
  };

  function Mx() {
    return this._week.dow
  }

  function kx() {
    return this._week.doy
  }

  function Px(n) {
    var e = this.localeData().week(this);
    return n == null ? e : this.add((n - e) * 7, "d")
  }

  function Ex(n) {
    var e = _a(this, 1, 4).week;
    return n == null ? e : this.add((n - e) * 7, "d")
  }
  me("d", 0, "do", "day");
  me("dd", 0, 0, function (n) {
    return this.localeData().weekdaysMin(this, n)
  });
  me("ddd", 0, 0, function (n) {
    return this.localeData().weekdaysShort(this, n)
  });
  me("dddd", 0, 0, function (n) {
    return this.localeData().weekdays(this, n)
  });
  me("e", 0, 0, "weekday");
  me("E", 0, 0, "isoWeekday");
  vi("day", "d");
  vi("weekday", "e");
  vi("isoWeekday", "E");
  yi("day", 11);
  yi("weekday", 11);
  yi("isoWeekday", 11);
  oe("d", St);
  oe("e", St);
  oe("E", St);
  oe("dd", function (n, e) {
    return e.weekdaysMinRegex(n)
  });
  oe("ddd", function (n, e) {
    return e.weekdaysShortRegex(n)
  });
  oe("dddd", function (n, e) {
    return e.weekdaysRegex(n)
  });
  Pa(["dd", "ddd", "dddd"], function (n, e, t, i) {
    var r = t._locale.weekdaysParse(n, i, t._strict);
    r != null ? e.d = r : De(t).invalidWeekday = n
  });
  Pa(["d", "e", "E"], function (n, e, t, i) {
    e[i] = We(n)
  });

  function Ox(n, e) {
    return typeof n != "string" ? n : isNaN(n) ? (n = e.weekdaysParse(n), typeof n == "number" ? n : null) : parseInt(n, 10)
  }

  function Cx(n, e) {
    return typeof n == "string" ? e.weekdaysParse(n) % 7 || 7 : isNaN(n) ? null : n
  }

  function mf(n, e) {
    return n.slice(e, 7).concat(n.slice(0, e))
  }
  var Dx = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    x0 = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Ax = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Lx = ka,
    Rx = ka,
    Ix = ka;

  function Yx(n, e) {
    var t = Tn(this._weekdays) ? this._weekdays : this._weekdays[n && n !== !0 && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
    return n === !0 ? mf(t, this._week.dow) : n ? t[n.day()] : t
  }

  function Fx(n) {
    return n === !0 ? mf(this._weekdaysShort, this._week.dow) : n ? this._weekdaysShort[n.day()] : this._weekdaysShort
  }

  function Nx(n) {
    return n === !0 ? mf(this._weekdaysMin, this._week.dow) : n ? this._weekdaysMin[n.day()] : this._weekdaysMin
  }

  function zx(n, e, t) {
    var i, r, s, o = n.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) s = $n([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
    return t ? e === "dddd" ? (r = jt.call(this._weekdaysParse, o), r !== -1 ? r : null) : e === "ddd" ? (r = jt.call(this._shortWeekdaysParse, o), r !== -1 ? r : null) : (r = jt.call(this._minWeekdaysParse, o), r !== -1 ? r : null) : e === "dddd" ? (r = jt.call(this._weekdaysParse, o), r !== -1 || (r = jt.call(this._shortWeekdaysParse, o), r !== -1) ? r : (r = jt.call(this._minWeekdaysParse, o), r !== -1 ? r : null)) : e === "ddd" ? (r = jt.call(this._shortWeekdaysParse, o), r !== -1 || (r = jt.call(this._weekdaysParse, o), r !== -1) ? r : (r = jt.call(this._minWeekdaysParse, o), r !== -1 ? r : null)) : (r = jt.call(this._minWeekdaysParse, o), r !== -1 || (r = jt.call(this._weekdaysParse, o), r !== -1) ? r : (r = jt.call(this._shortWeekdaysParse, o), r !== -1 ? r : null))
  }

  function Hx(n, e, t) {
    var i, r, s;
    if (this._weekdaysParseExact) return zx.call(this, n, e, t);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
      if (r = $n([2e3, 1]).day(i), t && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), t && e === "dddd" && this._fullWeekdaysParse[i].test(n)) return i;
      if (t && e === "ddd" && this._shortWeekdaysParse[i].test(n)) return i;
      if (t && e === "dd" && this._minWeekdaysParse[i].test(n)) return i;
      if (!t && this._weekdaysParse[i].test(n)) return i
    }
  }

  function Wx(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return n != null ? (n = Ox(n, this.localeData()), this.add(n - e, "d")) : e
  }

  function jx(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return n == null ? e : this.add(n - e, "d")
  }

  function qx(n) {
    if (!this.isValid()) return n != null ? this : NaN;
    if (n != null) {
      var e = Cx(n, this.localeData());
      return this.day(this.day() % 7 ? e : e - 7)
    } else return this.day() || 7
  }

  function $x(n) {
    return this._weekdaysParseExact ? (tt(this, "_weekdaysRegex") || gf.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : (tt(this, "_weekdaysRegex") || (this._weekdaysRegex = Lx), this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }

  function Vx(n) {
    return this._weekdaysParseExact ? (tt(this, "_weekdaysRegex") || gf.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (tt(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Rx), this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }

  function Ux(n) {
    return this._weekdaysParseExact ? (tt(this, "_weekdaysRegex") || gf.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (tt(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ix), this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }

  function gf() {
    function n(f, h) {
      return h.length - f.length
    }
    var e = [],
      t = [],
      i = [],
      r = [],
      s, o, a, c, u;
    for (s = 0; s < 7; s++) o = $n([2e3, 1]).day(s), a = Bi(this.weekdaysMin(o, "")), c = Bi(this.weekdaysShort(o, "")), u = Bi(this.weekdays(o, "")), e.push(a), t.push(c), i.push(u), r.push(a), r.push(c), r.push(u);
    e.sort(n), t.sort(n), i.sort(n), r.sort(n), this._weekdaysRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
  }

  function vf() {
    return this.hours() % 12 || 12
  }

  function Bx() {
    return this.hours() || 24
  }
  me("H", ["HH", 2], 0, "hour");
  me("h", ["hh", 2], 0, vf);
  me("k", ["kk", 2], 0, Bx);
  me("hmm", 0, 0, function () {
    return "" + vf.apply(this) + qn(this.minutes(), 2)
  });
  me("hmmss", 0, 0, function () {
    return "" + vf.apply(this) + qn(this.minutes(), 2) + qn(this.seconds(), 2)
  });
  me("Hmm", 0, 0, function () {
    return "" + this.hours() + qn(this.minutes(), 2)
  });
  me("Hmmss", 0, 0, function () {
    return "" + this.hours() + qn(this.minutes(), 2) + qn(this.seconds(), 2)
  });

  function T0(n, e) {
    me(n, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), e)
    })
  }
  T0("a", !0);
  T0("A", !1);
  vi("hour", "h");
  yi("hour", 13);

  function M0(n, e) {
    return e._meridiemParse
  }
  oe("a", M0);
  oe("A", M0);
  oe("H", St);
  oe("h", St);
  oe("k", St);
  oe("HH", St, Qi);
  oe("hh", St, Qi);
  oe("kk", St, Qi);
  oe("hmm", p0);
  oe("hmmss", m0);
  oe("Hmm", p0);
  oe("Hmmss", m0);
  ct(["H", "HH"], Jt);
  ct(["k", "kk"], function (n, e, t) {
    var i = We(n);
    e[Jt] = i === 24 ? 0 : i
  });
  ct(["a", "A"], function (n, e, t) {
    t._isPm = t._locale.isPM(n), t._meridiem = n
  });
  ct(["h", "hh"], function (n, e, t) {
    e[Jt] = We(n), De(t).bigHour = !0
  });
  ct("hmm", function (n, e, t) {
    var i = n.length - 2;
    e[Jt] = We(n.substr(0, i)), e[wn] = We(n.substr(i)), De(t).bigHour = !0
  });
  ct("hmmss", function (n, e, t) {
    var i = n.length - 4,
      r = n.length - 2;
    e[Jt] = We(n.substr(0, i)), e[wn] = We(n.substr(i, 2)), e[cr] = We(n.substr(r)), De(t).bigHour = !0
  });
  ct("Hmm", function (n, e, t) {
    var i = n.length - 2;
    e[Jt] = We(n.substr(0, i)), e[wn] = We(n.substr(i))
  });
  ct("Hmmss", function (n, e, t) {
    var i = n.length - 4,
      r = n.length - 2;
    e[Jt] = We(n.substr(0, i)), e[wn] = We(n.substr(i, 2)), e[cr] = We(n.substr(r))
  });

  function Gx(n) {
    return (n + "").toLowerCase().charAt(0) === "p"
  }
  var Xx = /[ap]\.?m?\.?/i,
    Zx = _o("Hours", !0);

  function Kx(n, e, t) {
    return n > 11 ? t ? "pm" : "PM" : t ? "am" : "AM"
  }
  var k0 = {
      calendar: HS,
      longDateFormat: $S,
      invalidDate: US,
      ordinal: GS,
      dayOfMonthOrdinalParse: XS,
      relativeTime: KS,
      months: dx,
      monthsShort: g0,
      week: Tx,
      weekdays: Dx,
      weekdaysMin: Ax,
      weekdaysShort: x0,
      meridiemParse: Xx
    },
    Pt = {},
    Lo = {},
    wa;

  function Qx(n, e) {
    var t, i = Math.min(n.length, e.length);
    for (t = 0; t < i; t += 1)
      if (n[t] !== e[t]) return t;
    return i
  }

  function Ep(n) {
    return n && n.toLowerCase().replace("_", "-")
  }

  function Jx(n) {
    for (var e = 0, t, i, r, s; e < n.length;) {
      for (s = Ep(n[e]).split("-"), t = s.length, i = Ep(n[e + 1]), i = i ? i.split("-") : null; t > 0;) {
        if (r = xc(s.slice(0, t).join("-")), r) return r;
        if (i && i.length >= t && Qx(s, i) >= t - 1) break;
        t--
      }
      e++
    }
    return wa
  }

  function eT(n) {
    return n.match("^[^/\\\\]*$") != null
  }

  function xc(n) {
    var e = null,
      t;
    if (Pt[n] === void 0 && typeof Fl < "u" && Fl && Fl.exports && eT(n)) try {
      e = wa._abbr, t = require, t("./locale/" + n), zr(e)
    } catch {
      Pt[n] = null
    }
    return Pt[n]
  }

  function zr(n, e) {
    var t;
    return n && (Ai(e) ? t = vr(n) : t = yf(n, e), t ? wa = t : typeof console < "u" && console.warn && console.warn("Locale " + n + " not found. Did you forget to load it?")), wa._abbr
  }

  function yf(n, e) {
    if (e !== null) {
      var t, i = k0;
      if (e.abbr = n, Pt[n] != null) l0("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = Pt[n]._config;
      else if (e.parentLocale != null)
        if (Pt[e.parentLocale] != null) i = Pt[e.parentLocale]._config;
        else if (t = xc(e.parentLocale), t != null) i = t._config;
      else return Lo[e.parentLocale] || (Lo[e.parentLocale] = []), Lo[e.parentLocale].push({
        name: n,
        config: e
      }), null;
      return Pt[n] = new uf(wd(i, e)), Lo[n] && Lo[n].forEach(function (r) {
        yf(r.name, r.config)
      }), zr(n), Pt[n]
    } else return delete Pt[n], null
  }

  function tT(n, e) {
    if (e != null) {
      var t, i, r = k0;
      Pt[n] != null && Pt[n].parentLocale != null ? Pt[n].set(wd(Pt[n]._config, e)) : (i = xc(n), i != null && (r = i._config), e = wd(r, e), i == null && (e.abbr = n), t = new uf(e), t.parentLocale = Pt[n], Pt[n] = t), zr(n)
    } else Pt[n] != null && (Pt[n].parentLocale != null ? (Pt[n] = Pt[n].parentLocale, n === zr() && zr(n)) : Pt[n] != null && delete Pt[n]);
    return Pt[n]
  }

  function vr(n) {
    var e;
    if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return wa;
    if (!Tn(n)) {
      if (e = xc(n), e) return e;
      n = [n]
    }
    return Jx(n)
  }

  function iT() {
    return Sd(Pt)
  }

  function bf(n) {
    var e, t = n._a;
    return t && De(n).overflow === -2 && (e = t[lr] < 0 || t[lr] > 11 ? lr : t[Ln] < 1 || t[Ln] > Sc(t[gi], t[lr]) ? Ln : t[Jt] < 0 || t[Jt] > 24 || t[Jt] === 24 && (t[wn] !== 0 || t[cr] !== 0 || t[as] !== 0) ? Jt : t[wn] < 0 || t[wn] > 59 ? wn : t[cr] < 0 || t[cr] > 59 ? cr : t[as] < 0 || t[as] > 999 ? as : -1, De(n)._overflowDayOfYear && (e < gi || e > Ln) && (e = Ln), De(n)._overflowWeeks && e === -1 && (e = lx), De(n)._overflowWeekday && e === -1 && (e = cx), De(n).overflow = e), n
  }
  var nT = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    rT = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    sT = /Z|[+-]\d\d(?::?\d\d)?/,
    al = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1]
    ],
    xu = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    oT = /^\/?Date\((-?\d+)/i,
    aT = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    lT = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

  function P0(n) {
    var e, t, i = n._i,
      r = nT.exec(i) || rT.exec(i),
      s, o, a, c, u = al.length,
      f = xu.length;
    if (r) {
      for (De(n).iso = !0, e = 0, t = u; e < t; e++)
        if (al[e][1].exec(r[1])) {
          o = al[e][0], s = al[e][2] !== !1;
          break
        } if (o == null) {
        n._isValid = !1;
        return
      }
      if (r[3]) {
        for (e = 0, t = f; e < t; e++)
          if (xu[e][1].exec(r[3])) {
            a = (r[2] || " ") + xu[e][0];
            break
          } if (a == null) {
          n._isValid = !1;
          return
        }
      }
      if (!s && a != null) {
        n._isValid = !1;
        return
      }
      if (r[4])
        if (sT.exec(r[4])) c = "Z";
        else {
          n._isValid = !1;
          return
        } n._f = o + (a || "") + (c || ""), wf(n)
    } else n._isValid = !1
  }

  function cT(n, e, t, i, r, s) {
    var o = [uT(n), g0.indexOf(e), parseInt(t, 10), parseInt(i, 10), parseInt(r, 10)];
    return s && o.push(parseInt(s, 10)), o
  }

  function uT(n) {
    var e = parseInt(n, 10);
    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
  }

  function dT(n) {
    return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
  }

  function fT(n, e, t) {
    if (n) {
      var i = x0.indexOf(n),
        r = new Date(e[0], e[1], e[2]).getDay();
      if (i !== r) return De(t).weekdayMismatch = !0, t._isValid = !1, !1
    }
    return !0
  }

  function hT(n, e, t) {
    if (n) return lT[n];
    if (e) return 0;
    var i = parseInt(t, 10),
      r = i % 100,
      s = (i - r) / 100;
    return s * 60 + r
  }

  function E0(n) {
    var e = aT.exec(dT(n._i)),
      t;
    if (e) {
      if (t = cT(e[4], e[3], e[2], e[5], e[6], e[7]), !fT(e[1], t, n)) return;
      n._a = t, n._tzm = hT(e[8], e[9], e[10]), n._d = ba.apply(null, n._a), n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), De(n).rfc2822 = !0
    } else n._isValid = !1
  }

  function pT(n) {
    var e = oT.exec(n._i);
    if (e !== null) {
      n._d = new Date(+e[1]);
      return
    }
    if (P0(n), n._isValid === !1) delete n._isValid;
    else return;
    if (E0(n), n._isValid === !1) delete n._isValid;
    else return;
    n._strict ? n._isValid = !1 : ie.createFromInputFallback(n)
  }
  ie.createFromInputFallback = gn("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (n) {
    n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
  });

  function Gs(n, e, t) {
    return n ? ? e ? ? t
  }

  function mT(n) {
    var e = new Date(ie.now());
    return n._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
  }

  function _f(n) {
    var e, t, i = [],
      r, s, o;
    if (!n._d) {
      for (r = mT(n), n._w && n._a[Ln] == null && n._a[lr] == null && gT(n), n._dayOfYear != null && (o = Gs(n._a[gi], r[gi]), (n._dayOfYear > sa(o) || n._dayOfYear === 0) && (De(n)._overflowDayOfYear = !0), t = ba(o, 0, n._dayOfYear), n._a[lr] = t.getUTCMonth(), n._a[Ln] = t.getUTCDate()), e = 0; e < 3 && n._a[e] == null; ++e) n._a[e] = i[e] = r[e];
      for (; e < 7; e++) n._a[e] = i[e] = n._a[e] == null ? e === 2 ? 1 : 0 : n._a[e];
      n._a[Jt] === 24 && n._a[wn] === 0 && n._a[cr] === 0 && n._a[as] === 0 && (n._nextDay = !0, n._a[Jt] = 0), n._d = (n._useUTC ? ba : Sx).apply(null, i), s = n._useUTC ? n._d.getUTCDay() : n._d.getDay(), n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm), n._nextDay && (n._a[Jt] = 24), n._w && typeof n._w.d < "u" && n._w.d !== s && (De(n).weekdayMismatch = !0)
    }
  }

  function gT(n) {
    var e, t, i, r, s, o, a, c, u;
    e = n._w, e.GG != null || e.W != null || e.E != null ? (s = 1, o = 4, t = Gs(e.GG, n._a[gi], _a(wt(), 1, 4).year), i = Gs(e.W, 1), r = Gs(e.E, 1), (r < 1 || r > 7) && (c = !0)) : (s = n._locale._week.dow, o = n._locale._week.doy, u = _a(wt(), s, o), t = Gs(e.gg, n._a[gi], u.year), i = Gs(e.w, u.week), e.d != null ? (r = e.d, (r < 0 || r > 6) && (c = !0)) : e.e != null ? (r = e.e + s, (e.e < 0 || e.e > 6) && (c = !0)) : r = s), i < 1 || i > hr(t, s, o) ? De(n)._overflowWeeks = !0 : c != null ? De(n)._overflowWeekday = !0 : (a = S0(t, i, r, s, o), n._a[gi] = a.year, n._dayOfYear = a.dayOfYear)
  }
  ie.ISO_8601 = function () {};
  ie.RFC_2822 = function () {};

  function wf(n) {
    if (n._f === ie.ISO_8601) {
      P0(n);
      return
    }
    if (n._f === ie.RFC_2822) {
      E0(n);
      return
    }
    n._a = [], De(n).empty = !0;
    var e = "" + n._i,
      t, i, r, s, o, a = e.length,
      c = 0,
      u, f;
    for (r = c0(n._f, n._locale).match(df) || [], f = r.length, t = 0; t < f; t++) s = r[t], i = (e.match(sx(s, n)) || [])[0], i && (o = e.substr(0, e.indexOf(i)), o.length > 0 && De(n).unusedInput.push(o), e = e.slice(e.indexOf(i) + i.length), c += i.length), lo[s] ? (i ? De(n).empty = !1 : De(n).unusedTokens.push(s), ax(s, i, n)) : n._strict && !i && De(n).unusedTokens.push(s);
    De(n).charsLeftOver = a - c, e.length > 0 && De(n).unusedInput.push(e), n._a[Jt] <= 12 && De(n).bigHour === !0 && n._a[Jt] > 0 && (De(n).bigHour = void 0), De(n).parsedDateParts = n._a.slice(0), De(n).meridiem = n._meridiem, n._a[Jt] = vT(n._locale, n._a[Jt], n._meridiem), u = De(n).era, u !== null && (n._a[gi] = n._locale.erasConvertYear(u, n._a[gi])), _f(n), bf(n)
  }

  function vT(n, e, t) {
    var i;
    return t == null ? e : n.meridiemHour != null ? n.meridiemHour(e, t) : (n.isPM != null && (i = n.isPM(t), i && e < 12 && (e += 12), !i && e === 12 && (e = 0)), e)
  }

  function yT(n) {
    var e, t, i, r, s, o, a = !1,
      c = n._f.length;
    if (c === 0) {
      De(n).invalidFormat = !0, n._d = new Date(NaN);
      return
    }
    for (r = 0; r < c; r++) s = 0, o = !1, e = cf({}, n), n._useUTC != null && (e._useUTC = n._useUTC), e._f = n._f[r], wf(e), lf(e) && (o = !0), s += De(e).charsLeftOver, s += De(e).unusedTokens.length * 10, De(e).score = s, a ? s < i && (i = s, t = e) : (i == null || s < i || o) && (i = s, t = e, o && (a = !0));
    Ar(n, t || e)
  }

  function bT(n) {
    if (!n._d) {
      var e = ff(n._i),
        t = e.day === void 0 ? e.date : e.day;
      n._a = o0([e.year, e.month, t, e.hour, e.minute, e.second, e.millisecond], function (i) {
        return i && parseInt(i, 10)
      }), _f(n)
    }
  }

  function _T(n) {
    var e = new Ma(bf(O0(n)));
    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
  }

  function O0(n) {
    var e = n._i,
      t = n._f;
    return n._locale = n._locale || vr(n._l), e === null || t === void 0 && e === "" ? mc({
      nullInput: !0
    }) : (typeof e == "string" && (n._i = e = n._locale.preparse(e)), Mn(e) ? new Ma(bf(e)) : (Ta(e) ? n._d = e : Tn(t) ? yT(n) : t ? wf(n) : wT(n), lf(n) || (n._d = null), n))
  }

  function wT(n) {
    var e = n._i;
    Ai(e) ? n._d = new Date(ie.now()) : Ta(e) ? n._d = new Date(e.valueOf()) : typeof e == "string" ? pT(n) : Tn(e) ? (n._a = o0(e.slice(0), function (t) {
      return parseInt(t, 10)
    }), _f(n)) : gs(e) ? bT(n) : gr(e) ? n._d = new Date(e) : ie.createFromInputFallback(n)
  }

  function C0(n, e, t, i, r) {
    var s = {};
    return (e === !0 || e === !1) && (i = e, e = void 0), (t === !0 || t === !1) && (i = t, t = void 0), (gs(n) && af(n) || Tn(n) && n.length === 0) && (n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = t, s._i = n, s._f = e, s._strict = i, _T(s)
  }

  function wt(n, e, t, i) {
    return C0(n, e, t, i, !1)
  }
  var ST = gn("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var n = wt.apply(null, arguments);
      return this.isValid() && n.isValid() ? n < this ? this : n : mc()
    }),
    xT = gn("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
      var n = wt.apply(null, arguments);
      return this.isValid() && n.isValid() ? n > this ? this : n : mc()
    });

  function D0(n, e) {
    var t, i;
    if (e.length === 1 && Tn(e[0]) && (e = e[0]), !e.length) return wt();
    for (t = e[0], i = 1; i < e.length; ++i)(!e[i].isValid() || e[i][n](t)) && (t = e[i]);
    return t
  }

  function TT() {
    var n = [].slice.call(arguments, 0);
    return D0("isBefore", n)
  }

  function MT() {
    var n = [].slice.call(arguments, 0);
    return D0("isAfter", n)
  }
  var kT = function () {
      return Date.now ? Date.now() : +new Date
    },
    Ro = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function PT(n) {
    var e, t = !1,
      i, r = Ro.length;
    for (e in n)
      if (tt(n, e) && !(jt.call(Ro, e) !== -1 && (n[e] == null || !isNaN(n[e])))) return !1;
    for (i = 0; i < r; ++i)
      if (n[Ro[i]]) {
        if (t) return !1;
        parseFloat(n[Ro[i]]) !== We(n[Ro[i]]) && (t = !0)
      } return !0
  }

  function ET() {
    return this._isValid
  }

  function OT() {
    return kn(NaN)
  }

  function Tc(n) {
    var e = ff(n),
      t = e.year || 0,
      i = e.quarter || 0,
      r = e.month || 0,
      s = e.week || e.isoWeek || 0,
      o = e.day || 0,
      a = e.hour || 0,
      c = e.minute || 0,
      u = e.second || 0,
      f = e.millisecond || 0;
    this._isValid = PT(e), this._milliseconds = +f + u * 1e3 + c * 6e4 + a * 1e3 * 60 * 60, this._days = +o + s * 7, this._months = +r + i * 3 + t * 12, this._data = {}, this._locale = vr(), this._bubble()
  }

  function Rl(n) {
    return n instanceof Tc
  }

  function Td(n) {
    return n < 0 ? Math.round(-1 * n) * -1 : Math.round(n)
  }

  function CT(n, e, t) {
    var i = Math.min(n.length, e.length),
      r = Math.abs(n.length - e.length),
      s = 0,
      o;
    for (o = 0; o < i; o++)(t && n[o] !== e[o] || !t && We(n[o]) !== We(e[o])) && s++;
    return s + r
  }

  function A0(n, e) {
    me(n, 0, 0, function () {
      var t = this.utcOffset(),
        i = "+";
      return t < 0 && (t = -t, i = "-"), i + qn(~~(t / 60), 2) + e + qn(~~t % 60, 2)
    })
  }
  A0("Z", ":");
  A0("ZZ", "");
  oe("Z", wc);
  oe("ZZ", wc);
  ct(["Z", "ZZ"], function (n, e, t) {
    t._useUTC = !0, t._tzm = Sf(wc, n)
  });
  var DT = /([\+\-]|\d\d)/gi;

  function Sf(n, e) {
    var t = (e || "").match(n),
      i, r, s;
    return t === null ? null : (i = t[t.length - 1] || [], r = (i + "").match(DT) || ["-", 0, 0], s = +(r[1] * 60) + We(r[2]), s === 0 ? 0 : r[0] === "+" ? s : -s)
  }

  function xf(n, e) {
    var t, i;
    return e._isUTC ? (t = e.clone(), i = (Mn(n) || Ta(n) ? n.valueOf() : wt(n).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + i), ie.updateOffset(t, !1), t) : wt(n).local()
  }

  function Md(n) {
    return -Math.round(n._d.getTimezoneOffset())
  }
  ie.updateOffset = function () {};

  function AT(n, e, t) {
    var i = this._offset || 0,
      r;
    if (!this.isValid()) return n != null ? this : NaN;
    if (n != null) {
      if (typeof n == "string") {
        if (n = Sf(wc, n), n === null) return this
      } else Math.abs(n) < 16 && !t && (n = n * 60);
      return !this._isUTC && e && (r = Md(this)), this._offset = n, this._isUTC = !0, r != null && this.add(r, "m"), i !== n && (!e || this._changeInProgress ? I0(this, kn(n - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, ie.updateOffset(this, !0), this._changeInProgress = null)), this
    } else return this._isUTC ? i : Md(this)
  }

  function LT(n, e) {
    return n != null ? (typeof n != "string" && (n = -n), this.utcOffset(n, e), this) : -this.utcOffset()
  }

  function RT(n) {
    return this.utcOffset(0, n)
  }

  function IT(n) {
    return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(Md(this), "m")), this
  }

  function YT() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var n = Sf(nx, this._i);
      n != null ? this.utcOffset(n) : this.utcOffset(0, !0)
    }
    return this
  }

  function FT(n) {
    return this.isValid() ? (n = n ? wt(n).utcOffset() : 0, (this.utcOffset() - n) % 60 === 0) : !1
  }

  function NT() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }

  function zT() {
    if (!Ai(this._isDSTShifted)) return this._isDSTShifted;
    var n = {},
      e;
    return cf(n, this), n = O0(n), n._a ? (e = n._isUTC ? $n(n._a) : wt(n._a), this._isDSTShifted = this.isValid() && CT(n._a, e.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
  }

  function HT() {
    return this.isValid() ? !this._isUTC : !1
  }

  function WT() {
    return this.isValid() ? this._isUTC : !1
  }

  function L0() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
  }
  var jT = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    qT = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function kn(n, e) {
    var t = n,
      i = null,
      r, s, o;
    return Rl(n) ? t = {
      ms: n._milliseconds,
      d: n._days,
      M: n._months
    } : gr(n) || !isNaN(+n) ? (t = {}, e ? t[e] = +n : t.milliseconds = +n) : (i = jT.exec(n)) ? (r = i[1] === "-" ? -1 : 1, t = {
      y: 0,
      d: We(i[Ln]) * r,
      h: We(i[Jt]) * r,
      m: We(i[wn]) * r,
      s: We(i[cr]) * r,
      ms: We(Td(i[as] * 1e3)) * r
    }) : (i = qT.exec(n)) ? (r = i[1] === "-" ? -1 : 1, t = {
      y: Kr(i[2], r),
      M: Kr(i[3], r),
      w: Kr(i[4], r),
      d: Kr(i[5], r),
      h: Kr(i[6], r),
      m: Kr(i[7], r),
      s: Kr(i[8], r)
    }) : t == null ? t = {} : typeof t == "object" && ("from" in t || "to" in t) && (o = $T(wt(t.from), wt(t.to)), t = {}, t.ms = o.milliseconds, t.M = o.months), s = new Tc(t), Rl(n) && tt(n, "_locale") && (s._locale = n._locale), Rl(n) && tt(n, "_isValid") && (s._isValid = n._isValid), s
  }
  kn.fn = Tc.prototype;
  kn.invalid = OT;

  function Kr(n, e) {
    var t = n && parseFloat(n.replace(",", "."));
    return (isNaN(t) ? 0 : t) * e
  }

  function Op(n, e) {
    var t = {};
    return t.months = e.month() - n.month() + (e.year() - n.year()) * 12, n.clone().add(t.months, "M").isAfter(e) && --t.months, t.milliseconds = +e - +n.clone().add(t.months, "M"), t
  }

  function $T(n, e) {
    var t;
    return n.isValid() && e.isValid() ? (e = xf(e, n), n.isBefore(e) ? t = Op(n, e) : (t = Op(e, n), t.milliseconds = -t.milliseconds, t.months = -t.months), t) : {
      milliseconds: 0,
      months: 0
    }
  }

  function R0(n, e) {
    return function (t, i) {
      var r, s;
      return i !== null && !isNaN(+i) && (l0(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = t, t = i, i = s), r = kn(t, i), I0(this, r, n), this
    }
  }

  function I0(n, e, t, i) {
    var r = e._milliseconds,
      s = Td(e._days),
      o = Td(e._months);
    n.isValid() && (i = i ? ? !0, o && y0(n, Ql(n, "Month") + o * t), s && d0(n, "Date", Ql(n, "Date") + s * t), r && n._d.setTime(n._d.valueOf() + r * t), i && ie.updateOffset(n, s || o))
  }
  var VT = R0(1, "add"),
    UT = R0(-1, "subtract");

  function Y0(n) {
    return typeof n == "string" || n instanceof String
  }

  function BT(n) {
    return Mn(n) || Ta(n) || Y0(n) || gr(n) || XT(n) || GT(n) || n === null || n === void 0
  }

  function GT(n) {
    var e = gs(n) && !af(n),
      t = !1,
      i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
      r, s, o = i.length;
    for (r = 0; r < o; r += 1) s = i[r], t = t || tt(n, s);
    return e && t
  }

  function XT(n) {
    var e = Tn(n),
      t = !1;
    return e && (t = n.filter(function (i) {
      return !gr(i) && Y0(n)
    }).length === 0), e && t
  }

  function ZT(n) {
    var e = gs(n) && !af(n),
      t = !1,
      i = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      r, s;
    for (r = 0; r < i.length; r += 1) s = i[r], t = t || tt(n, s);
    return e && t
  }

  function KT(n, e) {
    var t = n.diff(e, "days", !0);
    return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
  }

  function QT(n, e) {
    arguments.length === 1 && (arguments[0] ? BT(arguments[0]) ? (n = arguments[0], e = void 0) : ZT(arguments[0]) && (e = arguments[0], n = void 0) : (n = void 0, e = void 0));
    var t = n || wt(),
      i = xf(t, this).startOf("day"),
      r = ie.calendarFormat(this, i) || "sameElse",
      s = e && (Vn(e[r]) ? e[r].call(this, t) : e[r]);
    return this.format(s || this.localeData().calendar(r, this, wt(t)))
  }

  function JT() {
    return new Ma(this)
  }

  function eM(n, e) {
    var t = Mn(n) ? n : wt(n);
    return this.isValid() && t.isValid() ? (e = vn(e) || "millisecond", e === "millisecond" ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(e).valueOf()) : !1
  }

  function tM(n, e) {
    var t = Mn(n) ? n : wt(n);
    return this.isValid() && t.isValid() ? (e = vn(e) || "millisecond", e === "millisecond" ? this.valueOf() < t.valueOf() : this.clone().endOf(e).valueOf() < t.valueOf()) : !1
  }

  function iM(n, e, t, i) {
    var r = Mn(n) ? n : wt(n),
      s = Mn(e) ? e : wt(e);
    return this.isValid() && r.isValid() && s.isValid() ? (i = i || "()", (i[0] === "(" ? this.isAfter(r, t) : !this.isBefore(r, t)) && (i[1] === ")" ? this.isBefore(s, t) : !this.isAfter(s, t))) : !1
  }

  function nM(n, e) {
    var t = Mn(n) ? n : wt(n),
      i;
    return this.isValid() && t.isValid() ? (e = vn(e) || "millisecond", e === "millisecond" ? this.valueOf() === t.valueOf() : (i = t.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf())) : !1
  }

  function rM(n, e) {
    return this.isSame(n, e) || this.isAfter(n, e)
  }

  function sM(n, e) {
    return this.isSame(n, e) || this.isBefore(n, e)
  }

  function oM(n, e, t) {
    var i, r, s;
    if (!this.isValid()) return NaN;
    if (i = xf(n, this), !i.isValid()) return NaN;
    switch (r = (i.utcOffset() - this.utcOffset()) * 6e4, e = vn(e), e) {
      case "year":
        s = Il(this, i) / 12;
        break;
      case "month":
        s = Il(this, i);
        break;
      case "quarter":
        s = Il(this, i) / 3;
        break;
      case "second":
        s = (this - i) / 1e3;
        break;
      case "minute":
        s = (this - i) / 6e4;
        break;
      case "hour":
        s = (this - i) / 36e5;
        break;
      case "day":
        s = (this - i - r) / 864e5;
        break;
      case "week":
        s = (this - i - r) / 6048e5;
        break;
      default:
        s = this - i
    }
    return t ? s : un(s)
  }

  function Il(n, e) {
    if (n.date() < e.date()) return -Il(e, n);
    var t = (e.year() - n.year()) * 12 + (e.month() - n.month()),
      i = n.clone().add(t, "months"),
      r, s;
    return e - i < 0 ? (r = n.clone().add(t - 1, "months"), s = (e - i) / (i - r)) : (r = n.clone().add(t + 1, "months"), s = (e - i) / (r - i)), -(t + s) || 0
  }
  ie.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  ie.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

  function aM() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }

  function lM(n) {
    if (!this.isValid()) return null;
    var e = n !== !0,
      t = e ? this.clone().utc() : this;
    return t.year() < 0 || t.year() > 9999 ? Ll(t, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Vn(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ll(t, "Z")) : Ll(t, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
  }

  function cM() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var n = "moment",
      e = "",
      t, i, r, s;
    return this.isLocal() || (n = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), t = "[" + n + '("]', i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", r = "-MM-DD[T]HH:mm:ss.SSS", s = e + '[")]', this.format(t + i + r + s)
  }

  function uM(n) {
    n || (n = this.isUtc() ? ie.defaultFormatUtc : ie.defaultFormat);
    var e = Ll(this, n);
    return this.localeData().postformat(e)
  }

  function dM(n, e) {
    return this.isValid() && (Mn(n) && n.isValid() || wt(n).isValid()) ? kn({
      to: this,
      from: n
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }

  function fM(n) {
    return this.from(wt(), n)
  }

  function hM(n, e) {
    return this.isValid() && (Mn(n) && n.isValid() || wt(n).isValid()) ? kn({
      from: this,
      to: n
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
  }

  function pM(n) {
    return this.to(wt(), n)
  }

  function F0(n) {
    var e;
    return n === void 0 ? this._locale._abbr : (e = vr(n), e != null && (this._locale = e), this)
  }
  var N0 = gn("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (n) {
    return n === void 0 ? this.localeData() : this.locale(n)
  });

  function z0() {
    return this._locale
  }
  var tc = 1e3,
    co = 60 * tc,
    ic = 60 * co,
    H0 = (365 * 400 + 97) * 24 * ic;

  function uo(n, e) {
    return (n % e + e) % e
  }

  function W0(n, e, t) {
    return n < 100 && n >= 0 ? new Date(n + 400, e, t) - H0 : new Date(n, e, t).valueOf()
  }

  function j0(n, e, t) {
    return n < 100 && n >= 0 ? Date.UTC(n + 400, e, t) - H0 : Date.UTC(n, e, t)
  }

  function mM(n) {
    var e, t;
    if (n = vn(n), n === void 0 || n === "millisecond" || !this.isValid()) return this;
    switch (t = this._isUTC ? j0 : W0, n) {
      case "year":
        e = t(this.year(), 0, 1);
        break;
      case "quarter":
        e = t(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        e = t(this.year(), this.month(), 1);
        break;
      case "week":
        e = t(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        e = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        e = t(this.year(), this.month(), this.date());
        break;
      case "hour":
        e = this._d.valueOf(), e -= uo(e + (this._isUTC ? 0 : this.utcOffset() * co), ic);
        break;
      case "minute":
        e = this._d.valueOf(), e -= uo(e, co);
        break;
      case "second":
        e = this._d.valueOf(), e -= uo(e, tc);
        break
    }
    return this._d.setTime(e), ie.updateOffset(this, !0), this
  }

  function gM(n) {
    var e, t;
    if (n = vn(n), n === void 0 || n === "millisecond" || !this.isValid()) return this;
    switch (t = this._isUTC ? j0 : W0, n) {
      case "year":
        e = t(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        e = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        e = t(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        e = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        e = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        e = t(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        e = this._d.valueOf(), e += ic - uo(e + (this._isUTC ? 0 : this.utcOffset() * co), ic) - 1;
        break;
      case "minute":
        e = this._d.valueOf(), e += co - uo(e, co) - 1;
        break;
      case "second":
        e = this._d.valueOf(), e += tc - uo(e, tc) - 1;
        break
    }
    return this._d.setTime(e), ie.updateOffset(this, !0), this
  }

  function vM() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
  }

  function yM() {
    return Math.floor(this.valueOf() / 1e3)
  }

  function bM() {
    return new Date(this.valueOf())
  }

  function _M() {
    var n = this;
    return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
  }

  function wM() {
    var n = this;
    return {
      years: n.year(),
      months: n.month(),
      date: n.date(),
      hours: n.hours(),
      minutes: n.minutes(),
      seconds: n.seconds(),
      milliseconds: n.milliseconds()
    }
  }

  function SM() {
    return this.isValid() ? this.toISOString() : null
  }

  function xM() {
    return lf(this)
  }

  function TM() {
    return Ar({}, De(this))
  }

  function MM() {
    return De(this).overflow
  }

  function kM() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }
  me("N", 0, 0, "eraAbbr");
  me("NN", 0, 0, "eraAbbr");
  me("NNN", 0, 0, "eraAbbr");
  me("NNNN", 0, 0, "eraName");
  me("NNNNN", 0, 0, "eraNarrow");
  me("y", ["y", 1], "yo", "eraYear");
  me("y", ["yy", 2], 0, "eraYear");
  me("y", ["yyy", 3], 0, "eraYear");
  me("y", ["yyyy", 4], 0, "eraYear");
  oe("N", Tf);
  oe("NN", Tf);
  oe("NNN", Tf);
  oe("NNNN", FM);
  oe("NNNNN", NM);
  ct(["N", "NN", "NNN", "NNNN", "NNNNN"], function (n, e, t, i) {
    var r = t._locale.erasParse(n, i, t._strict);
    r ? De(t).era = r : De(t).invalidEra = n
  });
  oe("y", wo);
  oe("yy", wo);
  oe("yyy", wo);
  oe("yyyy", wo);
  oe("yo", zM);
  ct(["y", "yy", "yyy", "yyyy"], gi);
  ct(["yo"], function (n, e, t, i) {
    var r;
    t._locale._eraYearOrdinalRegex && (r = n.match(t._locale._eraYearOrdinalRegex)), t._locale.eraYearOrdinalParse ? e[gi] = t._locale.eraYearOrdinalParse(n, r) : e[gi] = parseInt(n, 10)
  });

  function PM(n, e) {
    var t, i, r, s = this._eras || vr("en")._eras;
    for (t = 0, i = s.length; t < i; ++t) {
      switch (typeof s[t].since) {
        case "string":
          r = ie(s[t].since).startOf("day"), s[t].since = r.valueOf();
          break
      }
      switch (typeof s[t].until) {
        case "undefined":
          s[t].until = 1 / 0;
          break;
        case "string":
          r = ie(s[t].until).startOf("day").valueOf(), s[t].until = r.valueOf();
          break
      }
    }
    return s
  }

  function EM(n, e, t) {
    var i, r, s = this.eras(),
      o, a, c;
    for (n = n.toUpperCase(), i = 0, r = s.length; i < r; ++i)
      if (o = s[i].name.toUpperCase(), a = s[i].abbr.toUpperCase(), c = s[i].narrow.toUpperCase(), t) switch (e) {
        case "N":
        case "NN":
        case "NNN":
          if (a === n) return s[i];
          break;
        case "NNNN":
          if (o === n) return s[i];
          break;
        case "NNNNN":
          if (c === n) return s[i];
          break
      } else if ([o, a, c].indexOf(n) >= 0) return s[i]
  }

  function OM(n, e) {
    var t = n.since <= n.until ? 1 : -1;
    return e === void 0 ? ie(n.since).year() : ie(n.since).year() + (e - n.offset) * t
  }

  function CM() {
    var n, e, t, i = this.localeData().eras();
    for (n = 0, e = i.length; n < e; ++n)
      if (t = this.clone().startOf("day").valueOf(), i[n].since <= t && t <= i[n].until || i[n].until <= t && t <= i[n].since) return i[n].name;
    return ""
  }

  function DM() {
    var n, e, t, i = this.localeData().eras();
    for (n = 0, e = i.length; n < e; ++n)
      if (t = this.clone().startOf("day").valueOf(), i[n].since <= t && t <= i[n].until || i[n].until <= t && t <= i[n].since) return i[n].narrow;
    return ""
  }

  function AM() {
    var n, e, t, i = this.localeData().eras();
    for (n = 0, e = i.length; n < e; ++n)
      if (t = this.clone().startOf("day").valueOf(), i[n].since <= t && t <= i[n].until || i[n].until <= t && t <= i[n].since) return i[n].abbr;
    return ""
  }

  function LM() {
    var n, e, t, i, r = this.localeData().eras();
    for (n = 0, e = r.length; n < e; ++n)
      if (t = r[n].since <= r[n].until ? 1 : -1, i = this.clone().startOf("day").valueOf(), r[n].since <= i && i <= r[n].until || r[n].until <= i && i <= r[n].since) return (this.year() - ie(r[n].since).year()) * t + r[n].offset;
    return this.year()
  }

  function RM(n) {
    return tt(this, "_erasNameRegex") || Mf.call(this), n ? this._erasNameRegex : this._erasRegex
  }

  function IM(n) {
    return tt(this, "_erasAbbrRegex") || Mf.call(this), n ? this._erasAbbrRegex : this._erasRegex
  }

  function YM(n) {
    return tt(this, "_erasNarrowRegex") || Mf.call(this), n ? this._erasNarrowRegex : this._erasRegex
  }

  function Tf(n, e) {
    return e.erasAbbrRegex(n)
  }

  function FM(n, e) {
    return e.erasNameRegex(n)
  }

  function NM(n, e) {
    return e.erasNarrowRegex(n)
  }

  function zM(n, e) {
    return e._eraYearOrdinalRegex || wo
  }

  function Mf() {
    var n = [],
      e = [],
      t = [],
      i = [],
      r, s, o = this.eras();
    for (r = 0, s = o.length; r < s; ++r) e.push(Bi(o[r].name)), n.push(Bi(o[r].abbr)), t.push(Bi(o[r].narrow)), i.push(Bi(o[r].name)), i.push(Bi(o[r].abbr)), i.push(Bi(o[r].narrow));
    this._erasRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + t.join("|") + ")", "i")
  }
  me(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100
  });
  me(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100
  });

  function Mc(n, e) {
    me(0, [n, n.length], 0, e)
  }
  Mc("gggg", "weekYear");
  Mc("ggggg", "weekYear");
  Mc("GGGG", "isoWeekYear");
  Mc("GGGGG", "isoWeekYear");
  vi("weekYear", "gg");
  vi("isoWeekYear", "GG");
  yi("weekYear", 1);
  yi("isoWeekYear", 1);
  oe("G", _c);
  oe("g", _c);
  oe("GG", St, Qi);
  oe("gg", St, Qi);
  oe("GGGG", pf, hf);
  oe("gggg", pf, hf);
  oe("GGGGG", bc, vc);
  oe("ggggg", bc, vc);
  Pa(["gggg", "ggggg", "GGGG", "GGGGG"], function (n, e, t, i) {
    e[i.substr(0, 2)] = We(n)
  });
  Pa(["gg", "GG"], function (n, e, t, i) {
    e[i] = ie.parseTwoDigitYear(n)
  });

  function HM(n) {
    return q0.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }

  function WM(n) {
    return q0.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
  }

  function jM() {
    return hr(this.year(), 1, 4)
  }

  function qM() {
    return hr(this.isoWeekYear(), 1, 4)
  }

  function $M() {
    var n = this.localeData()._week;
    return hr(this.year(), n.dow, n.doy)
  }

  function VM() {
    var n = this.localeData()._week;
    return hr(this.weekYear(), n.dow, n.doy)
  }

  function q0(n, e, t, i, r) {
    var s;
    return n == null ? _a(this, i, r).year : (s = hr(n, i, r), e > s && (e = s), UM.call(this, n, e, t, i, r))
  }

  function UM(n, e, t, i, r) {
    var s = S0(n, e, t, i, r),
      o = ba(s.year, 0, s.dayOfYear);
    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
  }
  me("Q", 0, "Qo", "quarter");
  vi("quarter", "Q");
  yi("quarter", 7);
  oe("Q", f0);
  ct("Q", function (n, e) {
    e[lr] = (We(n) - 1) * 3
  });

  function BM(n) {
    return n == null ? Math.ceil((this.month() + 1) / 3) : this.month((n - 1) * 3 + this.month() % 3)
  }
  me("D", ["DD", 2], "Do", "date");
  vi("date", "D");
  yi("date", 9);
  oe("D", St);
  oe("DD", St, Qi);
  oe("Do", function (n, e) {
    return n ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
  });
  ct(["D", "DD"], Ln);
  ct("Do", function (n, e) {
    e[Ln] = We(n.match(St)[0])
  });
  var $0 = _o("Date", !0);
  me("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  vi("dayOfYear", "DDD");
  yi("dayOfYear", 4);
  oe("DDD", yc);
  oe("DDDD", h0);
  ct(["DDD", "DDDD"], function (n, e, t) {
    t._dayOfYear = We(n)
  });

  function GM(n) {
    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return n == null ? e : this.add(n - e, "d")
  }
  me("m", ["mm", 2], 0, "minute");
  vi("minute", "m");
  yi("minute", 14);
  oe("m", St);
  oe("mm", St, Qi);
  ct(["m", "mm"], wn);
  var XM = _o("Minutes", !1);
  me("s", ["ss", 2], 0, "second");
  vi("second", "s");
  yi("second", 15);
  oe("s", St);
  oe("ss", St, Qi);
  ct(["s", "ss"], cr);
  var ZM = _o("Seconds", !1);
  me("S", 0, 0, function () {
    return ~~(this.millisecond() / 100)
  });
  me(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10)
  });
  me(0, ["SSS", 3], 0, "millisecond");
  me(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10
  });
  me(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100
  });
  me(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3
  });
  me(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4
  });
  me(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5
  });
  me(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6
  });
  vi("millisecond", "ms");
  yi("millisecond", 16);
  oe("S", yc, f0);
  oe("SS", yc, Qi);
  oe("SSS", yc, h0);
  var Lr, V0;
  for (Lr = "SSSS"; Lr.length <= 9; Lr += "S") oe(Lr, wo);

  function KM(n, e) {
    e[as] = We(("0." + n) * 1e3)
  }
  for (Lr = "S"; Lr.length <= 9; Lr += "S") ct(Lr, KM);
  V0 = _o("Milliseconds", !1);
  me("z", 0, 0, "zoneAbbr");
  me("zz", 0, 0, "zoneName");

  function QM() {
    return this._isUTC ? "UTC" : ""
  }

  function JM() {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }
  var X = Ma.prototype;
  X.add = VT;
  X.calendar = QT;
  X.clone = JT;
  X.diff = oM;
  X.endOf = gM;
  X.format = uM;
  X.from = dM;
  X.fromNow = fM;
  X.to = hM;
  X.toNow = pM;
  X.get = tx;
  X.invalidAt = MM;
  X.isAfter = eM;
  X.isBefore = tM;
  X.isBetween = iM;
  X.isSame = nM;
  X.isSameOrAfter = rM;
  X.isSameOrBefore = sM;
  X.isValid = xM;
  X.lang = N0;
  X.locale = F0;
  X.localeData = z0;
  X.max = xT;
  X.min = ST;
  X.parsingFlags = TM;
  X.set = ix;
  X.startOf = mM;
  X.subtract = UT;
  X.toArray = _M;
  X.toObject = wM;
  X.toDate = bM;
  X.toISOString = lM;
  X.inspect = cM;
  typeof Symbol < "u" && Symbol.for != null && (X[Symbol.for("nodejs.util.inspect.custom")] = function () {
    return "Moment<" + this.format() + ">"
  });
  X.toJSON = SM;
  X.toString = aM;
  X.unix = yM;
  X.valueOf = vM;
  X.creationData = kM;
  X.eraName = CM;
  X.eraNarrow = DM;
  X.eraAbbr = AM;
  X.eraYear = LM;
  X.year = w0;
  X.isLeapYear = wx;
  X.weekYear = HM;
  X.isoWeekYear = WM;
  X.quarter = X.quarters = BM;
  X.month = b0;
  X.daysInMonth = yx;
  X.week = X.weeks = Px;
  X.isoWeek = X.isoWeeks = Ex;
  X.weeksInYear = $M;
  X.weeksInWeekYear = VM;
  X.isoWeeksInYear = jM;
  X.isoWeeksInISOWeekYear = qM;
  X.date = $0;
  X.day = X.days = Wx;
  X.weekday = jx;
  X.isoWeekday = qx;
  X.dayOfYear = GM;
  X.hour = X.hours = Zx;
  X.minute = X.minutes = XM;
  X.second = X.seconds = ZM;
  X.millisecond = X.milliseconds = V0;
  X.utcOffset = AT;
  X.utc = RT;
  X.local = IT;
  X.parseZone = YT;
  X.hasAlignedHourOffset = FT;
  X.isDST = NT;
  X.isLocal = HT;
  X.isUtcOffset = WT;
  X.isUtc = L0;
  X.isUTC = L0;
  X.zoneAbbr = QM;
  X.zoneName = JM;
  X.dates = gn("dates accessor is deprecated. Use date instead.", $0);
  X.months = gn("months accessor is deprecated. Use month instead", b0);
  X.years = gn("years accessor is deprecated. Use year instead", w0);
  X.zone = gn("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", LT);
  X.isDSTShifted = gn("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", zT);

  function ek(n) {
    return wt(n * 1e3)
  }

  function tk() {
    return wt.apply(null, arguments).parseZone()
  }

  function U0(n) {
    return n
  }
  var it = uf.prototype;
  it.calendar = WS;
  it.longDateFormat = VS;
  it.invalidDate = BS;
  it.ordinal = ZS;
  it.preparse = U0;
  it.postformat = U0;
  it.relativeTime = QS;
  it.pastFuture = JS;
  it.set = zS;
  it.eras = PM;
  it.erasParse = EM;
  it.erasConvertYear = OM;
  it.erasAbbrRegex = IM;
  it.erasNameRegex = RM;
  it.erasNarrowRegex = YM;
  it.months = px;
  it.monthsShort = mx;
  it.monthsParse = vx;
  it.monthsRegex = _x;
  it.monthsShortRegex = bx;
  it.week = xx;
  it.firstDayOfYear = kx;
  it.firstDayOfWeek = Mx;
  it.weekdays = Yx;
  it.weekdaysMin = Nx;
  it.weekdaysShort = Fx;
  it.weekdaysParse = Hx;
  it.weekdaysRegex = $x;
  it.weekdaysShortRegex = Vx;
  it.weekdaysMinRegex = Ux;
  it.isPM = Gx;
  it.meridiem = Kx;

  function nc(n, e, t, i) {
    var r = vr(),
      s = $n().set(i, e);
    return r[t](s, n)
  }

  function B0(n, e, t) {
    if (gr(n) && (e = n, n = void 0), n = n || "", e != null) return nc(n, e, t, "month");
    var i, r = [];
    for (i = 0; i < 12; i++) r[i] = nc(n, i, t, "month");
    return r
  }

  function kf(n, e, t, i) {
    typeof n == "boolean" ? (gr(e) && (t = e, e = void 0), e = e || "") : (e = n, t = e, n = !1, gr(e) && (t = e, e = void 0), e = e || "");
    var r = vr(),
      s = n ? r._week.dow : 0,
      o, a = [];
    if (t != null) return nc(e, (t + s) % 7, i, "day");
    for (o = 0; o < 7; o++) a[o] = nc(e, (o + s) % 7, i, "day");
    return a
  }

  function ik(n, e) {
    return B0(n, e, "months")
  }

  function nk(n, e) {
    return B0(n, e, "monthsShort")
  }

  function rk(n, e, t) {
    return kf(n, e, t, "weekdays")
  }

  function sk(n, e, t) {
    return kf(n, e, t, "weekdaysShort")
  }

  function ok(n, e, t) {
    return kf(n, e, t, "weekdaysMin")
  }
  zr("en", {
    eras: [{
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    }, {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (n) {
      var e = n % 10,
        t = We(n % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
      return n + t
    }
  });
  ie.lang = gn("moment.lang is deprecated. Use moment.locale instead.", zr);
  ie.langData = gn("moment.langData is deprecated. Use moment.localeData instead.", vr);
  var Jn = Math.abs;

  function ak() {
    var n = this._data;
    return this._milliseconds = Jn(this._milliseconds), this._days = Jn(this._days), this._months = Jn(this._months), n.milliseconds = Jn(n.milliseconds), n.seconds = Jn(n.seconds), n.minutes = Jn(n.minutes), n.hours = Jn(n.hours), n.months = Jn(n.months), n.years = Jn(n.years), this
  }

  function G0(n, e, t, i) {
    var r = kn(e, t);
    return n._milliseconds += i * r._milliseconds, n._days += i * r._days, n._months += i * r._months, n._bubble()
  }

  function lk(n, e) {
    return G0(this, n, e, 1)
  }

  function ck(n, e) {
    return G0(this, n, e, -1)
  }

  function Cp(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n)
  }

  function uk() {
    var n = this._milliseconds,
      e = this._days,
      t = this._months,
      i = this._data,
      r, s, o, a, c;
    return n >= 0 && e >= 0 && t >= 0 || n <= 0 && e <= 0 && t <= 0 || (n += Cp(kd(t) + e) * 864e5, e = 0, t = 0), i.milliseconds = n % 1e3, r = un(n / 1e3), i.seconds = r % 60, s = un(r / 60), i.minutes = s % 60, o = un(s / 60), i.hours = o % 24, e += un(o / 24), c = un(X0(e)), t += c, e -= Cp(kd(c)), a = un(t / 12), t %= 12, i.days = e, i.months = t, i.years = a, this
  }

  function X0(n) {
    return n * 4800 / 146097
  }

  function kd(n) {
    return n * 146097 / 4800
  }

  function dk(n) {
    if (!this.isValid()) return NaN;
    var e, t, i = this._milliseconds;
    if (n = vn(n), n === "month" || n === "quarter" || n === "year") switch (e = this._days + i / 864e5, t = this._months + X0(e), n) {
      case "month":
        return t;
      case "quarter":
        return t / 3;
      case "year":
        return t / 12
    } else switch (e = this._days + Math.round(kd(this._months)), n) {
      case "week":
        return e / 7 + i / 6048e5;
      case "day":
        return e + i / 864e5;
      case "hour":
        return e * 24 + i / 36e5;
      case "minute":
        return e * 1440 + i / 6e4;
      case "second":
        return e * 86400 + i / 1e3;
      case "millisecond":
        return Math.floor(e * 864e5) + i;
      default:
        throw new Error("Unknown unit " + n)
    }
  }

  function fk() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + We(this._months / 12) * 31536e6 : NaN
  }

  function yr(n) {
    return function () {
      return this.as(n)
    }
  }
  var hk = yr("ms"),
    pk = yr("s"),
    mk = yr("m"),
    gk = yr("h"),
    vk = yr("d"),
    yk = yr("w"),
    bk = yr("M"),
    _k = yr("Q"),
    wk = yr("y");

  function Sk() {
    return kn(this)
  }

  function xk(n) {
    return n = vn(n), this.isValid() ? this[n + "s"]() : NaN
  }

  function Ps(n) {
    return function () {
      return this.isValid() ? this._data[n] : NaN
    }
  }
  var Tk = Ps("milliseconds"),
    Mk = Ps("seconds"),
    kk = Ps("minutes"),
    Pk = Ps("hours"),
    Ek = Ps("days"),
    Ok = Ps("months"),
    Ck = Ps("years");

  function Dk() {
    return un(this.days() / 7)
  }
  var nr = Math.round,
    eo = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      w: null,
      M: 11
    };

  function Ak(n, e, t, i, r) {
    return r.relativeTime(e || 1, !!t, n, i)
  }

  function Lk(n, e, t, i) {
    var r = kn(n).abs(),
      s = nr(r.as("s")),
      o = nr(r.as("m")),
      a = nr(r.as("h")),
      c = nr(r.as("d")),
      u = nr(r.as("M")),
      f = nr(r.as("w")),
      h = nr(r.as("y")),
      p = s <= t.ss && ["s", s] || s < t.s && ["ss", s] || o <= 1 && ["m"] || o < t.m && ["mm", o] || a <= 1 && ["h"] || a < t.h && ["hh", a] || c <= 1 && ["d"] || c < t.d && ["dd", c];
    return t.w != null && (p = p || f <= 1 && ["w"] || f < t.w && ["ww", f]), p = p || u <= 1 && ["M"] || u < t.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h], p[2] = e, p[3] = +n > 0, p[4] = i, Ak.apply(null, p)
  }

  function Rk(n) {
    return n === void 0 ? nr : typeof n == "function" ? (nr = n, !0) : !1
  }

  function Ik(n, e) {
    return eo[n] === void 0 ? !1 : e === void 0 ? eo[n] : (eo[n] = e, n === "s" && (eo.ss = e - 1), !0)
  }

  function Yk(n, e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t = !1,
      i = eo,
      r, s;
    return typeof n == "object" && (e = n, n = !1), typeof n == "boolean" && (t = n), typeof e == "object" && (i = Object.assign({}, eo, e), e.s != null && e.ss == null && (i.ss = e.s - 1)), r = this.localeData(), s = Lk(this, !t, i, r), t && (s = r.pastFuture(+this, s)), r.postformat(s)
  }
  var Tu = Math.abs;

  function Hs(n) {
    return (n > 0) - (n < 0) || +n
  }

  function kc() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = Tu(this._milliseconds) / 1e3,
      e = Tu(this._days),
      t = Tu(this._months),
      i, r, s, o, a = this.asSeconds(),
      c, u, f, h;
    return a ? (i = un(n / 60), r = un(i / 60), n %= 60, i %= 60, s = un(t / 12), t %= 12, o = n ? n.toFixed(3).replace(/\.?0+$/, "") : "", c = a < 0 ? "-" : "", u = Hs(this._months) !== Hs(a) ? "-" : "", f = Hs(this._days) !== Hs(a) ? "-" : "", h = Hs(this._milliseconds) !== Hs(a) ? "-" : "", c + "P" + (s ? u + s + "Y" : "") + (t ? u + t + "M" : "") + (e ? f + e + "D" : "") + (r || i || n ? "T" : "") + (r ? h + r + "H" : "") + (i ? h + i + "M" : "") + (n ? h + o + "S" : "")) : "P0D"
  }
  var Ze = Tc.prototype;
  Ze.isValid = ET;
  Ze.abs = ak;
  Ze.add = lk;
  Ze.subtract = ck;
  Ze.as = dk;
  Ze.asMilliseconds = hk;
  Ze.asSeconds = pk;
  Ze.asMinutes = mk;
  Ze.asHours = gk;
  Ze.asDays = vk;
  Ze.asWeeks = yk;
  Ze.asMonths = bk;
  Ze.asQuarters = _k;
  Ze.asYears = wk;
  Ze.valueOf = fk;
  Ze._bubble = uk;
  Ze.clone = Sk;
  Ze.get = xk;
  Ze.milliseconds = Tk;
  Ze.seconds = Mk;
  Ze.minutes = kk;
  Ze.hours = Pk;
  Ze.days = Ek;
  Ze.weeks = Dk;
  Ze.months = Ok;
  Ze.years = Ck;
  Ze.humanize = Yk;
  Ze.toISOString = kc;
  Ze.toString = kc;
  Ze.toJSON = kc;
  Ze.locale = F0;
  Ze.localeData = z0;
  Ze.toIsoString = gn("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", kc);
  Ze.lang = N0;
  me("X", 0, 0, "unix");
  me("x", 0, 0, "valueOf");
  oe("x", _c);
  oe("X", rx);
  ct("X", function (n, e, t) {
    t._d = new Date(parseFloat(n) * 1e3)
  });
  ct("x", function (n, e, t) {
    t._d = new Date(We(n))
  }); //! moment.js
  ie.version = "2.29.4";
  FS(wt);
  ie.fn = X;
  ie.min = TT;
  ie.max = MT;
  ie.now = kT;
  ie.utc = $n;
  ie.unix = ek;
  ie.months = ik;
  ie.isDate = Ta;
  ie.locale = zr;
  ie.invalid = mc;
  ie.duration = kn;
  ie.isMoment = Mn;
  ie.weekdays = rk;
  ie.parseZone = tk;
  ie.localeData = vr;
  ie.isDuration = Rl;
  ie.monthsShort = nk;
  ie.weekdaysMin = ok;
  ie.defineLocale = yf;
  ie.updateLocale = tT;
  ie.locales = iT;
  ie.weekdaysShort = sk;
  ie.normalizeUnits = vn;
  ie.relativeTimeRounding = Rk;
  ie.relativeTimeThreshold = Ik;
  ie.calendarFormat = KT;
  ie.prototype = X;
  ie.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };

  function Fk(n) {
    n.addEventListener("input", e => {
      let t = e.target.value.match(/\d/g);
      if (t === null) {
        e.target.value = "";
        return
      }
      let i = "";
      for (let r = 0; r < (t.length > 8 ? 8 : t.length); r++) r == 5 && (i += "-"), i += t[r];
      e.target.value = i, i.length === 9 ? n.setCustomValidity("") : n.setCustomValidity("Campo inv찼lido")
    })
  }

  function Nk(n) {
    return n = n.replace(/\D/g, ""), n = n.replace(/(\d{3})(\d)/, "$1.$2"), n = n.replace(/(\d{3})(\d)/, "$1.$2"), n = n.replace(/(\d{3})(\d{1,2})$/, "$1-$2"), n
  }

  function Mu(n) {
    var e = n.value.match(/\d/g);
    if (console.log(e), !e || e[0] == 0 || e[1] == 0) return n.value = "", null;
    let t = e[2] == 9;
    e.length > t, e = e.slice(0, t ? 11 : 10);
    let i = "";
    for (let r = 0; r < e.length; r++) {
      switch (r) {
        case 0:
          i += "(";
          break;
        case 2:
          i += ") ";
          break;
        case 3:
          t && (i += " ");
          break;
        case 6:
          t || (i += "-");
          break;
        case 7:
          t && (i += "-");
          break
      }
      i += e[r]
    }
    switch (n.value = i, e.length) {
      case 10:
        return "fixo";
      case 11:
        return "celular";
      default:
        return null
    }
  }

  function zk(n) {
    n.addEventListener("input", e => {
      let t = n.value.replaceAll(/\D/g, "");
      t.length > 8 && (t = t.substring(0, 8));
      let i = "";
      for (let s = 0; s < t.length; s++) {
        const o = t[s];
        (s == 2 || s == 4) && (i += "/"), i += o
      }
      n.value = i;
      var r = ie(i, "DD/MM/YYYY");
      r.isValid() && t.length == 8 && (this.setDate(), this.clearTBody(), this.renderCalendar())
    }), n.addEventListener("focusout", e => {
      const t = n.value,
        i = t.replaceAll(/\D/g, "");
      if (i.length === 6) {
        const r = parseInt(i.substring(4, 6));
        let s;
        r > 50 ? s = "19" : s = "20", n.value = t.substring(0, 6) + s + t.substring(6, 8)
      }
    })
  }

  function Hk() {
    document.querySelectorAll("input.cep:not(.js-running)").forEach(n => {
      Fk(n)
    }), document.querySelectorAll("input.cpf:not(.js-running)").forEach(n => {
      n.addEventListener("input", function () {
        n.value = Nk(n.value)
      })
    }), document.querySelectorAll("input.money").forEach(n => {
      YS(n)
    }), document.querySelectorAll("input[type=tel]:not(.js-running)").forEach(n => {
      n.addEventListener("input", function () {
        Mu(n)
      }), n.addEventListener("focusout", function () {
        Mu(n);
        let e = Mu(n);
        (e === "fixo" && n.value.length !== 14 || e === "celular" && n.value.length !== 16 || !e) && (n.value = "")
      })
    }), document.querySelectorAll("input.date:not(.js-running)").forEach(n => {
      n.classList.add("js-running"), zk(n)
    }), document.querySelectorAll("input,textarea").forEach(n => {
      n.addEventListener("focus", function () {
        this.closest("div").classList.add("preenchido")
      }), n.addEventListener("input", function () {
        this.closest("div").classList.remove("error"), this.dataset.error && this.setCustomValidity("")
      }), n.addEventListener("focusout", function () {
        this.value.length === 0 && this.closest("div").classList.remove("preenchido")
      }), n.addEventListener("invalid", function () {
        Dp(this)
      })
    }), document.querySelectorAll("select").forEach(n => {
      n.addEventListener("input", function () {
        this.selectedIndex >= 0 && this.closest("div.container-select").classList.add("preenchido")
      }), n.addEventListener("invalid", function () {
        this.selectedIndex >= 0 && Dp(this, "div.container-select")
      })
    }), setTimeout(() => {
      document.querySelectorAll("input:-webkit-autofill,textarea:-webkit-autofill").forEach(n => {
        n.closest("div").classList.add("preenchido")
      })
    }, 1e3)
  }

  function Dp(n, e = "div") {
    n.closest(e).classList.add("error"), n.focus(), n.dataset.error && n.setCustomValidity(n.dataset.error)
  }

  function Wk() {
    document.querySelectorAll(".container-contato:not(.js-running)").forEach(e => {
      e.classList.add("js-running"), e.querySelector("form").addEventListener("submit", function (t) {
        t.preventDefault(), e.querySelector(".feedback-contato").classList.add("d-none"), e.querySelector(".submit-text").innerHTML = VARS.contactSending, e.querySelector(".bt-submit").classList.add("pointer-events-none"), fetch(VARS.contactURL, {
          method: "POST",
          headers: {
            "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content
          },
          body: new FormData(e.querySelector("form"))
        }).then(function (i) {
          i.ok ? (e.classList.add("feedback-sucesso"), e.querySelector(".feedback-contato").classList.remove("d-none"), e.querySelector(".feedback-contato").innerHTML = VARS.contactSent) : (e.querySelector(".submit-text").innerHTML = VARS.contactSend, e.querySelector(".feedback-contato").innerHTML = VARS.contactError, e.querySelector(".feedback-contato").classList.remove("d-none"), e.querySelector(".bt-submit").classList.remove("pointer-events-none"))
        }).catch(function (i) {
          e.querySelector(".submit-text").innerHTML = VARS.contactSend, e.querySelector(".feedback-contato").innerHTML = VARS.contactError, e.querySelector(".feedback-contato").classList.remove("d-none"), e.querySelector(".bt-submit").classList.remove("pointer-events-none")
        })
      })
    })
  }

  function jk() {
    const n = document.querySelector(".container-cookies");
    n.querySelector(".btn-cookies.accept").addEventListener("click", function () {
      s()
    });

    function t(o, a, c) {
      var u = "";
      if (c) {
        var f = new Date;
        f.setTime(f.getTime() + c * 24 * 60 * 60 * 1e3), u = "; expires=" + f.toUTCString()
      }
      document.cookie = o + "=" + (a || "") + u + "; path=/"
    }

    function i(o) {
      for (var a = o + "=", c = document.cookie.split(";"), u = 0; u < c.length; u++) {
        for (var f = c[u]; f.charAt(0) == " ";) f = f.substring(1, f.length);
        if (f.indexOf(a) == 0) return f.substring(a.length, f.length)
      }
      return null
    }

    function r() {
      i("cookieDismiss") || n.classList.remove("d-none")
    }

    function s() {
      t("cookieDismiss", "1", 7), n.dataset.aos = "fadeOut .4s", setTimeout(() => {
        n.classList.add("d-none")
      }, 400)
    }
    window.onload = function () {
      r()
    }
  }

  function Ap(n) {
    return n !== null && typeof n == "object" && "constructor" in n && n.constructor === Object
  }

  function Pf(n = {}, e = {}) {
    Object.keys(e).forEach(t => {
      typeof n[t] > "u" ? n[t] = e[t] : Ap(e[t]) && Ap(n[t]) && Object.keys(e[t]).length > 0 && Pf(n[t], e[t])
    })
  }
  const Z0 = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: ""
    },
    querySelector() {
      return null
    },
    querySelectorAll() {
      return []
    },
    getElementById() {
      return null
    },
    createEvent() {
      return {
        initEvent() {}
      }
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return []
        }
      }
    },
    createElementNS() {
      return {}
    },
    importNode() {
      return null
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };

  function Es() {
    const n = typeof document < "u" ? document : {};
    return Pf(n, Z0), n
  }
  const qk = {
    document: Z0,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {}
    },
    CustomEvent: function () {
      return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return ""
        }
      }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {}
    },
    requestAnimationFrame(n) {
      return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0)
    },
    cancelAnimationFrame(n) {
      typeof setTimeout > "u" || clearTimeout(n)
    }
  };

  function Ji() {
    const n = typeof window < "u" ? window : {};
    return Pf(n, qk), n
  }

  function $k(n) {
    const e = n;
    Object.keys(e).forEach(t => {
      try {
        e[t] = null
      } catch {}
      try {
        delete e[t]
      } catch {}
    })
  }

  function Pd(n, e = 0) {
    return setTimeout(n, e)
  }

  function rc() {
    return Date.now()
  }

  function Vk(n) {
    const e = Ji();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(n, null)), !t && n.currentStyle && (t = n.currentStyle), t || (t = n.style), t
  }

  function Uk(n, e = "x") {
    const t = Ji();
    let i, r, s;
    const o = Vk(n);
    return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(a => a.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = s.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? r = s.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0
  }

  function ll(n) {
    return typeof n == "object" && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === "Object"
  }

  function Bk(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? n instanceof HTMLElement : n && (n.nodeType === 1 || n.nodeType === 11)
  }

  function Ui(...n) {
    const e = Object(n[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < n.length; i += 1) {
      const r = n[i];
      if (r != null && !Bk(r)) {
        const s = Object.keys(Object(r)).filter(o => t.indexOf(o) < 0);
        for (let o = 0, a = s.length; o < a; o += 1) {
          const c = s[o],
            u = Object.getOwnPropertyDescriptor(r, c);
          u !== void 0 && u.enumerable && (ll(e[c]) && ll(r[c]) ? r[c].__swiper__ ? e[c] = r[c] : Ui(e[c], r[c]) : !ll(e[c]) && ll(r[c]) ? (e[c] = {}, r[c].__swiper__ ? e[c] = r[c] : Ui(e[c], r[c])) : e[c] = r[c])
        }
      }
    }
    return e
  }

  function cl(n, e, t) {
    n.style.setProperty(e, t)
  }

  function K0({
    swiper: n,
    targetPosition: e,
    side: t
  }) {
    const i = Ji(),
      r = -n.translate;
    let s = null,
      o;
    const a = n.params.speed;
    n.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(n.cssModeFrameID);
    const c = e > r ? "next" : "prev",
      u = (h, p) => c === "next" && h >= p || c === "prev" && h <= p,
      f = () => {
        o = new Date().getTime(), s === null && (s = o);
        const h = Math.max(Math.min((o - s) / a, 1), 0),
          p = .5 - Math.cos(h * Math.PI) / 2;
        let m = r + p * (e - r);
        if (u(m, e) && (m = e), n.wrapperEl.scrollTo({
            [t]: m
          }), u(m, e)) {
          n.wrapperEl.style.overflow = "hidden", n.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
            n.wrapperEl.style.overflow = "", n.wrapperEl.scrollTo({
              [t]: m
            })
          }), i.cancelAnimationFrame(n.cssModeFrameID);
          return
        }
        n.cssModeFrameID = i.requestAnimationFrame(f)
      };
    f()
  }

  function Yn(n, e = "") {
    return [...n.children].filter(t => t.matches(e))
  }

  function Q0(n, e = []) {
    const t = document.createElement(n);
    return t.classList.add(...Array.isArray(e) ? e : [e]), t
  }

  function Gk(n, e) {
    const t = [];
    for (; n.previousElementSibling;) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), n = i
    }
    return t
  }

  function Xk(n, e) {
    const t = [];
    for (; n.nextElementSibling;) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), n = i
    }
    return t
  }

  function Rr(n, e) {
    return Ji().getComputedStyle(n, null).getPropertyValue(e)
  }

  function Lp(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0;
        (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
      return t
    }
  }

  function Zk(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i;) e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
    return t
  }

  function Rp(n, e, t) {
    const i = Ji();
    return t ? n[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(n, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : n.offsetWidth
  }
  let ku;

  function Kk() {
    const n = Ji(),
      e = Es();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch)
    }
  }

  function J0() {
    return ku || (ku = Kk()), ku
  }
  let Pu;

  function Qk({
    userAgent: n
  } = {}) {
    const e = J0(),
      t = Ji(),
      i = t.navigator.platform,
      r = n || t.navigator.userAgent,
      s = {
        ios: !1,
        android: !1
      },
      o = t.screen.width,
      a = t.screen.height,
      c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let u = r.match(/(iPad).*OS\s([\d_]+)/);
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/),
      h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = i === "Win32";
    let m = i === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !u && m && e.touch && g.indexOf(`${o}x${a}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), m = !1), c && !p && (s.os = "android", s.android = !0), (u || h || f) && (s.os = "ios", s.ios = !0), s
  }

  function Jk(n = {}) {
    return Pu || (Pu = Qk(n)), Pu
  }
  let Eu;

  function eP() {
    const n = Ji();
    let e = !1;

    function t() {
      const i = n.navigator.userAgent.toLowerCase();
      return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (t()) {
      const i = String(n.navigator.userAgent);
      if (i.includes("Version/")) {
        const [r, s] = i.split("Version/")[1].split(" ")[0].split(".").map(o => Number(o));
        e = r < 16 || r === 16 && s < 2
      }
    }
    return {
      isSafari: e || t(),
      needPerspectiveFix: e,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
    }
  }

  function tP() {
    return Eu || (Eu = eP()), Eu
  }

  function iP({
    swiper: n,
    on: e,
    emit: t
  }) {
    const i = Ji();
    let r = null,
      s = null;
    const o = () => {
        !n || n.destroyed || !n.initialized || (t("beforeResize"), t("resize"))
      },
      a = () => {
        !n || n.destroyed || !n.initialized || (r = new ResizeObserver(f => {
          s = i.requestAnimationFrame(() => {
            const {
              width: h,
              height: p
            } = n;
            let m = h,
              g = p;
            f.forEach(({
              contentBoxSize: y,
              contentRect: w,
              target: S
            }) => {
              S && S !== n.el || (m = w ? w.width : (y[0] || y).inlineSize, g = w ? w.height : (y[0] || y).blockSize)
            }), (m !== h || g !== p) && o()
          })
        }), r.observe(n.el))
      },
      c = () => {
        s && i.cancelAnimationFrame(s), r && r.unobserve && n.el && (r.unobserve(n.el), r = null)
      },
      u = () => {
        !n || n.destroyed || !n.initialized || t("orientationchange")
      };
    e("init", () => {
      if (n.params.resizeObserver && typeof i.ResizeObserver < "u") {
        a();
        return
      }
      i.addEventListener("resize", o), i.addEventListener("orientationchange", u)
    }), e("destroy", () => {
      c(), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", u)
    })
  }

  function nP({
    swiper: n,
    extendParams: e,
    on: t,
    emit: i
  }) {
    const r = [],
      s = Ji(),
      o = (u, f = {}) => {
        const h = s.MutationObserver || s.WebkitMutationObserver,
          p = new h(m => {
            if (n.__preventObserver__) return;
            if (m.length === 1) {
              i("observerUpdate", m[0]);
              return
            }
            const g = function () {
              i("observerUpdate", m[0])
            };
            s.requestAnimationFrame ? s.requestAnimationFrame(g) : s.setTimeout(g, 0)
          });
        p.observe(u, {
          attributes: typeof f.attributes > "u" ? !0 : f.attributes,
          childList: typeof f.childList > "u" ? !0 : f.childList,
          characterData: typeof f.characterData > "u" ? !0 : f.characterData
        }), r.push(p)
      },
      a = () => {
        if (n.params.observer) {
          if (n.params.observeParents) {
            const u = Zk(n.el);
            for (let f = 0; f < u.length; f += 1) o(u[f])
          }
          o(n.el, {
            childList: n.params.observeSlideChildren
          }), o(n.wrapperEl, {
            attributes: !1
          })
        }
      },
      c = () => {
        r.forEach(u => {
          u.disconnect()
        }), r.splice(0, r.length)
      };
    e({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), t("init", a), t("destroy", c)
  }
  const rP = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return n.split(" ").forEach(s => {
        i.eventsListeners[s] || (i.eventsListeners[s] = []), i.eventsListeners[s][r](e)
      }), i
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;

      function r(...s) {
        i.off(n, r), r.__emitterProxy && delete r.__emitterProxy, e.apply(i, s)
      }
      return r.__emitterProxy = e, i.on(n, r, t)
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
      const i = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e
    },
    off(n, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || n.split(" ").forEach(i => {
        typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r, s) => {
          (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(s, 1)
        })
      }), t
    },
    emit(...n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
      let t, i, r;
      return typeof n[0] == "string" || Array.isArray(n[0]) ? (t = n[0], i = n.slice(1, n.length), r = e) : (t = n[0].events, i = n[0].data, r = n[0].context || e), i.unshift(r), (Array.isArray(t) ? t : t.split(" ")).forEach(o => {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(a => {
          a.apply(r, [o, ...i])
        }), e.eventsListeners && e.eventsListeners[o] && e.eventsListeners[o].forEach(a => {
          a.apply(r, i)
        })
      }), e
    }
  };

  function sP() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null ? e = n.params.width : e = i.clientWidth, typeof n.params.height < "u" && n.params.height !== null ? t = n.params.height : t = i.clientHeight, !(e === 0 && n.isHorizontal() || t === 0 && n.isVertical()) && (e = e - parseInt(Rr(i, "padding-left") || 0, 10) - parseInt(Rr(i, "padding-right") || 0, 10), t = t - parseInt(Rr(i, "padding-top") || 0, 10) - parseInt(Rr(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(n, {
      width: e,
      height: t,
      size: n.isHorizontal() ? e : t
    }))
  }

  function oP() {
    const n = this;

    function e(I) {
      return n.isHorizontal() ? I : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      } [I]
    }

    function t(I, D) {
      return parseFloat(I.getPropertyValue(e(D)) || 0)
    }
    const i = n.params,
      {
        wrapperEl: r,
        slidesEl: s,
        size: o,
        rtlTranslate: a,
        wrongRTL: c
      } = n,
      u = n.virtual && i.virtual.enabled,
      f = u ? n.virtual.slides.length : n.slides.length,
      h = Yn(s, `.${n.params.slideClass}, swiper-slide`),
      p = u ? n.virtual.slides.length : h.length;
    let m = [];
    const g = [],
      y = [];
    let w = i.slidesOffsetBefore;
    typeof w == "function" && (w = i.slidesOffsetBefore.call(n));
    let S = i.slidesOffsetAfter;
    typeof S == "function" && (S = i.slidesOffsetAfter.call(n));
    const T = n.snapGrid.length,
      M = n.slidesGrid.length;
    let k = i.spaceBetween,
      E = -w,
      O = 0,
      P = 0;
    if (typeof o > "u") return;
    typeof k == "string" && k.indexOf("%") >= 0 ? k = parseFloat(k.replace("%", "")) / 100 * o : typeof k == "string" && (k = parseFloat(k)), n.virtualSize = -k, h.forEach(I => {
      a ? I.style.marginLeft = "" : I.style.marginRight = "", I.style.marginBottom = "", I.style.marginTop = ""
    }), i.centeredSlides && i.cssMode && (cl(r, "--swiper-centered-offset-before", ""), cl(r, "--swiper-centered-offset-after", ""));
    const R = i.grid && i.grid.rows > 1 && n.grid;
    R && n.grid.initSlides(p);
    let L;
    const F = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(I => typeof i.breakpoints[I].slidesPerView < "u").length > 0;
    for (let I = 0; I < p; I += 1) {
      L = 0;
      let D;
      if (h[I] && (D = h[I]), R && n.grid.updateSlide(I, D, p, e), !(h[I] && Rr(D, "display") === "none")) {
        if (i.slidesPerView === "auto") {
          F && (h[I].style[e("width")] = "");
          const q = getComputedStyle(D),
            Z = D.style.transform,
            B = D.style.webkitTransform;
          if (Z && (D.style.transform = "none"), B && (D.style.webkitTransform = "none"), i.roundLengths) L = n.isHorizontal() ? Rp(D, "width", !0) : Rp(D, "height", !0);
          else {
            const se = t(q, "width"),
              re = t(q, "padding-left"),
              le = t(q, "padding-right"),
              we = t(q, "margin-left"),
              A = t(q, "margin-right"),
              ye = q.getPropertyValue("box-sizing");
            if (ye && ye === "border-box") L = se + we + A;
            else {
              const {
                clientWidth: je,
                offsetWidth: H
              } = D;
              L = se + re + le + we + A + (H - je)
            }
          }
          Z && (D.style.transform = Z), B && (D.style.webkitTransform = B), i.roundLengths && (L = Math.floor(L))
        } else L = (o - (i.slidesPerView - 1) * k) / i.slidesPerView, i.roundLengths && (L = Math.floor(L)), h[I] && (h[I].style[e("width")] = `${L}px`);
        h[I] && (h[I].swiperSlideSize = L), y.push(L), i.centeredSlides ? (E = E + L / 2 + O / 2 + k, O === 0 && I !== 0 && (E = E - o / 2 - k), I === 0 && (E = E - o / 2 - k), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), P % i.slidesPerGroup === 0 && m.push(E), g.push(E)) : (i.roundLengths && (E = Math.floor(E)), (P - Math.min(n.params.slidesPerGroupSkip, P)) % n.params.slidesPerGroup === 0 && m.push(E), g.push(E), E = E + L + k), n.virtualSize += L + k, O = L, P += 1
      }
    }
    if (n.virtualSize = Math.max(n.virtualSize, o) + S, a && c && (i.effect === "slide" || i.effect === "coverflow") && (r.style.width = `${n.virtualSize+k}px`), i.setWrapperSize && (r.style[e("width")] = `${n.virtualSize+k}px`), R && n.grid.updateWrapperSize(L, m, e), !i.centeredSlides) {
      const I = [];
      for (let D = 0; D < m.length; D += 1) {
        let q = m[D];
        i.roundLengths && (q = Math.floor(q)), m[D] <= n.virtualSize - o && I.push(q)
      }
      m = I, Math.floor(n.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(n.virtualSize - o)
    }
    if (u && i.loop) {
      const I = y[0] + k;
      if (i.slidesPerGroup > 1) {
        const D = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / i.slidesPerGroup),
          q = I * i.slidesPerGroup;
        for (let Z = 0; Z < D; Z += 1) m.push(m[m.length - 1] + q)
      }
      for (let D = 0; D < n.virtual.slidesBefore + n.virtual.slidesAfter; D += 1) i.slidesPerGroup === 1 && m.push(m[m.length - 1] + I), g.push(g[g.length - 1] + I), n.virtualSize += I
    }
    if (m.length === 0 && (m = [0]), k !== 0) {
      const I = n.isHorizontal() && a ? "marginLeft" : e("marginRight");
      h.filter((D, q) => !i.cssMode || i.loop ? !0 : q !== h.length - 1).forEach(D => {
        D.style[I] = `${k}px`
      })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
      let I = 0;
      y.forEach(q => {
        I += q + (k || 0)
      }), I -= k;
      const D = I - o;
      m = m.map(q => q <= 0 ? -w : q > D ? D + S : q)
    }
    if (i.centerInsufficientSlides) {
      let I = 0;
      if (y.forEach(D => {
          I += D + (k || 0)
        }), I -= k, I < o) {
        const D = (o - I) / 2;
        m.forEach((q, Z) => {
          m[Z] = q - D
        }), g.forEach((q, Z) => {
          g[Z] = q + D
        })
      }
    }
    if (Object.assign(n, {
        slides: h,
        snapGrid: m,
        slidesGrid: g,
        slidesSizesGrid: y
      }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
      cl(r, "--swiper-centered-offset-before", `${-m[0]}px`), cl(r, "--swiper-centered-offset-after", `${n.size/2-y[y.length-1]/2}px`);
      const I = -n.snapGrid[0],
        D = -n.slidesGrid[0];
      n.snapGrid = n.snapGrid.map(q => q + I), n.slidesGrid = n.slidesGrid.map(q => q + D)
    }
    if (p !== f && n.emit("slidesLengthChange"), m.length !== T && (n.params.watchOverflow && n.checkOverflow(), n.emit("snapGridLengthChange")), g.length !== M && n.emit("slidesGridLengthChange"), i.watchSlidesProgress && n.updateSlidesOffset(), !u && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
      const I = `${i.containerModifierClass}backface-hidden`,
        D = n.el.classList.contains(I);
      p <= i.maxBackfaceHiddenSlides ? D || n.el.classList.add(I) : D && n.el.classList.remove(I)
    }
  }

  function aP(n) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof n == "number" ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
    const o = a => i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)(e.visibleSlides || []).forEach(a => {
        t.push(a)
      });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const a = e.activeIndex + s;
          if (a > e.slides.length && !i) break;
          t.push(o(a))
        } else t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] < "u") {
        const a = t[s].offsetHeight;
        r = a > r ? a : r
      }(r || r === 0) && (e.wrapperEl.style.height = `${r}px`)
  }

  function lP() {
    const n = this,
      e = n.slides,
      t = n.isElement ? n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - n.cssOverflowAdjustment()
  }

  function cP(n = this && this.translate || 0) {
    const e = this,
      t = e.params,
      {
        slides: i,
        rtlTranslate: r,
        snapGrid: s
      } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -n;
    r && (o = n), i.forEach(c => {
      c.classList.remove(t.slideVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? a = parseFloat(a.replace("%", "")) / 100 * e.size : typeof a == "string" && (a = parseFloat(a));
    for (let c = 0; c < i.length; c += 1) {
      const u = i[c];
      let f = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (f -= i[0].swiperSlideOffset);
      const h = (o + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + a),
        p = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (u.swiperSlideSize + a),
        m = -(o - f),
        g = m + e.slidesSizesGrid[c];
      (m >= 0 && m < e.size - 1 || g > 1 && g <= e.size || m <= 0 && g >= e.size) && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(c), i[c].classList.add(t.slideVisibleClass)), u.progress = r ? -h : h, u.originalProgress = r ? -p : p
    }
  }

  function uP(n) {
    const e = this;
    if (typeof n > "u") {
      const f = e.rtlTranslate ? -1 : 1;
      n = e && e.translate && e.translate * f || 0
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let {
      progress: r,
      isBeginning: s,
      isEnd: o,
      progressLoop: a
    } = e;
    const c = s,
      u = o;
    if (i === 0) r = 0, s = !0, o = !0;
    else {
      r = (n - e.minTranslate()) / i;
      const f = Math.abs(n - e.minTranslate()) < 1,
        h = Math.abs(n - e.maxTranslate()) < 1;
      s = f || r <= 0, o = h || r >= 1, f && (r = 0), h && (r = 1)
    }
    if (t.loop) {
      const f = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        p = e.slidesGrid[f],
        m = e.slidesGrid[h],
        g = e.slidesGrid[e.slidesGrid.length - 1],
        y = Math.abs(n);
      y >= p ? a = (y - p) / g : a = (y + g - m) / g, a > 1 && (a -= 1)
    }
    Object.assign(e, {
      progress: r,
      progressLoop: a,
      isBeginning: s,
      isEnd: o
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(n), s && !c && e.emit("reachBeginning toEdge"), o && !u && e.emit("reachEnd toEdge"), (c && !s || u && !o) && e.emit("fromEdge"), e.emit("progress", r)
  }

  function dP() {
    const n = this,
      {
        slides: e,
        params: t,
        slidesEl: i,
        activeIndex: r
      } = n,
      s = n.virtual && t.virtual.enabled,
      o = c => Yn(i, `.${t.slideClass}${c}, swiper-slide${c}`)[0];
    e.forEach(c => {
      c.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass)
    });
    let a;
    if (s)
      if (t.loop) {
        let c = r - n.virtual.slidesBefore;
        c < 0 && (c = n.virtual.slides.length + c), c >= n.virtual.slides.length && (c -= n.virtual.slides.length), a = o(`[data-swiper-slide-index="${c}"]`)
      } else a = o(`[data-swiper-slide-index="${r}"]`);
    else a = e[r];
    if (a) {
      a.classList.add(t.slideActiveClass);
      let c = Xk(a, `.${t.slideClass}, swiper-slide`)[0];
      t.loop && !c && (c = e[0]), c && c.classList.add(t.slideNextClass);
      let u = Gk(a, `.${t.slideClass}, swiper-slide`)[0];
      t.loop && !u === 0 && (u = e[e.length - 1]), u && u.classList.add(t.slidePrevClass)
    }
    n.emitSlidesClasses()
  }
  const Yl = (n, e) => {
      if (!n || n.destroyed || !n.params) return;
      const t = () => n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        const r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        r && r.remove()
      }
    },
    Ou = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading")
    },
    Ed = n => {
      if (!n || n.destroyed || !n.params) return;
      let e = n.params.lazyPreloadPrevNext;
      const t = n.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i = n.params.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView),
        r = n.activeIndex;
      if (n.params.grid && n.params.grid.rows > 1) {
        const o = r,
          a = [o - e];
        a.push(...Array.from({
          length: e
        }).map((c, u) => o + i + u)), n.slides.forEach((c, u) => {
          a.includes(c.column) && Ou(n, u)
        });
        return
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let o = r - e; o <= s + e; o += 1) {
          const a = (o % t + t) % t;
          (a < r || a > s) && Ou(n, a)
        } else
          for (let o = Math.max(r - e, 0); o <= Math.min(s + e, t - 1); o += 1) o !== r && (o > s || o < r) && Ou(n, o)
    };

  function fP(n) {
    const {
      slidesGrid: e,
      params: t
    } = n, i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1) typeof e[s + 1] < "u" ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2 ? r = s : i >= e[s] && i < e[s + 1] && (r = s + 1) : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r
  }

  function hP(n) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: s,
        realIndex: o,
        snapIndex: a
      } = e;
    let c = n,
      u;
    const f = p => {
      let m = p - e.virtual.slidesBefore;
      return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m
    };
    if (typeof c > "u" && (c = fP(e)), i.indexOf(t) >= 0) u = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, c);
      u = p + Math.floor((c - p) / r.slidesPerGroup)
    }
    if (u >= i.length && (u = i.length - 1), c === s) {
      u !== a && (e.snapIndex = u, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = f(c));
      return
    }
    let h;
    e.virtual && r.virtual.enabled && r.loop ? h = f(c) : e.slides[c] ? h = parseInt(e.slides[c].getAttribute("data-swiper-slide-index") || c, 10) : h = c, Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: h,
      previousIndex: s,
      activeIndex: c
    }), e.initialized && Ed(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), o !== h && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
  }

  function pP(n) {
    const e = this,
      t = e.params,
      i = n.closest(`.${t.slideClass}, swiper-slide`);
    let r = !1,
      s;
    if (i) {
      for (let o = 0; o < e.slides.length; o += 1)
        if (e.slides[o] === i) {
          r = !0, s = o;
          break
        }
    }
    if (i && r) e.clickedSlide = i, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = s;
    else {
      e.clickedSlide = void 0, e.clickedIndex = void 0;
      return
    }
    t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
  }
  const mP = {
    updateSize: sP,
    updateSlides: oP,
    updateAutoHeight: aP,
    updateSlidesOffset: lP,
    updateSlidesProgress: cP,
    updateProgress: uP,
    updateSlidesClasses: dP,
    updateActiveIndex: hP,
    updateClickedSlide: pP
  };

  function gP(n = this.isHorizontal() ? "x" : "y") {
    const e = this,
      {
        params: t,
        rtlTranslate: i,
        translate: r,
        wrapperEl: s
      } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = Uk(s, n);
    return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0
  }

  function vP(n, e) {
    const t = this,
      {
        rtlTranslate: i,
        params: r,
        wrapperEl: s,
        progress: o
      } = t;
    let a = 0,
      c = 0;
    const u = 0;
    t.isHorizontal() ? a = i ? -n : n : c = n, r.roundLengths && (a = Math.floor(a), c = Math.floor(c)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? a : c, r.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -a : -c : r.virtualTranslate || (t.isHorizontal() ? a -= t.cssOverflowAdjustment() : c -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${a}px, ${c}px, ${u}px)`);
    let f;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? f = 0 : f = (n - t.minTranslate()) / h, f !== o && t.updateProgress(n), t.emit("setTranslate", t.translate, e)
  }

  function yP() {
    return -this.snapGrid[0]
  }

  function bP() {
    return -this.snapGrid[this.snapGrid.length - 1]
  }

  function _P(n = 0, e = this.params.speed, t = !0, i = !0, r) {
    const s = this,
      {
        params: o,
        wrapperEl: a
      } = s;
    if (s.animating && o.preventInteractionOnTransition) return !1;
    const c = s.minTranslate(),
      u = s.maxTranslate();
    let f;
    if (i && n > c ? f = c : i && n < u ? f = u : f = n, s.updateProgress(f), o.cssMode) {
      const h = s.isHorizontal();
      if (e === 0) a[h ? "scrollLeft" : "scrollTop"] = -f;
      else {
        if (!s.support.smoothScroll) return K0({
          swiper: s,
          targetPosition: -f,
          side: h ? "left" : "top"
        }), !0;
        a.scrollTo({
          [h ? "left" : "top"]: -f,
          behavior: "smooth"
        })
      }
      return !0
    }
    return e === 0 ? (s.setTransition(0), s.setTranslate(f), t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(f), t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (p) {
      !s || s.destroyed || p.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, t && s.emit("transitionEnd"))
    }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
  }
  const wP = {
    getTranslate: gP,
    setTranslate: vP,
    minTranslate: yP,
    maxTranslate: bP,
    translateTo: _P
  };

  function SP(n, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${n}ms`), t.emit("setTransition", n, e)
  }

  function ev({
    swiper: n,
    runCallbacks: e,
    direction: t,
    step: i
  }) {
    const {
      activeIndex: r,
      previousIndex: s
    } = n;
    let o = t;
    if (o || (r > s ? o = "next" : r < s ? o = "prev" : o = "reset"), n.emit(`transition${i}`), e && r !== s) {
      if (o === "reset") {
        n.emit(`slideResetTransition${i}`);
        return
      }
      n.emit(`slideChangeTransition${i}`), o === "next" ? n.emit(`slideNextTransition${i}`) : n.emit(`slidePrevTransition${i}`)
    }
  }

  function xP(n = !0, e) {
    const t = this,
      {
        params: i
      } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), ev({
      swiper: t,
      runCallbacks: n,
      direction: e,
      step: "Start"
    }))
  }

  function TP(n = !0, e) {
    const t = this,
      {
        params: i
      } = t;
    t.animating = !1, !i.cssMode && (t.setTransition(0), ev({
      swiper: t,
      runCallbacks: n,
      direction: e,
      step: "End"
    }))
  }
  const MP = {
    setTransition: SP,
    transitionStart: xP,
    transitionEnd: TP
  };

  function kP(n = 0, e = this.params.speed, t = !0, i, r) {
    typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let o = n;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: c,
      slidesGrid: u,
      previousIndex: f,
      activeIndex: h,
      rtlTranslate: p,
      wrapperEl: m,
      enabled: g
    } = s;
    if (s.animating && a.preventInteractionOnTransition || !g && !i && !r) return !1;
    const y = Math.min(s.params.slidesPerGroupSkip, o);
    let w = y + Math.floor((o - y) / s.params.slidesPerGroup);
    w >= c.length && (w = c.length - 1);
    const S = -c[w];
    if (a.normalizeSlideIndex)
      for (let M = 0; M < u.length; M += 1) {
        const k = -Math.floor(S * 100),
          E = Math.floor(u[M] * 100),
          O = Math.floor(u[M + 1] * 100);
        typeof u[M + 1] < "u" ? k >= E && k < O - (O - E) / 2 ? o = M : k >= E && k < O && (o = M + 1) : k >= E && (o = M)
      }
    if (s.initialized && o !== h && (!s.allowSlideNext && (p ? S > s.translate && S > s.minTranslate() : S < s.translate && S < s.minTranslate()) || !s.allowSlidePrev && S > s.translate && S > s.maxTranslate() && (h || 0) !== o)) return !1;
    o !== (f || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(S);
    let T;
    if (o > h ? T = "next" : o < h ? T = "prev" : T = "reset", p && -S === s.translate || !p && S === s.translate) return s.updateActiveIndex(o), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), a.effect !== "slide" && s.setTranslate(S), T !== "reset" && (s.transitionStart(t, T), s.transitionEnd(t, T)), !1;
    if (a.cssMode) {
      const M = s.isHorizontal(),
        k = p ? S : -S;
      if (e === 0) {
        const E = s.virtual && s.params.virtual.enabled;
        E && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), E && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          m[M ? "scrollLeft" : "scrollTop"] = k
        })) : m[M ? "scrollLeft" : "scrollTop"] = k, E && requestAnimationFrame(() => {
          s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
        })
      } else {
        if (!s.support.smoothScroll) return K0({
          swiper: s,
          targetPosition: k,
          side: M ? "left" : "top"
        }), !0;
        m.scrollTo({
          [M ? "left" : "top"]: k,
          behavior: "smooth"
        })
      }
      return !0
    }
    return s.setTransition(e), s.setTranslate(S), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, i), s.transitionStart(t, T), e === 0 ? s.transitionEnd(t, T) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (k) {
      !s || s.destroyed || k.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, T))
    }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
  }

  function PP(n = 0, e = this.params.speed, t = !0, i) {
    typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    let s = n;
    return r.params.loop && (r.virtual && r.params.virtual.enabled ? s = s + r.virtual.slidesBefore : s = r.getSlideIndexByData(s)), r.slideTo(s, e, t, i)
  }

  function EP(n = this.params.speed, e = !0, t) {
    const i = this,
      {
        enabled: r,
        params: s,
        animating: o
      } = i;
    if (!r) return i;
    let a = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const c = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
      u = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (o && !u && s.loopPreventsSliding) return !1;
      i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft
    }
    return s.rewind && i.isEnd ? i.slideTo(0, n, e, t) : i.slideTo(i.activeIndex + c, n, e, t)
  }

  function OP(n = this.params.speed, e = !0, t) {
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: c,
        animating: u
      } = i;
    if (!c) return i;
    const f = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (u && !f && r.loopPreventsSliding) return !1;
      i.loopFix({
        direction: "prev"
      }), i._clientLeft = i.wrapperEl.clientLeft
    }
    const h = a ? i.translate : -i.translate;

    function p(S) {
      return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S)
    }
    const m = p(h),
      g = s.map(S => p(S));
    let y = s[g.indexOf(m) - 1];
    if (typeof y > "u" && r.cssMode) {
      let S;
      s.forEach((T, M) => {
        m >= T && (S = M)
      }), typeof S < "u" && (y = s[S > 0 ? S - 1 : S])
    }
    let w = 0;
    if (typeof y < "u" && (w = o.indexOf(y), w < 0 && (w = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (w = w - i.slidesPerViewDynamic("previous", !0) + 1, w = Math.max(w, 0))), r.rewind && i.isBeginning) {
      const S = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(S, n, e, t)
    }
    return i.slideTo(w, n, e, t)
  }

  function CP(n = this.params.speed, e = !0, t) {
    const i = this;
    return i.slideTo(i.activeIndex, n, e, t)
  }

  function DP(n = this.params.speed, e = !0, t, i = .5) {
    const r = this;
    let s = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, s),
      a = o + Math.floor((s - o) / r.params.slidesPerGroup),
      c = r.rtlTranslate ? r.translate : -r.translate;
    if (c >= r.snapGrid[a]) {
      const u = r.snapGrid[a],
        f = r.snapGrid[a + 1];
      c - u > (f - u) * i && (s += r.params.slidesPerGroup)
    } else {
      const u = r.snapGrid[a - 1],
        f = r.snapGrid[a];
      c - u <= (f - u) * i && (s -= r.params.slidesPerGroup)
    }
    return s = Math.max(s, 0), s = Math.min(s, r.slidesGrid.length - 1), r.slideTo(s, n, e, t)
  }

  function AP() {
    const n = this,
      {
        params: e,
        slidesEl: t
      } = n,
      i = e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex,
      s;
    const o = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating) return;
      s = parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < n.loopedSlides - i / 2 || r > n.slides.length - n.loopedSlides + i / 2 ? (n.loopFix(), r = n.getSlideIndex(Yn(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), Pd(() => {
        n.slideTo(r)
      })) : n.slideTo(r) : r > n.slides.length - i ? (n.loopFix(), r = n.getSlideIndex(Yn(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), Pd(() => {
        n.slideTo(r)
      })) : n.slideTo(r)
    } else n.slideTo(r)
  }
  const LP = {
    slideTo: kP,
    slideToLoop: PP,
    slideNext: EP,
    slidePrev: OP,
    slideReset: CP,
    slideToClosest: DP,
    slideToClickedSlide: AP
  };

  function RP(n) {
    const e = this,
      {
        params: t,
        slidesEl: i
      } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    Yn(i, `.${t.slideClass}, swiper-slide`).forEach((s, o) => {
      s.setAttribute("data-swiper-slide-index", o)
    }), e.loopFix({
      slideRealIndex: n,
      direction: t.centeredSlides ? void 0 : "next"
    })
  }

  function IP({
    slideRealIndex: n,
    slideTo: e = !0,
    direction: t,
    setTranslate: i,
    activeSlideIndex: r,
    byController: s,
    byMousewheel: o
  } = {}) {
    const a = this;
    if (!a.params.loop) return;
    a.emit("beforeLoopFix");
    const {
      slides: c,
      allowSlidePrev: u,
      allowSlideNext: f,
      slidesEl: h,
      params: p
    } = a;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && p.virtual.enabled) {
      e && (!p.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : p.centeredSlides && a.snapIndex < p.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = u, a.allowSlideNext = f, a.emit("loopFix");
      return
    }
    const m = p.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10));
    let g = p.loopedSlides || m;
    g % p.slidesPerGroup !== 0 && (g += p.slidesPerGroup - g % p.slidesPerGroup), a.loopedSlides = g;
    const y = [],
      w = [];
    let S = a.activeIndex;
    typeof r > "u" ? r = a.getSlideIndex(a.slides.filter(O => O.classList.contains(p.slideActiveClass))[0]) : S = r;
    const T = t === "next" || !t,
      M = t === "prev" || !t;
    let k = 0,
      E = 0;
    if (r < g) {
      k = Math.max(g - r, p.slidesPerGroup);
      for (let O = 0; O < g - r; O += 1) {
        const P = O - Math.floor(O / c.length) * c.length;
        y.push(c.length - P - 1)
      }
    } else if (r > a.slides.length - g * 2) {
      E = Math.max(r - (a.slides.length - g * 2), p.slidesPerGroup);
      for (let O = 0; O < E; O += 1) {
        const P = O - Math.floor(O / c.length) * c.length;
        w.push(P)
      }
    }
    if (M && y.forEach(O => {
        a.slides[O].swiperLoopMoveDOM = !0, h.prepend(a.slides[O]), a.slides[O].swiperLoopMoveDOM = !1
      }), T && w.forEach(O => {
        a.slides[O].swiperLoopMoveDOM = !0, h.append(a.slides[O]), a.slides[O].swiperLoopMoveDOM = !1
      }), a.recalcSlides(), p.slidesPerView === "auto" && a.updateSlides(), p.watchSlidesProgress && a.updateSlidesOffset(), e) {
      if (y.length > 0 && M)
        if (typeof n > "u") {
          const O = a.slidesGrid[S],
            R = a.slidesGrid[S + k] - O;
          o ? a.setTranslate(a.translate - R) : (a.slideTo(S + k, 0, !1, !0), i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += R))
        } else i && a.slideToLoop(n, 0, !1, !0);
      else if (w.length > 0 && T)
        if (typeof n > "u") {
          const O = a.slidesGrid[S],
            R = a.slidesGrid[S - E] - O;
          o ? a.setTranslate(a.translate - R) : (a.slideTo(S - E, 0, !1, !0), i && (a.touches[a.isHorizontal() ? "startX" : "startY"] += R))
        } else a.slideToLoop(n, 0, !1, !0)
    }
    if (a.allowSlidePrev = u, a.allowSlideNext = f, a.controller && a.controller.control && !s) {
      const O = {
        slideRealIndex: n,
        slideTo: !1,
        direction: t,
        setTranslate: i,
        activeSlideIndex: r,
        byController: !0
      };
      Array.isArray(a.controller.control) ? a.controller.control.forEach(P => {
        !P.destroyed && P.params.loop && P.loopFix(O)
      }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix(O)
    }
    a.emit("loopFix")
  }

  function YP() {
    const n = this,
      {
        params: e,
        slidesEl: t
      } = n;
    if (!e.loop || n.virtual && n.params.virtual.enabled) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach(r => {
      const s = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
      i[s] = r
    }), n.slides.forEach(r => {
      r.removeAttribute("data-swiper-slide-index")
    }), i.forEach(r => {
      t.append(r)
    }), n.recalcSlides(), n.slideTo(n.realIndex, 0)
  }
  const FP = {
    loopCreate: RP,
    loopFix: IP,
    loopDestroy: YP
  };

  function NP(n) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = n ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1
    })
  }

  function zP() {
    const n = this;
    n.params.watchOverflow && n.isLocked || n.params.cssMode || (n.isElement && (n.__preventObserver__ = !0), n[n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", n.isElement && requestAnimationFrame(() => {
      n.__preventObserver__ = !1
    }))
  }
  const HP = {
    setGrabCursor: NP,
    unsetGrabCursor: zP
  };

  function WP(n, e = this) {
    function t(i) {
      if (!i || i === Es() || i === Ji()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host)
    }
    return t(e)
  }

  function jP(n) {
    const e = this,
      t = Es(),
      i = Ji(),
      r = e.touchEventsData;
    r.evCache.push(n);
    const {
      params: s,
      touches: o,
      enabled: a
    } = e;
    if (!a || !s.simulateTouch && n.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition) return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let c = n;
    c.originalEvent && (c = c.originalEvent);
    let u = c.target;
    if (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(u) || "which" in c && c.which === 3 || "button" in c && c.button > 0 || r.isTouched && r.isMoved) return;
    const f = !!s.noSwipingClass && s.noSwipingClass !== "",
      h = n.composedPath ? n.composedPath() : n.path;
    f && c.target && c.target.shadowRoot && h && (u = h[0]);
    const p = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
      m = !!(c.target && c.target.shadowRoot);
    if (s.noSwiping && (m ? WP(p, u) : u.closest(p))) {
      e.allowClick = !0;
      return
    }
    if (s.swipeHandler && !u.closest(s.swipeHandler)) return;
    o.currentX = c.pageX, o.currentY = c.pageY;
    const g = o.currentX,
      y = o.currentY,
      w = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
      S = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
    if (w && (g <= S || g >= i.innerWidth - S))
      if (w === "prevent") n.preventDefault();
      else return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = g, o.startY = y, r.touchStartTime = rc(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1);
    let T = !0;
    u.matches(r.focusableElements) && (T = !1, u.nodeName === "SELECT" && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== u && t.activeElement.blur();
    const M = T && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || M) && !u.isContentEditable && c.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", c)
  }

  function qP(n) {
    const e = Es(),
      t = this,
      i = t.touchEventsData,
      {
        params: r,
        touches: s,
        rtlTranslate: o,
        enabled: a
      } = t;
    if (!a || !r.simulateTouch && n.pointerType === "mouse") return;
    let c = n;
    if (c.originalEvent && (c = c.originalEvent), !i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", c);
      return
    }
    const u = i.evCache.findIndex(O => O.pointerId === c.pointerId);
    u >= 0 && (i.evCache[u] = c);
    const f = i.evCache.length > 1 ? i.evCache[0] : c,
      h = f.pageX,
      p = f.pageY;
    if (c.preventedByNestedSwiper) {
      s.startX = h, s.startY = p;
      return
    }
    if (!t.allowTouchMove) {
      c.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(s, {
        startX: h,
        startY: p,
        prevX: t.touches.currentX,
        prevY: t.touches.currentY,
        currentX: h,
        currentY: p
      }), i.touchStartTime = rc());
      return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (p < s.startY && t.translate <= t.maxTranslate() || p > s.startY && t.translate >= t.minTranslate()) {
          i.isTouched = !1, i.isMoved = !1;
          return
        }
      } else if (h < s.startX && t.translate <= t.maxTranslate() || h > s.startX && t.translate >= t.minTranslate()) return
    }
    if (e.activeElement && c.target === e.activeElement && c.target.matches(i.focusableElements)) {
      i.isMoved = !0, t.allowClick = !1;
      return
    }
    if (i.allowTouchCallbacks && t.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
    s.currentX = h, s.currentY = p;
    const m = s.currentX - s.startX,
      g = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + g ** 2) < t.params.threshold) return;
    if (typeof i.isScrolling > "u") {
      let O;
      t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : m * m + g * g >= 25 && (O = Math.atan2(Math.abs(g), Math.abs(m)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? O > r.touchAngle : 90 - O > r.touchAngle)
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", c), typeof i.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (i.startMoving = !0), i.isScrolling || t.zoom && t.params.zoom && t.params.zoom.enabled && i.evCache.length > 1) {
      i.isTouched = !1;
      return
    }
    if (!i.startMoving) return;
    t.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    let y = t.isHorizontal() ? m : g,
      w = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    r.oneWayMovement && (y = Math.abs(y) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), s.diff = y, y *= r.touchRatio, o && (y = -y, w = -w);
    const S = t.touchesDirection;
    t.swipeDirection = y > 0 ? "prev" : "next", t.touchesDirection = w > 0 ? "prev" : "next";
    const T = t.params.loop && !r.cssMode;
    if (!i.isMoved) {
      if (T && t.loopFix({
          direction: t.swipeDirection
        }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const O = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(O)
      }
      i.allowMomentumBounce = !1, r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", c)
    }
    let M;
    i.isMoved && S !== t.touchesDirection && T && Math.abs(y) >= 1 && (t.loopFix({
      direction: t.swipeDirection,
      setTranslate: !0
    }), M = !0), t.emit("sliderMove", c), i.isMoved = !0, i.currentTranslate = y + i.startTranslate;
    let k = !0,
      E = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (E = 0), y > 0 ? (T && !M && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.size / 2 : t.minTranslate()) && t.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
      }), i.currentTranslate > t.minTranslate() && (k = !1, r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + y) ** E))) : y < 0 && (T && !M && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.size / 2 : t.maxTranslate()) && t.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
      }), i.currentTranslate < t.maxTranslate() && (k = !1, r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - y) ** E))), k && (c.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0)
      if (Math.abs(y) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
          return
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return
      }! r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
  }

  function $P(n) {
    const e = this,
      t = e.touchEventsData,
      i = t.evCache.findIndex(M => M.pointerId === n.pointerId);
    if (i >= 0 && t.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(n.type) && !(n.type === "pointercancel" && (e.browser.isSafari || e.browser.isWebView))) return;
    const {
      params: r,
      touches: s,
      rtlTranslate: o,
      slidesGrid: a,
      enabled: c
    } = e;
    if (!c || !r.simulateTouch && n.pointerType === "mouse") return;
    let u = n;
    if (u.originalEvent && (u = u.originalEvent), t.allowTouchCallbacks && e.emit("touchEnd", u), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && r.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return
    }
    r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = rc(),
      h = f - t.touchStartTime;
    if (e.allowClick) {
      const M = u.path || u.composedPath && u.composedPath();
      e.updateClickedSlide(M && M[0] || u.target), e.emit("tap click", u), h < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", u)
    }
    if (t.lastClickTime = rc(), Pd(() => {
        e.destroyed || (e.allowClick = !0)
      }), !t.isTouched || !t.isMoved || !e.swipeDirection || s.diff === 0 || t.currentTranslate === t.startTranslate) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let p;
    if (r.followFinger ? p = o ? e.translate : -e.translate : p = -t.currentTranslate, r.cssMode) return;
    if (r.freeMode && r.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: p
      });
      return
    }
    let m = 0,
      g = e.slidesSizesGrid[0];
    for (let M = 0; M < a.length; M += M < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const k = M < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof a[M + k] < "u" ? p >= a[M] && p < a[M + k] && (m = M, g = a[M + k] - a[M]) : p >= a[M] && (m = M, g = a[a.length - 1] - a[a.length - 2])
    }
    let y = null,
      w = null;
    r.rewind && (e.isBeginning ? w = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const S = (p - a[m]) / g,
      T = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (h > r.longSwipesMs) {
      if (!r.longSwipes) {
        e.slideTo(e.activeIndex);
        return
      }
      e.swipeDirection === "next" && (S >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? y : m + T) : e.slideTo(m)), e.swipeDirection === "prev" && (S > 1 - r.longSwipesRatio ? e.slideTo(m + T) : w !== null && S < 0 && Math.abs(S) > r.longSwipesRatio ? e.slideTo(w) : e.slideTo(m))
    } else {
      if (!r.shortSwipes) {
        e.slideTo(e.activeIndex);
        return
      }
      e.navigation && (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl) ? u.target === e.navigation.nextEl ? e.slideTo(m + T) : e.slideTo(m) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : m + T), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : m))
    }
  }

  function Ip() {
    const n = this,
      {
        params: e,
        el: t
      } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const {
      allowSlideNext: i,
      allowSlidePrev: r,
      snapGrid: s
    } = n, o = n.virtual && n.params.virtual.enabled;
    n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), n.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !a ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.params.loop && !o ? n.slideToLoop(n.realIndex, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0), n.autoplay && n.autoplay.running && n.autoplay.paused && (clearTimeout(n.autoplay.resizeTimeout), n.autoplay.resizeTimeout = setTimeout(() => {
      n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume()
    }, 500)), n.allowSlidePrev = r, n.allowSlideNext = i, n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow()
  }

  function VP(n) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && n.preventDefault(), e.params.preventClicksPropagation && e.animating && (n.stopPropagation(), n.stopImmediatePropagation())))
  }

  function UP() {
    const n = this,
      {
        wrapperEl: e,
        rtlTranslate: t,
        enabled: i
      } = n;
    if (!i) return;
    n.previousTranslate = n.translate, n.isHorizontal() ? n.translate = -e.scrollLeft : n.translate = -e.scrollTop, n.translate === 0 && (n.translate = 0), n.updateActiveIndex(), n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? r = 0 : r = (n.translate - n.minTranslate()) / s, r !== n.progress && n.updateProgress(t ? -n.translate : n.translate), n.emit("setTranslate", n.translate, !1)
  }

  function BP(n) {
    const e = this;
    Yl(e, n.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update()
  }
  let Yp = !1;

  function GP() {}
  const tv = (n, e) => {
    const t = Es(),
      {
        params: i,
        el: r,
        wrapperEl: s,
        device: o
      } = n,
      a = !!i.nested,
      c = e === "on" ? "addEventListener" : "removeEventListener",
      u = e;
    r[c]("pointerdown", n.onTouchStart, {
      passive: !1
    }), t[c]("pointermove", n.onTouchMove, {
      passive: !1,
      capture: a
    }), t[c]("pointerup", n.onTouchEnd, {
      passive: !0
    }), t[c]("pointercancel", n.onTouchEnd, {
      passive: !0
    }), t[c]("pointerout", n.onTouchEnd, {
      passive: !0
    }), t[c]("pointerleave", n.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[c]("click", n.onClick, !0), i.cssMode && s[c]("scroll", n.onScroll), i.updateOnWindowResize ? n[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ip, !0) : n[u]("observerUpdate", Ip, !0), r[c]("load", n.onLoad, {
      capture: !0
    })
  };

  function XP() {
    const n = this,
      e = Es(),
      {
        params: t
      } = n;
    n.onTouchStart = jP.bind(n), n.onTouchMove = qP.bind(n), n.onTouchEnd = $P.bind(n), t.cssMode && (n.onScroll = UP.bind(n)), n.onClick = VP.bind(n), n.onLoad = BP.bind(n), Yp || (e.addEventListener("touchstart", GP), Yp = !0), tv(n, "on")
  }

  function ZP() {
    tv(this, "off")
  }
  const KP = {
      attachEvents: XP,
      detachEvents: ZP
    },
    Fp = (n, e) => n.grid && e.grid && e.grid.rows > 1;

  function QP() {
    const n = this,
      {
        realIndex: e,
        initialized: t,
        params: i,
        el: r
      } = n,
      s = i.breakpoints;
    if (!s || s && Object.keys(s).length === 0) return;
    const o = n.getBreakpoint(s, n.params.breakpointsBase, n.el);
    if (!o || n.currentBreakpoint === o) return;
    const c = (o in s ? s[o] : void 0) || n.originalParams,
      u = Fp(n, i),
      f = Fp(n, c),
      h = i.enabled;
    u && !f ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), n.emitContainerClasses()) : !u && f && (r.classList.add(`${i.containerModifierClass}grid`), (c.grid.fill && c.grid.fill === "column" || !c.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), n.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(y => {
      if (typeof c[y] > "u") return;
      const w = i[y] && i[y].enabled,
        S = c[y] && c[y].enabled;
      w && !S && n[y].disable(), !w && S && n[y].enable()
    });
    const p = c.direction && c.direction !== i.direction,
      m = i.loop && (c.slidesPerView !== i.slidesPerView || p);
    p && t && n.changeDirection(), Ui(n.params, c);
    const g = n.params.enabled;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev
    }), h && !g ? n.disable() : !h && g && n.enable(), n.currentBreakpoint = o, n.emit("_beforeBreakpoint", c), m && t && (n.loopDestroy(), n.loopCreate(e), n.updateSlides()), n.emit("breakpoint", c)
  }

  function JP(n, e = "window", t) {
    if (!n || e === "container" && !t) return;
    let i = !1;
    const r = Ji(),
      s = e === "window" ? r.innerHeight : t.clientHeight,
      o = Object.keys(n).map(a => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const c = parseFloat(a.substr(1));
          return {
            value: s * c,
            point: a
          }
        }
        return {
          value: a,
          point: a
        }
      });
    o.sort((a, c) => parseInt(a.value, 10) - parseInt(c.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const {
        point: c,
        value: u
      } = o[a];
      e === "window" ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = c) : u <= t.clientWidth && (i = c)
    }
    return i || "max"
  }
  const eE = {
    setBreakpoint: QP,
    getBreakpoint: JP
  };

  function tE(n, e) {
    const t = [];
    return n.forEach(i => {
      typeof i == "object" ? Object.keys(i).forEach(r => {
        i[r] && t.push(e + r)
      }) : typeof i == "string" && t.push(e + i)
    }), t
  }

  function iE() {
    const n = this,
      {
        classNames: e,
        params: t,
        rtl: i,
        el: r,
        device: s
      } = n,
      o = tE(["initialized", t.direction, {
        "free-mode": n.params.freeMode && t.freeMode.enabled
      }, {
        autoheight: t.autoHeight
      }, {
        rtl: i
      }, {
        grid: t.grid && t.grid.rows > 1
      }, {
        "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
      }, {
        android: s.android
      }, {
        ios: s.ios
      }, {
        "css-mode": t.cssMode
      }, {
        centered: t.cssMode && t.centeredSlides
      }, {
        "watch-progress": t.watchSlidesProgress
      }], t.containerModifierClass);
    e.push(...o), r.classList.add(...e), n.emitContainerClasses()
  }

  function nE() {
    const n = this,
      {
        el: e,
        classNames: t
      } = n;
    e.classList.remove(...t), n.emitContainerClasses()
  }
  const rE = {
    addClasses: iE,
    removeClasses: nE
  };

  function sE() {
    const n = this,
      {
        isLocked: e,
        params: t
      } = n,
      {
        slidesOffsetBefore: i
      } = t;
    if (i) {
      const r = n.slides.length - 1,
        s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
      n.isLocked = n.size > s
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked), t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked), e && e !== n.isLocked && (n.isEnd = !1), e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock")
  }
  const oE = {
      checkOverflow: sE
    },
    Np = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1
    };

  function aE(n, e) {
    return function (i = {}) {
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        Ui(e, i);
        return
      }
      if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && n[r] === !0 && (n[r] = {
          auto: !0
        }), !(r in n && "enabled" in s)) {
        Ui(e, i);
        return
      }
      n[r] === !0 && (n[r] = {
        enabled: !0
      }), typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0), n[r] || (n[r] = {
        enabled: !1
      }), Ui(e, i)
    }
  }
  const Cu = {
      eventsEmitter: rP,
      update: mP,
      translate: wP,
      transition: MP,
      slide: LP,
      loop: FP,
      grabCursor: HP,
      events: KP,
      breakpoints: eE,
      checkOverflow: oE,
      classes: rE
    },
    Du = {};
  class $i {
    constructor(...e) {
      let t, i;
      e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [t, i] = e, i || (i = {}), i = Ui({}, i), t && !i.el && (i.el = t);
      const r = Es();
      if (i.el && typeof i.el == "string" && r.querySelectorAll(i.el).length > 1) {
        const c = [];
        return r.querySelectorAll(i.el).forEach(u => {
          const f = Ui({}, i, {
            el: u
          });
          c.push(new $i(f))
        }), c
      }
      const s = this;
      s.__swiper__ = !0, s.support = J0(), s.device = Jk({
        userAgent: i.userAgent
      }), s.browser = tP(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
      const o = {};
      s.modules.forEach(c => {
        c({
          params: i,
          swiper: s,
          extendParams: aE(i, o),
          on: s.on.bind(s),
          once: s.once.bind(s),
          off: s.off.bind(s),
          emit: s.emit.bind(s)
        })
      });
      const a = Ui({}, Np, o);
      return s.params = Ui({}, a, Du, i), s.originalParams = Ui({}, s.params), s.passedParams = Ui({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach(c => {
        s.on(c, s.params.on[c])
      }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
        enabled: s.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === "horizontal"
        },
        isVertical() {
          return s.params.direction === "vertical"
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
        },
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: s.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: []
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), s.emit("_swiper"), s.params.init && s.init(), s
    }
    getSlideIndex(e) {
      const {
        slidesEl: t,
        params: i
      } = this, r = Yn(t, `.${i.slideClass}, swiper-slide`), s = Lp(r[0]);
      return Lp(e) - s
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter(t => t.getAttribute("data-swiper-slide-index") * 1 === e)[0])
    }
    recalcSlides() {
      const e = this,
        {
          slidesEl: t,
          params: i
        } = e;
      e.slides = Yn(t, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        o = (i.maxTranslate() - r) * e + r;
      i.translateTo(o, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "))
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach(i => {
        const r = e.getSlideClasses(i);
        t.push({
          slideEl: i,
          classNames: r
        }), e.emit("_slideClass", i, r)
      }), e.emit("_slideClasses", t)
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: c,
          activeIndex: u
        } = i;
      let f = 1;
      if (r.centeredSlides) {
        let h = s[u] ? s[u].swiperSlideSize : 0,
          p;
        for (let m = u + 1; m < s.length; m += 1) s[m] && !p && (h += s[m].swiperSlideSize, f += 1, h > c && (p = !0));
        for (let m = u - 1; m >= 0; m -= 1) s[m] && !p && (h += s[m].swiperSlideSize, f += 1, h > c && (p = !0))
      } else if (e === "current")
        for (let h = u + 1; h < s.length; h += 1)(t ? o[h] + a[h] - o[u] < c : o[h] - o[u] < c) && (f += 1);
      else
        for (let h = u - 1; h >= 0; h -= 1) o[u] - o[h] < c && (f += 1);
      return f
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: i
      } = e;
      i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(o => {
        o.complete && Yl(e, o)
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

      function r() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses()
      }
      let s;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode) r(), i.autoHeight && e.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
          const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(o.length - 1, 0, !1, !0)
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || r()
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, t = !0) {
      const i = this,
        r = i.params.direction;
      return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(s => {
        e === "vertical" ? s.style.width = "" : s.style.height = ""
      }), i.emit("changeDirection"), t && i.update()), i
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
      i.swiper = t, i.shadowEl && (t.isElement = !0);
      const r = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
      let o = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : Yn(i, r())[0])();
      return !o && t.params.createElements && (o = Q0("div", t.params.wrapperClass), i.append(o), Yn(i, `.${t.params.slideClass}`).forEach(a => {
        o.append(a)
      })), Object.assign(t, {
        el: i,
        wrapperEl: o,
        slidesEl: t.isElement ? i : o,
        mounted: !0,
        rtl: i.dir.toLowerCase() === "rtl" || Rr(i, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || Rr(i, "direction") === "rtl"),
        wrongRTL: Rr(o, "display") === "-webkit-box"
      }), !0
    }
    init(e) {
      const t = this;
      return t.initialized || t.mount(e) === !1 || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(r => {
        r.complete ? Yl(t, r) : r.addEventListener("load", s => {
          Yl(t, s.target)
        })
      }), Ed(t), t.initialized = !0, Ed(t), t.emit("init"), t.emit("afterInit")), t
    }
    destroy(e = !0, t = !0) {
      const i = this,
        {
          params: r,
          el: s,
          wrapperEl: o,
          slides: a
        } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttribute("style"), o.removeAttribute("style"), a && a.length && a.forEach(c => {
        c.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), c.removeAttribute("style"), c.removeAttribute("data-swiper-slide-index")
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(c => {
        i.off(c)
      }), e !== !1 && (i.el.swiper = null, $k(i)), i.destroyed = !0), null
    }
    static extendDefaults(e) {
      Ui(Du, e)
    }
    static get extendedDefaults() {
      return Du
    }
    static get defaults() {
      return Np
    }
    static installModule(e) {
      $i.prototype.__modules__ || ($i.prototype.__modules__ = []);
      const t = $i.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e)
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach(t => $i.installModule(t)), $i) : ($i.installModule(e), $i)
    }
  }
  Object.keys(Cu).forEach(n => {
    Object.keys(Cu[n]).forEach(e => {
      $i.prototype[e] = Cu[n][e]
    })
  });
  $i.use([iP, nP]);

  function lE(n, e, t, i) {
    return n.params.createElements && Object.keys(i).forEach(r => {
      if (!t[r] && t.auto === !0) {
        let s = Yn(n.el, `.${i[r]}`)[0];
        s || (s = Q0("div", i[r]), s.className = i[r], n.el.append(s)), t[r] = s, e[r] = s
      }
    }), t
  }

  function cE({
    swiper: n,
    extendParams: e,
    on: t,
    emit: i
  }) {
    e({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), n.navigation = {
      nextEl: null,
      prevEl: null
    };
    const r = g => (Array.isArray(g) || (g = [g].filter(y => !!y)), g);

    function s(g) {
      let y;
      return g && typeof g == "string" && n.isElement && (y = n.el.shadowRoot.querySelector(g), y) ? y : (g && (typeof g == "string" && (y = [...document.querySelectorAll(g)]), n.params.uniqueNavElements && typeof g == "string" && y.length > 1 && n.el.querySelectorAll(g).length === 1 && (y = n.el.querySelector(g))), g && !y ? g : y)
    }

    function o(g, y) {
      const w = n.params.navigation;
      g = r(g), g.forEach(S => {
        S && (S.classList[y ? "add" : "remove"](...w.disabledClass.split(" ")), S.tagName === "BUTTON" && (S.disabled = y), n.params.watchOverflow && n.enabled && S.classList[n.isLocked ? "add" : "remove"](w.lockClass))
      })
    }

    function a() {
      const {
        nextEl: g,
        prevEl: y
      } = n.navigation;
      if (n.params.loop) {
        o(y, !1), o(g, !1);
        return
      }
      o(y, n.isBeginning && !n.params.rewind), o(g, n.isEnd && !n.params.rewind)
    }

    function c(g) {
      g.preventDefault(), !(n.isBeginning && !n.params.loop && !n.params.rewind) && (n.slidePrev(), i("navigationPrev"))
    }

    function u(g) {
      g.preventDefault(), !(n.isEnd && !n.params.loop && !n.params.rewind) && (n.slideNext(), i("navigationNext"))
    }

    function f() {
      const g = n.params.navigation;
      if (n.params.navigation = lE(n, n.originalParams.navigation, n.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), !(g.nextEl || g.prevEl)) return;
      let y = s(g.nextEl),
        w = s(g.prevEl);
      Object.assign(n.navigation, {
        nextEl: y,
        prevEl: w
      }), y = r(y), w = r(w);
      const S = (T, M) => {
        T && T.addEventListener("click", M === "next" ? u : c), !n.enabled && T && T.classList.add(...g.lockClass.split(" "))
      };
      y.forEach(T => S(T, "next")), w.forEach(T => S(T, "prev"))
    }

    function h() {
      let {
        nextEl: g,
        prevEl: y
      } = n.navigation;
      g = r(g), y = r(y);
      const w = (S, T) => {
        S.removeEventListener("click", T === "next" ? u : c), S.classList.remove(...n.params.navigation.disabledClass.split(" "))
      };
      g.forEach(S => w(S, "next")), y.forEach(S => w(S, "prev"))
    }
    t("init", () => {
      n.params.navigation.enabled === !1 ? m() : (f(), a())
    }), t("toEdge fromEdge lock unlock", () => {
      a()
    }), t("destroy", () => {
      h()
    }), t("enable disable", () => {
      let {
        nextEl: g,
        prevEl: y
      } = n.navigation;
      g = r(g), y = r(y), [...g, ...y].filter(w => !!w).forEach(w => w.classList[n.enabled ? "remove" : "add"](n.params.navigation.lockClass))
    }), t("click", (g, y) => {
      let {
        nextEl: w,
        prevEl: S
      } = n.navigation;
      w = r(w), S = r(S);
      const T = y.target;
      if (n.params.navigation.hideOnClick && !S.includes(T) && !w.includes(T)) {
        if (n.pagination && n.params.pagination && n.params.pagination.clickable && (n.pagination.el === T || n.pagination.el.contains(T))) return;
        let M;
        w.length ? M = w[0].classList.contains(n.params.navigation.hiddenClass) : S.length && (M = S[0].classList.contains(n.params.navigation.hiddenClass)), i(M === !0 ? "navigationShow" : "navigationHide"), [...w, ...S].filter(k => !!k).forEach(k => k.classList.toggle(n.params.navigation.hiddenClass))
      }
    });
    const p = () => {
        n.el.classList.remove(...n.params.navigation.navigationDisabledClass.split(" ")), f(), a()
      },
      m = () => {
        n.el.classList.add(...n.params.navigation.navigationDisabledClass.split(" ")), h()
      };
    Object.assign(n.navigation, {
      enable: p,
      disable: m,
      update: a,
      init: f,
      destroy: h
    })
  }

  function uE() {
    document.querySelectorAll(".module-slider:not(.js-running)").forEach(n => {
      n.classList.add("js-running"), mousemoveElement2(n.querySelector(".swiper-button-next")), mousemoveElement2(n.querySelector(".swiper-button-prev")), new $i(n.querySelector(".swiper-container"), {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        effect: "slide",
        autoplay: {
          delay: 5e3,
          disableOnInteraction: !1
        },
        navigation: {
          nextEl: n.querySelector(".swiper-button-next"),
          prevEl: n.querySelector(".swiper-button-prev")
        },
        slideToClickedSlide: !0,
        touchStartPreventDefault: !1,
        loopFillGroupWithBlank: !1,
        centerInsufficientSlides: !0,
        grabCursor: !1,
        observer: !0,
        preloadImages: !1,
        lazy: !0,
        watchOverflow: !0,
        longSwipes: !1
      })
    })
  }
  var iv = {
    exports: {}
  }; /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
  (function (n, e) {
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function (t) {
        var i, r = (this.document || this.ownerDocument).querySelectorAll(t),
          s = this;
        do
          for (i = r.length; 0 <= --i && r.item(i) !== s;); while (i < 0 && (s = s.parentElement));
        return s
      }),
      function () {
        if (typeof window.CustomEvent == "function") return;

        function t(i, r) {
          r = r || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var s = document.createEvent("CustomEvent");
          return s.initCustomEvent(i, r.bubbles, r.cancelable, r.detail), s
        }
        t.prototype = window.Event.prototype, window.CustomEvent = t
      }(),
      function () {
        for (var t = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[i[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[r] + "CancelAnimationFrame"] || window[i[r] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (s, o) {
          var a = new Date().getTime(),
            c = Math.max(0, 16 - (a - t)),
            u = window.setTimeout(function () {
              s(a + c)
            }, c);
          return t = a + c, u
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (s) {
          clearTimeout(s)
        })
      }(),
      function (t, i) {
        n.exports = i(t)
      }(typeof to < "u" ? to : typeof window < "u" ? window : to, function (t) {
        var i = {
            ignore: "[data-scroll-ignore]",
            header: null,
            topOnEmptyHash: !0,
            speed: 500,
            speedAsDuration: !1,
            durationMax: null,
            durationMin: null,
            clip: !0,
            offset: 0,
            easing: "easeInOutCubic",
            customEasing: null,
            updateURL: !0,
            popstate: !0,
            emitEvents: !0
          },
          r = function () {
            var f = {};
            return Array.prototype.forEach.call(arguments, function (h) {
              for (var p in h) {
                if (!h.hasOwnProperty(p)) return;
                f[p] = h[p]
              }
            }), f
          },
          s = function (f) {
            f.charAt(0) === "#" && (f = f.substr(1));
            for (var h, p = String(f), m = p.length, g = -1, y = "", w = p.charCodeAt(0); ++g < m;) {
              if ((h = p.charCodeAt(g)) === 0) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
              1 <= h && h <= 31 || h == 127 || g === 0 && 48 <= h && h <= 57 || g === 1 && 48 <= h && h <= 57 && w === 45 ? y += "\\" + h.toString(16) + " " : y += 128 <= h || h === 45 || h === 95 || 48 <= h && h <= 57 || 65 <= h && h <= 90 || 97 <= h && h <= 122 ? p.charAt(g) : "\\" + p.charAt(g)
            }
            return "#" + y
          },
          o = function () {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
          },
          a = function (f) {
            return f ? (h = f, parseInt(t.getComputedStyle(h).height, 10) + f.offsetTop) : 0;
            var h
          },
          c = function (f, h, p) {
            f === 0 && document.body.focus(), p || (f.focus(), document.activeElement !== f && (f.setAttribute("tabindex", "-1"), f.focus(), f.style.outline = "none"), t.scrollTo(0, h))
          },
          u = function (f, h, p, m) {
            if (h.emitEvents && typeof t.CustomEvent == "function") {
              var g = new CustomEvent(f, {
                bubbles: !0,
                detail: {
                  anchor: p,
                  toggle: m
                }
              });
              document.dispatchEvent(g)
            }
          };
        return function (f, h) {
          var p, m, g, y, w = {};
          w.cancelScroll = function (M) {
            cancelAnimationFrame(y), y = null, M || u("scrollCancel", p)
          }, w.animateScroll = function (M, k, E) {
            w.cancelScroll();
            var O = r(p || i, E || {}),
              P = Object.prototype.toString.call(M) === "[object Number]",
              R = P || !M.tagName ? null : M;
            if (P || R) {
              var L = t.pageYOffset;
              O.header && !g && (g = document.querySelector(O.header));
              var F, I, D, q, Z, B, se, re, le = a(g),
                we = P ? M : function (N, te, j, ae) {
                  var fe = 0;
                  if (N.offsetParent)
                    for (; fe += N.offsetTop, N = N.offsetParent;);
                  return fe = Math.max(fe - te - j, 0), ae && (fe = Math.min(fe, o() - t.innerHeight)), fe
                }(R, le, parseInt(typeof O.offset == "function" ? O.offset(M, k) : O.offset, 10), O.clip),
                A = we - L,
                ye = o(),
                je = 0,
                H = (F = A, D = (I = O).speedAsDuration ? I.speed : Math.abs(F / 1e3 * I.speed), I.durationMax && D > I.durationMax ? I.durationMax : I.durationMin && D < I.durationMin ? I.durationMin : parseInt(D, 10)),
                V = function (N) {
                  var te, j, ae;
                  q || (q = N), je += N - q, B = L + A * (j = Z = 1 < (Z = H === 0 ? 0 : je / H) ? 1 : Z, (te = O).easing === "easeInQuad" && (ae = j * j), te.easing === "easeOutQuad" && (ae = j * (2 - j)), te.easing === "easeInOutQuad" && (ae = j < .5 ? 2 * j * j : (4 - 2 * j) * j - 1), te.easing === "easeInCubic" && (ae = j * j * j), te.easing === "easeOutCubic" && (ae = --j * j * j + 1), te.easing === "easeInOutCubic" && (ae = j < .5 ? 4 * j * j * j : (j - 1) * (2 * j - 2) * (2 * j - 2) + 1), te.easing === "easeInQuart" && (ae = j * j * j * j), te.easing === "easeOutQuart" && (ae = 1 - --j * j * j * j), te.easing === "easeInOutQuart" && (ae = j < .5 ? 8 * j * j * j * j : 1 - 8 * --j * j * j * j), te.easing === "easeInQuint" && (ae = j * j * j * j * j), te.easing === "easeOutQuint" && (ae = 1 + --j * j * j * j * j), te.easing === "easeInOutQuint" && (ae = j < .5 ? 16 * j * j * j * j * j : 1 + 16 * --j * j * j * j * j), te.customEasing && (ae = te.customEasing(j)), ae || j), t.scrollTo(0, Math.floor(B)),
                    function (fe, _e) {
                      var Ae = t.pageYOffset;
                      if (fe == _e || Ae == _e || (L < _e && t.innerHeight + Ae) >= ye) return w.cancelScroll(!0), c(M, _e, P), u("scrollStop", O, M, k), !(y = q = null)
                    }(B, we) || (y = t.requestAnimationFrame(V), q = N)
                };
              t.pageYOffset === 0 && t.scrollTo(0, 0), se = M, re = O, P || history.pushState && re.updateURL && history.pushState({
                smoothScroll: JSON.stringify(re),
                anchor: se.id
              }, document.title, se === document.documentElement ? "#top" : "#" + se.id), "matchMedia" in t && t.matchMedia("(prefers-reduced-motion)").matches ? c(M, Math.floor(we), !1) : (u("scrollStart", O, M, k), w.cancelScroll(!0), t.requestAnimationFrame(V))
            }
          };
          var S = function (M) {
              if (!M.defaultPrevented && !(M.button !== 0 || M.metaKey || M.ctrlKey || M.shiftKey) && "closest" in M.target && (m = M.target.closest(f)) && m.tagName.toLowerCase() === "a" && !M.target.closest(p.ignore) && m.hostname === t.location.hostname && m.pathname === t.location.pathname && /#/.test(m.href)) {
                var k, E;
                try {
                  k = s(decodeURIComponent(m.hash))
                } catch {
                  k = s(m.hash)
                }
                if (k === "#") {
                  if (!p.topOnEmptyHash) return;
                  E = document.documentElement
                } else E = document.querySelector(k);
                (E = E || k !== "#top" ? E : document.documentElement) && (M.preventDefault(), function (O) {
                  if (history.replaceState && O.updateURL && !history.state) {
                    var P = t.location.hash;
                    P = P || "", history.replaceState({
                      smoothScroll: JSON.stringify(O),
                      anchor: P || t.pageYOffset
                    }, document.title, P || t.location.href)
                  }
                }(p), w.animateScroll(E, m))
              }
            },
            T = function (M) {
              if (history.state !== null && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(p)) {
                var k = history.state.anchor;
                typeof k == "string" && k && !(k = document.querySelector(s(history.state.anchor))) || w.animateScroll(k, null, {
                  updateURL: !1
                })
              }
            };
          return w.destroy = function () {
              p && (document.removeEventListener("click", S, !1), t.removeEventListener("popstate", T, !1), w.cancelScroll(), y = g = m = p = null)
            },
            function () {
              if (!("querySelector" in document && "addEventListener" in t && "requestAnimationFrame" in t && "closest" in t.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
              w.destroy(), p = r(i, h || {}), g = p.header ? document.querySelector(p.header) : null, document.addEventListener("click", S, !1), p.updateURL && p.popstate && t.addEventListener("popstate", T, !1)
            }(), w
        }
      })
  })(iv);
  var dE = iv.exports;
  const Vo = ac(dE);

  function fE(n, e) {
    Array.from(document.querySelectorAll("[data-scrollto]:not(.js-running):not(btn-modal-open)")).forEach(i => {
      i.classList.add("js-running"), i.addEventListener("click", function (r) {
        r.preventDefault();
        var s = i.dataset.scrollto;
        if (i.dataset.scrollto == "0") new Vo().animateScroll(0, "", {
          speed: 800,
          speedAsDuration: !0,
          easing: "easeOut"
        });
        else {
          let o = document.querySelector(`#${i.dataset.scrollto}`),
            a = Ce.isDesktop ? n : e;
          if (o) {
            parseInt(o.offsetTop) > parseInt(window.scrollY) && (a = "");
            let c = new Vo;
            a.length > 0 ? c.animateScroll(o, "", {
              speed: 800,
              speedAsDuration: !0,
              easing: "easeOut",
              header: a
            }) : c.animateScroll(o, "", {
              speed: 800,
              speedAsDuration: !0,
              easing: "easeOut"
            })
          } else Al.loadUrl(i.dataset.href), document.addEventListener("pjax:complete", function () {
            let c = document.querySelector(`#${s}`);
            parseInt(c.offsetTop) > parseInt(window.scrollY) && (a = ""), new Vo().animateScroll(c, "", {
              speed: 800,
              speedAsDuration: !0,
              easing: "easeOut",
              header: a
            })
          }, {
            once: !0
          })
        }
      })
    }), window.scrollto = new Vo
  }

  function Ef(n) {
    if (typeof n == "string") return document.querySelector(n);
    if (n instanceof HTMLElement) return n;
    if (n instanceof Array && n[0] instanceof HTMLElement) return n[0];
    if (n instanceof HTMLCollection) return n[0];
    if (n instanceof NodeList) return n[0];
    console.error("O que 챕 isso? ", n)
  }
  let Of = [],
    nv = new IntersectionObserver(n => {
      n.forEach(e => {
        const t = Of.find(i => i.el == e.target);
        t.cb ? t.cb(e.isIntersecting, t.el) : e.isIntersecting ? t.wasPlaying && t.el.play() : t.el.paused ? t.wasPlaying = !1 : (t.wasPlaying = !0, t.el.pause())
      })
    });
  document.addEventListener("pjax:send", () => {
    nv.disconnect(), Of = []
  });

  function zp(n, e) {
    let t = Ef(n);
    Of.push({
      el: t,
      cb: e,
      wasPlaying: !1
    }), nv.observe(t)
  }

  function hE() {
    document.querySelectorAll("video[data-autoplay]").forEach(n => {
      zp(n, (e, t) => {
        if (e) {
          let i = t.play();
          i !== void 0 && i.then(r => {}).catch(r => {
            Ce.isIphone && document.body.addEventListener("touchstart", function () {
              document.querySelectorAll("video[data-autoplay],video[data-autopause],video[autoplay]").forEach(o => {
                if (!o.playing) {
                  o.play();
                  let a = o.play();
                  a !== void 0 && a.then(c => {}).catch(c => {
                    o.play(), o.controls = !0
                  })
                }
              })
            }, {
              once: !0
            })
          })
        } else t.pause()
      })
    }), document.querySelectorAll("video[data-autopause]").forEach(n => {
      zp(n)
    })
  }

  function pE() {
    if (Ce.isMobile) {
      let n = window.innerHeight * .01;
      document.documentElement.style.setProperty("--vh", `${n}px`), setTimeout(() => {
        let e = window.innerHeight * .01;
        document.documentElement.style.setProperty("--vh", `${e}px`)
      }, 1e3)
    }
  }

  function mE() {
    document.addEventListener("pjax:complete", e), e();
    let n = document.querySelectorAll("[data-menu-close]");
    n.forEach(t => {
      t.addEventListener("click", function () {
        n.forEach(i => {
          i.classList.remove("active")
        }), t.addActive()
      })
    });

    function e(t) {
      const i = document.querySelectorAll("[data-pg-active]"),
        r = document.body.dataset.pg,
        s = window.location.hash;
      i.forEach(o => {
        const a = o.dataset.pgActive.split(" ");
        a.includes(r) || a === s ? o.addActive() : o.removeActive()
      })
    }
  }
  var rv = {
    exports: {}
  };
  (function (n) {
    (function (e) {
      var t = function () {},
        i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function (f) {
          return setTimeout(f, 16)
        };

      function r() {
        var f = this;
        f.reads = [], f.writes = [], f.raf = i.bind(e)
      }
      r.prototype = {
        constructor: r,
        runTasks: function (f) {
          for (var h; h = f.shift();) h()
        },
        measure: function (f, h) {
          var p = h ? f.bind(h) : f;
          return this.reads.push(p), s(this), p
        },
        mutate: function (f, h) {
          var p = h ? f.bind(h) : f;
          return this.writes.push(p), s(this), p
        },
        clear: function (f) {
          return a(this.reads, f) || a(this.writes, f)
        },
        extend: function (f) {
          if (typeof f != "object") throw new Error("expected object");
          var h = Object.create(this);
          return c(h, f), h.fastdom = this, h.initialize && h.initialize(), h
        },
        catch: null
      };

      function s(f) {
        f.scheduled || (f.scheduled = !0, f.raf(o.bind(null, f)))
      }

      function o(f) {
        var h = f.writes,
          p = f.reads,
          m;
        try {
          t("flushing reads", p.length), f.runTasks(p), t("flushing writes", h.length), f.runTasks(h)
        } catch (g) {
          m = g
        }
        if (f.scheduled = !1, (p.length || h.length) && s(f), m)
          if (t("task errored", m.message), f.catch) f.catch(m);
          else throw m
      }

      function a(f, h) {
        var p = f.indexOf(h);
        return !!~p && !!f.splice(p, 1)
      }

      function c(f, h) {
        for (var p in h) h.hasOwnProperty(p) && (f[p] = h[p])
      }
      var u = e.fastdom = e.fastdom || new r;
      n.exports = u
    })(typeof window < "u" ? window : to)
  })(rv);
  var gE = rv.exports;
  const Hp = ac(gE),
    sv = [],
    vE = new IntersectionObserver(n => {
      n.forEach(e => {
        sv.filter(t => t.el == e.target).forEach(t => {
          t.inView = !0, t.translate()
        })
      })
    }, {
      rootMargin: "30%"
    });

  function ov() {
    if (!Ce.isDesktop) return;
    document.querySelectorAll("[data-follow]").forEach(e => new yE(e))
  }
  class yE {
    constructor(e) {
      this.el = e, this.update(), this.x = 0, this.y = 0, this.inView = !1, this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      }, window.addEventListener("mousemove", this.follow.bind(this)), vE.observe(e), sv.push(this)
    }
    update() {
      const e = this.el.dataset,
        t = e.followSpeed.match(/x:(\d+)/)[1];
      this.speedx = t ? t / 1e3 : .01;
      const i = e.followSpeed.match(/y:(\d+)/)[1];
      this.speedy = i ? i / 1e3 : .01, this.invertx = e.invert ? e.invert.includes("x") : !1, this.inverty = e.invert ? e.invert.includes("y") : !1
    }
    follow(e) {
      Hp.measure(() => {
        const t = this.window.width / 2,
          i = this.window.height / 2,
          r = this.invertx ? -1 : 1,
          s = this.inverty ? -1 : 1;
        this.x = r * (e.x - t) * this.speedx, this.y = s * (e.y - i) * this.speedy, this.inView && this.translate()
      })
    }
    translate() {
      this.queue || (this.queue = !0, Hp.mutate(() => {
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`, this.queue = !1
      }))
    }
  }
  ei.registerPlugin(yo, pe, Xt);
  window.scrollingTo = !1;
  window.ScrollToGsap = bE;

  function bE(n, e = 0, t = .8, i = 1, r = 0, s = window) {
    let o = _E(e);

    function a(f) {
      switch (f) {
        case 1:
          return "Power3.easeInOut";
        case 2:
          return "Power3.easeOut";
        case 3:
          return "Power1.easeInOut";
        case 4:
          return "Power1.easeOut";
        case 5:
          return "Power2.easeOut";
        case 6:
          return "Power0.easeInOut";
        case 7:
          return "Power2.easeInOut";
        case 8:
          return 'CustomEase.create("custom", "M0,0 C0.212,0 0.267,-0.076 0.346,0 0.422,0.074 0.46,0.356 0.502,0.504 0.551,0.68 0.617,0.862 0.684,0.922 0.748,0.98 0.734,1.094 1,1 ");';
        case 9:
          return "Sine.easeInOut";
        default:
          return f
      }
    }
    let c = wE(n);
    c = c - o;
    let u = Xt.get();
    scrollingTo = !0, document.body.classList.add("autoscrolling"), t == -1 && u.scrollTop(c), setTimeout(() => {
      u ? ei.to(u, {
        scrollTop: c,
        duration: t,
        onComplete: () => {
          scrollingTo = !1, document.body.classList.remove("autoscrolling")
        }
      }) : ei.to(s, {
        duration: t,
        scrollTo: {
          y: c,
          autoKill: !1
        },
        ease: a(i),
        onComplete: () => {
          scrollingTo = !1, document.body.classList.remove("autoscrolling")
        }
      })
    }, r)
  }

  function _E(n) {
    return typeof n == "string" ? n.endsWith("rem") ? parseFloat(n) * parseFloat(getComputedStyle(document.documentElement).fontSize) : n.endsWith("vh") ? parseFloat(n) / 100 * window.innerHeight : n.match(/^\d+$/) ? parseFloat(n) : Ef(n).offsetHeight : n
  }

  function wE(n) {
    return typeof n == "string" ? n.endsWith("rem") ? parseFloat(n) * parseFloat(getComputedStyle(document.documentElement).fontSize) : n.endsWith("vh") ? parseFloat(n) / 100 * window.innerHeight : n.match(/^\d+$/) ? parseFloat(n) : SE(Ef(n)) : n
  }

  function SE(n) {
    let e = 0;
    for (; n;) e += n.offsetTop, n = n.offsetParent;
    return e
  }
  et.registerPlugin(pe);
  jn.registerPlugin(pe, ks);

  function xE() {
    let n = document.querySelectorAll(".prev-section");
    document.querySelectorAll(".prev-section .row");
    let e = jn.timeline({
      scrollTrigger: {
        trigger: n,
        endTrigger: "#footer",
        start: "90% bottom",
        end: "80% bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    });
    e.fromTo("#footer", {
      y: "30vh"
    }, {
      y: 0
    }), e.to("#footer .footer-logo #D", {
      y: "0",
      duration: ".3"
    }), e.to("#footer .footer-logo #E", {
      y: "0",
      duration: ".3"
    }, "<+.05"), e.to("#footer .footer-logo #F", {
      y: "0",
      duration: ".3"
    }, "<+.05")
  }
  et.registerPlugin(pe);
  const TE = "sobre";

  function ME() {
    if (setTimeout(() => {
        bd()
      }, 700), Ce.isMobile || document.querySelectorAll("[data-follow]").forEach(s => new ov), et.timeline({
        scrollTrigger: {
          trigger: ".sobre-intro .marquee-section",
          start: "bottom bottom",
          end: "200% bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      }).to(".sobre-intro .marquee-section .container-logo-marquee svg", {
        scale: 1.25
      }), Ce.isDesktop) {
      let r = et.timeline({
        scrollTrigger: {
          trigger: ".sobre-intro .container-trigger",
          start: "top top",
          end: "bottom bottom",
          pin: ".sobre-intro .about-img",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      r.fromTo(".sobre-intro .about-img", {
        scale: 1,
        borderRadius: 0
      }, {
        scale: .61,
        borderRadius: "2.4rem"
      }), r.to(".sobre-intro .about-img .media", {
        scale: 1.3
      }, "<")
    }
    et.timeline({
      scrollTrigger: {
        trigger: ".sobre-historia",
        start: "top bottom",
        end: "85% bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    }).fromTo(".sobre-historia .bg-color", {
      y: "100vh",
      x: "0",
      borderRadius: 0
    }, {
      y: 0,
      x: 0,
      borderRadius: "1rem 1rem 0 0"
    });
    let t = et.timeline({
      scrollTrigger: {
        trigger: ".sobre-img-transition",
        start: "top bottom",
        end: "90% bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    });
    if (t.to(".sobre-img-transition .img-mask .bg-img", {
        top: "-20rem"
      }), t.fromTo(".sobre-img-transition .img-mask .circle-black", {
        top: "80%",
        right: "85%"
      }, {
        top: "4.2rem",
        right: "4.2rem"
      }, "<"), t.to(".sobre-img-transition .img-mask .linear", {
        translate: "80% -80%"
      }, "<+.1"), t.to(".sobre-img-transition .img-mask .circle-black .circle-white", {
        scale: 1
      }, "<+.3"), t.to(".sobre-img-transition .img-mask .bg-img", {
        scale: .9
      }, "<"), Ce.isDesktop) {
      let r = et.timeline({
        scrollTrigger: {
          trigger: ".sobre-urbanismo-arquitetura",
          start: "30% bottom",
          end: "bottom bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      r.fromTo(".sobre-urbanismo-arquitetura .circle-wrapper .black-circle", {
        scale: 0
      }, {
        scale: 1
      }), r.to(".sobre-urbanismo-arquitetura .circle-wrapper .white-circle svg", {
        strokeDashoffset: "0%"
      }, "<")
    } else {
      let r = et.timeline({
        scrollTrigger: {
          trigger: ".sobre-urbanismo-arquitetura",
          start: "20% bottom",
          end: "50% bottom",
          pinSpacing: !1,
          markers: !1,
          scrub: !0,
          anticipatePin: !0,
          invalidateOnRefresh: !0
        }
      });
      r.fromTo(".sobre-urbanismo-arquitetura .circle-wrapper .black-circle", {
        scale: 0
      }, {
        scale: 1
      }), r.to(".sobre-urbanismo-arquitetura .circle-wrapper .white-circle svg", {
        strokeDashoffset: "0%"
      }, "<")
    }
    et.timeline({
      scrollTrigger: {
        trigger: ".sobre-urbanismo-arquitetura",
        start: "bottom bottom",
        end: "150% bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    }).fromTo(".sobre-time .row", {
      y: "-50vh",
      ease: "none"
    }, {
      y: "0"
    }), window.ScrollTrigger = pe
  }
  const kE = new xa({
    pageName: TE,
    main: ME
  });
  class Wp {
    constructor({
      dataGetSelector: e = "[data-get]",
      dataSetSelector: t = "[data-set]",
      dataCloseSelector: i = "[data-close]",
      parentContainer: r = "[data-parent]",
      defaultActive: s = "[data-default-active]",
      listener: o = "click",
      toggler: a = !1,
      onClose: c = () => {},
      onActivate: u = () => {},
      onDeactivate: f = () => {}
    } = {}) {
      this.dataGetSelector = e, this.dataSetSelector = t, this.parentContainer = r, this.defaultActive = s, this.dataCloseSelector = i, this.listener = o, this.toggler = a, this.onClose = c, this.onActivate = u, this.onDeactivate = f, this.initialize(), this.reset()
    }
    removeBrackets(e) {
      return e.replace(/[\[\]]+/g, "")
    }
    getValueFromDataSet(e) {
      return e.getAttribute(this.removeBrackets(this.dataSetSelector))
    }
    initialize() {
      this.dataSets = document.querySelectorAll(this.dataSetSelector), this.container = document.querySelector(this.parentContainer), this.dataGets = document.querySelectorAll(this.dataGetSelector), this.closeButtons = document.querySelectorAll(this.dataCloseSelector), this.addEventListeners()
    }
    reset() {
      this.deactivateItems(), this.activateDefault(), this.container && (this.container.dataset.activeValue = "", this.container.dataset.state == "active" && (this.container.dataset.state == "leave", setTimeout(() => {
        this.container.dataset.state = ""
      }, 800)))
    }
    addEventListeners() {
      this.listener == "hover" ? this.dataSets.forEach(e => {
        e.addEventListener("mouseenter", t => {
          const i = this.getValueFromDataSet(e);
          this.activateItems(i)
        }), e.addEventListener("mouseleave", () => {
          this.reset()
        })
      }) : (this.dataSets.forEach(e => {
        e.addEventListener("click", () => {
          const t = this.getValueFromDataSet(e);
          this.activateItems(t)
        })
      }), this.closeButtons.forEach(e => {
        e.addEventListener("click", () => {
          this.reset()
        })
      }))
    }
    getActiveItems() {
      return Array.from(this.dataGets).filter(e => e.classList.contains("active"))
    }
    getActiveDatasets() {
      return Array.from(this.dataSets).filter(e => e.classList.contains("active"))
    }
    findItems(e) {
      return Array.from(this.dataGets).filter(t => t.getAttribute(this.removeBrackets(this.dataGetSelector)) === e)
    }
    findDatasets(e) {
      return Array.from(this.dataSets).filter(t => t.getAttribute(this.removeBrackets(this.dataSetSelector)) === e)
    }
    activateDefault() {
      let e = document.querySelector(this.defaultActive);
      e && e.addActive()
    }
    activateItems(e) {
      if (this.toggler && this.findDatasets(e).some(s => s.classList.contains("active"))) {
        this.deactivateItems(), this.activateDefault(), this.container && (this.container.dataset.activeValue = "", this.container.dataset.state = "");
        return
      }
      this.deactivateItems();
      let t = this.findItems(e),
        i = this.findDatasets(e);
      t.length == 0 && this.activateDefault(), i.forEach(r => {
        r.addActive()
      }), t.forEach(r => {
        r.addActive(), this.onActivate(r)
      }), this.container && (this.container.dataset.activeValue = e, this.container.dataset.state = "active")
    }
    deactivateItems() {
      const e = this.getActiveItems();
      this.getActiveDatasets().forEach(i => {
        i.removeActive()
      }), e.forEach(i => {
        i.removeActive(), this.onDeactivate(i)
      }), this.onClose()
    }
  }
  et.registerPlugin(pe);
  class PE {
    constructor(e) {
      this.itemSelector = e.itemSelector, this.parentContainer = document.querySelector(e.parentContainer), this.activeClass = e.activeClass || "active", this.filterCategories = e.filterCategories || [], this.activeFilters = {}, this.initialize(), this.initializeFromURL()
    }
    initialize() {
      this.filterCategories.forEach(e => {
        document.querySelectorAll(`[data-set-${e}]`).forEach(t => {
          t.addEventListener("click", () => {
            const i = t.getAttribute(`data-set-${e}`);
            t.classList.contains(this.activeClass) ? (delete this.activeFilters[e], t.classList.remove(this.activeClass)) : (this.activeFilters[e] = i, document.querySelectorAll(`[data-set-${e}].${this.activeClass}`).forEach(r => {
              r.classList.remove(this.activeClass)
            }), t.classList.add(this.activeClass)), this.applyFilters()
          })
        })
      })
    }
    applyFilters() {
      document.querySelectorAll(this.itemSelector).forEach(e => {
        Object.keys(this.activeFilters).every(i => {
          const r = this.activeFilters[i];
          return (e.getAttribute(`data-get-${i}`) || "").split(" ").includes(r)
        }) || Object.keys(this.activeFilters).length === 0 ? e.classList.remove("d-none") : e.classList.add("d-none")
      }), this.updateURL(), pe.refresh()
    }
    resetFilters() {
      this.activeFilters = {}, this.filterCategories.forEach(e => {
        document.querySelectorAll(`[data-set-${e}].${this.activeClass}`).forEach(t => {
          t.classList.remove(this.activeClass)
        })
      }), this.applyFilters(), this.updateURL()
    }
    initializeFromURL() {
      const e = new URLSearchParams(window.location.search);
      this.filterCategories.forEach(t => {
        var r;
        const i = e.get(t);
        i && (this.activeFilters[t] = i, (r = document.querySelector(`[data-set-${t}="${i}"]`)) == null || r.classList.add(this.activeClass))
      }), this.applyFilters()
    }
    updateURL() {
      const e = new URLSearchParams;
      Object.keys(this.activeFilters).forEach(i => {
        this.activeFilters[i] && e.set(i, this.activeFilters[i])
      });
      const t = `${window.location.pathname}?${e.toString()}`;
      history.pushState(null, "", t)
    }
  }
  et.registerPlugin(Xt, pe);
  const EE = "projetos";

  function OE() {
    let n = Xt.get();
    Ce.isDesktop && (xE(), pe.create({
      trigger: ".container-number-mode",
      endTrigger: ".prev-section",
      start: "top top",
      end: "bottom bottom",
      pin: ".container-number-mode",
      pinSpacing: !1,
      markers: !1,
      scrub: !0,
      anticipatePin: !0,
      invalidateOnRefresh: !0
    })), Ce.isMobile || document.querySelectorAll("[data-follow]").forEach(i => new ov), document.body.dataset.mode && (document.querySelectorAll("[data-set-mode]").forEach(t => {
      t.removeActive()
    }), document.querySelector(`[data-set-mode="${document.body.dataset.mode}"]`).addActive()), document.querySelectorAll("[data-set-mode]").forEach(t => {
      t.addEventListener("click", function () {
        t.classList.contains("active") || (document.querySelector(".column-content").classList.add("leave"), setTimeout(() => {
          e.resetFilters(), n && n.scrollTo(0), document.querySelectorAll("[data-set-mode]").forEach(i => {
            i.removeActive()
          }), t.addActive(), document.body.dataset.mode = t.dataset.setMode, setTimeout(() => {
            pe.refresh()
          }, 300), setTimeout(() => {
            document.querySelector(".column-content").classList.remove("leave")
          }, 300)
        }, 600))
      })
    }), new Wp({
      dataGetSelector: "[data-get-filter]",
      dataSetSelector: "[data-set-filter]",
      dataCloseSelector: "[data-close-filter]",
      listener: "click",
      parentContainer: "[data-filter-parent]",
      timeOut: 0,
      toggler: !0,
      onClose: () => {},
      onActivate: t => {},
      onDeactivate: t => {}
    }), new Wp({
      dataGetSelector: "[data-get-project]",
      dataSetSelector: "[data-set-project]",
      dataCloseSelector: "[data-close-project]",
      listener: "hover",
      parentContainer: "[data-project-parent]",
      timeOut: 0,
      onClose: () => {},
      onActivate: t => {},
      onDeactivate: t => {}
    });
    const e = new PE({
      filterCategories: ["tipologia", "status", "periodo", "escopo"],
      itemSelector: ".projetos-item",
      activeClass: "active",
      parentContainer: ".projetos-list"
    })
  }
  const CE = new xa({
      pageName: EE,
      main: OE
    }),
    J = (n, e = 1e4) => (n = parseFloat(n + "") || 0, Math.round((n + Number.EPSILON) * e) / e),
    Od = function (n) {
      if (!(n && n instanceof Element && n.offsetParent)) return !1;
      const e = n.scrollHeight > n.clientHeight,
        t = window.getComputedStyle(n).overflowY,
        i = t.indexOf("hidden") !== -1,
        r = t.indexOf("visible") !== -1;
      return e && !i && !r
    },
    sc = function (n, e = void 0) {
      return !(!n || n === document.body || e && n === e) && (Od(n) ? n : sc(n.parentElement, e))
    },
    Fn = function (n) {
      var e = new DOMParser().parseFromString(n, "text/html").body;
      if (e.childElementCount > 1) {
        for (var t = document.createElement("div"); e.firstChild;) t.appendChild(e.firstChild);
        return t
      }
      return e.firstChild
    },
    Cf = n => `${n||""}`.split(" ").filter(e => !!e),
    Nn = (n, e, t) => {
      n && Cf(e).forEach(i => {
        n.classList.toggle(i, t || !1)
      })
    };
  class Ws {
    constructor(e) {
      Object.defineProperty(this, "pageX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "pageY", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "clientX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "clientY", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "time", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "nativePointer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.nativePointer = e, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY, this.id = self.Touch && e instanceof Touch ? e.identifier : -1, this.time = Date.now()
    }
  }
  const js = {
    passive: !1
  };
  class DE {
    constructor(e, {
      start: t = () => !0,
      move: i = () => {},
      end: r = () => {}
    }) {
      Object.defineProperty(this, "element", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "startCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "moveCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "endCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "currentPointers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(this, "startPointers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), this.element = e, this.startCallback = t, this.moveCallback = i, this.endCallback = r;
      for (const s of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[s] = this[s].bind(this);
      this.element.addEventListener("mousedown", this.onPointerStart, js), this.element.addEventListener("touchstart", this.onTouchStart, js), this.element.addEventListener("touchmove", this.onMove, js), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd)
    }
    onPointerStart(e) {
      if (!e.buttons || e.button !== 0) return;
      const t = new Ws(e);
      this.currentPointers.some(i => i.id === t.id) || this.triggerPointerStart(t, e) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur))
    }
    onTouchStart(e) {
      for (const t of Array.from(e.changedTouches || [])) this.triggerPointerStart(new Ws(t), e);
      window.addEventListener("blur", this.onWindowBlur)
    }
    onMove(e) {
      const t = this.currentPointers.slice(),
        i = "changedTouches" in e ? Array.from(e.changedTouches || []).map(s => new Ws(s)) : [new Ws(e)],
        r = [];
      for (const s of i) {
        const o = this.currentPointers.findIndex(a => a.id === s.id);
        o < 0 || (r.push(s), this.currentPointers[o] = s)
      }
      r.length && this.moveCallback(e, this.currentPointers.slice(), t)
    }
    onPointerEnd(e) {
      e.buttons > 0 && e.button !== 0 || (this.triggerPointerEnd(e, new Ws(e)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur))
    }
    onTouchEnd(e) {
      for (const t of Array.from(e.changedTouches || [])) this.triggerPointerEnd(e, new Ws(t))
    }
    triggerPointerStart(e, t) {
      return !!this.startCallback(t, e, this.currentPointers.slice()) && (this.currentPointers.push(e), this.startPointers.push(e), !0)
    }
    triggerPointerEnd(e, t) {
      const i = this.currentPointers.findIndex(r => r.id === t.id);
      i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(e, t, this.currentPointers.slice()))
    }
    onWindowBlur() {
      this.clear()
    }
    clear() {
      for (; this.currentPointers.length;) {
        const e = this.currentPointers[this.currentPointers.length - 1];
        this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
          bubbles: !0,
          cancelable: !0,
          clientX: e.clientX,
          clientY: e.clientY
        }), e, this.currentPointers.slice())
      }
    }
    stop() {
      this.element.removeEventListener("mousedown", this.onPointerStart, js), this.element.removeEventListener("touchstart", this.onTouchStart, js), this.element.removeEventListener("touchmove", this.onMove, js), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur)
    }
  }

  function jp(n, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - n.clientX, 2) + Math.pow(e.clientY - n.clientY, 2)) : 0
  }

  function qp(n, e) {
    return e ? {
      clientX: (n.clientX + e.clientX) / 2,
      clientY: (n.clientY + e.clientY) / 2
    } : n
  }
  const Cd = n => typeof n == "object" && n !== null && n.constructor === Object && Object.prototype.toString.call(n) === "[object Object]",
    Yi = (n, ...e) => {
      const t = e.length;
      for (let i = 0; i < t; i++) {
        const r = e[i] || {};
        Object.entries(r).forEach(([s, o]) => {
          const a = Array.isArray(o) ? [] : {};
          n[s] || Object.assign(n, {
            [s]: a
          }), Cd(o) ? Object.assign(n[s], Yi(a, o)) : Array.isArray(o) ? Object.assign(n, {
            [s]: [...o]
          }) : Object.assign(n, {
            [s]: o
          })
        })
      }
      return n
    },
    Au = function (n, e) {
      return n.split(".").reduce((t, i) => typeof t == "object" ? t[i] : void 0, e)
    };
  class oc {
    constructor(e = {}) {
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }), Object.defineProperty(this, "events", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map
      }), this.setOptions(e);
      for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && typeof this[t] == "function" && (this[t] = this[t].bind(this))
    }
    setOptions(e) {
      this.options = e ? Yi({}, this.constructor.defaults, e) : {};
      for (const [t, i] of Object.entries(this.option("on") || {})) this.on(t, i)
    }
    option(e, ...t) {
      let i = Au(e, this.options);
      return i && typeof i == "function" && (i = i.call(this, this, ...t)), i
    }
    optionFor(e, t, i, ...r) {
      let s = Au(t, e);
      var o;
      typeof (o = s) != "string" || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), s === "true" && (s = !0), s === "false" && (s = !1), s && typeof s == "function" && (s = s.call(this, this, e, ...r));
      let a = Au(t, this.options);
      return a && typeof a == "function" ? s = a.call(this, this, e, ...r, s) : s === void 0 && (s = a), s === void 0 ? i : s
    }
    cn(e) {
      const t = this.options.classes;
      return t && t[e] || ""
    }
    localize(e, t = []) {
      e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (i, r, s) => {
        let o = "";
        return s ? o = this.option(`${r[0]+r.toLowerCase().substring(1)}.l10n.${s}`) : r && (o = this.option(`l10n.${r}`)), o || (o = i), o
      });
      for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
      return e = e.replace(/\{\{(.*?)\}\}/g, (i, r) => r)
    }
    on(e, t) {
      let i = [];
      typeof e == "string" ? i = e.split(" ") : Array.isArray(e) && (i = e), this.events || (this.events = new Map), i.forEach(r => {
        let s = this.events.get(r);
        s || (this.events.set(r, []), s = []), s.includes(t) || s.push(t), this.events.set(r, s)
      })
    }
    off(e, t) {
      let i = [];
      typeof e == "string" ? i = e.split(" ") : Array.isArray(e) && (i = e), i.forEach(r => {
        const s = this.events.get(r);
        if (Array.isArray(s)) {
          const o = s.indexOf(t);
          o > -1 && s.splice(o, 1)
        }
      })
    }
    emit(e, ...t) {
      [...this.events.get(e) || []].forEach(i => i(this, ...t)), e !== "*" && this.emit("*", e, ...t)
    }
  }
  Object.defineProperty(oc, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.28"
  }), Object.defineProperty(oc, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  });
  class Df extends oc {
    constructor(e = {}) {
      super(e), Object.defineProperty(this, "plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      })
    }
    attachPlugins(e = {}) {
      const t = new Map;
      for (const [i, r] of Object.entries(e)) {
        const s = this.option(i),
          o = this.plugins[i];
        o || s === !1 ? o && s === !1 && (o.detach(), delete this.plugins[i]) : t.set(i, new r(this, s || {}))
      }
      for (const [i, r] of t) this.plugins[i] = r, r.attach()
    }
    detachPlugins(e) {
      e = e || Object.keys(this.plugins);
      for (const t of e) {
        const i = this.plugins[t];
        i && i.detach(), delete this.plugins[t]
      }
      return this.emit("detachPlugins"), this
    }
  }
  var ot;
  (function (n) {
    n[n.Init = 0] = "Init", n[n.Error = 1] = "Error", n[n.Ready = 2] = "Ready", n[n.Panning = 3] = "Panning", n[n.Mousemove = 4] = "Mousemove", n[n.Destroy = 5] = "Destroy"
  })(ot || (ot = {}));
  const er = ["a", "b", "c", "d", "e", "f"],
    av = {
      PANUP: "Move up",
      PANDOWN: "Move down",
      PANLEFT: "Move left",
      PANRIGHT: "Move right",
      ZOOMIN: "Zoom in",
      ZOOMOUT: "Zoom out",
      TOGGLEZOOM: "Toggle zoom level",
      TOGGLE1TO1: "Toggle zoom level",
      ITERATEZOOM: "Toggle zoom level",
      ROTATECCW: "Rotate counterclockwise",
      ROTATECW: "Rotate clockwise",
      FLIPX: "Flip horizontally",
      FLIPY: "Flip vertically",
      FITX: "Fit horizontally",
      FITY: "Fit vertically",
      RESET: "Reset",
      TOGGLEFS: "Toggle fullscreen"
    },
    AE = {
      content: null,
      width: "auto",
      height: "auto",
      panMode: "drag",
      touch: !0,
      dragMinThreshold: 3,
      lockAxis: !1,
      mouseMoveFactor: 1,
      mouseMoveFriction: .12,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: "auto",
      minScale: 1,
      maxScale: 2,
      friction: .25,
      dragFriction: .35,
      decelFriction: .05,
      click: "toggleZoom",
      dblClick: !1,
      wheel: "zoom",
      wheelLimit: 7,
      spinner: !0,
      bounds: "auto",
      infinite: !1,
      rubberband: !0,
      bounce: !0,
      maxVelocity: 75,
      transformParent: !1,
      classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen"
      },
      l10n: av
    },
    Af = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
    Pi = n => n && n !== null && n instanceof Element && "nodeType" in n,
    ht = (n, e) => {
      n && Cf(e).forEach(t => {
        n.classList.remove(t)
      })
    },
    ve = (n, e) => {
      n && Cf(e).forEach(t => {
        n.classList.add(t)
      })
    },
    ul = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    },
    LE = 1e5,
    dl = 1e4,
    rn = "mousemove",
    $p = "drag",
    Vp = "content";
  let Lu = null,
    Ru = null;
  class Ss extends Df {
    get fits() {
      return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1
    }
    get isTouchDevice() {
      return Ru === null && (Ru = window.matchMedia("(hover: none)").matches), Ru
    }
    get isMobile() {
      return Lu === null && (Lu = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), Lu
    }
    get panMode() {
      return this.options.panMode !== rn || this.isTouchDevice ? $p : rn
    }
    get panOnlyZoomed() {
      const e = this.options.panOnlyZoomed;
      return e === "auto" ? this.isTouchDevice : e
    }
    get isInfinite() {
      return this.option("infinite")
    }
    get angle() {
      return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0
    }
    get targetAngle() {
      return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0
    }
    get scale() {
      const {
        a: e,
        b: t
      } = this.current;
      return Math.sqrt(e * e + t * t) || 1
    }
    get targetScale() {
      const {
        a: e,
        b: t
      } = this.target;
      return Math.sqrt(e * e + t * t) || 1
    }
    get minScale() {
      return this.option("minScale") || 1
    }
    get fullScale() {
      const {
        contentRect: e
      } = this;
      return e.fullWidth / e.fitWidth || 1
    }
    get maxScale() {
      return this.fullScale * (this.option("maxScale") || 1) || 1
    }
    get coverScale() {
      const {
        containerRect: e,
        contentRect: t
      } = this, i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
      return Math.min(this.fullScale, i)
    }
    get isScaling() {
      return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
    }
    get isContentLoading() {
      const e = this.content;
      return !!(e && e instanceof HTMLImageElement) && !e.complete
    }
    get isResting() {
      if (this.isBouncingX || this.isBouncingY) return !1;
      for (const e of er) {
        const t = e == "e" || e === "f" ? 1e-4 : 1e-5;
        if (Math.abs(this.target[e] - this.current[e]) > t) return !1
      }
      return !(!this.ignoreBounds && !this.checkBounds().inBounds)
    }
    constructor(e, t = {}, i = {}) {
      var r;
      if (super(t), Object.defineProperty(this, "pointerTracker", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "resizeObserver", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "updateTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "clickTimer", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "rAF", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "isTicking", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), Object.defineProperty(this, "ignoreBounds", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), Object.defineProperty(this, "isBouncingX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), Object.defineProperty(this, "isBouncingY", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), Object.defineProperty(this, "clicks", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "trackingPoints", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: []
        }), Object.defineProperty(this, "pwt", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "cwd", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "pmme", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "friction", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ot.Init
        }), Object.defineProperty(this, "isDragging", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "content", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "spinner", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "containerRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0
          }
        }), Object.defineProperty(this, "contentRect", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            fullWidth: 0,
            fullHeight: 0,
            fitWidth: 0,
            fitHeight: 0,
            width: 0,
            height: 0
          }
        }), Object.defineProperty(this, "dragStart", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            time: 0
          }
        }), Object.defineProperty(this, "dragOffset", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            x: 0,
            y: 0,
            time: 0
          }
        }), Object.defineProperty(this, "current", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, ul)
        }), Object.defineProperty(this, "target", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Object.assign({}, ul)
        }), Object.defineProperty(this, "velocity", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0
          }
        }), Object.defineProperty(this, "lockedAxis", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: !1
        }), !e) throw new Error("Container Element Not Found");
      this.container = e, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, Ss.Plugins), i)), this.emit("attachPlugins"), this.emit("init");
      const s = this.content;
      if (s.addEventListener("load", this.onLoad), s.addEventListener("error", this.onError), this.isContentLoading) {
        if (this.option("spinner")) {
          e.classList.add(this.cn("isLoading"));
          const o = Fn(Af);
          !e.contains(s) || s.parentElement instanceof HTMLPictureElement ? this.spinner = e.appendChild(o) : this.spinner = ((r = s.parentElement) === null || r === void 0 ? void 0 : r.insertBefore(o, s)) || null
        }
        this.emit("beforeLoad")
      } else queueMicrotask(() => {
        this.enable()
      })
    }
    initContent() {
      const {
        container: e
      } = this, t = this.cn(Vp);
      let i = this.option(Vp) || e.querySelector(`.${t}`);
      if (i || (i = e.querySelector("img,picture") || e.firstElementChild, i && ve(i, t)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
      this.content = i
    }
    onLoad() {
      const {
        spinner: e,
        container: t,
        state: i
      } = this;
      e && (e.remove(), this.spinner = null), this.option("spinner") && t.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i === ot.Init ? this.enable() : this.updateMetrics()
    }
    onError() {
      this.state !== ot.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = ot.Error, this.emit("error"))
    }
    attachObserver() {
      var e;
      const t = () => {
        const {
          container: i,
          containerRect: r
        } = this;
        return Math.abs(r.width - i.getBoundingClientRect().width) > .1 || Math.abs(r.height - i.getBoundingClientRect().height) > .1
      };
      this.resizeObserver || window.ResizeObserver === void 0 || (this.resizeObserver = new ResizeObserver(() => {
        this.updateTimer || (t() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
          t() && this.onResize(), this.updateTimer = null
        }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null))
      })), (e = this.resizeObserver) === null || e === void 0 || e.observe(this.container)
    }
    detachObserver() {
      var e;
      (e = this.resizeObserver) === null || e === void 0 || e.disconnect()
    }
    attachEvents() {
      const {
        container: e
      } = this;
      e.addEventListener("click", this.onClick, {
        passive: !1,
        capture: !1
      }), e.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.pointerTracker = new DE(e, {
        start: this.onPointerDown,
        move: this.onPointerMove,
        end: this.onPointerUp
      }), document.addEventListener(rn, this.onMouseMove)
    }
    detachEvents() {
      var e;
      const {
        container: t
      } = this;
      t.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1
      }), t.removeEventListener("wheel", this.onWheel, {
        passive: !1
      }), (e = this.pointerTracker) === null || e === void 0 || e.stop(), this.pointerTracker = null, document.removeEventListener(rn, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null)
    }
    animate() {
      this.setTargetForce();
      const e = this.friction,
        t = this.option("maxVelocity");
      for (const i of er) e ? (this.velocity[i] *= 1 - e, t && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], t), -1 * t)), this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
      this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current")
    }
    setTargetForce() {
      for (const e of er) e === "e" && this.isBouncingX || e === "f" && this.isBouncingY || (this.velocity[e] = (1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]))
    }
    checkBounds(e = 0, t = 0) {
      const {
        current: i
      } = this, r = i.e + e, s = i.f + t, o = this.getBounds(), {
        x: a,
        y: c
      } = o, u = a.min, f = a.max, h = c.min, p = c.max;
      let m = 0,
        g = 0;
      return u !== 1 / 0 && r < u ? m = u - r : f !== 1 / 0 && r > f && (m = f - r), h !== 1 / 0 && s < h ? g = h - s : p !== 1 / 0 && s > p && (g = p - s), Math.abs(m) < 1e-4 && (m = 0), Math.abs(g) < 1e-4 && (g = 0), Object.assign(Object.assign({}, o), {
        xDiff: m,
        yDiff: g,
        inBounds: !m && !g
      })
    }
    clampTargetBounds() {
      const {
        target: e
      } = this, {
        x: t,
        y: i
      } = this.getBounds();
      t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)), t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)), i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)), i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max))
    }
    calculateContentDim(e = this.current) {
      const {
        content: t,
        contentRect: i
      } = this, {
        fitWidth: r,
        fitHeight: s,
        fullWidth: o,
        fullHeight: a
      } = i;
      let c = o,
        u = a;
      if (this.option("zoom") || this.angle !== 0) {
        const f = !(t instanceof HTMLImageElement) && (window.getComputedStyle(t).maxWidth === "none" || window.getComputedStyle(t).maxHeight === "none"),
          h = f ? o : r,
          p = f ? a : s,
          m = this.getMatrix(e),
          g = new DOMPoint(0, 0).matrixTransform(m),
          y = new DOMPoint(0 + h, 0).matrixTransform(m),
          w = new DOMPoint(0 + h, 0 + p).matrixTransform(m),
          S = new DOMPoint(0, 0 + p).matrixTransform(m),
          T = Math.abs(w.x - g.x),
          M = Math.abs(w.y - g.y),
          k = Math.abs(S.x - y.x),
          E = Math.abs(S.y - y.y);
        c = Math.max(T, k), u = Math.max(M, E)
      }
      return {
        contentWidth: c,
        contentHeight: u
      }
    }
    setEdgeForce() {
      if (this.ignoreBounds || this.isDragging || this.panMode === rn || this.targetScale < this.scale) return this.isBouncingX = !1, void(this.isBouncingY = !1);
      const {
        target: e
      } = this, {
        x: t,
        y: i,
        xDiff: r,
        yDiff: s
      } = this.checkBounds(), o = this.option("maxVelocity");
      let a = this.velocity.e,
        c = this.velocity.f;
      r !== 0 ? (this.isBouncingX = !0, r * a <= 0 ? a += .14 * r : (a = .14 * r, t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)), t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, s !== 0 ? (this.isBouncingY = !0, s * c <= 0 ? c += .14 * s : (c = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))), o && (c = Math.max(Math.min(c, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = c)
    }
    enable() {
      const {
        content: e
      } = this, t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
      for (const i of er) this.current[i] = this.target[i] = t[i];
      this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = ot.Ready, this.emit("ready")
    }
    onClick(e) {
      var t;
      e.type === "click" && e.detail === 0 && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && ((t = this.pointerTracker) === null || t === void 0 || t.clear(), this.trackingPoints = [], this.startDecelAnim());
      const i = e.target;
      if (!i || e.defaultPrevented) return;
      if (i.hasAttribute("disabled")) return e.preventDefault(), void e.stopPropagation();
      if ((() => {
          const m = window.getSelection();
          return m && m.type === "Range"
        })() && !i.closest("button")) return;
      const r = i.closest("[data-panzoom-action]"),
        s = i.closest("[data-panzoom-change]"),
        o = r || s,
        a = o && Pi(o) ? o.dataset : null;
      if (a) {
        const m = a.panzoomChange,
          g = a.panzoomAction;
        if ((m || g) && e.preventDefault(), m) {
          let y = {};
          try {
            y = JSON.parse(m)
          } catch {
            console && console.warn("The given data was not valid JSON")
          }
          return void this.applyChange(y)
        }
        if (g) return void(this[g] && this[g]())
      }
      if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return e.preventDefault(), void e.stopPropagation();
      if (i.closest("[data-fancybox]")) return;
      const c = this.content.getBoundingClientRect(),
        u = this.dragStart;
      if (u.time && !this.canZoomOut() && (Math.abs(c.x - u.x) > 2 || Math.abs(c.y - u.y) > 2)) return;
      this.dragStart.time = 0;
      const f = m => {
          this.option("zoom", e) && m && typeof m == "string" && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(m) && typeof this[m] == "function" && (e.preventDefault(), this[m]({
            event: e
          }))
        },
        h = this.option("click", e),
        p = this.option("dblClick", e);
      p ? (this.clicks++, this.clicks == 1 && (this.clickTimer = setTimeout(() => {
        this.clicks === 1 ? (this.emit("click", e), !e.defaultPrevented && h && f(h)) : (this.emit("dblClick", e), e.defaultPrevented || f(p)), this.clicks = 0, this.clickTimer = null
      }, 350))) : (this.emit("click", e), !e.defaultPrevented && h && f(h))
    }
    addTrackingPoint(e) {
      const t = this.trackingPoints.filter(i => i.time > Date.now() - 100);
      t.push(e), this.trackingPoints = t
    }
    onPointerDown(e, t, i) {
      var r;
      if (this.option("touch", e) === !1) return !1;
      this.pwt = 0, this.dragOffset = {
        x: 0,
        y: 0,
        time: 0
      }, this.trackingPoints = [];
      const s = this.content.getBoundingClientRect();
      if (this.dragStart = {
          x: s.x,
          y: s.y,
          top: s.top,
          left: s.left,
          time: Date.now()
        }, this.clickTimer) return !1;
      if (this.panMode === rn && this.targetScale > 1) return e.preventDefault(), e.stopPropagation(), !1;
      const o = e.composedPath()[0];
      if (!i.length) {
        if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
        (r = window.getSelection()) === null || r === void 0 || r.removeAllRanges()
      }
      if (e.type === "mousedown")["A", "BUTTON"].includes(o.nodeName) || e.preventDefault();
      else if (Math.abs(this.velocity.a) > .3) return !1;
      return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(t), this.emit("touchStart", e)), !0
    }
    onPointerMove(e, t, i) {
      if (this.option("touch", e) === !1 || !this.isDragging || t.length < 2 && this.panOnlyZoomed && J(this.targetScale) <= J(this.minScale) || (this.emit("touchMove", e), e.defaultPrevented)) return;
      this.addTrackingPoint(t[0]);
      const {
        content: r
      } = this, s = qp(i[0], i[1]), o = qp(t[0], t[1]);
      let a = 0,
        c = 0;
      if (t.length > 1) {
        const M = r.getBoundingClientRect();
        a = s.clientX - M.left - .5 * M.width, c = s.clientY - M.top - .5 * M.height
      }
      const u = jp(i[0], i[1]),
        f = jp(t[0], t[1]);
      let h = u ? f / u : 1,
        p = o.clientX - s.clientX,
        m = o.clientY - s.clientY;
      this.dragOffset.x += p, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
      let g = J(this.targetScale) === J(this.minScale) && this.option("lockAxis");
      if (g && !this.lockedAxis)
        if (g === "xy" || g === "y" || e.type === "touchmove") {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
          const M = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
          this.lockedAxis = M > 45 && M < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, p = 0, m = 0
        } else this.lockedAxis = g;
      if (sc(e.target, this.content) && (g = "x", this.dragOffset.y = 0), g && g !== "xy" && this.lockedAxis !== g && J(this.targetScale) === J(this.minScale)) return;
      e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
      const y = this.checkBounds(p, m);
      this.option("rubberband") ? (this.isInfinite !== "x" && (y.xDiff > 0 && p < 0 || y.xDiff < 0 && p > 0) && (p *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * y.xDiff))), this.isInfinite !== "y" && (y.yDiff > 0 && m < 0 || y.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * y.yDiff)))) : (y.xDiff && (p = 0), y.yDiff && (m = 0));
      const w = this.targetScale,
        S = this.minScale,
        T = this.maxScale;
      w < .5 * S && (h = Math.max(h, S)), w > 1.5 * T && (h = Math.min(h, T)), this.lockedAxis === "y" && J(w) === J(S) && (p = 0), this.lockedAxis === "x" && J(w) === J(S) && (m = 0), this.applyChange({
        originX: a,
        originY: c,
        panX: p,
        panY: m,
        scale: h,
        friction: this.option("dragFriction"),
        ignoreBounds: !0
      })
    }
    onPointerUp(e, t, i) {
      if (i.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void(this.trackingPoints = []);
      this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(t), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), sc(e.target, this.content) && this.lockedAxis === "y" && (this.trackingPoints = []), this.emit("touchEnd", e), this.isDragging = !1, this.lockedAxis = !1, this.state !== ot.Destroy && (e.defaultPrevented || this.startDecelAnim()))
    }
    startDecelAnim() {
      var e;
      const t = this.isScaling;
      this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
      for (const M of er) this.velocity[M] = 0;
      this.target.e = this.current.e, this.target.f = this.current.f, ht(this.container, "is-scaling"), ht(this.container, "is-animating"), this.isTicking = !1;
      const {
        trackingPoints: i
      } = this, r = i[0], s = i[i.length - 1];
      let o = 0,
        a = 0,
        c = 0;
      s && r && (o = s.clientX - r.clientX, a = s.clientY - r.clientY, c = s.time - r.time);
      const u = ((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1;
      u !== 1 && (o *= u, a *= u);
      let f = 0,
        h = 0,
        p = 0,
        m = 0,
        g = this.option("decelFriction");
      const y = this.targetScale;
      if (c > 0) {
        p = Math.abs(o) > 3 ? o / (c / 30) : 0, m = Math.abs(a) > 3 ? a / (c / 30) : 0;
        const M = this.option("maxVelocity");
        M && (p = Math.max(Math.min(p, M), -1 * M), m = Math.max(Math.min(m, M), -1 * M))
      }
      p && (f = p / (1 / (1 - g) - 1)), m && (h = m / (1 / (1 - g) - 1)), (this.option("lockAxis") === "y" || this.option("lockAxis") === "xy" && this.lockedAxis === "y" && J(y) === this.minScale) && (f = p = 0), (this.option("lockAxis") === "x" || this.option("lockAxis") === "xy" && this.lockedAxis === "x" && J(y) === this.minScale) && (h = m = 0);
      const w = this.dragOffset.x,
        S = this.dragOffset.y,
        T = this.option("dragMinThreshold") || 0;
      Math.abs(w) < T && Math.abs(S) < T && (f = h = 0, p = m = 0), (this.option("zoom") && (y < this.minScale - 1e-5 || y > this.maxScale + 1e-5) || t && !f && !h) && (g = .35), this.applyChange({
        panX: f,
        panY: h,
        friction: g
      }), this.emit("decel", p, m, w, S)
    }
    onWheel(e) {
      var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (s, o) {
        return Math.abs(o) > Math.abs(s) ? o : s
      });
      const i = Math.max(-1, Math.min(1, t));
      if (this.emit("wheel", e, i), this.panMode === rn || e.defaultPrevented) return;
      const r = this.option("wheel");
      r === "pan" ? (e.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
        panX: 2 * -e.deltaX,
        panY: 2 * -e.deltaY,
        bounce: !1
      })) : r === "zoom" && this.option("zoom") !== !1 && this.zoomWithWheel(e)
    }
    onMouseMove(e) {
      this.panWithMouse(e)
    }
    onKeydown(e) {
      e.key === "Escape" && this.toggleFS()
    }
    onResize() {
      this.updateMetrics(), this.checkBounds().inBounds || this.requestTick()
    }
    setTransform() {
      this.emit("beforeTransform");
      const {
        current: e,
        target: t,
        content: i,
        contentRect: r
      } = this, s = Object.assign({}, ul);
      for (const w of er) {
        const S = w == "e" || w === "f" ? dl : LE;
        s[w] = J(e[w], S), Math.abs(t[w] - e[w]) < (w == "e" || w === "f" ? .51 : .001) && (e[w] = t[w])
      }
      let {
        a: o,
        b: a,
        c,
        d: u,
        e: f,
        f: h
      } = s, p = `matrix(${o}, ${a}, ${c}, ${u}, ${f}, ${h})`, m = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
      if (this.option("transformParent") && (m = m.parentElement || m), m.style.transform === p) return;
      m.style.transform = p;
      const {
        contentWidth: g,
        contentHeight: y
      } = this.calculateContentDim();
      r.width = g, r.height = y, this.emit("afterTransform")
    }
    updateMetrics(e = !1) {
      var t;
      if (!this || this.state === ot.Destroy || this.isContentLoading) return;
      const i = Math.max(1, ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1),
        {
          container: r,
          content: s
        } = this,
        o = s instanceof HTMLImageElement,
        a = r.getBoundingClientRect(),
        c = getComputedStyle(this.container);
      let u = a.width * i,
        f = a.height * i;
      const h = parseFloat(c.paddingTop) + parseFloat(c.paddingBottom),
        p = u - (parseFloat(c.paddingLeft) + parseFloat(c.paddingRight)),
        m = f - h;
      this.containerRect = {
        width: u,
        height: f,
        innerWidth: p,
        innerHeight: m
      };
      let g = this.option("width") || "auto",
        y = this.option("height") || "auto";
      g === "auto" && (g = parseFloat(s.dataset.width || "") || (P => {
        let R = 0;
        return R = P instanceof HTMLImageElement ? P.naturalWidth : P instanceof SVGElement ? P.width.baseVal.value : Math.max(P.offsetWidth, P.scrollWidth), R || 0
      })(s)), y === "auto" && (y = parseFloat(s.dataset.height || "") || (P => {
        let R = 0;
        return R = P instanceof HTMLImageElement ? P.naturalHeight : P instanceof SVGElement ? P.height.baseVal.value : Math.max(P.offsetHeight, P.scrollHeight), R || 0
      })(s));
      let w = s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
      this.option("transformParent") && (w = w.parentElement || w);
      const S = w.getAttribute("style") || "";
      w.style.setProperty("transform", "none", "important"), o && (w.style.width = "", w.style.height = ""), w.offsetHeight;
      const T = s.getBoundingClientRect();
      let M = T.width * i,
        k = T.height * i,
        E = 0,
        O = 0;
      o && (Math.abs(g - M) > 1 || Math.abs(y - k) > 1) && ({
        width: M,
        height: k,
        top: E,
        left: O
      } = ((P, R, L, F) => {
        const I = L / F;
        return I > P / R ? (L = P, F = P / I) : (L = R * I, F = R), {
          width: L,
          height: F,
          top: .5 * (R - F),
          left: .5 * (P - L)
        }
      })(M, k, g, y)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
        top: T.top - a.top + E,
        bottom: a.bottom - T.bottom + E,
        left: T.left - a.left + O,
        right: a.right - T.right + O,
        fitWidth: M,
        fitHeight: k,
        width: M,
        height: k,
        fullWidth: g,
        fullHeight: y
      }), w.style.cssText = S, o && (w.style.width = `${M}px`, w.style.height = `${k}px`), this.setTransform(), e !== !0 && this.emit("refresh"), this.ignoreBounds || (J(this.targetScale) < J(this.minScale) ? this.zoomTo(this.minScale, {
        friction: 0
      }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
        friction: 0
      }) : this.state === ot.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls()
    }
    calculateBounds() {
      const {
        contentWidth: e,
        contentHeight: t
      } = this.calculateContentDim(this.target), {
        targetScale: i,
        lockedAxis: r
      } = this, {
        fitWidth: s,
        fitHeight: o
      } = this.contentRect;
      let a = 0,
        c = 0,
        u = 0,
        f = 0;
      const h = this.option("infinite");
      if (h === !0 || r && h === r) a = -1 / 0, u = 1 / 0, c = -1 / 0, f = 1 / 0;
      else {
        let {
          containerRect: p,
          contentRect: m
        } = this, g = J(s * i, dl), y = J(o * i, dl), {
          innerWidth: w,
          innerHeight: S
        } = p;
        if (p.width === g && (w = p.width), p.width === y && (S = p.height), e > w) {
          u = .5 * (e - w), a = -1 * u;
          let T = .5 * (m.right - m.left);
          a += T, u += T
        }
        if (s > w && e < w && (a -= .5 * (s - w), u -= .5 * (s - w)), t > S) {
          f = .5 * (t - S), c = -1 * f;
          let T = .5 * (m.bottom - m.top);
          c += T, f += T
        }
        o > S && t < S && (a -= .5 * (o - S), u -= .5 * (o - S))
      }
      return {
        x: {
          min: a,
          max: u
        },
        y: {
          min: c,
          max: f
        }
      }
    }
    getBounds() {
      const e = this.option("bounds");
      return e !== "auto" ? e : this.calculateBounds()
    }
    updateControls() {
      const e = this,
        t = e.container,
        {
          panMode: i,
          contentRect: r,
          fullScale: s,
          targetScale: o,
          coverScale: a,
          maxScale: c,
          minScale: u
        } = e;
      let f = {
          toggleMax: o - u < .5 * (c - u) ? c : u,
          toggleCover: o - u < .5 * (a - u) ? a : u,
          toggleZoom: o - u < .5 * (s - u) ? s : u
        } [e.option("click") || ""] || u,
        h = e.canZoomIn(),
        p = e.canZoomOut(),
        m = i === $p && !!this.option("touch"),
        g = p && m;
      if (m && (J(o) < J(u) && !this.panOnlyZoomed && (g = !0), (J(r.width, 1) > J(r.fitWidth, 1) || J(r.height, 1) > J(r.fitHeight, 1)) && (g = !0)), J(r.width * o, 1) < J(r.fitWidth, 1) && (g = !1), i === rn && (g = !1), Nn(t, this.cn("isDraggable"), g), !this.option("zoom")) return;
      let y = h && J(f) > J(o),
        w = !y && !g && p && J(f) < J(o);
      Nn(t, this.cn("canZoomIn"), y), Nn(t, this.cn("canZoomOut"), w);
      for (const S of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) h ? (S.removeAttribute("disabled"), S.removeAttribute("tabindex")) : (S.setAttribute("disabled", ""), S.setAttribute("tabindex", "-1"));
      for (const S of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) p ? (S.removeAttribute("disabled"), S.removeAttribute("tabindex")) : (S.setAttribute("disabled", ""), S.setAttribute("tabindex", "-1"));
      for (const S of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
        h || p ? (S.removeAttribute("disabled"), S.removeAttribute("tabindex")) : (S.setAttribute("disabled", ""), S.setAttribute("tabindex", "-1"));
        const T = S.querySelector("g");
        T && (T.style.display = h ? "" : "none")
      }
    }
    panTo({
      x: e = this.target.e,
      y: t = this.target.f,
      scale: i = this.targetScale,
      friction: r = this.option("friction"),
      angle: s = 0,
      originX: o = 0,
      originY: a = 0,
      flipX: c = !1,
      flipY: u = !1,
      ignoreBounds: f = !1
    }) {
      this.state !== ot.Destroy && this.applyChange({
        panX: e - this.target.e,
        panY: t - this.target.f,
        scale: i / this.targetScale,
        angle: s,
        originX: o,
        originY: a,
        friction: r,
        flipX: c,
        flipY: u,
        ignoreBounds: f
      })
    }
    applyChange({
      panX: e = 0,
      panY: t = 0,
      scale: i = 1,
      angle: r = 0,
      originX: s = -this.current.e,
      originY: o = -this.current.f,
      friction: a = this.option("friction"),
      flipX: c = !1,
      flipY: u = !1,
      ignoreBounds: f = !1,
      bounce: h = this.option("bounce")
    }) {
      const p = this.state;
      if (p === ot.Destroy) return;
      this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = a || 0, this.ignoreBounds = f;
      const {
        current: m
      } = this, g = m.e, y = m.f, w = this.getMatrix(this.target);
      let S = new DOMMatrix().translate(g, y).translate(s, o).translate(e, t);
      if (this.option("zoom")) {
        if (!f) {
          const T = this.targetScale,
            M = this.minScale,
            k = this.maxScale;
          T * i < M && (i = M / T), T * i > k && (i = k / T)
        }
        S = S.scale(i)
      }
      S = S.translate(-s, -o).translate(-g, -y).multiply(w), r && (S = S.rotate(r)), c && (S = S.scale(-1, 1)), u && (S = S.scale(1, -1));
      for (const T of er) T !== "e" && T !== "f" && (S[T] > this.minScale + 1e-5 || S[T] < this.minScale - 1e-5) ? this.target[T] = S[T] : this.target[T] = J(S[T], dl);
      (this.targetScale < this.scale || Math.abs(i - 1) > .1 || this.panMode === rn || h === !1) && !f && this.clampTargetBounds(), p === ot.Init ? this.animate() : this.isResting || (this.state = ot.Panning, this.requestTick())
    }
    stop(e = !1) {
      if (this.state === ot.Init || this.state === ot.Destroy) return;
      const t = this.isTicking;
      this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
      for (const i of er) this.velocity[i] = 0, e === "current" ? this.current[i] = this.target[i] : e === "target" && (this.target[i] = this.current[i]);
      this.setTransform(), ht(this.container, "is-scaling"), ht(this.container, "is-animating"), this.isTicking = !1, this.state = ot.Ready, t && (this.emit("endAnimation"), this.updateControls())
    }
    requestTick() {
      this.isTicking || (this.emit("startAnimation"), this.updateControls(), ve(this.container, "is-animating"), this.isScaling && ve(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()))
    }
    panWithMouse(e, t = this.option("mouseMoveFriction")) {
      if (this.pmme = e, this.panMode !== rn || !e || J(this.targetScale) <= J(this.minScale)) return;
      this.emit("mouseMove", e);
      const {
        container: i,
        containerRect: r,
        contentRect: s
      } = this, o = r.width, a = r.height, c = i.getBoundingClientRect(), u = (e.clientX || 0) - c.left, f = (e.clientY || 0) - c.top;
      let {
        contentWidth: h,
        contentHeight: p
      } = this.calculateContentDim(this.target);
      const m = this.option("mouseMoveFactor");
      m > 1 && (h !== o && (h *= m), p !== a && (p *= m));
      let g = .5 * (h - o) - u / o * 100 / 100 * (h - o);
      g += .5 * (s.right - s.left);
      let y = .5 * (p - a) - f / a * 100 / 100 * (p - a);
      y += .5 * (s.bottom - s.top), this.applyChange({
        panX: g - this.target.e,
        panY: y - this.target.f,
        friction: t
      })
    }
    zoomWithWheel(e) {
      if (this.state === ot.Destroy || this.state === ot.Init) return;
      const t = Date.now();
      if (t - this.pwt < 45) return void e.preventDefault();
      this.pwt = t;
      var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (u, f) {
        return Math.abs(f) > Math.abs(u) ? f : u
      });
      const r = Math.max(-1, Math.min(1, i)),
        {
          targetScale: s,
          maxScale: o,
          minScale: a
        } = this;
      let c = s * (100 + 45 * r) / 100;
      J(c) < J(a) && J(s) <= J(a) ? (this.cwd += Math.abs(r), c = a) : J(c) > J(o) && J(s) >= J(o) ? (this.cwd += Math.abs(r), c = o) : (this.cwd = 0, c = Math.max(Math.min(c, o), a)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), J(c) !== J(s) && this.zoomTo(c, {
        event: e
      }))
    }
    canZoomIn() {
      return this.option("zoom") && (J(this.contentRect.width, 1) < J(this.contentRect.fitWidth, 1) || J(this.targetScale) < J(this.maxScale))
    }
    canZoomOut() {
      return this.option("zoom") && J(this.targetScale) > J(this.minScale)
    }
    zoomIn(e = 1.25, t) {
      this.zoomTo(this.targetScale * e, t)
    }
    zoomOut(e = .8, t) {
      this.zoomTo(this.targetScale * e, t)
    }
    zoomToFit(e) {
      this.zoomTo("fit", e)
    }
    zoomToCover(e) {
      this.zoomTo("cover", e)
    }
    zoomToFull(e) {
      this.zoomTo("full", e)
    }
    zoomToMax(e) {
      this.zoomTo("max", e)
    }
    toggleZoom(e) {
      this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", e)
    }
    toggleMax(e) {
      this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", e)
    }
    toggleCover(e) {
      this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", e)
    }
    iterateZoom(e) {
      this.zoomTo("next", e)
    }
    zoomTo(e = 1, {
      friction: t = "auto",
      originX: i = "auto",
      originY: r = "auto",
      event: s
    } = {}) {
      if (this.isContentLoading || this.state === ot.Destroy) return;
      const {
        targetScale: o
      } = this;
      this.stop();
      let a = 1;
      if (this.panMode === rn && (s = this.pmme || s), s || i === "auto" || r === "auto") {
        const h = this.content.getBoundingClientRect(),
          p = this.container.getBoundingClientRect(),
          m = s ? s.clientX : p.left + .5 * p.width,
          g = s ? s.clientY : p.top + .5 * p.height;
        i = m - h.left - .5 * h.width, r = g - h.top - .5 * h.height
      }
      const c = this.fullScale,
        u = this.maxScale,
        f = this.coverScale;
      if (typeof e == "number") a = e / o || 1;
      else if (e === "full") a = c / o || 1;
      else if (e === "cover") a = f / o || 1;
      else if (e === "max") a = u / o || 1;
      else if (e === "fit") a = 1 / o || 1;
      else if (e === "next") {
        let h = [1, c, u].sort((m, g) => m - g),
          p = h.findIndex(m => m > o + 1e-5);
        a = h[p] / o || 1 / o
      }
      t = t === "auto" ? a > 1 ? .15 : .25 : t, this.applyChange({
        scale: a,
        originX: i,
        originY: r,
        friction: t
      }), s && this.panMode === rn && this.panWithMouse(s, t)
    }
    rotateCCW() {
      this.applyChange({
        angle: -90
      })
    }
    rotateCW() {
      this.applyChange({
        angle: 90
      })
    }
    flipX() {
      this.applyChange({
        flipX: !0
      })
    }
    flipY() {
      this.applyChange({
        flipY: !0
      })
    }
    fitX() {
      this.stop("target");
      const {
        containerRect: e,
        contentRect: t,
        target: i
      } = this;
      this.applyChange({
        panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
        panY: .5 * e.height - (t.top + .5 * t.fitHeight) - i.f,
        scale: e.width / t.fitWidth / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0
      })
    }
    fitY() {
      this.stop("target");
      const {
        containerRect: e,
        contentRect: t,
        target: i
      } = this;
      this.applyChange({
        panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
        panY: .5 * e.innerHeight - (t.top + .5 * t.fitHeight) - i.f,
        scale: e.height / t.fitHeight / this.targetScale,
        originX: 0,
        originY: 0,
        ignoreBounds: !0
      })
    }
    toggleFS() {
      const {
        container: e
      } = this, t = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
      e.classList.toggle(t);
      const r = e.classList.contains(t);
      r ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(r ? "enterFS" : "exitFS")
    }
    getMatrix(e = this.current) {
      const {
        a: t,
        b: i,
        c: r,
        d: s,
        e: o,
        f: a
      } = e;
      return new DOMMatrix([t, i, r, s, o, a])
    }
    reset(e) {
      if (this.state !== ot.Init && this.state !== ot.Destroy) {
        this.stop("current");
        for (const t of er) this.target[t] = ul[t];
        this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = e === void 0 ? this.option("friction") : e, this.state = ot.Panning, this.requestTick())
      }
    }
    destroy() {
      this.stop(), this.state = ot.Destroy, this.detachEvents(), this.detachObserver();
      const {
        container: e,
        content: t
      } = this, i = this.option("classes") || {};
      for (const r of Object.values(i)) e.classList.remove(r + "");
      t && (t.removeEventListener("load", this.onLoad), t.removeEventListener("error", this.onError)), this.detachPlugins()
    }
  }
  Object.defineProperty(Ss, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: AE
  }), Object.defineProperty(Ss, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  });
  const Up = function (n, e) {
      let t = !0;
      return (...i) => {
        t && (t = !1, n(...i), setTimeout(() => {
          t = !0
        }, e))
      }
    },
    Bp = (n, e) => {
      let t = [];
      return n.childNodes.forEach(i => {
        i.nodeType !== Node.ELEMENT_NODE || e && !i.matches(e) || t.push(i)
      }), t
    },
    RE = {
      viewport: null,
      track: null,
      enabled: !0,
      slides: [],
      axis: "x",
      transition: "fade",
      preload: 1,
      slidesPerPage: "auto",
      initialPage: 0,
      friction: .12,
      Panzoom: {
        decelFriction: .12
      },
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      adaptiveHeight: !1,
      direction: "ltr",
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected"
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
      }
    };
  var Bt;
  (function (n) {
    n[n.Init = 0] = "Init", n[n.Ready = 1] = "Ready", n[n.Destroy = 2] = "Destroy"
  })(Bt || (Bt = {}));
  const Iu = n => {
      if (typeof n == "string" || n instanceof HTMLElement) n = {
        html: n
      };
      else {
        const e = n.thumb;
        e !== void 0 && (typeof e == "string" && (n.thumbSrc = e), e instanceof HTMLImageElement && (n.thumbEl = e, n.thumbElSrc = e.src, n.thumbSrc = e.src), delete n.thumb)
      }
      return Object.assign({
        html: "",
        el: null,
        isDom: !1,
        class: "",
        customClass: "",
        index: -1,
        dim: 0,
        gap: 0,
        pos: 0,
        transition: !1
      }, n)
    },
    IE = (n = {}) => Object.assign({
      index: -1,
      slides: [],
      dim: 0,
      pos: -1
    }, n);
  class Pn extends oc {
    constructor(e, t) {
      super(t), Object.defineProperty(this, "instance", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      })
    }
    attach() {}
    detach() {}
  }
  const YE = {
    classes: {
      list: "f-carousel__dots",
      isDynamic: "is-dynamic",
      hasDots: "has-dots",
      dot: "f-carousel__dot",
      isBeforePrev: "is-before-prev",
      isPrev: "is-prev",
      isCurrent: "is-current",
      isNext: "is-next",
      isAfterNext: "is-after-next"
    },
    dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2
  };
  class lv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "isDynamic", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(this, "list", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    onRefresh() {
      this.refresh()
    }
    build() {
      let e = this.list;
      if (!e) {
        e = document.createElement("ul"), ve(e, this.cn("list")), e.setAttribute("role", "tablist");
        const t = this.instance.container;
        t.appendChild(e), ve(t, this.cn("hasDots")), this.list = e
      }
      return e
    }
    refresh() {
      var e;
      const t = this.instance.pages.length,
        i = Math.min(2, this.option("minCount")),
        r = Math.max(2e3, this.option("maxCount")),
        s = this.option("dynamicFrom");
      if (t < i || t > r) return void this.cleanup();
      const o = typeof s == "number" && t > 5 && t >= s,
        a = !this.list || this.isDynamic !== o || this.list.children.length !== t;
      a && this.cleanup();
      const c = this.build();
      if (Nn(c, this.cn("isDynamic"), !!o), a)
        for (let h = 0; h < t; h++) c.append(this.createItem(h));
      let u, f = 0;
      for (const h of [...c.children]) {
        const p = f === this.instance.page;
        p && (u = h), Nn(h, this.cn("isCurrent"), p), (e = h.children[0]) === null || e === void 0 || e.setAttribute("aria-selected", p ? "true" : "false");
        for (const m of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) ht(h, this.cn(m));
        f++
      }
      if (u = u || c.firstChild, o && u) {
        const h = u.previousElementSibling,
          p = h && h.previousElementSibling;
        ve(h, this.cn("isPrev")), ve(p, this.cn("isBeforePrev"));
        const m = u.nextElementSibling,
          g = m && m.nextElementSibling;
        ve(m, this.cn("isNext")), ve(g, this.cn("isAfterNext"))
      }
      this.isDynamic = o
    }
    createItem(e = 0) {
      var t;
      const i = document.createElement("li");
      i.setAttribute("role", "presentation");
      const r = Fn(this.instance.localize(this.option("dotTpl"), [
        ["%d", e + 1]
      ]).replace(/\%i/g, e + ""));
      return i.appendChild(r), (t = i.children[0]) === null || t === void 0 || t.setAttribute("role", "tab"), i
    }
    cleanup() {
      this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, ht(this.instance.container, this.cn("hasDots"))
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh)
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
    }
  }
  Object.defineProperty(lv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: YE
  });
  const fl = "disabled",
    hl = "next",
    Gp = "prev";
  class cv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "prev", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "next", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "isDom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      })
    }
    onRefresh() {
      const e = this.instance,
        t = e.pages.length,
        i = e.page;
      if (t < 2) return void this.cleanup();
      this.build();
      let r = this.prev,
        s = this.next;
      r && s && (r.removeAttribute(fl), s.removeAttribute(fl), e.isInfinite || (i <= 0 && r.setAttribute(fl, ""), i >= t - 1 && s.setAttribute(fl, "")))
    }
    addBtn(e) {
      var t;
      const i = this.instance,
        r = document.createElement("button");
      r.setAttribute("tabindex", "0"), r.setAttribute("title", i.localize(`{{${e.toUpperCase()}}}`)), ve(r, this.cn("button") + " " + this.cn(e === hl ? "isNext" : "isPrev"));
      const s = i.isRTL ? e === hl ? Gp : hl : e;
      var o;
      return r.innerHTML = i.localize(this.option(`${s}Tpl`)), r.dataset[`carousel${o=e,o?o.match("^[a-z]")?o.charAt(0).toUpperCase()+o.substring(1):o:""}`] = "true", (t = this.container) === null || t === void 0 || t.appendChild(r), r
    }
    build() {
      const e = this.instance.container,
        t = this.cn("container");
      let {
        container: i,
        prev: r,
        next: s
      } = this;
      i || (i = e.querySelector("." + t), this.isDom = !!i), i || (i = document.createElement("div"), ve(i, t), e.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), s || (s = this.addBtn(hl)), this.next = s, r || (r = i.querySelector("[data-carousel-prev]")), r || (r = this.addBtn(Gp)), this.prev = r
    }
    cleanup() {
      this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = !1
    }
    attach() {
      this.instance.on(["refresh", "change"], this.onRefresh)
    }
    detach() {
      this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
    }
  }
  Object.defineProperty(cv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      classes: {
        container: "f-carousel__nav",
        button: "f-button",
        isNext: "is-next",
        isPrev: "is-prev"
      },
      nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
      prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
    }
  });
  class uv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "selectedIndex", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "target", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "nav", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    addAsTargetFor(e) {
      this.target = this.instance, this.nav = e, this.attachEvents()
    }
    addAsNavFor(e) {
      this.nav = this.instance, this.target = e, this.attachEvents()
    }
    attachEvents() {
      const {
        nav: e,
        target: t
      } = this;
      e && t && (e.options.initialSlide = t.options.initialPage, e.state === Bt.Ready ? this.onNavReady(e) : e.on("ready", this.onNavReady), t.state === Bt.Ready ? this.onTargetReady(t) : t.on("ready", this.onTargetReady))
    }
    onNavReady(e) {
      e.on("createSlide", this.onNavCreateSlide), e.on("Panzoom.click", this.onNavClick), e.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange()
    }
    onTargetReady(e) {
      e.on("change", this.onTargetChange), e.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange()
    }
    onNavClick(e, t, i) {
      this.onNavTouch(e, e.panzoom, i)
    }
    onNavTouch(e, t, i) {
      var r, s;
      if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3) return;
      const o = i.target,
        {
          nav: a,
          target: c
        } = this;
      if (!a || !c || !o) return;
      const u = o.closest("[data-index]");
      if (i.stopPropagation(), i.preventDefault(), !u) return;
      const f = parseInt(u.dataset.index || "", 10) || 0,
        h = c.getPageForSlide(f),
        p = a.getPageForSlide(f);
      a.slideTo(p), c.slideTo(h, {
        friction: ((s = (r = this.nav) === null || r === void 0 ? void 0 : r.plugins) === null || s === void 0 ? void 0 : s.Sync.option("friction")) || 0
      }), this.markSelectedSlide(f)
    }
    onNavCreateSlide(e, t) {
      t.index === this.selectedIndex && this.markSelectedSlide(t.index)
    }
    onTargetChange() {
      var e, t;
      const {
        target: i,
        nav: r
      } = this;
      if (!i || !r || r.state !== Bt.Ready || i.state !== Bt.Ready) return;
      const s = (t = (e = i.pages[i.page]) === null || e === void 0 ? void 0 : e.slides[0]) === null || t === void 0 ? void 0 : t.index,
        o = r.getPageForSlide(s);
      this.markSelectedSlide(s), r.slideTo(o, r.prevPage === null && i.prevPage === null ? {
        friction: 0
      } : void 0)
    }
    markSelectedSlide(e) {
      const t = this.nav;
      t && t.state === Bt.Ready && (this.selectedIndex = e, [...t.slides].map(i => {
        i.el && i.el.classList[i.index === e ? "add" : "remove"]("is-nav-selected")
      }))
    }
    attach() {
      const e = this;
      let t = e.options.target,
        i = e.options.nav;
      t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i)
    }
    detach() {
      const e = this,
        t = e.nav,
        i = e.target;
      t && (t.off("ready", e.onNavReady), t.off("createSlide", e.onNavCreateSlide), t.off("Panzoom.click", e.onNavClick), t.off("Panzoom.touchEnd", e.onNavTouch)), e.nav = null, i && (i.off("ready", e.onTargetReady), i.off("refresh", e.onTargetChange), i.off("change", e.onTargetChange)), e.target = null
    }
  }
  Object.defineProperty(uv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      friction: .35
    }
  });
  const FE = {
      Navigation: cv,
      Dots: lv,
      Sync: uv
    },
    pl = "animationend",
    Xp = "isSelected",
    ml = "slide";
  class vs extends Df {
    get axis() {
      return this.isHorizontal ? "e" : "f"
    }
    get isEnabled() {
      return this.state === Bt.Ready
    }
    get isInfinite() {
      let e = !1;
      const {
        contentDim: t,
        viewportDim: i,
        pages: r,
        slides: s
      } = this, o = s[0];
      return r.length >= 2 && o && t + o.dim >= i && (e = this.option("infinite")), e
    }
    get isRTL() {
      return this.option("direction") === "rtl"
    }
    get isHorizontal() {
      return this.option("axis") === "x"
    }
    constructor(e, t = {}, i = {}) {
      if (super(), Object.defineProperty(this, "bp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ""
        }), Object.defineProperty(this, "lp", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "userOptions", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {}
        }), Object.defineProperty(this, "userPlugins", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {}
        }), Object.defineProperty(this, "state", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bt.Init
        }), Object.defineProperty(this, "page", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "prevPage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "container", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0
        }), Object.defineProperty(this, "viewport", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "track", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "slides", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: []
        }), Object.defineProperty(this, "pages", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: []
        }), Object.defineProperty(this, "panzoom", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: null
        }), Object.defineProperty(this, "inTransition", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Set
        }), Object.defineProperty(this, "contentDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), Object.defineProperty(this, "viewportDim", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0
        }), typeof e == "string" && (e = document.querySelector(e)), !e || !Pi(e)) throw new Error("No Element found");
      this.container = e, this.slideNext = Up(this.slideNext.bind(this), 150), this.slidePrev = Up(this.slidePrev.bind(this), 150), this.userOptions = t, this.userPlugins = i, queueMicrotask(() => {
        this.processOptions()
      })
    }
    processOptions() {
      var e, t;
      const i = Yi({}, vs.defaults, this.userOptions);
      let r = "";
      const s = i.breakpoints;
      if (s && Cd(s))
        for (const [o, a] of Object.entries(s)) window.matchMedia(o).matches && Cd(a) && (r += o, Yi(i, a));
      r === this.bp && this.state !== Bt.Init || (this.bp = r, this.state === Bt.Ready && (i.initialSlide = ((t = (e = this.pages[this.page]) === null || e === void 0 ? void 0 : e.slides[0]) === null || t === void 0 ? void 0 : t.index) || 0), this.state !== Bt.Init && this.destroy(), super.setOptions(i), this.option("enabled") === !1 ? this.attachEvents() : setTimeout(() => {
        this.init()
      }, 0))
    }
    init() {
      this.state = Bt.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, vs.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = Bt.Ready, this.emit("ready")
    }
    initLayout() {
      const {
        container: e
      } = this, t = this.option("classes");
      ve(e, this.cn("container")), Nn(e, t.isLTR, !this.isRTL), Nn(e, t.isRTL, this.isRTL), Nn(e, t.isVertical, !this.isHorizontal), Nn(e, t.isHorizontal, this.isHorizontal);
      let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
      i || (i = document.createElement("div"), ve(i, t.viewport), i.append(...Bp(e, `.${t.slide}`)), e.prepend(i)), i.addEventListener("scroll", this.onScroll);
      let r = this.option("track") || e.querySelector(`.${t.track}`);
      r || (r = document.createElement("div"), ve(r, t.track), r.append(...Array.from(i.childNodes))), r.setAttribute("aria-live", "polite"), i.contains(r) || i.prepend(r), this.viewport = i, this.track = r, this.emit("initLayout")
    }
    initSlides() {
      const {
        track: e
      } = this;
      if (!e) return;
      const t = [...this.slides],
        i = [];
      [...Bp(e, `.${this.cn(ml)}`)].forEach(r => {
        if (Pi(r)) {
          const s = Iu({
            el: r,
            isDom: !0,
            index: this.slides.length
          });
          i.push(s)
        }
      });
      for (let r of [...this.option("slides", []) || [], ...t]) {
        const s = Iu(r);
        i.push(s)
      }
      this.slides = i;
      for (let r = 0; r < this.slides.length; r++) this.slides[r].index = r;
      for (const r of i) this.emit("beforeInitSlide", r, r.index), this.emit("initSlide", r, r.index);
      this.emit("initSlides")
    }
    setInitialPage() {
      const e = this.option("initialSlide");
      this.page = typeof e == "number" ? this.getPageForSlide(e) : parseInt(this.option("initialPage", 0) + "", 10) || 0
    }
    setInitialPosition() {
      const {
        track: e,
        pages: t,
        isHorizontal: i
      } = this;
      if (!e || !t.length) return;
      let r = this.page;
      t[r] || (this.page = r = 0);
      const s = (t[r].pos || 0) * (this.isRTL && i ? 1 : -1),
        o = i ? `${s}px` : "0",
        a = i ? "0" : `${s}px`;
      e.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight()
    }
    initPanzoom() {
      this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
      const e = this.option("Panzoom") || {};
      this.panzoom = new Ss(this.viewport, Yi({}, {
        content: this.track,
        zoom: !1,
        panOnlyZoomed: !1,
        lockAxis: this.isHorizontal ? "x" : "y",
        infinite: this.isInfinite,
        click: !1,
        dblClick: !1,
        touch: t => !(this.pages.length < 2 && !t.options.infinite),
        bounds: () => this.getBounds(),
        maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
      }, e)), this.panzoom.on("*", (t, i, ...r) => {
        this.emit(`Panzoom.${i}`, t, ...r)
      }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation)
    }
    attachEvents() {
      const e = this.container;
      e && (e.addEventListener("click", this.onClick, {
        passive: !1,
        capture: !1
      }), e.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize)
    }
    createPages() {
      let e = [];
      const {
        contentDim: t,
        viewportDim: i
      } = this;
      let r = this.option("slidesPerPage");
      r = (r === "auto" || t <= i) && this.option("fill") !== !1 ? 1 / 0 : parseFloat(r + "");
      let s = 0,
        o = 0,
        a = 0;
      for (const c of this.slides)(!e.length || o + c.dim - i > .05 || a >= r) && (e.push(IE()), s = e.length - 1, o = 0, a = 0), e[s].slides.push(c), o += c.dim + c.gap, a++;
      return e
    }
    processPages() {
      const e = this.pages,
        {
          contentDim: t,
          viewportDim: i,
          isInfinite: r
        } = this,
        s = this.option("center"),
        o = this.option("fill"),
        a = o && s && t > i && !r;
      if (e.forEach((f, h) => {
          var p;
          f.index = h, f.pos = ((p = f.slides[0]) === null || p === void 0 ? void 0 : p.pos) || 0, f.dim = 0;
          for (const [m, g] of f.slides.entries()) f.dim += g.dim, m < f.slides.length - 1 && (f.dim += g.gap);
          a && f.pos + .5 * f.dim < .5 * i ? f.pos = 0 : a && f.pos + .5 * f.dim >= t - .5 * i ? f.pos = t - i : s && (f.pos += -.5 * (i - f.dim))
        }), e.forEach((f, h) => {
          o && !r && t > i && (f.pos = Math.max(f.pos, 0), f.pos = Math.min(f.pos, t - i)), f.pos = J(f.pos, 1e3), f.dim = J(f.dim, 1e3), Math.abs(f.pos) <= .1 && (f.pos = 0)
        }), r) return e;
      const c = [];
      let u;
      return e.forEach(f => {
        const h = Object.assign({}, f);
        u && h.pos === u.pos ? (u.dim += h.dim, u.slides = [...u.slides, ...h.slides]) : (h.index = c.length, u = h, c.push(h))
      }), c
    }
    getPageFromIndex(e = 0) {
      const t = this.pages.length;
      let i;
      return e = parseInt((e || 0).toString()) || 0, i = this.isInfinite ? (e % t + t) % t : Math.max(Math.min(e, t - 1), 0), i
    }
    getSlideMetrics(e) {
      var t, i;
      const r = this.isHorizontal ? "width" : "height";
      let s = 0,
        o = 0,
        a = e.el;
      const c = a && !a.parentNode;
      if (a ? s = parseFloat(a.dataset[r] || "") || 0 : (a = document.createElement("div"), a.style.visibility = "hidden", (this.track || document.body).prepend(a)), ve(a, this.cn(ml) + " " + e.class + " " + e.customClass), s) a.style[r] = `${s}px`, a.style[r === "width" ? "height" : "width"] = "";
      else {
        c && (this.track || document.body).prepend(a);
        const f = Math.max(1, ((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1);
        s = a.getBoundingClientRect()[r] * f
      }
      const u = getComputedStyle(a);
      return u.boxSizing === "content-box" && (this.isHorizontal ? (s += parseFloat(u.paddingLeft) || 0, s += parseFloat(u.paddingRight) || 0) : (s += parseFloat(u.paddingTop) || 0, s += parseFloat(u.paddingBottom) || 0)), o = parseFloat(u[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, c ? (i = a.parentElement) === null || i === void 0 || i.removeChild(a) : e.el || a.remove(), {
        dim: J(s, 1e3),
        gap: J(o, 1e3)
      }
    }
    getBounds() {
      const {
        isInfinite: e,
        isRTL: t,
        isHorizontal: i,
        pages: r
      } = this;
      let s = {
        min: 0,
        max: 0
      };
      if (e) s = {
        min: -1 / 0,
        max: 1 / 0
      };
      else if (r.length) {
        const o = r[0].pos,
          a = r[r.length - 1].pos;
        s = t && i ? {
          min: o,
          max: a
        } : {
          min: -1 * a,
          max: -1 * o
        }
      }
      return {
        x: i ? s : {
          min: 0,
          max: 0
        },
        y: i ? {
          min: 0,
          max: 0
        } : s
      }
    }
    repositionSlides() {
      let e, {
          isHorizontal: t,
          isRTL: i,
          isInfinite: r,
          viewport: s,
          viewportDim: o,
          contentDim: a,
          page: c,
          pages: u,
          slides: f,
          panzoom: h
        } = this,
        p = 0,
        m = 0,
        g = 0,
        y = 0;
      h ? y = -1 * h.current[this.axis] : u[c] && (y = u[c].pos || 0), e = t ? i ? "right" : "left" : "top", i && t && (y *= -1);
      for (const M of f) {
        const k = M.el;
        k ? (e === "top" ? (k.style.right = "", k.style.left = "") : k.style.top = "", M.index !== p ? k.style[e] = m === 0 ? "" : `${J(m,1e3)}px` : k.style[e] = "", g += M.dim + M.gap, p++) : m += M.dim + M.gap
      }
      if (r && g && s) {
        let M = getComputedStyle(s),
          k = "padding",
          E = t ? "Right" : "Bottom",
          O = parseFloat(M[k + (t ? "Left" : "Top")]);
        y -= O, o += O, o += parseFloat(M[k + E]);
        for (const P of f) P.el && (J(P.pos) < J(o) && J(P.pos + P.dim + P.gap) < J(y) && J(y) > J(a - o) && (P.el.style[e] = `${J(m+g,1e3)}px`), J(P.pos + P.gap) >= J(a - o) && J(P.pos) > J(y + o) && J(y) < J(o) && (P.el.style[e] = `-${J(g,1e3)}px`))
      }
      let w, S, T = [...this.inTransition];
      if (T.length > 1 && (w = u[T[0]], S = u[T[1]]), w && S) {
        let M = 0;
        for (const k of f) k.el ? this.inTransition.has(k.index) && w.slides.indexOf(k) < 0 && (k.el.style[e] = `${J(M+(w.pos-S.pos),1e3)}px`) : M += k.dim + k.gap
      }
    }
    createSlideEl(e) {
      const {
        track: t,
        slides: i
      } = this;
      if (!t || !e || e.el && e.el.parentNode) return;
      const r = e.el || document.createElement("div");
      ve(r, this.cn(ml)), ve(r, e.class), ve(r, e.customClass);
      const s = e.html;
      s && (s instanceof HTMLElement ? r.appendChild(s) : r.innerHTML = e.html + "");
      const o = [];
      i.forEach((f, h) => {
        f.el && o.push(h)
      });
      const a = e.index;
      let c = null;
      o.length && (c = i[o.reduce((f, h) => Math.abs(h - a) < Math.abs(f - a) ? h : f)]);
      const u = c && c.el && c.el.parentNode ? c.index < e.index ? c.el.nextSibling : c.el : null;
      t.insertBefore(r, t.contains(u) ? u : null), e.el = r, this.emit("createSlide", e)
    }
    removeSlideEl(e, t = !1) {
      const i = e.el;
      if (!i || !i.parentNode) return;
      const r = this.cn(Xp);
      if (i.classList.contains(r) && (ht(i, r), this.emit("unselectSlide", e)), e.isDom && !t) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), void(i.style.left = "");
      this.emit("removeSlide", e);
      const s = new CustomEvent(pl);
      i.dispatchEvent(s), e.el && (e.el.remove(), e.el = null)
    }
    transitionTo(e = 0, t = this.option("transition")) {
      var i, r, s, o;
      if (!t) return !1;
      const a = this.page,
        {
          pages: c,
          panzoom: u
        } = this;
      e = parseInt((e || 0).toString()) || 0;
      const f = this.getPageFromIndex(e);
      if (!u || !c[f] || c.length < 2 || Math.abs((((r = (i = c[a]) === null || i === void 0 ? void 0 : i.slides[0]) === null || r === void 0 ? void 0 : r.dim) || 0) - this.viewportDim) > 1) return !1;
      const h = e > a ? 1 : -1,
        p = c[f].pos * (this.isRTL ? 1 : -1);
      if (a === f && Math.abs(p - u.target[this.axis]) < 1) return !1;
      this.clearTransitions();
      const m = u.isResting;
      ve(this.container, this.cn("inTransition"));
      const g = ((s = c[a]) === null || s === void 0 ? void 0 : s.slides[0]) || null,
        y = ((o = c[f]) === null || o === void 0 ? void 0 : o.slides[0]) || null;
      this.inTransition.add(y.index), this.createSlideEl(y);
      let w = g.el,
        S = y.el;
      m || t === ml || (t = "fadeFast", w = null);
      const T = this.isRTL ? "next" : "prev",
        M = this.isRTL ? "prev" : "next";
      return w && (this.inTransition.add(g.index), g.transition = t, w.addEventListener(pl, this.onAnimationEnd), w.classList.add(`f-${t}Out`, `to-${h>0?M:T}`)), S && (y.transition = t, S.addEventListener(pl, this.onAnimationEnd), S.classList.add(`f-${t}In`, `from-${h>0?T:M}`)), u.current[this.axis] = p, u.target[this.axis] = p, u.requestTick(), this.onChange(f), !0
    }
    manageSlideVisiblity() {
      const e = new Set,
        t = new Set,
        i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
      for (const r of this.slides) i.has(r) ? e.add(r) : t.add(r);
      for (const r of this.inTransition) e.add(this.slides[r]);
      for (const r of e) this.createSlideEl(r), this.lazyLoadSlide(r);
      for (const r of t) e.has(r) || this.removeSlideEl(r);
      this.markSelectedSlides(), this.repositionSlides()
    }
    markSelectedSlides() {
      if (!this.pages[this.page] || !this.pages[this.page].slides) return;
      const e = "aria-hidden";
      let t = this.cn(Xp);
      if (t)
        for (const i of this.slides) {
          const r = i.el;
          r && (r.dataset.index = `${i.index}`, r.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? r.removeAttribute(e) : r.setAttribute(e, "true") : this.pages[this.page].slides.includes(i) ? (r.classList.contains(t) || (ve(r, t), this.emit("selectSlide", i)), r.removeAttribute(e)) : (r.classList.contains(t) && (ht(r, t), this.emit("unselectSlide", i)), r.setAttribute(e, "true")))
        }
    }
    flipInfiniteTrack() {
      const e = this.panzoom;
      if (!e || !this.isInfinite) return;
      const t = this.option("axis") === "x" ? "e" : "f",
        {
          viewportDim: i,
          contentDim: r
        } = this;
      let s = e.current[t],
        o = e.target[t] - s,
        a = 0,
        c = .5 * i,
        u = r;
      this.isRTL && this.isHorizontal ? (s < -c && (a = -1, s += u), s > u - c && (a = 1, s -= u)) : (s > c && (a = 1, s -= u), s < -u + c && (a = -1, s += u)), a && (e.current[t] = s, e.target[t] = s + o)
    }
    lazyLoadSlide(e) {
      const t = this,
        i = e && e.el;
      if (!i) return;
      const r = new Set,
        s = "f-fadeIn";
      i.querySelectorAll("[data-lazy-srcset]").forEach(c => {
        c instanceof HTMLImageElement && r.add(c)
      });
      let o = Array.from(i.querySelectorAll("[data-lazy-src]"));
      i.dataset.lazySrc && o.push(i), o.map(c => {
        c instanceof HTMLImageElement ? r.add(c) : Pi(c) && (c.style.backgroundImage = `url('${c.dataset.lazySrc||""}')`, delete c.dataset.lazySrc)
      });
      const a = (c, u, f) => {
        f && (f.remove(), f = null), u.complete && (u.classList.add(s), setTimeout(() => {
          u.classList.remove(s)
        }, 350), u.style.visibility = ""), this.option("adaptiveHeight") && c.el && this.pages[this.page].slides.indexOf(c) > -1 && (t.updateMetrics(), t.setViewportHeight()), this.emit("load", c)
      };
      for (const c of r) {
        let u = null;
        c.src = c.dataset.lazySrcset || c.dataset.lazySrc || "", delete c.dataset.lazySrc, delete c.dataset.lazySrcset, c.style.visibility = "hidden", c.addEventListener("error", () => {
          a(e, c, u)
        }), c.addEventListener("load", () => {
          a(e, c, u)
        }), setTimeout(() => {
          c.parentNode && e.el && (c.complete ? a(e, c, u) : (u = Fn(Af), c.parentNode.insertBefore(u, c)))
        }, 300)
      }
    }
    onAnimationEnd(e) {
      var t;
      const i = e.target,
        r = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
        s = this.slides[r],
        o = e.animationName;
      if (!i || !s || !o) return;
      const a = !!this.inTransition.has(r) && s.transition;
      a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(r), this.inTransition.size || this.clearTransitions(), r === this.page && (!((t = this.panzoom) === null || t === void 0) && t.isResting) && this.emit("settle")
    }
    onDecel(e, t = 0, i = 0, r = 0, s = 0) {
      const {
        isRTL: o,
        isHorizontal: a,
        axis: c,
        pages: u
      } = this, f = u.length, h = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
      let p = 0;
      if (p = h > 45 && h < 135 ? a ? 0 : i : a ? t : 0, !f) return;
      const m = this.option("dragFree");
      let g = this.page,
        y = o && a ? 1 : -1;
      const w = e.target[c] * y,
        S = e.current[c] * y;
      let {
        pageIndex: T
      } = this.getPageFromPosition(w), {
        pageIndex: M
      } = this.getPageFromPosition(S);
      m ? this.onChange(T) : (Math.abs(p) > 5 ? (u[g].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (g = M), g = o && a ? p < 0 ? g - 1 : g + 1 : p < 0 ? g + 1 : g - 1) : g = r === 0 && s === 0 ? g : M, this.slideTo(g, {
        transition: !1,
        friction: e.option("decelFriction")
      }))
    }
    onClick(e) {
      const t = e.target,
        i = t && Pi(t) ? t.dataset : null;
      let r, s;
      i && (i.carouselPage !== void 0 ? (s = "slideTo", r = i.carouselPage) : i.carouselNext !== void 0 ? s = "slideNext" : i.carouselPrev !== void 0 && (s = "slidePrev")), s ? (e.preventDefault(), e.stopPropagation(), t && !t.hasAttribute("disabled") && this[s](r)) : this.emit("click", e)
    }
    onSlideTo(e) {
      const t = e.detail || 0;
      this.slideTo(this.getPageForSlide(t), {
        friction: 0
      })
    }
    onChange(e, t = 0) {
      const i = this.page;
      this.prevPage = i, this.page = e, this.option("adaptiveHeight") && this.setViewportHeight(), e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t))
    }
    onRefresh() {
      let e = this.contentDim,
        t = this.viewportDim;
      this.updateMetrics(), this.contentDim === e && this.viewportDim === t || this.slideTo(this.page, {
        friction: 0,
        transition: !1
      })
    }
    onScroll() {
      var e;
      (e = this.viewport) === null || e === void 0 || e.scroll(0, 0)
    }
    onResize() {
      this.option("breakpoints") && this.processOptions()
    }
    onBeforeTransform(e) {
      this.lp !== e.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = e.current.e
    }
    onEndAnimation() {
      this.inTransition.size || this.emit("settle")
    }
    reInit(e = null, t = null) {
      this.destroy(), this.state = Bt.Init, this.userOptions = e || this.userOptions, this.userPlugins = t || this.userPlugins, this.processOptions()
    }
    slideTo(e = 0, {
      friction: t = this.option("friction"),
      transition: i = this.option("transition")
    } = {}) {
      if (this.state === Bt.Destroy) return;
      e = parseInt((e || 0).toString()) || 0;
      const r = this.getPageFromIndex(e),
        {
          axis: s,
          isHorizontal: o,
          isRTL: a,
          pages: c,
          panzoom: u
        } = this,
        f = c.length,
        h = a && o ? 1 : -1;
      if (!u || !f) return;
      if (this.page !== r) {
        const m = new Event("beforeChange", {
          bubbles: !0,
          cancelable: !0
        });
        if (this.emit("beforeChange", m, e), m.defaultPrevented) return
      }
      if (this.transitionTo(e, i)) return;
      let p = c[r].pos;
      if (this.isInfinite) {
        const m = this.contentDim,
          g = u.target[s] * h;
        f === 2 ? p += m * Math.floor(parseFloat(e + "") / 2) : p = [p, p - m, p + m].reduce(function (y, w) {
          return Math.abs(w - g) < Math.abs(y - g) ? w : y
        })
      }
      p *= h, Math.abs(u.target[s] - p) < 1 || (u.panTo({
        x: o ? p : 0,
        y: o ? 0 : p,
        friction: t
      }), this.onChange(r))
    }
    slideToClosest(e) {
      if (this.panzoom) {
        const {
          pageIndex: t
        } = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
        this.slideTo(t, e)
      }
    }
    slideNext() {
      this.slideTo(this.page + 1)
    }
    slidePrev() {
      this.slideTo(this.page - 1)
    }
    clearTransitions() {
      this.inTransition.clear(), ht(this.container, this.cn("inTransition"));
      const e = ["to-prev", "to-next", "from-prev", "from-next"];
      for (const t of this.slides) {
        const i = t.el;
        if (i) {
          i.removeEventListener(pl, this.onAnimationEnd), i.classList.remove(...e);
          const r = t.transition;
          r && i.classList.remove(`f-${r}Out`, `f-${r}In`)
        }
      }
      this.manageSlideVisiblity()
    }
    addSlide(e, t) {
      var i, r, s, o;
      const a = this.panzoom,
        c = ((i = this.pages[this.page]) === null || i === void 0 ? void 0 : i.pos) || 0,
        u = ((r = this.pages[this.page]) === null || r === void 0 ? void 0 : r.dim) || 0,
        f = this.contentDim < this.viewportDim;
      let h = Array.isArray(t) ? t : [t];
      const p = [];
      for (const m of h) p.push(Iu(m));
      this.slides.splice(e, 0, ...p);
      for (let m = 0; m < this.slides.length; m++) this.slides[m].index = m;
      for (const m of p) this.emit("beforeInitSlide", m, m.index);
      if (this.page >= e && (this.page += p.length), this.updateMetrics(), a) {
        const m = ((s = this.pages[this.page]) === null || s === void 0 ? void 0 : s.pos) || 0,
          g = ((o = this.pages[this.page]) === null || o === void 0 ? void 0 : o.dim) || 0,
          y = this.pages.length || 1,
          w = this.isRTL ? u - g : g - u,
          S = this.isRTL ? c - m : m - c;
        f && y === 1 ? (e <= this.page && (a.current[this.axis] -= w, a.target[this.axis] -= w), a.panTo({
          [this.isHorizontal ? "x" : "y"]: -1 * m
        })) : S && e <= this.page && (a.target[this.axis] -= S, a.current[this.axis] -= S, a.requestTick())
      }
      for (const m of p) this.emit("initSlide", m, m.index)
    }
    prependSlide(e) {
      this.addSlide(0, e)
    }
    appendSlide(e) {
      this.addSlide(this.slides.length, e)
    }
    removeSlide(e) {
      const t = this.slides.length;
      e = (e % t + t) % t, this.removeSlideEl(this.slides[e], !0), this.slides.splice(e, 1);
      for (let i = 0; i < this.slides.length; i++) this.slides[i].index = i;
      this.updateMetrics(), this.slideTo(this.page, {
        friction: 0,
        transition: !1
      })
    }
    updateMetrics() {
      const {
        panzoom: e,
        viewport: t,
        track: i,
        slides: r,
        isHorizontal: s,
        isInfinite: o
      } = this;
      if (!i) return;
      const a = s ? "width" : "height",
        c = s ? "offsetWidth" : "offsetHeight";
      if (t) {
        let h = Math.max(t[c], J(t.getBoundingClientRect()[a], 1e3)),
          p = getComputedStyle(t),
          m = "padding",
          g = s ? "Right" : "Bottom";
        h -= parseFloat(p[m + (s ? "Left" : "Top")]) + parseFloat(p[m + g]), this.viewportDim = h
      }
      let u, f = 0;
      for (const [h, p] of r.entries()) {
        let m = 0,
          g = 0;
        !p.el && u ? (m = u.dim, g = u.gap) : ({
          dim: m,
          gap: g
        } = this.getSlideMetrics(p), u = p), m = J(m, 1e3), g = J(g, 1e3), p.dim = m, p.gap = g, p.pos = f, f += m, (o || h < r.length - 1) && (f += g)
      }
      f = J(f, 1e3), this.contentDim = f, e && (e.contentRect[a] = f, e.contentRect[this.axis === "e" ? "fullWidth" : "fullHeight"] = f), this.pages = this.createPages(), this.pages = this.processPages(), this.state === Bt.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh")
    }
    getProgress(e, t = !1, i = !1) {
      e === void 0 && (e = this.page);
      const r = this,
        s = r.panzoom,
        o = r.contentDim,
        a = r.pages[e] || 0;
      if (!a || !s) return e > this.page ? -1 : 1;
      let c = -1 * s.current.e,
        u = J((c - a.pos) / (1 * a.dim), 1e3),
        f = u,
        h = u;
      this.isInfinite && i !== !0 && (f = J((c - a.pos + o) / (1 * a.dim), 1e3), h = J((c - a.pos - o) / (1 * a.dim), 1e3));
      let p = [u, f, h].reduce(function (m, g) {
        return Math.abs(g) < Math.abs(m) ? g : m
      });
      return t ? p : p > 1 ? 1 : p < -1 ? -1 : p
    }
    setViewportHeight() {
      const {
        page: e,
        pages: t,
        viewport: i,
        isHorizontal: r
      } = this;
      if (!i || !t[e]) return;
      let s = 0;
      r && this.track && (this.track.style.height = "auto", t[e].slides.forEach(o => {
        o.el && (s = Math.max(s, o.el.offsetHeight))
      })), i.style.height = s ? `${s}px` : ""
    }
    getPageForSlide(e) {
      for (const t of this.pages)
        for (const i of t.slides)
          if (i.index === e) return t.index;
      return -1
    }
    getVisibleSlides(e = 0) {
      var t;
      const i = new Set;
      let {
        contentDim: r,
        viewportDim: s,
        pages: o,
        page: a
      } = this;
      r = r + ((t = this.slides[this.slides.length - 1]) === null || t === void 0 ? void 0 : t.gap) || 0;
      let c = 0;
      c = this.panzoom && this.panzoom.state !== ot.Init && this.panzoom.state !== ot.Destroy ? -1 * this.panzoom.current[this.axis] : o[a] && o[a].pos || 0, this.isInfinite && (c -= Math.floor(c / r) * r), this.isRTL && this.isHorizontal && (c *= -1);
      const u = c - s * e,
        f = c + s * (e + 1),
        h = this.isInfinite ? [-1, 0, 1] : [0];
      for (const p of this.slides)
        for (const m of h) {
          const g = p.pos + m * r,
            y = g + p.dim + p.gap;
          g < f && y > u && i.add(p)
        }
      return i
    }
    getPageFromPosition(e) {
      var t;
      const {
        viewportDim: i,
        contentDim: r
      } = this, s = this.pages.length, o = this.slides.length, a = this.slides[o - 1];
      let c = 0,
        u = 0,
        f = 0;
      const h = this.option("center");
      h && (e += .5 * i), this.isInfinite || (e = Math.max(((t = this.slides[0]) === null || t === void 0 ? void 0 : t.pos) || 0, Math.min(e, a.pos)));
      const p = r + a.gap;
      f = Math.floor(e / p) || 0, e -= f * p;
      let m = a,
        g = this.slides.find(y => {
          const w = e + (m && !h ? .5 * m.dim : 0);
          return m = y, y.pos <= w && y.pos + y.dim + y.gap > w
        });
      return g || (g = a), u = this.getPageForSlide(g.index), c = u + f * s, {
        page: c,
        pageIndex: u
      }
    }
    destroy() {
      if ([Bt.Destroy].includes(this.state)) return;
      this.state = Bt.Destroy;
      const {
        container: e,
        viewport: t,
        track: i,
        slides: r,
        panzoom: s
      } = this, o = this.option("classes");
      e.removeEventListener("click", this.onClick, {
        passive: !1,
        capture: !1
      }), e.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), r && r.forEach(c => {
        this.removeSlideEl(c)
      }), this.detachPlugins(), t && (t.removeEventListener("scroll", this.onScroll), t.offsetParent && i && i.offsetParent && t.replaceWith(...i.childNodes));
      for (const [c, u] of Object.entries(o)) c !== "container" && u && e.classList.remove(u);
      this.track = null, this.viewport = null, this.page = 0, this.slides = [];
      const a = this.events.get("ready");
      this.events = new Map, a && this.events.set("ready", a)
    }
  }
  Object.defineProperty(vs, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Ss
  }), Object.defineProperty(vs, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: RE
  }), Object.defineProperty(vs, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: FE
  });
  const dv = function (n) {
      if (!Pi(n)) return 0;
      const e = window.scrollY,
        t = window.innerHeight,
        i = e + t,
        r = n.getBoundingClientRect(),
        s = r.y + e,
        o = r.height,
        a = s + o;
      if (e > a || i < s) return 0;
      if (e < s && i > a || s < e && a > i) return 100;
      let c = o;
      s < e && (c -= e - s), a > i && (c -= a - i);
      const u = c / t * 100;
      return Math.round(u)
    },
    oa = !(typeof window > "u" || !window.document || !window.document.createElement);
  let Yu;
  const Fu = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
    Zp = n => {
      if (n && oa) {
        Yu === void 0 && document.createElement("div").focus({
          get preventScroll() {
            return Yu = !0, !1
          }
        });
        try {
          if (Yu) n.focus({
            preventScroll: !0
          });
          else {
            const e = window.scrollY || document.body.scrollTop,
              t = window.scrollX || document.body.scrollLeft;
            n.focus(), document.body.scrollTo({
              top: e,
              left: t,
              behavior: "auto"
            })
          }
        } catch {}
      }
    },
    Dd = {
      dragToClose: !0,
      hideScrollbar: !0,
      Carousel: {
        classes: {
          container: "fancybox__carousel",
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide"
        }
      },
      contentClick: "toggleZoom",
      contentDblClick: !1,
      backdropClick: "close",
      animated: !0,
      idle: 3500,
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      commonCaption: !1,
      parentEl: null,
      startIndex: 0,
      l10n: Object.assign(Object.assign({}, av), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download"
      }),
      tpl: {
        closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
    <div class="fancybox__backdrop"></div>
    <div class="fancybox__carousel"></div>
    <div class="fancybox__footer"></div>
  </div>`
      },
      groupAll: !1,
      groupAttr: "data-fancybox",
      defaultType: "image",
      defaultDisplay: "block",
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      closeButton: "auto",
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      Fullscreen: {
        autoStart: !1
      },
      compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
      wheel: "zoom"
    };
  var ri, fi;
  (function (n) {
    n[n.Init = 0] = "Init", n[n.Ready = 1] = "Ready", n[n.Closing = 2] = "Closing", n[n.CustomClosing = 3] = "CustomClosing", n[n.Destroy = 4] = "Destroy"
  })(ri || (ri = {})),
  function (n) {
    n[n.Loading = 0] = "Loading", n[n.Opening = 1] = "Opening", n[n.Ready = 2] = "Ready", n[n.Closing = 3] = "Closing"
  }(fi || (fi = {}));
  const fv = () => {
    queueMicrotask(() => {
      (() => {
        const {
          slug: n,
          index: e
        } = xn.parseURL(), t = Xe.getInstance();
        if (t && t.option("Hash") !== !1) {
          const i = t.carousel;
          if (n && i) {
            for (let o of i.slides)
              if (o.slug && o.slug === n) return i.slideTo(o.index);
            if (n === t.option("slug")) return i.slideTo(e - 1);
            const r = t.getSlide(),
              s = r && r.triggerEl && r.triggerEl.dataset;
            if (s && s.fancybox === n) return i.slideTo(e - 1)
          }
          xn.hasSilentClose = !0, t.close()
        }
        xn.startFromUrl()
      })()
    })
  };
  class xn extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "origHash", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ""
      }), Object.defineProperty(this, "timer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    onChange() {
      const e = this.instance,
        t = e.carousel;
      this.timer && clearTimeout(this.timer);
      const i = e.getSlide();
      if (!t || !i) return;
      const r = e.isOpeningSlide(i),
        s = new URL(document.URL).hash;
      let o, a = i.slug || void 0,
        c = i.triggerEl || void 0;
      o = a || this.instance.option("slug"), !o && c && c.dataset && (o = c.dataset.fancybox);
      let u = "";
      o && o !== "true" && (u = "#" + o + (!a && t.slides.length > 1 ? "-" + (i.index + 1) : "")), r && (this.origHash = s !== u ? s : ""), u && s !== u && (this.timer = setTimeout(() => {
        try {
          e.state === ri.Ready && window.history[r ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + u)
        } catch {}
      }, 300))
    }
    onClose() {
      if (this.timer && clearTimeout(this.timer), xn.hasSilentClose !== !0) try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
      } catch {}
    }
    attach() {
      const e = this.instance;
      e.on(["Carousel.ready", "Carousel.change"], this.onChange), e.on("close", this.onClose)
    }
    detach() {
      const e = this.instance;
      e.off(["Carousel.ready", "Carousel.change"], this.onChange), e.off("close", this.onClose)
    }
    static parseURL() {
      const e = window.location.hash.slice(1),
        t = e.split("-"),
        i = t[t.length - 1],
        r = i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10) || 1;
      return {
        hash: e,
        slug: t.join("-"),
        index: r
      }
    }
    static startFromUrl() {
      if (xn.hasSilentClose = !1, Xe.getInstance() || Xe.defaults.Hash === !1) return;
      const {
        hash: e,
        slug: t,
        index: i
      } = xn.parseURL();
      if (!t) return;
      let r = document.querySelector(`[data-slug="${e}"]`);
      if (r && r.dispatchEvent(new CustomEvent("click", {
          bubbles: !0,
          cancelable: !0
        })), Xe.getInstance()) return;
      const s = document.querySelectorAll(`[data-fancybox="${t}"]`);
      s.length && (r = s[i - 1], r && r.dispatchEvent(new CustomEvent("click", {
        bubbles: !0,
        cancelable: !0
      })))
    }
    static destroy() {
      window.removeEventListener("hashchange", fv, !1)
    }
  }

  function Kp() {
    window.addEventListener("hashchange", fv, !1), setTimeout(() => {
      xn.startFromUrl()
    }, 500)
  }
  Object.defineProperty(xn, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  }), Object.defineProperty(xn, "hasSilentClose", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: !1
  }), oa && (/complete|interactive|loaded/.test(document.readyState) ? Kp() : document.addEventListener("DOMContentLoaded", Kp));
  const gl = "is-zooming-in";
  class hv extends Pn {
    onCreateSlide(e, t, i) {
      const r = this.instance.optionFor(i, "src") || "";
      i.el && i.type === "image" && typeof r == "string" && this.setImage(i, r)
    }
    onRemoveSlide(e, t, i) {
      i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0
    }
    onChange(e, t, i, r) {
      ht(this.instance.container, gl);
      for (const s of t.slides) {
        const o = s.panzoom;
        o && s.index !== i && o.reset(.35)
      }
    }
    onClose() {
      var e;
      const t = this.instance,
        i = t.container,
        r = t.getSlide();
      if (!i || !i.parentElement || !r) return;
      const {
        el: s,
        contentEl: o,
        panzoom: a,
        thumbElSrc: c
      } = r;
      if (!s || !c || !o || !a || a.isContentLoading || a.state === ot.Init || a.state === ot.Destroy) return;
      a.updateMetrics();
      let u = this.getZoomInfo(r);
      if (!u) return;
      this.instance.state = ri.CustomClosing, i.classList.remove(gl), i.classList.add("is-zooming-out"), o.style.backgroundImage = `url('${c}')`;
      const f = i.getBoundingClientRect();
      (((e = window.visualViewport) === null || e === void 0 ? void 0 : e.scale) || 1) === 1 && Object.assign(i.style, {
        position: "absolute",
        top: `${window.scrollY}px`,
        left: `${window.scrollX}px`,
        bottom: "auto",
        right: "auto",
        width: `${f.width}px`,
        height: `${f.height}px`,
        overflow: "hidden"
      });
      const {
        x: h,
        y: p,
        scale: m,
        opacity: g
      } = u;
      if (g) {
        const y = ((w, S, T, M) => {
          const k = S - w,
            E = M - T;
          return O => T + ((O - w) / k * E || 0)
        })(a.scale, m, 1, 0);
        a.on("afterTransform", () => {
          o.style.opacity = y(a.scale) + ""
        })
      }
      a.on("endAnimation", () => {
        t.destroy()
      }), a.target.a = m, a.target.b = 0, a.target.c = 0, a.target.d = m, a.panTo({
        x: h,
        y: p,
        scale: m,
        friction: g ? .2 : .33,
        ignoreBounds: !0
      }), a.isResting && t.destroy()
    }
    setImage(e, t) {
      const i = this.instance;
      e.src = t, this.process(e, t).then(r => {
        const {
          contentEl: s,
          imageEl: o,
          thumbElSrc: a,
          el: c
        } = e;
        if (i.isClosing() || !s || !o) return;
        s.offsetHeight;
        const u = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
        if (this.option("protected") && c) {
          c.addEventListener("contextmenu", p => {
            p.preventDefault()
          });
          const h = document.createElement("div");
          ve(h, "fancybox-protected"), s.appendChild(h)
        }
        if (a && u) {
          const h = r.contentRect,
            p = Math.max(h.fullWidth, h.fullHeight);
          let m = null;
          !u.opacity && p > 1200 && (m = document.createElement("img"), ve(m, "fancybox-ghost"), m.src = a, s.appendChild(m));
          const g = () => {
            m && (ve(m, "f-fadeFastOut"), setTimeout(() => {
              m && (m.remove(), m = null)
            }, 200))
          };
          (f = a, new Promise((y, w) => {
            const S = new Image;
            S.onload = y, S.onerror = w, S.src = f
          })).then(() => {
            i.hideLoading(e), e.state = fi.Opening, this.instance.emit("reveal", e), this.zoomIn(e).then(() => {
              g(), this.instance.done(e)
            }, () => {}), m && setTimeout(() => {
              g()
            }, p > 2500 ? 800 : 200)
          }, () => {
            i.hideLoading(e), i.revealContent(e)
          })
        } else {
          const h = this.optionFor(e, "initialSize"),
            p = this.optionFor(e, "zoom"),
            m = {
              event: i.prevMouseMoveEvent || i.options.event,
              friction: p ? .12 : 0
            };
          let g = i.optionFor(e, "showClass") || void 0,
            y = !0;
          i.isOpeningSlide(e) && (h === "full" ? r.zoomToFull(m) : h === "cover" ? r.zoomToCover(m) : h === "max" ? r.zoomToMax(m) : y = !1, r.stop("current")), y && g && (g = r.isDragging ? "f-fadeIn" : ""), i.hideLoading(e), i.revealContent(e, g)
        }
        var f
      }, () => {
        i.setError(e, "{{IMAGE_ERROR}}")
      })
    }
    process(e, t) {
      return new Promise((i, r) => {
        var s;
        const o = this.instance,
          a = e.el;
        o.clearContent(e), o.showLoading(e);
        let c = this.optionFor(e, "content");
        if (typeof c == "string" && (c = Fn(c)), !c || !Pi(c)) {
          if (c = document.createElement("img"), c instanceof HTMLImageElement) {
            let u = "",
              f = e.caption;
            u = typeof f == "string" && f ? f.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${e.index+1} of ${(s=o.carousel)===null||s===void 0?void 0:s.pages.length}`, c.src = t || "", c.alt = u, c.draggable = !1, e.srcset && c.setAttribute("srcset", e.srcset), this.instance.isOpeningSlide(e) && (c.fetchPriority = "high")
          }
          e.sizes && c.setAttribute("sizes", e.sizes)
        }
        ve(c, "fancybox-image"), e.imageEl = c, o.setContent(e, c, !1), e.panzoom = new Ss(a, Yi({
          transformParent: !0
        }, this.option("Panzoom") || {}, {
          content: c,
          width: o.optionFor(e, "width", "auto"),
          height: o.optionFor(e, "height", "auto"),
          wheel: () => {
            const u = o.option("wheel");
            return (u === "zoom" || u == "pan") && u
          },
          click: (u, f) => {
            var h, p;
            if (o.isCompact || o.isClosing() || e.index !== ((h = o.getSlide()) === null || h === void 0 ? void 0 : h.index)) return !1;
            if (f) {
              const g = f.composedPath()[0];
              if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(g.nodeName)) return !1
            }
            let m = !f || f.target && ((p = e.contentEl) === null || p === void 0 ? void 0 : p.contains(f.target));
            return o.option(m ? "contentClick" : "backdropClick") || !1
          },
          dblClick: () => o.isCompact ? "toggleZoom" : o.option("contentDblClick") || !1,
          spinner: !1,
          panOnlyZoomed: !0,
          wheelLimit: 1 / 0,
          on: {
            ready: u => {
              i(u)
            },
            error: () => {
              r()
            },
            destroy: () => {
              r()
            }
          }
        }))
      })
    }
    zoomIn(e) {
      return new Promise((t, i) => {
        const r = this.instance,
          s = r.container,
          {
            panzoom: o,
            contentEl: a,
            el: c
          } = e;
        o && o.updateMetrics();
        const u = this.getZoomInfo(e);
        if (!(u && c && a && o && s)) return void i();
        const {
          x: f,
          y: h,
          scale: p,
          opacity: m
        } = u, g = () => {
          e.state !== fi.Closing && (m && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - p)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && t(o))
        }, y = T => {
          (T.scale < .99 || T.scale > 1.01) && !T.isDragging || (ht(s, gl), a.style.opacity = "", T.off("endAnimation", y), T.off("touchStart", y), T.off("afterTransform", g), t(T))
        };
        o.on("endAnimation", y), o.on("touchStart", y), o.on("afterTransform", g), o.on(["error", "destroy"], () => {
          i()
        }), o.panTo({
          x: f,
          y: h,
          scale: p,
          friction: 0,
          ignoreBounds: !0
        }), o.stop("current");
        const w = {
            event: o.panMode === "mousemove" ? r.prevMouseMoveEvent || r.options.event : void 0
          },
          S = this.optionFor(e, "initialSize");
        ve(s, gl), r.hideLoading(e), S === "full" ? o.zoomToFull(w) : S === "cover" ? o.zoomToCover(w) : S === "max" ? o.zoomToMax(w) : o.reset(.172)
      })
    }
    getZoomInfo(e) {
      var t;
      const {
        el: i,
        imageEl: r,
        thumbEl: s,
        panzoom: o
      } = e;
      if (!i || !r || !s || !o || dv(s) < 3 || !this.optionFor(e, "zoom") || this.instance.state === ri.Destroy || (((t = window.visualViewport) === null || t === void 0 ? void 0 : t.scale) || 1) !== 1) return !1;
      let {
        top: a,
        left: c,
        width: u,
        height: f
      } = s.getBoundingClientRect(), {
        top: h,
        left: p,
        fitWidth: m,
        fitHeight: g
      } = o.contentRect;
      if (!(u && f && m && g)) return !1;
      const y = o.container.getBoundingClientRect();
      p += y.left, h += y.top;
      const w = -1 * (p + .5 * m - (c + .5 * u)),
        S = -1 * (h + .5 * g - (a + .5 * f)),
        T = u / m;
      let M = this.option("zoomOpacity") || !1;
      return M === "auto" && (M = Math.abs(u / f - m / g) > .1), {
        x: w,
        y: S,
        scale: T,
        opacity: M
      }
    }
    attach() {
      const e = this,
        t = e.instance;
      t.on("Carousel.change", e.onChange), t.on("Carousel.createSlide", e.onCreateSlide), t.on("Carousel.removeSlide", e.onRemoveSlide), t.on("close", e.onClose)
    }
    detach() {
      const e = this,
        t = e.instance;
      t.off("Carousel.change", e.onChange), t.off("Carousel.createSlide", e.onCreateSlide), t.off("Carousel.removeSlide", e.onRemoveSlide), t.off("close", e.onClose)
    }
  }
  Object.defineProperty(hv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      initialSize: "fit",
      Panzoom: {
        maxScale: 1
      },
      protected: !1,
      zoom: !0,
      zoomOpacity: "auto"
    }
  }), typeof SuppressedError == "function" && SuppressedError;
  const Nu = "html",
    Qp = "image",
    zu = "map",
    tr = "youtube",
    Qr = "vimeo",
    Io = "html5video",
    Jp = (n, e = {}) => {
      const t = new URL(n),
        i = new URLSearchParams(t.search),
        r = new URLSearchParams;
      for (const [a, c] of [...i, ...Object.entries(e)]) {
        let u = c.toString();
        a === "t" ? r.set("start", parseInt(u).toString()) : r.set(a, u)
      }
      let s = r.toString(),
        o = n.match(/#t=((.*)?\d+s)/);
      return o && (s += `#t=${o[1]}`), s
    },
    NE = {
      ajax: null,
      autoSize: !0,
      iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto"
      },
      preload: !0,
      videoAutoplay: !0,
      videoRatio: 16 / 9,
      videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
      videoFormat: "",
      vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0
      },
      youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1
      }
    },
    zE = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
  class pv extends Pn {
    onBeforeInitSlide(e, t, i) {
      this.processType(i)
    }
    onCreateSlide(e, t, i) {
      this.setContent(i)
    }
    onClearContent(e, t) {
      t.xhr && (t.xhr.abort(), t.xhr = null);
      const i = t.iframeEl;
      i && (i.onload = i.onerror = null, i.src = "//about:blank", t.iframeEl = null);
      const r = t.contentEl,
        s = t.placeholderEl;
      if (t.type === "inline" && r && s) r.classList.remove("fancybox__content"), r.style.display !== "none" && (r.style.display = "none"), s.parentNode && s.parentNode.insertBefore(r, s), s.remove(), t.contentEl = void 0, t.placeholderEl = void 0;
      else
        for (; t.el && t.el.firstChild;) t.el.removeChild(t.el.firstChild)
    }
    onSelectSlide(e, t, i) {
      i.state === fi.Ready && this.playVideo()
    }
    onUnselectSlide(e, t, i) {
      var r, s;
      if (i.type === Io) {
        try {
          (s = (r = i.el) === null || r === void 0 ? void 0 : r.querySelector("video")) === null || s === void 0 || s.pause()
        } catch {}
        return
      }
      let o;
      i.type === Qr ? o = {
        method: "pause",
        value: "true"
      } : i.type === tr && (o = {
        event: "command",
        func: "pauseVideo"
      }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller)
    }
    onDone(e, t) {
      e.isCurrentSlide(t) && !e.isClosing() && this.playVideo()
    }
    onRefresh(e, t) {
      t.slides.forEach(i => {
        i.el && (this.resizeIframe(i), this.setAspectRatio(i))
      })
    }
    onMessage(e) {
      try {
        let t = JSON.parse(e.data);
        if (e.origin === "https://player.vimeo.com") {
          if (t.event === "ready")
            for (let i of Array.from(document.getElementsByClassName("fancybox__iframe"))) i instanceof HTMLIFrameElement && i.contentWindow === e.source && (i.dataset.ready = "true")
        } else if (e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && t.event === "onReady") {
          const i = document.getElementById(t.id);
          i && (i.dataset.ready = "true")
        }
      } catch {}
    }
    loadAjaxContent(e) {
      const t = this.instance.optionFor(e, "src") || "";
      this.instance.showLoading(e);
      const i = this.instance,
        r = new XMLHttpRequest;
      i.showLoading(e), r.onreadystatechange = function () {
        r.readyState === XMLHttpRequest.DONE && i.state === ri.Ready && (i.hideLoading(e), r.status === 200 ? i.setContent(e, r.responseText) : i.setError(e, r.status === 404 ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
      };
      const s = e.ajax || null;
      r.open(s ? "POST" : "GET", t + ""), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.send(s), e.xhr = r
    }
    setInlineContent(e) {
      let t = null;
      if (Pi(e.src)) t = e.src;
      else if (typeof e.src == "string") {
        const i = e.src.split("#", 2).pop();
        t = i ? document.getElementById(i) : null
      }
      if (t) {
        if (e.type === "clone" || t.closest(".fancybox__slide")) {
          t = t.cloneNode(!0);
          const i = t.dataset.animationName;
          i && (t.classList.remove(i), delete t.dataset.animationName);
          let r = t.getAttribute("id");
          r = r ? `${r}--clone` : `clone-${this.instance.id}-${e.index}`, t.setAttribute("id", r)
        } else if (t.parentNode) {
          const i = document.createElement("div");
          i.classList.add("fancybox-placeholder"), t.parentNode.insertBefore(i, t), e.placeholderEl = i
        }
        this.instance.setContent(e, t)
      } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}")
    }
    setIframeContent(e) {
      const {
        src: t,
        el: i
      } = e;
      if (!t || typeof t != "string" || !i) return;
      i.classList.add("is-loading");
      const r = this.instance,
        s = document.createElement("iframe");
      s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${r.id}_${e.index}`);
      for (const [a, c] of Object.entries(this.optionFor(e, "iframeAttr") || {})) s.setAttribute(a, c);
      s.onerror = () => {
        r.setError(e, "{{IFRAME_ERROR}}")
      }, e.iframeEl = s;
      const o = this.optionFor(e, "preload");
      if (e.type !== "iframe" || o === !1) return s.setAttribute("src", e.src + ""), r.setContent(e, s, !1), this.resizeIframe(e), void r.revealContent(e);
      r.showLoading(e), s.onload = () => {
        if (!s.src.length) return;
        const a = s.dataset.ready !== "true";
        s.dataset.ready = "true", this.resizeIframe(e), a ? r.revealContent(e) : r.hideLoading(e)
      }, s.setAttribute("src", t), r.setContent(e, s, !1)
    }
    resizeIframe(e) {
      const {
        type: t,
        iframeEl: i
      } = e;
      if (t === tr || t === Qr) return;
      const r = i == null ? void 0 : i.parentElement;
      if (!i || !r) return;
      let s = e.autoSize;
      s === void 0 && (s = this.optionFor(e, "autoSize"));
      let o = e.width || 0,
        a = e.height || 0;
      o && a && (s = !1);
      const c = r && r.style;
      if (e.preload !== !1 && s !== !1 && c) try {
        const u = window.getComputedStyle(r),
          f = parseFloat(u.paddingLeft) + parseFloat(u.paddingRight),
          h = parseFloat(u.paddingTop) + parseFloat(u.paddingBottom),
          p = i.contentWindow;
        if (p) {
          const m = p.document,
            g = m.getElementsByTagName(Nu)[0],
            y = m.body;
          c.width = "", y.style.overflow = "hidden", o = o || g.scrollWidth + f, c.width = `${o}px`, y.style.overflow = "", c.flex = "0 0 auto", c.height = `${y.scrollHeight}px`, a = g.scrollHeight + h
        }
      } catch {}
      if (o || a) {
        const u = {
          flex: "0 1 auto",
          width: "",
          height: ""
        };
        o && o !== "auto" && (u.width = `${o}px`), a && a !== "auto" && (u.height = `${a}px`), Object.assign(c, u)
      }
    }
    playVideo() {
      const e = this.instance.getSlide();
      if (!e) return;
      const {
        el: t
      } = e;
      if (!t || !t.offsetParent || !this.optionFor(e, "videoAutoplay")) return;
      if (e.type === Io) try {
        const r = t.querySelector("video");
        if (r) {
          const s = r.play();
          s !== void 0 && s.then(() => {}).catch(o => {
            r.muted = !0, r.play()
          })
        }
      } catch {}
      if (e.type !== tr && e.type !== Qr) return;
      const i = () => {
        if (e.iframeEl && e.iframeEl.contentWindow) {
          let r;
          if (e.iframeEl.dataset.ready === "true") return r = e.type === tr ? {
            event: "command",
            func: "playVideo"
          } : {
            method: "play",
            value: "true"
          }, r && e.iframeEl.contentWindow.postMessage(JSON.stringify(r), "*"), void(e.poller = void 0);
          e.type === tr && (r = {
            event: "listening",
            id: e.iframeEl.getAttribute("id")
          }, e.iframeEl.contentWindow.postMessage(JSON.stringify(r), "*"))
        }
        e.poller = setTimeout(i, 250)
      };
      i()
    }
    processType(e) {
      if (e.html) return e.type = Nu, e.src = e.html, void(e.html = "");
      const t = this.instance.optionFor(e, "src", "");
      if (!t || typeof t != "string") return;
      let i = e.type,
        r = null;
      if (r = t.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
        const s = this.optionFor(e, tr),
          {
            nocookie: o
          } = s,
          a = function (h, p) {
            var m = {};
            for (var g in h) Object.prototype.hasOwnProperty.call(h, g) && p.indexOf(g) < 0 && (m[g] = h[g]);
            if (h != null && typeof Object.getOwnPropertySymbols == "function") {
              var y = 0;
              for (g = Object.getOwnPropertySymbols(h); y < g.length; y++) p.indexOf(g[y]) < 0 && Object.prototype.propertyIsEnumerable.call(h, g[y]) && (m[g[y]] = h[g[y]])
            }
            return m
          }(s, ["nocookie"]),
          c = `www.youtube${o?"-nocookie":""}.com`,
          u = Jp(t, a),
          f = encodeURIComponent(r[2]);
        e.videoId = f, e.src = `https://${c}/embed/${f}?${u}`, e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${f}/mqdefault.jpg`, i = tr
      } else if (r = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
        const s = Jp(t, this.optionFor(e, Qr)),
          o = encodeURIComponent(r[1]),
          a = r[4] || "";
        e.videoId = o, e.src = `https://player.vimeo.com/video/${o}?${a?`h=${a}${s?"&":""}`:""}${s}`, i = Qr
      }
      if (!i && e.triggerEl) {
        const s = e.triggerEl.dataset.type;
        zE.includes(s) && (i = s)
      }
      i || typeof t == "string" && (t.charAt(0) === "#" ? i = "inline" : (r = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Io, e.videoFormat = e.videoFormat || "video/" + (r[1] === "ogv" ? "ogg" : r[1])) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = Qp : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), (r = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `https://maps.google.${r[1]}/?ll=${(r[2]?r[2]+"&z="+Math.floor(parseFloat(r[3]))+(r[4]?r[4].replace(/^\//,"&"):""):r[4]+"").replace(/\?/,"&")}&output=${r[4]&&r[4].indexOf("layer=c")>0?"svembed":"embed"}`, i = zu) : (r = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `https://maps.google.${r[1]}/maps?q=${r[2].replace("query=","q=").replace("api=1","")}&output=embed`, i = zu), i = i || this.instance.option("defaultType"), e.type = i, i === Qp && (e.thumbSrc = e.thumbSrc || e.src)
    }
    setContent(e) {
      const t = this.instance.optionFor(e, "src") || "";
      if (e && e.type && t) {
        switch (e.type) {
          case Nu:
            this.instance.setContent(e, t);
            break;
          case Io:
            const i = this.option("videoTpl");
            i && this.instance.setContent(e, i.replace(/\{\{src\}\}/gi, t + "").replace(/\{\{format\}\}/gi, this.optionFor(e, "videoFormat") || "").replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || ""));
            break;
          case "inline":
          case "clone":
            this.setInlineContent(e);
            break;
          case "ajax":
            this.loadAjaxContent(e);
            break;
          case "pdf":
          case zu:
          case tr:
          case Qr:
            e.preload = !1;
          case "iframe":
            this.setIframeContent(e)
        }
        this.setAspectRatio(e)
      }
    }
    setAspectRatio(e) {
      const t = e.contentEl;
      if (!(e.el && t && e.type && [tr, Qr, Io].includes(e.type))) return;
      let i, r = e.width || "auto",
        s = e.height || "auto";
      if (r === "auto" || s === "auto") {
        i = this.optionFor(e, "videoRatio");
        const u = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
        i = u && u.length > 2 ? parseFloat(u[1]) / parseFloat(u[2]) : parseFloat(i + "")
      } else r && s && (i = r / s);
      if (!i) return;
      t.style.aspectRatio = "", t.style.width = "", t.style.height = "", t.offsetHeight;
      const o = t.getBoundingClientRect(),
        a = o.width || 1,
        c = o.height || 1;
      t.style.aspectRatio = i + "", i < a / c ? (s = s === "auto" ? c : Math.min(c, s), t.style.width = "auto", t.style.height = `${s}px`) : (r = r === "auto" ? a : Math.min(a, r), t.style.width = `${r}px`, t.style.height = "auto")
    }
    attach() {
      const e = this,
        t = e.instance;
      t.on("Carousel.beforeInitSlide", e.onBeforeInitSlide), t.on("Carousel.createSlide", e.onCreateSlide), t.on("Carousel.selectSlide", e.onSelectSlide), t.on("Carousel.unselectSlide", e.onUnselectSlide), t.on("Carousel.Panzoom.refresh", e.onRefresh), t.on("done", e.onDone), t.on("clearContent", e.onClearContent), window.addEventListener("message", e.onMessage)
    }
    detach() {
      const e = this,
        t = e.instance;
      t.off("Carousel.beforeInitSlide", e.onBeforeInitSlide), t.off("Carousel.createSlide", e.onCreateSlide), t.off("Carousel.selectSlide", e.onSelectSlide), t.off("Carousel.unselectSlide", e.onUnselectSlide), t.off("Carousel.Panzoom.refresh", e.onRefresh), t.off("done", e.onDone), t.off("clearContent", e.onClearContent), window.removeEventListener("message", e.onMessage)
    }
  }
  Object.defineProperty(pv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: NE
  });
  const vl = "play",
    yl = "pause",
    Yo = "ready";
  class mv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Yo
      }), Object.defineProperty(this, "inHover", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(this, "timer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "progressBar", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    get isActive() {
      return this.state !== Yo
    }
    onReady(e) {
      this.option("autoStart") && (e.isInfinite || e.page < e.pages.length - 1) && this.start()
    }
    onChange() {
      var e;
      !((e = this.instance.panzoom) === null || e === void 0) && e.isResting || (this.removeProgressBar(), this.pause())
    }
    onSettle() {
      this.resume()
    }
    onVisibilityChange() {
      document.visibilityState === "visible" ? this.resume() : this.pause()
    }
    onMouseEnter() {
      this.inHover = !0, this.pause()
    }
    onMouseLeave() {
      var e;
      this.inHover = !1, !((e = this.instance.panzoom) === null || e === void 0) && e.isResting && this.resume()
    }
    onTimerEnd() {
      const e = this.instance;
      this.state === "play" && (e.isInfinite || e.page !== e.pages.length - 1 ? e.slideNext() : e.slideTo(0))
    }
    removeProgressBar() {
      this.progressBar && (this.progressBar.remove(), this.progressBar = null)
    }
    createProgressBar() {
      var e;
      if (!this.option("showProgress")) return null;
      this.removeProgressBar();
      const t = this.instance,
        i = ((e = t.pages[t.page]) === null || e === void 0 ? void 0 : e.slides) || [];
      let r = this.option("progressParentEl");
      if (r || (r = (i.length === 1 ? i[0].el : null) || t.viewport), !r) return null;
      const s = document.createElement("div");
      return ve(s, "f-progress"), r.prepend(s), this.progressBar = s, s.offsetHeight, s
    }
    set() {
      const e = this,
        t = e.instance;
      if (t.pages.length < 2 || e.timer) return;
      const i = e.option("timeout");
      e.state = vl, ve(t.container, "has-autoplay");
      let r = e.createProgressBar();
      r && (r.style.transitionDuration = `${i}ms`, r.style.transform = "scaleX(1)"), e.timer = setTimeout(() => {
        e.timer = null, e.inHover || e.onTimerEnd()
      }, i), e.emit("set")
    }
    clear() {
      const e = this;
      e.timer && (clearTimeout(e.timer), e.timer = null), e.removeProgressBar()
    }
    start() {
      const e = this;
      if (e.set(), e.state !== Yo) {
        if (e.option("pauseOnHover")) {
          const t = e.instance.container;
          t.addEventListener("mouseenter", e.onMouseEnter, !1), t.addEventListener("mouseleave", e.onMouseLeave, !1)
        }
        document.addEventListener("visibilitychange", e.onVisibilityChange, !1), e.emit("start")
      }
    }
    stop() {
      const e = this,
        t = e.state,
        i = e.instance.container;
      e.clear(), e.state = Yo, i.removeEventListener("mouseenter", e.onMouseEnter, !1), i.removeEventListener("mouseleave", e.onMouseLeave, !1), document.removeEventListener("visibilitychange", e.onVisibilityChange, !1), ht(i, "has-autoplay"), t !== Yo && e.emit("stop")
    }
    pause() {
      const e = this;
      e.state === vl && (e.state = yl, e.clear(), e.emit(yl))
    }
    resume() {
      const e = this,
        t = e.instance;
      if (t.isInfinite || t.page !== t.pages.length - 1)
        if (e.state !== vl) {
          if (e.state === yl && !e.inHover) {
            const i = new Event("resume", {
              bubbles: !0,
              cancelable: !0
            });
            e.emit("resume", i), i.defaultPrevented || e.set()
          }
        } else e.set();
      else e.stop()
    }
    toggle() {
      this.state === vl || this.state === yl ? this.stop() : this.start()
    }
    attach() {
      const e = this,
        t = e.instance;
      t.on("ready", e.onReady), t.on("Panzoom.startAnimation", e.onChange), t.on("Panzoom.endAnimation", e.onSettle), t.on("Panzoom.touchMove", e.onChange)
    }
    detach() {
      const e = this,
        t = e.instance;
      t.off("ready", e.onReady), t.off("Panzoom.startAnimation", e.onChange), t.off("Panzoom.endAnimation", e.onSettle), t.off("Panzoom.touchMove", e.onChange), e.stop()
    }
  }
  Object.defineProperty(mv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      autoStart: !0,
      pauseOnHover: !0,
      progressParentEl: null,
      showProgress: !0,
      timeout: 3e3
    }
  });
  class gv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "ref", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    onPrepare(e) {
      const t = e.carousel;
      if (!t) return;
      const i = e.container;
      i && (t.options.Autoplay = Yi({
        autoStart: !1
      }, this.option("Autoplay") || {}, {
        pauseOnHover: !1,
        timeout: this.option("timeout"),
        progressParentEl: () => this.option("progressParentEl") || null,
        on: {
          start: () => {
            e.emit("startSlideshow")
          },
          set: r => {
            var s;
            i.classList.add("has-slideshow"), ((s = e.getSlide()) === null || s === void 0 ? void 0 : s.state) !== fi.Ready && r.pause()
          },
          stop: () => {
            i.classList.remove("has-slideshow"), e.isCompact || e.endIdle(), e.emit("endSlideshow")
          },
          resume: (r, s) => {
            var o, a, c;
            !s || !s.cancelable || ((o = e.getSlide()) === null || o === void 0 ? void 0 : o.state) === fi.Ready && (!((c = (a = e.carousel) === null || a === void 0 ? void 0 : a.panzoom) === null || c === void 0) && c.isResting) || s.preventDefault()
          }
        }
      }), t.attachPlugins({
        Autoplay: mv
      }), this.ref = t.plugins.Autoplay)
    }
    onReady(e) {
      const t = e.carousel,
        i = this.ref;
      i && t && this.option("playOnStart") && (t.isInfinite || t.page < t.pages.length - 1) && i.start()
    }
    onDone(e, t) {
      const i = this.ref,
        r = e.carousel;
      if (!i || !r) return;
      const s = t.panzoom;
      s && s.on("startAnimation", () => {
        e.isCurrentSlide(t) && i.stop()
      }), e.isCurrentSlide(t) && i.resume()
    }
    onKeydown(e, t) {
      var i;
      const r = this.ref;
      r && t === this.option("key") && ((i = document.activeElement) === null || i === void 0 ? void 0 : i.nodeName) !== "BUTTON" && r.toggle()
    }
    attach() {
      const e = this,
        t = e.instance;
      t.on("Carousel.init", e.onPrepare), t.on("Carousel.ready", e.onReady), t.on("done", e.onDone), t.on("keydown", e.onKeydown)
    }
    detach() {
      const e = this,
        t = e.instance;
      t.off("Carousel.init", e.onPrepare), t.off("Carousel.ready", e.onReady), t.off("done", e.onDone), t.off("keydown", e.onKeydown)
    }
  }
  Object.defineProperty(gv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      key: " ",
      playOnStart: !1,
      progressParentEl: n => {
        var e;
        return ((e = n.instance.container) === null || e === void 0 ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || n.instance.container
      },
      timeout: 3e3
    }
  });
  const vv = {
    classes: {
      container: "f-thumbs f-carousel__thumbs",
      viewport: "f-thumbs__viewport",
      track: "f-thumbs__track",
      slide: "f-thumbs__slide",
      isResting: "is-resting",
      isSelected: "is-selected",
      isLoading: "is-loading",
      hasThumbs: "has-thumbs"
    },
    minCount: 2,
    parentEl: null,
    thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern"
  };
  var ur;
  (function (n) {
    n[n.Init = 0] = "Init", n[n.Ready = 1] = "Ready", n[n.Hidden = 2] = "Hidden"
  })(ur || (ur = {}));
  const em = "isResting",
    bl = "thumbWidth",
    qs = "thumbHeight",
    On = "thumbClipWidth";
  let yv = class extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "type", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "modern"
      }), Object.defineProperty(this, "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "track", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "carousel", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "thumbWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "thumbClipWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "thumbHeight", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "thumbGap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "thumbExtraGap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ur.Init
      })
    }
    get isModern() {
      return this.type === "modern"
    }
    onInitSlide(n, e) {
      const t = e.el ? e.el.dataset : void 0;
      t && (e.thumbSrc = t.thumbSrc || e.thumbSrc || "", e[On] = parseFloat(t[On] || "") || e[On] || 0, e[qs] = parseFloat(t.thumbHeight || "") || e[qs] || 0), this.addSlide(e)
    }
    onInitSlides() {
      this.build()
    }
    onChange() {
      var n;
      if (!this.isModern) return;
      const e = this.container,
        t = this.instance,
        i = t.panzoom,
        r = this.carousel,
        s = r ? r.panzoom : null,
        o = t.page;
      if (i && r && s) {
        if (i.isDragging) {
          ht(e, this.cn(em));
          let a = ((n = r.pages[o]) === null || n === void 0 ? void 0 : n.pos) || 0;
          a += t.getProgress(o) * (this[On] + this.thumbGap);
          let c = s.getBounds(); - 1 * a > c.x.min && -1 * a < c.x.max && s.panTo({
            x: -1 * a,
            friction: .12
          })
        } else Nn(e, this.cn(em), i.isResting);
        this.shiftModern()
      }
    }
    onRefresh() {
      this.updateProps();
      for (const n of this.instance.slides || []) this.resizeModernSlide(n);
      this.shiftModern()
    }
    isDisabled() {
      const n = this.option("minCount") || 0;
      if (n) {
        const t = this.instance;
        let i = 0;
        for (const r of t.slides || []) r.thumbSrc && i++;
        if (i < n) return !0
      }
      const e = this.option("type");
      return ["modern", "classic"].indexOf(e) < 0
    }
    getThumb(n) {
      const e = this.option("thumbTpl") || "";
      return {
        html: this.instance.localize(e, [
          ["%i", n.index],
          ["%d", n.index + 1],
          ["%s", n.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]
        ])
      }
    }
    addSlide(n) {
      const e = this.carousel;
      e && e.addSlide(n.index, this.getThumb(n))
    }
    getSlides() {
      const n = [];
      for (const e of this.instance.slides || []) n.push(this.getThumb(e));
      return n
    }
    resizeModernSlide(n) {
      this.isModern && (n[bl] = n[On] && n[qs] ? Math.round(this[qs] * (n[On] / n[qs])) : this[bl])
    }
    updateProps() {
      const n = this.container;
      if (!n) return;
      const e = t => parseFloat(getComputedStyle(n).getPropertyValue("--f-thumb-" + t)) || 0;
      this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[bl] = e("width") || 40, this[On] = e("clip-width") || 40, this[qs] = e("height") || 40
    }
    build() {
      const n = this;
      if (n.state !== ur.Init || n.isDisabled()) return;
      const e = n.instance,
        t = e.container,
        i = n.getSlides(),
        r = n.option("type");
      n.type = r;
      const s = document.createElement("div");
      ve(s, n.cn("container")), ve(s, `is-${r}`);
      const o = n.option("parentEl");
      o ? o.appendChild(s) : t.after(s), ve(t, n.cn("hasThumbs")), n.container = s, n.updateProps();
      const a = document.createElement("div");
      ve(a, n.cn("track")), s.appendChild(a), n.track = a;
      const c = Yi({}, {
          track: a,
          infinite: !1,
          center: !0,
          fill: r === "classic",
          dragFree: !0,
          slidesPerPage: 1,
          transition: !1,
          preload: .25,
          friction: .12,
          Panzoom: {
            maxVelocity: 0
          },
          Dots: !1,
          Navigation: !1,
          classes: {
            container: "f-thumbs",
            viewport: "f-thumbs__viewport",
            track: "f-thumbs__track",
            slide: "f-thumbs__slide"
          }
        }, n.option("Carousel") || {}, {
          Sync: {
            target: e
          },
          slides: i
        }),
        u = new e.constructor(s, c);
      u.on("createSlide", (f, h) => {
        n.setProps(h.index), n.emit("createSlide", h, h.el)
      }), u.on("ready", () => {
        n.shiftModern(), n.emit("ready")
      }), u.on("refresh", () => {
        n.shiftModern()
      }), u.on("Panzoom.click", (f, h, p) => {
        n.onClick(p)
      }), n.carousel = u, n.state = ur.Ready
    }
    onClick(n) {
      n.preventDefault(), n.stopPropagation();
      const e = this.instance,
        {
          pages: t,
          page: i
        } = e,
        r = y => {
          if (y) {
            const w = y.closest("[data-carousel-index]");
            if (w) return [parseInt(w.dataset.carouselIndex || "", 10) || 0, w]
          }
          return [-1, void 0]
        },
        s = (y, w) => {
          const S = document.elementFromPoint(y, w);
          return S ? r(S) : [-1, void 0]
        };
      let [o, a] = r(n.target);
      if (o > -1) return;
      const c = this[On],
        u = n.clientX,
        f = n.clientY;
      let [h, p] = s(u - c, f), [m, g] = s(u + c, f);
      p && g ? (o = Math.abs(u - p.getBoundingClientRect().right) < Math.abs(u - g.getBoundingClientRect().left) ? h : m, o === i && (o = o === h ? m : h)) : p ? o = h : g && (o = m), o > -1 && t[o] && e.slideTo(o)
    }
    getShift(n) {
      var e;
      const t = this,
        {
          instance: i
        } = t,
        r = t.carousel;
      if (!i || !r) return 0;
      const s = t[bl],
        o = t[On],
        a = t.thumbGap,
        c = t.thumbExtraGap;
      if (!(!((e = r.slides[n]) === null || e === void 0) && e.el)) return 0;
      const u = .5 * (s - o),
        f = i.pages.length - 1;
      let h = i.getProgress(0),
        p = i.getProgress(f),
        m = i.getProgress(n, !1, !0),
        g = 0,
        y = u + c + a;
      const w = h < 0 && h > -1,
        S = p > 0 && p < 1;
      return n === 0 ? (g = y * Math.abs(h), S && h === 1 && (g -= y * Math.abs(p))) : n === f ? (g = y * Math.abs(p) * -1, w && p === -1 && (g += y * Math.abs(h))) : w || S ? (g = -1 * y, g += y * Math.abs(h), g += y * (1 - Math.abs(p))) : g = y * m, g
    }
    setProps(n) {
      const e = this;
      if (!e.isModern) return;
      const {
        instance: t
      } = e, i = e.carousel;
      if (t && i) {
        const r = i.slides[n].el;
        if (r && r.childNodes.length) {
          let s = J(1 - Math.abs(t.getProgress(n))),
            o = J(e.getShift(n));
          r.style.setProperty("--progress", s ? s + "" : ""), r.style.setProperty("--shift", o + "")
        }
      }
    }
    shiftModern() {
      const n = this;
      if (!n.isModern) return;
      const {
        instance: e,
        track: t
      } = n, i = e.panzoom, r = n.carousel;
      if (!(e && t && i && r) || i.state === ot.Init || i.state === ot.Destroy) return;
      for (const o of e.slides) n.setProps(o.index);
      let s = (n[On] + n.thumbGap) * (r.slides.length || 0);
      t.style.setProperty("--width", s + "")
    }
    cleanup() {
      const n = this;
      n.carousel && n.carousel.destroy(), n.carousel = null, n.container && n.container.remove(), n.container = null, n.track && n.track.remove(), n.track = null, n.state = ur.Init, ht(n.instance.container, n.cn("hasThumbs"))
    }
    attach() {
      const n = this,
        e = n.instance;
      e.on("initSlide", n.onInitSlide), e.state === Bt.Init ? e.on("initSlides", n.onInitSlides) : n.onInitSlides(), e.on(["change", "Panzoom.afterTransform"], n.onChange), e.on("Panzoom.refresh", n.onRefresh)
    }
    detach() {
      const n = this,
        e = n.instance;
      e.off("initSlide", n.onInitSlide), e.off("initSlides", n.onInitSlides), e.off(["change", "Panzoom.afterTransform"], n.onChange), e.off("Panzoom.refresh", n.onRefresh), n.cleanup()
    }
  };
  Object.defineProperty(yv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: vv
  });
  const HE = Object.assign(Object.assign({}, vv), {
      key: "t",
      showOnStart: !0,
      parentEl: null
    }),
    tm = "is-masked",
    im = "aria-hidden";
  class bv extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "ref", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "hidden", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      })
    }
    get isEnabled() {
      const e = this.ref;
      return e && !e.isDisabled()
    }
    get isHidden() {
      return this.hidden
    }
    onClick(e, t) {
      t.stopPropagation()
    }
    onCreateSlide(e, t) {
      var i, r, s;
      const o = ((s = (r = (i = this.instance) === null || i === void 0 ? void 0 : i.carousel) === null || r === void 0 ? void 0 : r.slides[t.index]) === null || s === void 0 ? void 0 : s.type) || "",
        a = t.el;
      if (a && o) {
        let c = `for-${o}`;
        ["video", "youtube", "vimeo", "html5video"].includes(o) && (c += " for-video"), ve(a, c)
      }
    }
    onInit() {
      var e;
      const t = this,
        i = t.instance,
        r = i.carousel;
      if (t.ref || !r) return;
      const s = t.option("parentEl") || i.footer || i.container;
      if (!s) return;
      const o = Yi({}, t.options, {
        parentEl: s,
        classes: {
          container: "f-thumbs fancybox__thumbs"
        },
        Carousel: {
          Sync: {
            friction: i.option("Carousel.friction") || 0
          }
        },
        on: {
          ready: a => {
            const c = a.container;
            c && this.hidden && (t.refresh(), c.style.transition = "none", t.hide(), c.offsetHeight, queueMicrotask(() => {
              c.style.transition = "", t.show()
            }))
          }
        }
      });
      o.Carousel = o.Carousel || {}, o.Carousel.on = Yi(((e = t.options.Carousel) === null || e === void 0 ? void 0 : e.on) || {}, {
        click: this.onClick,
        createSlide: this.onCreateSlide
      }), r.options.Thumbs = o, r.attachPlugins({
        Thumbs: yv
      }), t.ref = r.plugins.Thumbs, t.option("showOnStart") || (t.ref.state = ur.Hidden, t.hidden = !0)
    }
    onResize() {
      var e;
      const t = (e = this.ref) === null || e === void 0 ? void 0 : e.container;
      t && (t.style.maxHeight = "")
    }
    onKeydown(e, t) {
      const i = this.option("key");
      i && i === t && this.toggle()
    }
    toggle() {
      const e = this.ref;
      if (e && !e.isDisabled()) return e.state === ur.Hidden ? (e.state = ur.Init, void e.build()) : void(this.hidden ? this.show() : this.hide())
    }
    show() {
      const e = this.ref;
      if (!e || e.isDisabled()) return;
      const t = e.container;
      t && (this.refresh(), t.offsetHeight, t.removeAttribute(im), t.classList.remove(tm), this.hidden = !1)
    }
    hide() {
      const e = this.ref,
        t = e && e.container;
      t && (this.refresh(), t.offsetHeight, t.classList.add(tm), t.setAttribute(im, "true")), this.hidden = !0
    }
    refresh() {
      const e = this.ref;
      if (!e || !e.state) return;
      const t = e.container,
        i = (t == null ? void 0 : t.firstChild) || null;
      t && i && i.childNodes.length && (t.style.maxHeight = `${i.getBoundingClientRect().height}px`)
    }
    attach() {
      const e = this,
        t = e.instance;
      t.state === ri.Init ? t.on("Carousel.init", e.onInit) : e.onInit(), t.on("resize", e.onResize), t.on("keydown", e.onKeydown)
    }
    detach() {
      var e;
      const t = this,
        i = t.instance;
      i.off("Carousel.init", t.onInit), i.off("resize", t.onResize), i.off("keydown", t.onKeydown), (e = i.carousel) === null || e === void 0 || e.detachPlugins(["Thumbs"]), t.ref = null
    }
  }
  Object.defineProperty(bv, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: HE
  });
  const Hu = {
    panLeft: {
      icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
      change: {
        panX: -100
      }
    },
    panRight: {
      icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
      change: {
        panX: 100
      }
    },
    panUp: {
      icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
      change: {
        panY: -100
      }
    },
    panDown: {
      icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
      change: {
        panY: 100
      }
    },
    zoomIn: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
      action: "zoomIn"
    },
    zoomOut: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "zoomOut"
    },
    toggle1to1: {
      icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
      action: "toggleZoom"
    },
    toggleZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "toggleZoom"
    },
    iterateZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "iterateZoom"
    },
    rotateCCW: {
      icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
      action: "rotateCCW"
    },
    rotateCW: {
      icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
      action: "rotateCW"
    },
    flipX: {
      icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
      action: "flipX"
    },
    flipY: {
      icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
      action: "flipY"
    },
    fitX: {
      icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
      action: "fitX"
    },
    fitY: {
      icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
      action: "fitY"
    },
    reset: {
      icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
      action: "reset"
    },
    toggleFS: {
      icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
      action: "toggleFS"
    }
  };
  var ls;
  (function (n) {
    n[n.Init = 0] = "Init", n[n.Ready = 1] = "Ready", n[n.Disabled = 2] = "Disabled"
  })(ls || (ls = {}));
  const WE = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
        }
      },
      parentEl: null
    },
    jE = {
      tabindex: "-1",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    };
  class _v extends Pn {
    constructor() {
      super(...arguments), Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ls.Init
      }), Object.defineProperty(this, "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      })
    }
    onReady(e) {
      var t;
      if (!e.carousel) return;
      let i = this.option("display"),
        r = this.option("absolute"),
        s = this.option("enabled");
      if (s === "auto") {
        const u = this.instance.carousel;
        let f = 0;
        if (u)
          for (const h of u.slides)(h.panzoom || h.type === "image") && f++;
        f || (s = !1)
      }
      s || (i = void 0);
      let o = 0;
      const a = {
        left: [],
        middle: [],
        right: []
      };
      if (i)
        for (const u of ["left", "middle", "right"])
          for (const f of i[u]) {
            const h = this.createEl(f);
            h && ((t = a[u]) === null || t === void 0 || t.push(h), o++)
          }
      let c = null;
      if (o && (c = this.createContainer()), c) {
        for (const [u, f] of Object.entries(a)) {
          const h = document.createElement("div");
          ve(h, "fancybox__toolbar__column is-" + u);
          for (const p of f) h.appendChild(p);
          r !== "auto" || u !== "middle" || f.length || (r = !0), c.appendChild(h)
        }
        r === !0 && ve(c, "is-absolute"), this.state = ls.Ready, this.onRefresh()
      } else this.state = ls.Disabled
    }
    onClick(e) {
      var t, i;
      const r = this.instance,
        s = r.getSlide(),
        o = s == null ? void 0 : s.panzoom,
        a = e.target,
        c = a && Pi(a) ? a.dataset : null;
      if (!c) return;
      if (c.fancyboxToggleThumbs !== void 0) return e.preventDefault(), e.stopPropagation(), void((t = r.plugins.Thumbs) === null || t === void 0 || t.toggle());
      if (c.fancyboxToggleFullscreen !== void 0) return e.preventDefault(), e.stopPropagation(), void this.instance.toggleFullscreen();
      if (c.fancyboxToggleSlideshow !== void 0) {
        e.preventDefault(), e.stopPropagation();
        const h = (i = r.carousel) === null || i === void 0 ? void 0 : i.plugins.Autoplay;
        let p = h.isActive;
        return o && o.panMode === "mousemove" && !p && o.reset(), void(p ? h.stop() : h.start())
      }
      const u = c.panzoomAction,
        f = c.panzoomChange;
      if ((f || u) && (e.preventDefault(), e.stopPropagation()), f) {
        let h = {};
        try {
          h = JSON.parse(f)
        } catch {}
        o && o.applyChange(h)
      } else u && o && o[u] && o[u]()
    }
    onChange() {
      this.onRefresh()
    }
    onRefresh() {
      if (this.instance.isClosing()) return;
      const e = this.container;
      if (!e) return;
      const t = this.instance.getSlide();
      if (!t || t.state !== fi.Ready) return;
      const i = t && !t.error && t.panzoom;
      for (const o of e.querySelectorAll("[data-panzoom-action]")) i ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
      let r = i && i.canZoomIn(),
        s = i && i.canZoomOut();
      for (const o of e.querySelectorAll('[data-panzoom-action="zoomIn"]')) r ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
      for (const o of e.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
      for (const o of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
        s || r ? (o.removeAttribute("disabled"), o.removeAttribute("tabindex")) : (o.setAttribute("disabled", ""), o.setAttribute("tabindex", "-1"));
        const a = o.querySelector("g");
        a && (a.style.display = r ? "" : "none")
      }
    }
    onDone(e, t) {
      var i;
      (i = t.panzoom) === null || i === void 0 || i.on("afterTransform", () => {
        this.instance.isCurrentSlide(t) && this.onRefresh()
      }), this.instance.isCurrentSlide(t) && this.onRefresh()
    }
    createContainer() {
      const e = this.instance.container;
      if (!e) return null;
      const t = this.option("parentEl") || e,
        i = document.createElement("div");
      return ve(i, "fancybox__toolbar"), t.prepend(i), i.addEventListener("click", this.onClick, {
        passive: !1,
        capture: !0
      }), e && ve(e, "has-toolbar"), this.container = i, i
    }
    createEl(e) {
      const t = this.instance,
        i = t.carousel;
      if (!i || e === "toggleFS" || e === "fullscreen" && !t.fsAPI) return null;
      let r = null;
      const s = i.slides.length || 0;
      let o = 0,
        a = 0;
      for (const u of i.slides)(u.panzoom || u.type === "image") && o++, (u.type === "image" || u.downloadSrc) && a++;
      if (s < 2 && ["infobar", "prev", "next"].includes(e)) return r;
      if (Hu[e] !== void 0 && !o || e === "download" && !a) return null;
      if (e === "thumbs") {
        const u = t.plugins.Thumbs;
        if (!u || !u.isEnabled) return null
      }
      if (e === "slideshow" && (!i.plugins.Autoplay || s < 2)) return null;
      if (Hu[e] !== void 0) {
        const u = Hu[e];
        r = document.createElement("button"), r.setAttribute("title", this.instance.localize(`{{${e.toUpperCase()}}}`)), ve(r, "f-button"), u.action && (r.dataset.panzoomAction = u.action), u.change && (r.dataset.panzoomChange = JSON.stringify(u.change)), r.appendChild(Fn(this.instance.localize(u.icon)))
      } else {
        const u = (this.option("items") || [])[e];
        u && (r = Fn(this.instance.localize(u.tpl)), typeof u.click == "function" && r.addEventListener("click", f => {
          f.preventDefault(), f.stopPropagation(), typeof u.click == "function" && u.click.call(this, this, f)
        }))
      }
      const c = r == null ? void 0 : r.querySelector("svg");
      if (c)
        for (const [u, f] of Object.entries(jE)) c.getAttribute(u) || c.setAttribute(u, String(f));
      return r
    }
    removeContainer() {
      const e = this.container;
      e && e.remove(), this.container = null, this.state = ls.Disabled;
      const t = this.instance.container;
      t && ht(t, "has-toolbar")
    }
    attach() {
      const e = this,
        t = e.instance;
      t.on("Carousel.initSlides", e.onReady), t.on("done", e.onDone), t.on(["reveal", "Carousel.change"], e.onChange), e.onReady(e.instance)
    }
    detach() {
      const e = this,
        t = e.instance;
      t.off("Carousel.initSlides", e.onReady), t.off("done", e.onDone), t.off(["reveal", "Carousel.change"], e.onChange), e.removeContainer()
    }
  }
  Object.defineProperty(_v, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: WE
  });
  const qE = {
      Hash: xn,
      Html: pv,
      Images: hv,
      Slideshow: gv,
      Thumbs: bv,
      Toolbar: _v
    },
    nm = "with-fancybox",
    Wu = "hide-scrollbar",
    rm = "--fancybox-scrollbar-compensate",
    sm = "--fancybox-body-margin",
    ju = "is-using-tab",
    qu = "is-animated",
    om = "is-compact",
    am = "is-loading",
    _l = "has-caption",
    $s = "disabled",
    Jr = "tabindex",
    lm = "download",
    $u = "href",
    Vs = "src",
    Tr = n => typeof n == "string",
    cm = function () {
      var n = window.getSelection();
      return n && n.type === "Range"
    };
  let sn = null,
    es = null;
  const Fo = new Map;
  let $E = 0;
  class Xe extends Df {
    get isIdle() {
      return this.idle
    }
    get isCompact() {
      return this.option("compact")
    }
    constructor(e = [], t = {}, i = {}) {
      super(t), Object.defineProperty(this, "userSlides", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(this, "userPlugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      }), Object.defineProperty(this, "idle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(this, "idleTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "clickTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "pwt", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "ignoreFocusChange", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(this, "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ri.Init
      }), Object.defineProperty(this, "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(this, "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "footer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "carousel", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "lastFocus", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(this, "prevMouseMoveEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "fsAPI", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), this.fsAPI = (() => {
        let r, s = "",
          o = "",
          a = "";
        return document.fullscreenEnabled ? (s = "requestFullscreen", o = "exitFullscreen", a = "fullscreenElement") : document.webkitFullscreenEnabled && (s = "webkitRequestFullscreen", o = "webkitExitFullscreen", a = "webkitFullscreenElement"), s && (r = {
          request: function (c) {
            return s === "webkitRequestFullscreen" ? c[s](Element.ALLOW_KEYBOARD_INPUT) : c[s]()
          },
          exit: function () {
            return document[a] && document[o]()
          },
          isFullscreen: function () {
            return document[a]
          }
        }), r
      })(), this.id = t.id || ++$E, Fo.set(this.id, this), this.userSlides = e, this.userPlugins = i, queueMicrotask(() => {
        this.init()
      })
    }
    init() {
      if (this.state === ri.Destroy) return;
      this.state = ri.Init, this.attachPlugins(Object.assign(Object.assign({}, Xe.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), this.option("hideScrollbar") === !0 && (() => {
        if (!oa) return;
        const i = document,
          r = i.body,
          s = i.documentElement;
        if (r.classList.contains(Wu)) return;
        let o = window.innerWidth - s.getBoundingClientRect().width;
        const a = parseFloat(window.getComputedStyle(r).marginRight);
        o < 0 && (o = 0), s.style.setProperty(rm, `${o}px`), a && r.style.setProperty(sm, `${a}px`), r.classList.add(Wu)
      })(), this.initLayout(), this.scale();
      const e = () => {
          this.initCarousel(this.userSlides), this.state = ri.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
            this.container && this.container.setAttribute("aria-hidden", "false")
          }, 16)
        },
        t = this.fsAPI;
      this.option("Fullscreen.autoStart") && t && !t.isFullscreen() ? t.request(this.container).then(() => e()).catch(() => e()) : e()
    }
    initLayout() {
      var e, t;
      const i = this.option("parentEl") || document.body,
        r = Fn(this.localize(this.option("tpl.main") || ""));
      r && (r.setAttribute("id", `fancybox-${this.id}`), r.setAttribute("aria-label", this.localize("{{MODAL}}")), r.classList.toggle(om, this.isCompact), ve(r, this.option("mainClass") || ""), this.container = r, this.footer = r.querySelector(".fancybox__footer"), i.appendChild(r), ve(document.documentElement, nm), sn && es || (sn = document.createElement("span"), ve(sn, "fancybox-focus-guard"), sn.setAttribute(Jr, "0"), sn.setAttribute("aria-hidden", "true"), sn.setAttribute("aria-label", "Focus guard"), es = sn.cloneNode(), (e = r.parentElement) === null || e === void 0 || e.insertBefore(sn, r), (t = r.parentElement) === null || t === void 0 || t.append(es)), r.addEventListener("mousedown", () => {
        ht(r, ju)
      }), this.option("animated") && (ve(r, qu), setTimeout(() => {
        this.isClosing() || ht(r, qu)
      }, 350)), this.emit("initLayout"))
    }
    initCarousel(e) {
      const t = this.container;
      if (!t) return;
      const i = t.querySelector(".fancybox__carousel");
      if (!i) return;
      const r = this.carousel = new vs(i, Yi({}, {
        slides: e,
        transition: "fade",
        Panzoom: {
          lockAxis: this.option("dragToClose") ? "xy" : "x",
          infinite: !!this.option("dragToClose") && "y"
        },
        Dots: !1,
        Navigation: {
          classes: {
            container: "fancybox__nav",
            button: "f-button",
            isNext: "is-next",
            isPrev: "is-prev"
          }
        },
        initialPage: this.option("startIndex"),
        l10n: this.option("l10n")
      }, this.option("Carousel") || {}));
      r.on("*", (s, o, ...a) => {
        this.emit(`Carousel.${o}`, s, ...a)
      }), r.on(["ready", "change"], () => {
        this.manageCaption()
      }), this.on("Carousel.removeSlide", (s, o, a) => {
        this.clearContent(a), a.state = void 0
      }), r.on("Panzoom.touchStart", () => {
        var s, o;
        this.isCompact || this.endIdle(), !((s = document.activeElement) === null || s === void 0) && s.closest(".f-thumbs") && ((o = this.container) === null || o === void 0 || o.focus())
      }), r.on("settle", () => {
        this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus()
      }), this.option("dragToClose") && (r.on("Panzoom.afterTransform", (s, o) => {
        const a = this.getSlide();
        if (a && Od(a.el)) return;
        const c = this.container;
        if (c) {
          const u = Math.abs(o.current.f),
            f = u < 1 ? "" : Math.max(.5, Math.min(1, 1 - u / o.contentRect.fitHeight * 1.5));
          c.style.setProperty("--fancybox-ts", f ? "0s" : ""), c.style.setProperty("--fancybox-opacity", f + "")
        }
      }), r.on("Panzoom.touchEnd", (s, o, a) => {
        var c;
        const u = this.getSlide();
        if (u && Od(u.el) || o.isMobile && document.activeElement && ["TEXTAREA", "INPUT"].indexOf((c = document.activeElement) === null || c === void 0 ? void 0 : c.nodeName) !== -1) return;
        const f = Math.abs(o.dragOffset.y);
        o.lockedAxis === "y" && (f >= 200 || f >= 50 && o.dragOffset.time < 300) && (a && a.cancelable && a.preventDefault(), this.close(a, "f-throwOut" + (o.current.f < 0 ? "Up" : "Down")))
      })), r.on("change", s => {
        var o;
        let a = (o = this.getSlide()) === null || o === void 0 ? void 0 : o.triggerEl;
        if (a) {
          const c = new CustomEvent("slideTo", {
            bubbles: !0,
            cancelable: !0,
            detail: s.page
          });
          a.dispatchEvent(c)
        }
      }), r.on(["refresh", "change"], s => {
        const o = this.container;
        if (!o) return;
        for (const u of o.querySelectorAll("[data-fancybox-current-index]")) u.innerHTML = s.page + 1;
        for (const u of o.querySelectorAll("[data-fancybox-count]")) u.innerHTML = s.pages.length;
        if (!s.isInfinite) {
          for (const u of o.querySelectorAll("[data-fancybox-next]")) s.page < s.pages.length - 1 ? (u.removeAttribute($s), u.removeAttribute(Jr)) : (u.setAttribute($s, ""), u.setAttribute(Jr, "-1"));
          for (const u of o.querySelectorAll("[data-fancybox-prev]")) s.page > 0 ? (u.removeAttribute($s), u.removeAttribute(Jr)) : (u.setAttribute($s, ""), u.setAttribute(Jr, "-1"))
        }
        const a = this.getSlide();
        if (!a) return;
        let c = a.downloadSrc || "";
        c || a.type !== "image" || a.error || !Tr(a[Vs]) || (c = a[Vs]);
        for (const u of o.querySelectorAll("[data-fancybox-download]")) {
          const f = a.downloadFilename;
          c ? (u.removeAttribute($s), u.removeAttribute(Jr), u.setAttribute($u, c), u.setAttribute(lm, f || c), u.setAttribute("target", "_blank")) : (u.setAttribute($s, ""), u.setAttribute(Jr, "-1"), u.removeAttribute($u), u.removeAttribute(lm))
        }
      }), this.emit("initCarousel")
    }
    attachEvents() {
      const e = this,
        t = e.container;
      if (!t) return;
      t.addEventListener("click", e.onClick, {
        passive: !1,
        capture: !1
      }), t.addEventListener("wheel", e.onWheel, {
        passive: !1,
        capture: !1
      }), document.addEventListener("keydown", e.onKeydown, {
        passive: !1,
        capture: !0
      }), document.addEventListener("visibilitychange", e.onVisibilityChange, !1), document.addEventListener("mousemove", e.onMousemove), e.option("trapFocus") && document.addEventListener("focus", e.onFocus, !0), window.addEventListener("resize", e.onResize);
      const i = window.visualViewport;
      i && (i.addEventListener("scroll", e.onResize), i.addEventListener("resize", e.onResize))
    }
    detachEvents() {
      const e = this,
        t = e.container;
      if (!t) return;
      document.removeEventListener("keydown", e.onKeydown, {
        passive: !1,
        capture: !0
      }), t.removeEventListener("wheel", e.onWheel, {
        passive: !1,
        capture: !1
      }), t.removeEventListener("click", e.onClick, {
        passive: !1,
        capture: !1
      }), document.removeEventListener("mousemove", e.onMousemove), window.removeEventListener("resize", e.onResize);
      const i = window.visualViewport;
      i && (i.removeEventListener("resize", e.onResize), i.removeEventListener("scroll", e.onResize)), document.removeEventListener("visibilitychange", e.onVisibilityChange, !1), document.removeEventListener("focus", e.onFocus, !0)
    }
    scale() {
      const e = this.container;
      if (!e) return;
      const t = window.visualViewport,
        i = Math.max(1, (t == null ? void 0 : t.scale) || 1);
      let r = "",
        s = "",
        o = "";
      if (t && i > 1) {
        let a = `${t.offsetLeft}px`,
          c = `${t.offsetTop}px`;
        r = t.width * i + "px", s = t.height * i + "px", o = `translate3d(${a}, ${c}, 0) scale(${1/i})`
      }
      e.style.transform = o, e.style.width = r, e.style.height = s
    }
    onClick(e) {
      var t, i;
      const {
        container: r,
        isCompact: s
      } = this;
      if (!r || this.isClosing()) return;
      !s && this.option("idle") && this.resetIdle();
      const o = e.composedPath()[0];
      if (o.closest(".f-spinner") || o.closest("[data-fancybox-close]")) return e.preventDefault(), void this.close(e);
      if (o.closest("[data-fancybox-prev]")) return e.preventDefault(), void this.prev();
      if (o.closest("[data-fancybox-next]")) return e.preventDefault(), void this.next();
      const a = document.activeElement;
      if (cm() && a && r.contains(a) || o === ((t = this.carousel) === null || t === void 0 ? void 0 : t.container)) return;
      if (s && ((i = this.getSlide()) === null || i === void 0 ? void 0 : i.type) === "image") return void(this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
        this.toggleIdle(), this.clickTimer = null
      }, 350));
      if (this.emit("click", e), e.defaultPrevented) return;
      let c = !1;
      if (o.closest(".fancybox__content")) {
        if (a) {
          if (a.closest("[contenteditable]")) return;
          o.matches(Fu) || a.blur()
        }
        if (cm()) return;
        c = this.option("contentClick")
      } else o.closest(".fancybox__carousel") && !o.matches(Fu) && (c = this.option("backdropClick"));
      c === "close" ? (e.preventDefault(), this.close(e)) : c === "next" ? (e.preventDefault(), this.next()) : c === "prev" && (e.preventDefault(), this.prev())
    }
    onWheel(e) {
      const t = e.target;
      let i = this.option("wheel", e);
      t.closest(".fancybox__thumbs") && (i = "slide");
      const r = i === "slide",
        s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (c, u) {
          return Math.abs(u) > Math.abs(c) ? u : c
        }),
        o = Math.max(-1, Math.min(1, s)),
        a = Date.now();
      this.pwt && a - this.pwt < 300 ? r && e.preventDefault() : (this.pwt = a, this.emit("wheel", e, o), e.defaultPrevented || (i === "close" ? (e.preventDefault(), this.close(e)) : i === "slide" && (sc(t) || (e.preventDefault(), this[o > 0 ? "prev" : "next"]()))))
    }
    onKeydown(e) {
      if (!this.isTopmost()) return;
      this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
      const t = e.key,
        i = this.option("keyboard");
      if (!i) return;
      const r = e.composedPath()[0],
        s = document.activeElement && document.activeElement.classList,
        o = s && s.contains("f-button") || r.dataset.carouselPage || r.dataset.carouselIndex;
      if (t !== "Escape" && !o && Pi(r) && (r.isContentEditable || ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(r.nodeName) !== -1) || (e.key === "Tab" ? ve(this.container, ju) : ht(this.container, ju), e.ctrlKey || e.altKey || e.shiftKey)) return;
      this.emit("keydown", t, e);
      const a = i[t];
      a && typeof this[a] == "function" && (e.preventDefault(), this[a]())
    }
    onResize() {
      const e = this.container;
      if (!e) return;
      const t = this.isCompact;
      e.classList.toggle(om, t), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize")
    }
    onFocus(e) {
      this.isTopmost() && this.checkFocus(e)
    }
    onMousemove(e) {
      this.prevMouseMoveEvent = e, !this.isCompact && this.option("idle") && this.resetIdle()
    }
    onVisibilityChange() {
      document.visibilityState === "visible" ? this.checkFocus() : this.endIdle()
    }
    manageCloseBtn(e) {
      const t = this.optionFor(e, "closeButton") || !1;
      if (t === "auto") {
        const r = this.plugins.Toolbar;
        if (r && r.state === ls.Ready) return
      }
      if (!t || !e.contentEl || e.closeBtnEl) return;
      const i = this.option("tpl.closeButton");
      if (i) {
        const r = Fn(this.localize(i));
        e.closeBtnEl = e.contentEl.appendChild(r), e.el && ve(e.el, "has-close-btn")
      }
    }
    manageCaption(e = void 0) {
      var t, i;
      const r = "fancybox__caption",
        s = this.container;
      if (!s) return;
      ht(s, _l);
      const o = this.isCompact || this.option("commonCaption"),
        a = !o;
      if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption)
        for (const h of ((t = this.carousel) === null || t === void 0 ? void 0 : t.slides) || []) h.captionEl && (h.captionEl.remove(), h.captionEl = void 0, ht(h.el, _l), (i = h.el) === null || i === void 0 || i.removeAttribute("aria-labelledby"));
      if (e || (e = this.getSlide()), !e || o && !this.isCurrentSlide(e)) return;
      const c = e.el;
      let u = this.optionFor(e, "caption", "");
      if (!u) return void(o && this.caption && this.animate(this.caption, "f-fadeOut", () => {
        this.caption && (this.caption.innerHTML = "")
      }));
      let f = null;
      if (a) {
        if (f = e.captionEl || null, c && !f) {
          const h = r + `_${this.id}_${e.index}`;
          f = document.createElement("div"), ve(f, r), f.setAttribute("id", h), e.captionEl = c.appendChild(f), ve(c, _l), c.setAttribute("aria-labelledby", h)
        }
      } else f = this.caption, f || (f = s.querySelector("." + r)), !f && (f = document.createElement("div"), f.dataset.fancyboxCaption = "", ve(f, r), (this.footer || s).prepend(f)), ve(s, _l), this.caption = f;
      f && (f.innerHTML = "", Tr(u) || typeof u == "number" ? f.innerHTML = u + "" : u instanceof HTMLElement && f.appendChild(u))
    }
    checkFocus(e) {
      this.focus(e)
    }
    focus(e) {
      var t;
      if (this.ignoreFocusChange) return;
      const i = document.activeElement || null,
        r = (e == null ? void 0 : e.target) || null,
        s = this.container,
        o = this.getSlide();
      if (!s || !(!((t = this.carousel) === null || t === void 0) && t.viewport) || !e && i && s.contains(i)) return;
      const a = o && o.state === fi.Ready ? o.el : null;
      if (!a || a.contains(i) || s === i) return;
      e && e.cancelable && e.preventDefault(), this.ignoreFocusChange = !0;
      const c = Array.from(s.querySelectorAll(Fu));
      let u = [],
        f = null;
      for (let p of c) {
        const m = !p.offsetParent || !!p.closest('[aria-hidden="true"]'),
          g = a && a.contains(p),
          y = !this.carousel.viewport.contains(p);
        if (p === s || (g || y) && !m) {
          u.push(p);
          const w = p.dataset.origTabindex;
          w !== void 0 && w && (p.tabIndex = parseFloat(w)), p.removeAttribute("data-orig-tabindex"), !p.hasAttribute("autoFocus") && f || (f = p)
        } else {
          const w = p.dataset.origTabindex === void 0 ? p.getAttribute("tabindex") || "" : p.dataset.origTabindex;
          w && (p.dataset.origTabindex = w), p.tabIndex = -1
        }
      }
      let h = null;
      e ? (!r || u.indexOf(r) < 0) && (h = f || s, u.length && (i === es ? h = u[0] : this.lastFocus !== s && i !== sn || (h = u[u.length - 1]))) : h = o && o.type === "image" ? s : f || s, h && Zp(h), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1
    }
    next() {
      const e = this.carousel;
      e && e.pages.length > 1 && e.slideNext()
    }
    prev() {
      const e = this.carousel;
      e && e.pages.length > 1 && e.slidePrev()
    }
    jumpTo(...e) {
      this.carousel && this.carousel.slideTo(...e)
    }
    isTopmost() {
      var e;
      return ((e = Xe.getInstance()) === null || e === void 0 ? void 0 : e.id) == this.id
    }
    animate(e = null, t = "", i) {
      if (!e || !t) return void(i && i());
      this.stop(e);
      const r = s => {
        s.target === e && e.dataset.animationName && (e.removeEventListener("animationend", r), delete e.dataset.animationName, i && i(), ht(e, t))
      };
      e.dataset.animationName = t, e.addEventListener("animationend", r), ve(e, t)
    }
    stop(e) {
      e && e.dispatchEvent(new CustomEvent("animationend", {
        bubbles: !1,
        cancelable: !0,
        currentTarget: e
      }))
    }
    setContent(e, t = "", i = !0) {
      if (this.isClosing()) return;
      const r = e.el;
      if (!r) return;
      let s = null;
      if (Pi(t) ? s = t : (s = Fn(t + ""), Pi(s) || (s = document.createElement("div"), s.innerHTML = t + "")), ["img", "picture", "iframe", "video", "audio"].includes(s.nodeName.toLowerCase())) {
        const o = document.createElement("div");
        o.appendChild(s), s = o
      }
      Pi(s) && e.filter && !e.error && (s = s.querySelector(e.filter)), s && Pi(s) ? (ve(s, "fancybox__content"), e.id && s.setAttribute("id", e.id), s.style.display !== "none" && getComputedStyle(s).getPropertyValue("display") !== "none" || (s.style.display = e.display || this.option("defaultDisplay") || "flex"), r.classList.add(`has-${e.error?"error":e.type||"unknown"}`), r.prepend(s), e.contentEl = s, i && this.revealContent(e), this.manageCloseBtn(e), this.manageCaption(e)) : this.setError(e, "{{ELEMENT_NOT_FOUND}}")
    }
    revealContent(e, t) {
      const i = e.el,
        r = e.contentEl;
      i && r && (this.emit("reveal", e), this.hideLoading(e), e.state = fi.Opening, (t = this.isOpeningSlide(e) ? t === void 0 ? this.optionFor(e, "showClass") : t : "f-fadeIn") ? this.animate(r, t, () => {
        this.done(e)
      }) : this.done(e))
    }
    done(e) {
      this.isClosing() || (e.state = fi.Ready, this.emit("done", e), ve(e.el, "is-done"), this.isCurrentSlide(e) && this.option("autoFocus") && queueMicrotask(() => {
        var t;
        (t = e.panzoom) === null || t === void 0 || t.updateControls(), this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus())
      }), this.isOpeningSlide(e) && !this.isCompact && this.option("idle") && this.setIdle())
    }
    isCurrentSlide(e) {
      const t = this.getSlide();
      return !(!e || !t) && t.index === e.index
    }
    isOpeningSlide(e) {
      var t, i;
      return ((t = this.carousel) === null || t === void 0 ? void 0 : t.prevPage) === null && e.index === ((i = this.getSlide()) === null || i === void 0 ? void 0 : i.index)
    }
    showLoading(e) {
      e.state = fi.Loading;
      const t = e.el;
      t && (ve(t, am), this.emit("loading", e), e.spinnerEl || setTimeout(() => {
        if (!this.isClosing() && !e.spinnerEl && e.state === fi.Loading) {
          let i = Fn(Af);
          e.spinnerEl = i, t.prepend(i), this.animate(i, "f-fadeIn")
        }
      }, 250))
    }
    hideLoading(e) {
      const t = e.el;
      if (!t) return;
      const i = e.spinnerEl;
      this.isClosing() ? i == null || i.remove() : (ht(t, am), i && this.animate(i, "f-fadeOut", () => {
        i.remove()
      }), e.state === fi.Loading && (this.emit("loaded", e), e.state = fi.Ready))
    }
    setError(e, t) {
      if (this.isClosing()) return;
      const i = new Event("error", {
        bubbles: !0,
        cancelable: !0
      });
      if (this.emit("error", i, e), i.defaultPrevented) return;
      e.error = t, this.hideLoading(e), this.clearContent(e);
      const r = document.createElement("div");
      r.classList.add("fancybox-error"), r.innerHTML = this.localize(t || "<p>{{ERROR}}</p>"), this.setContent(e, r)
    }
    clearContent(e) {
      if (e.state === void 0) return;
      this.emit("clearContent", e), e.contentEl && (e.contentEl.remove(), e.contentEl = void 0);
      const t = e.el;
      t && (ht(t, "has-error"), ht(t, "has-unknown"), ht(t, `has-${e.type||"unknown"}`)), e.closeBtnEl && e.closeBtnEl.remove(), e.closeBtnEl = void 0, e.captionEl && e.captionEl.remove(), e.captionEl = void 0, e.spinnerEl && e.spinnerEl.remove(), e.spinnerEl = void 0
    }
    getSlide() {
      var e;
      const t = this.carousel;
      return ((e = t == null ? void 0 : t.pages[t == null ? void 0 : t.page]) === null || e === void 0 ? void 0 : e.slides[0]) || void 0
    }
    close(e, t) {
      if (this.isClosing()) return;
      const i = new Event("shouldClose", {
        bubbles: !0,
        cancelable: !0
      });
      if (this.emit("shouldClose", i, e), i.defaultPrevented) return;
      e && e.cancelable && (e.preventDefault(), e.stopPropagation());
      const r = this.fsAPI,
        s = () => {
          this.proceedClose(e, t)
        };
      r && r.isFullscreen() === this.container ? Promise.resolve(r.exit()).then(() => s()) : s()
    }
    clearIdle() {
      this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null
    }
    setIdle(e = !1) {
      const t = () => {
        this.clearIdle(), this.idle = !0, ve(this.container, "is-idle"), this.emit("setIdle")
      };
      if (this.clearIdle(), !this.isClosing())
        if (e) t();
        else {
          const i = this.option("idle");
          i && (this.idleTimer = setTimeout(t, i))
        }
    }
    endIdle() {
      this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, ht(this.container, "is-idle"), this.emit("endIdle"))
    }
    resetIdle() {
      this.endIdle(), this.setIdle()
    }
    toggleIdle() {
      this.idle ? this.endIdle() : this.setIdle(!0)
    }
    toggleFullscreen() {
      const e = this.fsAPI;
      e && (e.isFullscreen() ? e.exit() : this.container && e.request(this.container))
    }
    isClosing() {
      return [ri.Closing, ri.CustomClosing, ri.Destroy].includes(this.state)
    }
    proceedClose(e, t) {
      var i, r;
      this.state = ri.Closing, this.clearIdle(), this.detachEvents();
      const s = this.container,
        o = this.carousel,
        a = this.getSlide(),
        c = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
      if (c && (dv(c) ? Zp(c) : c.focus()), s && (ve(s, "is-closing"), s.setAttribute("aria-hidden", "true"), this.option("animated") && ve(s, qu), s.style.pointerEvents = "none"), o) {
        o.clearTransitions(), (i = o.panzoom) === null || i === void 0 || i.destroy(), (r = o.plugins.Navigation) === null || r === void 0 || r.detach();
        for (const u of o.slides) {
          u.state = fi.Closing, this.hideLoading(u);
          const f = u.contentEl;
          f && this.stop(f);
          const h = u == null ? void 0 : u.panzoom;
          h && (h.stop(), h.detachEvents(), h.detachObserver()), this.isCurrentSlide(u) || o.emit("removeSlide", u)
        }
      }
      this.emit("close", e), this.state !== ri.CustomClosing ? (t === void 0 && a && (t = this.optionFor(a, "hideClass")), t && a ? (this.animate(a.contentEl, t, () => {
        o && o.emit("removeSlide", a)
      }), setTimeout(() => {
        this.destroy()
      }, 500)) : this.destroy()) : setTimeout(() => {
        this.destroy()
      }, 500)
    }
    destroy() {
      var e;
      if (this.state === ri.Destroy) return;
      this.state = ri.Destroy, (e = this.carousel) === null || e === void 0 || e.destroy();
      const t = this.container;
      t && t.remove(), Fo.delete(this.id);
      const i = Xe.getInstance();
      i ? i.focus() : (sn && (sn.remove(), sn = null), es && (es.remove(), es = null), ht(document.documentElement, nm), (() => {
        if (!oa) return;
        const r = document,
          s = r.body;
        s.classList.remove(Wu), s.style.setProperty(sm, ""), r.documentElement.style.setProperty(rm, "")
      })(), this.emit("destroy"))
    }
    static bind(e, t, i) {
      if (!oa) return;
      let r, s = "",
        o = {};
      if (e === void 0 ? r = document.body : Tr(e) ? (r = document.body, s = e, typeof t == "object" && (o = t || {})) : (r = e, Tr(t) && (s = t), typeof i == "object" && (o = i || {})), !r || !Pi(r)) return;
      s = s || "[data-fancybox]";
      const a = Xe.openers.get(r) || new Map;
      a.set(s, o), Xe.openers.set(r, a), a.size === 1 && r.addEventListener("click", Xe.fromEvent)
    }
    static unbind(e, t) {
      let i, r = "";
      if (Tr(e) ? (i = document.body, r = e) : (i = e, Tr(t) && (r = t)), !i) return;
      const s = Xe.openers.get(i);
      s && r && s.delete(r), r && s || (Xe.openers.delete(i), i.removeEventListener("click", Xe.fromEvent))
    }
    static destroy() {
      let e;
      for (; e = Xe.getInstance();) e.destroy();
      for (const t of Xe.openers.keys()) t.removeEventListener("click", Xe.fromEvent);
      Xe.openers = new Map
    }
    static fromEvent(e) {
      if (e.defaultPrevented || e.button && e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey) return;
      let t = e.composedPath()[0];
      const i = t.closest("[data-fancybox-trigger]");
      if (i) {
        const g = i.dataset.fancyboxTrigger || "",
          y = document.querySelectorAll(`[data-fancybox="${g}"]`),
          w = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
        t = y[w] || t
      }
      if (!(t && t instanceof Element)) return;
      let r, s, o, a;
      if ([...Xe.openers].reverse().find(([g, y]) => !(!g.contains(t) || ![...y].reverse().find(([w, S]) => {
          let T = t.closest(w);
          return !!T && (r = g, s = w, o = T, a = S, !0)
        }))), !r || !s || !o) return;
      a = a || {}, e.preventDefault(), t = o;
      let c = [],
        u = Yi({}, Dd, a);
      u.event = e, u.triggerEl = t, u.delegate = i;
      const f = u.groupAll,
        h = u.groupAttr,
        p = h && t ? t.getAttribute(`${h}`) : "";
      if ((!t || p || f) && (c = [].slice.call(r.querySelectorAll(s))), t && !f && (c = p ? c.filter(g => g.getAttribute(`${h}`) === p) : [t]), !c.length) return;
      const m = Xe.getInstance();
      return m && m.options.triggerEl && c.indexOf(m.options.triggerEl) > -1 ? void 0 : (t && (u.startIndex = c.indexOf(t)), Xe.fromNodes(c, u))
    }
    static fromSelector(e, t, i) {
      let r = null,
        s = "",
        o = {};
      if (Tr(e) ? (r = document.body, s = e, typeof t == "object" && (o = t || {})) : e instanceof HTMLElement && Tr(t) && (r = e, s = t, typeof i == "object" && (o = i || {})), !r || !s) return !1;
      const a = Xe.openers.get(r);
      return !!a && (o = Yi({}, a.get(s) || {}, o), !!o && Xe.fromNodes(Array.from(r.querySelectorAll(s)), o))
    }
    static fromNodes(e, t) {
      t = Yi({}, Dd, t || {});
      const i = [];
      for (const r of e) {
        const s = r.dataset || {},
          o = s[Vs] || r.getAttribute($u) || r.getAttribute("currentSrc") || r.getAttribute(Vs) || void 0;
        let a;
        const c = t.delegate;
        let u;
        c && i.length === t.startIndex && (a = c instanceof HTMLImageElement ? c : c.querySelector("img:not([aria-hidden])")), a || (a = r instanceof HTMLImageElement ? r : r.querySelector("img:not([aria-hidden])")), a && (u = a.currentSrc || a[Vs] || void 0, !u && a.dataset && (u = a.dataset.lazySrc || a.dataset[Vs] || void 0));
        const f = {
          src: o,
          triggerEl: r,
          thumbEl: a,
          thumbElSrc: u,
          thumbSrc: u
        };
        for (const h in s) {
          let p = s[h] + "";
          p = p !== "false" && (p === "true" || p), f[h] = p
        }
        i.push(f)
      }
      return new Xe(i, t)
    }
    static getInstance(e) {
      return e ? Fo.get(e) : Array.from(Fo.values()).reverse().find(t => !t.isClosing() && t) || null
    }
    static getSlide() {
      var e;
      return ((e = Xe.getInstance()) === null || e === void 0 ? void 0 : e.getSlide()) || null
    }
    static show(e = [], t = {}) {
      return new Xe(e, t)
    }
    static next() {
      const e = Xe.getInstance();
      e && e.next()
    }
    static prev() {
      const e = Xe.getInstance();
      e && e.prev()
    }
    static close(e = !0, ...t) {
      if (e)
        for (const i of Fo.values()) i.close(...t);
      else {
        const i = Xe.getInstance();
        i && i.close(...t)
      }
    }
  }
  Object.defineProperty(Xe, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.28"
  }), Object.defineProperty(Xe, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Dd
  }), Object.defineProperty(Xe, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: qE
  }), Object.defineProperty(Xe, "openers", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: new Map
  });
  et.registerPlugin(ks);

  function VE(n, e = 1) {
    let t = n.querySelectorAll(".mousemove"),
      i = a();
    s(50, 50);

    function r(c) {
      var u = c.currentTarget.getBoundingClientRect(),
        f = c.clientX - u.left,
        h = c.clientY - u.top;
      let p = f / i.x * 100 * e,
        m = h / i.y * 100 * e;
      s(p, m)
    }

    function s(c, u) {
      let f = .05;
      t.forEach(h => {
        et.timeline().to(n, 1, {
          ease: ks.easeOut,
          "--x": `${c}%`,
          "--y": `${u}%`
        }, f), f += .1
      })
    }

    function o() {
      s(50, 50)
    }

    function a(c) {
      let u = n.getBoundingClientRect();
      return {
        x: u.width,
        y: u.height
      }
    }
    n.addEventListener("mousemove", r), n.addEventListener("mouseleave", o)
  }
  const UE = "projetos-post";

  function BE() {
    Ce.isDesktop && r0(), Xe.bind("[data-fancybox]", {
      Image: {
        zoom: !0
      },
      Thumbs: !1,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"]
        }
      }
    }), document.querySelectorAll(".slider-gallery").forEach(e => {
      new $i(e.querySelector(".swiper-container"), {
        modules: [cE],
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        effect: "slide",
        navigation: {
          prevEl: e.querySelector(".swiper-button-prev"),
          nextEl: e.querySelector(".swiper-button-next")
        },
        centerInsufficientSlides: !1,
        grabCursor: !1,
        observer: !0,
        watchSlidesProgress: !0,
        longSwipes: !1,
        breakpoints: {
          767: {
            slidesPerView: 2,
            slidesPerGroup: 1
          },
          1025: {
            slidesPerView: "auto",
            slidesPerGroup: 1
          }
        }
      })
    }), document.querySelector(".btn-next-project") && VE(document.querySelector(".btn-next-project"))
  }
  const GE = new xa({
    pageName: UE,
    main: BE
  });
  var wv = {
    exports: {}
  };
  (function (n, e) {
    (function (t, i) {
      n.exports = i()
    })(to, function () {
      var t = document,
        i = t.createTextNode.bind(t);

      function r(H, V, N) {
        H.style.setProperty(V, N)
      }

      function s(H, V) {
        return H.appendChild(V)
      }

      function o(H, V, N, te) {
        var j = t.createElement("span");
        return V && (j.className = V), N && (!te && j.setAttribute("data-" + V, N), j.textContent = N), H && s(H, j) || j
      }

      function a(H, V) {
        return H.getAttribute("data-" + V)
      }

      function c(H, V) {
        return !H || H.length == 0 ? [] : H.nodeName ? [H] : [].slice.call(H[0].nodeName ? H : (V || t).querySelectorAll(H))
      }

      function u(H) {
        for (var V = []; H--;) V[H] = [];
        return V
      }

      function f(H, V) {
        H && H.some(V)
      }

      function h(H) {
        return function (V) {
          return H[V]
        }
      }

      function p(H, V, N) {
        var te = "--" + V,
          j = te + "-index";
        f(N, function (ae, fe) {
          Array.isArray(ae) ? f(ae, function (_e) {
            r(_e, j, fe)
          }) : r(ae, j, fe)
        }), r(H, te + "-total", N.length)
      }
      var m = {};

      function g(H, V, N) {
        var te = N.indexOf(H);
        if (te == -1) N.unshift(H), f(m[H].depends, function (ae) {
          g(ae, H, N)
        });
        else {
          var j = N.indexOf(V);
          N.splice(te, 1), N.splice(j, 0, H)
        }
        return N
      }

      function y(H, V, N, te) {
        return {
          by: H,
          depends: V,
          key: N,
          split: te
        }
      }

      function w(H) {
        return g(H, 0, []).map(h(m))
      }

      function S(H) {
        m[H.by] = H
      }

      function T(H, V, N, te, j) {
        H.normalize();
        var ae = [],
          fe = document.createDocumentFragment();
        te && ae.push(H.previousSibling);
        var _e = [];
        return c(H.childNodes).some(function (Ae) {
          if (Ae.tagName && !Ae.hasChildNodes()) {
            _e.push(Ae);
            return
          }
          if (Ae.childNodes && Ae.childNodes.length) {
            _e.push(Ae), ae.push.apply(ae, T(Ae, V, N, te, j));
            return
          }
          var Lt = Ae.wholeText || "",
            Ye = Lt.trim();
          Ye.length && (Lt[0] === " " && _e.push(i(" ")), f(Ye.split(N), function (ut, $t) {
            $t && j && _e.push(o(fe, "whitespace", " ", j));
            var xt = o(fe, V, ut);
            ae.push(xt), _e.push(xt)
          }), Lt[Lt.length - 1] === " " && _e.push(i(" ")))
        }), f(_e, function (Ae) {
          s(fe, Ae)
        }), H.innerHTML = "", s(H, fe), ae
      }
      var M = 0;

      function k(H, V) {
        for (var N in V) H[N] = V[N];
        return H
      }
      var E = "words",
        O = y(E, M, "word", function (H) {
          return T(H, "word", /\s+/, 0, 1)
        }),
        P = "chars",
        R = y(P, [E], "char", function (H, V, N) {
          var te = [];
          return f(N[E], function (j, ae) {
            te.push.apply(te, T(j, "char", "", V.whitespace && ae))
          }), te
        });

      function L(H) {
        H = H || {};
        var V = H.key;
        return c(H.target || "[data-splitting]").map(function (N) {
          var te = N["�뜉"];
          if (!H.force && te) return te;
          te = N["�뜉"] = {
            el: N
          };
          var j = w(H.by || a(N, "splitting") || P),
            ae = k({}, H);
          return f(j, function (fe) {
            if (fe.split) {
              var _e = fe.by,
                Ae = (V ? "-" + V : "") + fe.key,
                Lt = fe.split(N, ae, te);
              Ae && p(N, Ae, Lt), te[_e] = Lt, N.classList.add(_e)
            }
          }), N.classList.add("splitting"), te
        })
      }

      function F(H) {
        H = H || {};
        var V = H.target = o();
        return V.innerHTML = H.content, L(H), V.outerHTML
      }
      L.html = F, L.add = S;

      function I(H, V, N) {
        var te = c(V.matching || H.children, H),
          j = {};
        return f(te, function (ae) {
          var fe = Math.round(ae[N]);
          (j[fe] || (j[fe] = [])).push(ae)
        }), Object.keys(j).map(Number).sort(D).map(h(j))
      }

      function D(H, V) {
        return H - V
      }
      var q = y("lines", [E], "line", function (H, V, N) {
          return I(H, {
            matching: N[E]
          }, "offsetTop")
        }),
        Z = y("items", M, "item", function (H, V) {
          return c(V.matching || H.children, H)
        }),
        B = y("rows", M, "row", function (H, V) {
          return I(H, V, "offsetTop")
        }),
        se = y("cols", M, "col", function (H, V) {
          return I(H, V, "offsetLeft")
        }),
        re = y("grid", ["rows", "cols"]),
        le = "layout",
        we = y(le, M, M, function (H, V) {
          var N = V.rows = +(V.rows || a(H, "rows") || 1),
            te = V.columns = +(V.columns || a(H, "columns") || 1);
          if (V.image = V.image || a(H, "image") || H.currentSrc || H.src, V.image) {
            var j = c("img", H)[0];
            V.image = j && (j.currentSrc || j.src)
          }
          V.image && r(H, "background-image", "url(" + V.image + ")");
          for (var ae = N * te, fe = [], _e = o(M, "cell-grid"); ae--;) {
            var Ae = o(_e, "cell");
            o(Ae, "cell-inner"), fe.push(Ae)
          }
          return s(H, _e), fe
        }),
        A = y("cellRows", [le], "row", function (H, V, N) {
          var te = V.rows,
            j = u(te);
          return f(N[le], function (ae, fe, _e) {
            j[Math.floor(fe / (_e.length / te))].push(ae)
          }), j
        }),
        ye = y("cellColumns", [le], "col", function (H, V, N) {
          var te = V.columns,
            j = u(te);
          return f(N[le], function (ae, fe) {
            j[fe % te].push(ae)
          }), j
        }),
        je = y("cells", ["cellRows", "cellColumns"], "cell", function (H, V, N) {
          return N[le]
        });
      return S(O), S(R), S(q), S(Z), S(B), S(se), S(re), S(we), S(A), S(ye), S(je), L
    })
  })(wv);
  var XE = wv.exports;
  const Sv = ac(XE);

  function xv() {
    document.querySelectorAll(".split-words:not(.splitting)").forEach(n => {
      const e = Sv({
        target: n,
        by: "lines"
      });
      new DocumentFragment, e[0].lines.forEach((t, i) => {
        t.forEach((r, s) => {
          s == 0 && r.classList.add("first-word"), r.classList.add("wrapper-mask"), r.innerHTML = '<span class="line-' + i + '">' + r.innerHTML + "<span>&nbsp;</span></span>"
        })
      }), n.querySelectorAll(".whitespace").forEach(t => {
        t.remove()
      })
    })
  }
  document.addEventListener("pjax:complete", xv);

  function Tv() {
    document.querySelectorAll(".split-chars:not(.splitting)").forEach(n => {
      Sv({
        target: n,
        by: "chars"
      })
    })
  }
  document.addEventListener("pjax:complete", Tv);
  let Lf = function () {
      return document.querySelectorAll("[data-get-section]")
    },
    Pc = function () {
      return document.querySelectorAll("[data-set-section]")
    },
    Rf = xs(Lf()),
    aa = xs(Pc());
  document.addEventListener("readystatechange", () => {
    document.readyState === "complete" && (Rf = xs(Lf()), aa = xs(Pc()))
  });
  document.addEventListener("pjax:complete", () => {
    Rf = xs(Lf()), aa = xs(Pc())
  });

  function um() {
    aa = xs(Pc()), Rf.forEach(n => {
      for (let e = 0; e < aa.length; e++) {
        const t = aa[e];
        if (n.middle > t.top && n.middle < t.bottom) {
          n.el.dataset.getSection != t.el.dataset.setSection && (n.el.dataset.getSection = t.el.dataset.setSection);
          return
        }
      }
    })
  }

  function xs(n) {
    let e = [];
    return n.forEach(t => {
      let i = t.getBoundingClientRect();
      e.push({
        el: t,
        top: i.top,
        bottom: i.bottom,
        middle: i.bottom - (i.bottom - i.top) / 2
      })
    }), e
  }
  var ZE = {
    exports: {}
  };
  (function (n, e) {
    (function (t, i) {
      n.exports = i()
    })(to, function () {
      var t;

      function i() {
        return t.apply(null, arguments)
      }

      function r(l) {
        t = l
      }

      function s(l) {
        return l instanceof Array || Object.prototype.toString.call(l) === "[object Array]"
      }

      function o(l) {
        return l != null && Object.prototype.toString.call(l) === "[object Object]"
      }

      function a(l, d) {
        return Object.prototype.hasOwnProperty.call(l, d)
      }

      function c(l) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(l).length === 0;
        var d;
        for (d in l)
          if (a(l, d)) return !1;
        return !0
      }

      function u(l) {
        return l === void 0
      }

      function f(l) {
        return typeof l == "number" || Object.prototype.toString.call(l) === "[object Number]"
      }

      function h(l) {
        return l instanceof Date || Object.prototype.toString.call(l) === "[object Date]"
      }

      function p(l, d) {
        var v = [],
          _, x = l.length;
        for (_ = 0; _ < x; ++_) v.push(d(l[_], _));
        return v
      }

      function m(l, d) {
        for (var v in d) a(d, v) && (l[v] = d[v]);
        return a(d, "toString") && (l.toString = d.toString), a(d, "valueOf") && (l.valueOf = d.valueOf), l
      }

      function g(l, d, v, _) {
        return Gf(l, d, v, _, !0).utc()
      }

      function y() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }
      }

      function w(l) {
        return l._pf == null && (l._pf = y()), l._pf
      }
      var S;
      Array.prototype.some ? S = Array.prototype.some : S = function (l) {
        var d = Object(this),
          v = d.length >>> 0,
          _;
        for (_ = 0; _ < v; _++)
          if (_ in d && l.call(this, d[_], _, d)) return !0;
        return !1
      };

      function T(l) {
        if (l._isValid == null) {
          var d = w(l),
            v = S.call(d.parsedDateParts, function (x) {
              return x != null
            }),
            _ = !isNaN(l._d.getTime()) && d.overflow < 0 && !d.empty && !d.invalidEra && !d.invalidMonth && !d.invalidWeekday && !d.weekdayMismatch && !d.nullInput && !d.invalidFormat && !d.userInvalidated && (!d.meridiem || d.meridiem && v);
          if (l._strict && (_ = _ && d.charsLeftOver === 0 && d.unusedTokens.length === 0 && d.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(l)) l._isValid = _;
          else return _
        }
        return l._isValid
      }

      function M(l) {
        var d = g(NaN);
        return l != null ? m(w(d), l) : w(d).userInvalidated = !0, d
      }
      var k = i.momentProperties = [],
        E = !1;

      function O(l, d) {
        var v, _, x, C = k.length;
        if (u(d._isAMomentObject) || (l._isAMomentObject = d._isAMomentObject), u(d._i) || (l._i = d._i), u(d._f) || (l._f = d._f), u(d._l) || (l._l = d._l), u(d._strict) || (l._strict = d._strict), u(d._tzm) || (l._tzm = d._tzm), u(d._isUTC) || (l._isUTC = d._isUTC), u(d._offset) || (l._offset = d._offset), u(d._pf) || (l._pf = w(d)), u(d._locale) || (l._locale = d._locale), C > 0)
          for (v = 0; v < C; v++) _ = k[v], x = d[_], u(x) || (l[_] = x);
        return l
      }

      function P(l) {
        O(this, l), this._d = new Date(l._d != null ? l._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), E === !1 && (E = !0, i.updateOffset(this), E = !1)
      }

      function R(l) {
        return l instanceof P || l != null && l._isAMomentObject != null
      }

      function L(l) {
        i.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + l)
      }

      function F(l, d) {
        var v = !0;
        return m(function () {
          if (i.deprecationHandler != null && i.deprecationHandler(null, l), v) {
            var _ = [],
              x, C, W, he = arguments.length;
            for (C = 0; C < he; C++) {
              if (x = "", typeof arguments[C] == "object") {
                x += `
[` + C + "] ";
                for (W in arguments[0]) a(arguments[0], W) && (x += W + ": " + arguments[0][W] + ", ");
                x = x.slice(0, -2)
              } else x = arguments[C];
              _.push(x)
            }
            L(l + `
Arguments: ` + Array.prototype.slice.call(_).join("") + `
` + new Error().stack), v = !1
          }
          return d.apply(this, arguments)
        }, d)
      }
      var I = {};

      function D(l, d) {
        i.deprecationHandler != null && i.deprecationHandler(l, d), I[l] || (L(d), I[l] = !0)
      }
      i.suppressDeprecationWarnings = !1, i.deprecationHandler = null;

      function q(l) {
        return typeof Function < "u" && l instanceof Function || Object.prototype.toString.call(l) === "[object Function]"
      }

      function Z(l) {
        var d, v;
        for (v in l) a(l, v) && (d = l[v], q(d) ? this[v] = d : this["_" + v] = d);
        this._config = l, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
      }

      function B(l, d) {
        var v = m({}, l),
          _;
        for (_ in d) a(d, _) && (o(l[_]) && o(d[_]) ? (v[_] = {}, m(v[_], l[_]), m(v[_], d[_])) : d[_] != null ? v[_] = d[_] : delete v[_]);
        for (_ in l) a(l, _) && !a(d, _) && o(l[_]) && (v[_] = m({}, v[_]));
        return v
      }

      function se(l) {
        l != null && this.set(l)
      }
      var re;
      Object.keys ? re = Object.keys : re = function (l) {
        var d, v = [];
        for (d in l) a(l, d) && v.push(d);
        return v
      };
      var le = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };

      function we(l, d, v) {
        var _ = this._calendar[l] || this._calendar.sameElse;
        return q(_) ? _.call(d, v) : _
      }

      function A(l, d, v) {
        var _ = "" + Math.abs(l),
          x = d - _.length,
          C = l >= 0;
        return (C ? v ? "+" : "" : "-") + Math.pow(10, Math.max(0, x)).toString().substr(1) + _
      }
      var ye = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        H = {},
        V = {};

      function N(l, d, v, _) {
        var x = _;
        typeof _ == "string" && (x = function () {
          return this[_]()
        }), l && (V[l] = x), d && (V[d[0]] = function () {
          return A(x.apply(this, arguments), d[1], d[2])
        }), v && (V[v] = function () {
          return this.localeData().ordinal(x.apply(this, arguments), l)
        })
      }

      function te(l) {
        return l.match(/\[[\s\S]/) ? l.replace(/^\[|\]$/g, "") : l.replace(/\\/g, "")
      }

      function j(l) {
        var d = l.match(ye),
          v, _;
        for (v = 0, _ = d.length; v < _; v++) V[d[v]] ? d[v] = V[d[v]] : d[v] = te(d[v]);
        return function (x) {
          var C = "",
            W;
          for (W = 0; W < _; W++) C += q(d[W]) ? d[W].call(x, l) : d[W];
          return C
        }
      }

      function ae(l, d) {
        return l.isValid() ? (d = fe(d, l.localeData()), H[d] = H[d] || j(d), H[d](l)) : l.localeData().invalidDate()
      }

      function fe(l, d) {
        var v = 5;

        function _(x) {
          return d.longDateFormat(x) || x
        }
        for (je.lastIndex = 0; v >= 0 && je.test(l);) l = l.replace(je, _), je.lastIndex = 0, v -= 1;
        return l
      }
      var _e = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };

      function Ae(l) {
        var d = this._longDateFormat[l],
          v = this._longDateFormat[l.toUpperCase()];
        return d || !v ? d : (this._longDateFormat[l] = v.match(ye).map(function (_) {
          return _ === "MMMM" || _ === "MM" || _ === "DD" || _ === "dddd" ? _.slice(1) : _
        }).join(""), this._longDateFormat[l])
      }
      var Lt = "Invalid date";

      function Ye() {
        return this._invalidDate
      }
      var ut = "%d",
        $t = /\d{1,2}/;

      function xt(l) {
        return this._ordinal.replace("%d", l)
      }
      var z = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };

      function U(l, d, v, _) {
        var x = this._relativeTime[v];
        return q(x) ? x(l, d, v, _) : x.replace(/%d/i, l)
      }

      function Y(l, d) {
        var v = this._relativeTime[l > 0 ? "future" : "past"];
        return q(v) ? v(d) : v.replace(/%s/i, d)
      }
      var Q = {};

      function K(l, d) {
        var v = l.toLowerCase();
        Q[v] = Q[v + "s"] = Q[d] = l
      }

      function ue(l) {
        return typeof l == "string" ? Q[l] || Q[l.toLowerCase()] : void 0
      }

      function Te(l) {
        var d = {},
          v, _;
        for (_ in l) a(l, _) && (v = ue(_), v && (d[v] = l[_]));
        return d
      }
      var at = {};

      function Se(l, d) {
        at[l] = d
      }

      function Pe(l) {
        var d = [],
          v;
        for (v in l) a(l, v) && d.push({
          unit: v,
          priority: at[v]
        });
        return d.sort(function (_, x) {
          return _.priority - x.priority
        }), d
      }

      function nt(l) {
        return l % 4 === 0 && l % 100 !== 0 || l % 400 === 0
      }

      function Ee(l) {
        return l < 0 ? Math.ceil(l) || 0 : Math.floor(l)
      }

      function ee(l) {
        var d = +l,
          v = 0;
        return d !== 0 && isFinite(d) && (v = Ee(d)), v
      }

      function st(l, d) {
        return function (v) {
          return v != null ? (Ht(this, l, v), i.updateOffset(this, d), this) : de(this, l)
        }
      }

      function de(l, d) {
        return l.isValid() ? l._d["get" + (l._isUTC ? "UTC" : "") + d]() : NaN
      }

      function Ht(l, d, v) {
        l.isValid() && !isNaN(v) && (d === "FullYear" && nt(l.year()) && l.month() === 1 && l.date() === 29 ? (v = ee(v), l._d["set" + (l._isUTC ? "UTC" : "") + d](v, l.month(), Mt(v, l.month()))) : l._d["set" + (l._isUTC ? "UTC" : "") + d](v))
      }

      function Di(l) {
        return l = ue(l), q(this[l]) ? this[l]() : this
      }

      function bi(l, d) {
        if (typeof l == "object") {
          l = Te(l);
          var v = Pe(l),
            _, x = v.length;
          for (_ = 0; _ < x; _++) this[v[_].unit](l[v[_].unit])
        } else if (l = ue(l), q(this[l])) return this[l](d);
        return this
      }
      var en = /\d/,
        mt = /\d\d/,
        _i = /\d{3}/,
        Kt = /\d{4}/,
        Oe = /[+-]?\d{6}/,
        Le = /\d\d?/,
        Ke = /\d\d\d\d?/,
        dt = /\d\d\d\d\d\d?/,
        Rt = /\d{1,3}/,
        ci = /\d{1,4}/,
        It = /[+-]?\d{1,6}/,
        Yt = /\d+/,
        be = /[+-]?\d+/,
        ge = /Z|[+-]\d\d:?\d\d/gi,
        $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Tt = /[+-]?\d+(\.\d{1,3})?/,
        ne = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        Fe;
      Fe = {};

      function $(l, d, v) {
        Fe[l] = q(d) ? d : function (_, x) {
          return _ && v ? v : d
        }
      }

      function Ne(l, d) {
        return a(Fe, l) ? Fe[l](d._strict, d._locale) : new RegExp(Vt(l))
      }

      function Vt(l) {
        return xe(l.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (d, v, _, x, C) {
          return v || _ || x || C
        }))
      }

      function xe(l) {
        return l.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var gt = {};

      function Me(l, d) {
        var v, _ = d,
          x;
        for (typeof l == "string" && (l = [l]), f(d) && (_ = function (C, W) {
            W[d] = ee(C)
          }), x = l.length, v = 0; v < x; v++) gt[l[v]] = _
      }

      function Et(l, d) {
        Me(l, function (v, _, x, C) {
          x._w = x._w || {}, d(v, x._w, x, C)
        })
      }

      function vt(l, d, v) {
        d != null && a(gt, l) && gt[l](d, v._a, v, l)
      }
      var ke = 0,
        Wt = 1,
        Be = 2,
        Qe = 3,
        Ft = 4,
        Ot = 5,
        yt = 6,
        ti = 7,
        Un = 8;

      function Os(l, d) {
        return (l % d + d) % d
      }
      var ze;
      Array.prototype.indexOf ? ze = Array.prototype.indexOf : ze = function (l) {
        var d;
        for (d = 0; d < this.length; ++d)
          if (this[d] === l) return d;
        return -1
      };

      function Mt(l, d) {
        if (isNaN(l) || isNaN(d)) return NaN;
        var v = Os(d, 12);
        return l += (d - v) / 12, v === 1 ? nt(l) ? 29 : 28 : 31 - v % 7 % 2
      }
      N("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
      }), N("MMM", 0, 0, function (l) {
        return this.localeData().monthsShort(this, l)
      }), N("MMMM", 0, 0, function (l) {
        return this.localeData().months(this, l)
      }), K("month", "M"), Se("month", 8), $("M", Le), $("MM", Le, mt), $("MMM", function (l, d) {
        return d.monthsShortRegex(l)
      }), $("MMMM", function (l, d) {
        return d.monthsRegex(l)
      }), Me(["M", "MM"], function (l, d) {
        d[Wt] = ee(l) - 1
      }), Me(["MMM", "MMMM"], function (l, d, v, _) {
        var x = v._locale.monthsParse(l, _, v._strict);
        x != null ? d[Wt] = x : w(v).invalidMonth = l
      });
      var tn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Cs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        So = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        $r = ne,
        nn = ne;

      function Vr(l, d) {
        return l ? s(this._months) ? this._months[l.month()] : this._months[(this._months.isFormat || So).test(d) ? "format" : "standalone"][l.month()] : s(this._months) ? this._months : this._months.standalone
      }

      function Ds(l, d) {
        return l ? s(this._monthsShort) ? this._monthsShort[l.month()] : this._monthsShort[So.test(d) ? "format" : "standalone"][l.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
      }

      function Ur(l, d, v) {
        var _, x, C, W = l.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], _ = 0; _ < 12; ++_) C = g([2e3, _]), this._shortMonthsParse[_] = this.monthsShort(C, "").toLocaleLowerCase(), this._longMonthsParse[_] = this.months(C, "").toLocaleLowerCase();
        return v ? d === "MMM" ? (x = ze.call(this._shortMonthsParse, W), x !== -1 ? x : null) : (x = ze.call(this._longMonthsParse, W), x !== -1 ? x : null) : d === "MMM" ? (x = ze.call(this._shortMonthsParse, W), x !== -1 ? x : (x = ze.call(this._longMonthsParse, W), x !== -1 ? x : null)) : (x = ze.call(this._longMonthsParse, W), x !== -1 ? x : (x = ze.call(this._shortMonthsParse, W), x !== -1 ? x : null))
      }

      function kv(l, d, v) {
        var _, x, C;
        if (this._monthsParseExact) return Ur.call(this, l, d, v);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), _ = 0; _ < 12; _++) {
          if (x = g([2e3, _]), v && !this._longMonthsParse[_] && (this._longMonthsParse[_] = new RegExp("^" + this.months(x, "").replace(".", "") + "$", "i"), this._shortMonthsParse[_] = new RegExp("^" + this.monthsShort(x, "").replace(".", "") + "$", "i")), !v && !this._monthsParse[_] && (C = "^" + this.months(x, "") + "|^" + this.monthsShort(x, ""), this._monthsParse[_] = new RegExp(C.replace(".", ""), "i")), v && d === "MMMM" && this._longMonthsParse[_].test(l)) return _;
          if (v && d === "MMM" && this._shortMonthsParse[_].test(l)) return _;
          if (!v && this._monthsParse[_].test(l)) return _
        }
      }

      function If(l, d) {
        var v;
        if (!l.isValid()) return l;
        if (typeof d == "string") {
          if (/^\d+$/.test(d)) d = ee(d);
          else if (d = l.localeData().monthsParse(d), !f(d)) return l
        }
        return v = Math.min(l.date(), Mt(l.year(), d)), l._d["set" + (l._isUTC ? "UTC" : "") + "Month"](d, v), l
      }

      function Yf(l) {
        return l != null ? (If(this, l), i.updateOffset(this, !0), this) : de(this, "Month")
      }

      function Pv() {
        return Mt(this.year(), this.month())
      }

      function Ev(l) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || Ff.call(this), l ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = $r), this._monthsShortStrictRegex && l ? this._monthsShortStrictRegex : this._monthsShortRegex)
      }

      function Ov(l) {
        return this._monthsParseExact ? (a(this, "_monthsRegex") || Ff.call(this), l ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = nn), this._monthsStrictRegex && l ? this._monthsStrictRegex : this._monthsRegex)
      }

      function Ff() {
        function l(W, he) {
          return he.length - W.length
        }
        var d = [],
          v = [],
          _ = [],
          x, C;
        for (x = 0; x < 12; x++) C = g([2e3, x]), d.push(this.monthsShort(C, "")), v.push(this.months(C, "")), _.push(this.months(C, "")), _.push(this.monthsShort(C, ""));
        for (d.sort(l), v.sort(l), _.sort(l), x = 0; x < 12; x++) d[x] = xe(d[x]), v[x] = xe(v[x]);
        for (x = 0; x < 24; x++) _[x] = xe(_[x]);
        this._monthsRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + v.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
      }
      N("Y", 0, 0, function () {
        var l = this.year();
        return l <= 9999 ? A(l, 4) : "+" + l
      }), N(0, ["YY", 2], 0, function () {
        return this.year() % 100
      }), N(0, ["YYYY", 4], 0, "year"), N(0, ["YYYYY", 5], 0, "year"), N(0, ["YYYYYY", 6, !0], 0, "year"), K("year", "y"), Se("year", 1), $("Y", be), $("YY", Le, mt), $("YYYY", ci, Kt), $("YYYYY", It, Oe), $("YYYYYY", It, Oe), Me(["YYYYY", "YYYYYY"], ke), Me("YYYY", function (l, d) {
        d[ke] = l.length === 2 ? i.parseTwoDigitYear(l) : ee(l)
      }), Me("YY", function (l, d) {
        d[ke] = i.parseTwoDigitYear(l)
      }), Me("Y", function (l, d) {
        d[ke] = parseInt(l, 10)
      });

      function xo(l) {
        return nt(l) ? 366 : 365
      }
      i.parseTwoDigitYear = function (l) {
        return ee(l) + (ee(l) > 68 ? 1900 : 2e3)
      };
      var Nf = st("FullYear", !0);

      function Cv() {
        return nt(this.year())
      }

      function Dv(l, d, v, _, x, C, W) {
        var he;
        return l < 100 && l >= 0 ? (he = new Date(l + 400, d, v, _, x, C, W), isFinite(he.getFullYear()) && he.setFullYear(l)) : he = new Date(l, d, v, _, x, C, W), he
      }

      function To(l) {
        var d, v;
        return l < 100 && l >= 0 ? (v = Array.prototype.slice.call(arguments), v[0] = l + 400, d = new Date(Date.UTC.apply(null, v)), isFinite(d.getUTCFullYear()) && d.setUTCFullYear(l)) : d = new Date(Date.UTC.apply(null, arguments)), d
      }

      function Ea(l, d, v) {
        var _ = 7 + d - v,
          x = (7 + To(l, 0, _).getUTCDay() - d) % 7;
        return -x + _ - 1
      }

      function zf(l, d, v, _, x) {
        var C = (7 + v - _) % 7,
          W = Ea(l, _, x),
          he = 1 + 7 * (d - 1) + C + W,
          Re, lt;
        return he <= 0 ? (Re = l - 1, lt = xo(Re) + he) : he > xo(l) ? (Re = l + 1, lt = he - xo(l)) : (Re = l, lt = he), {
          year: Re,
          dayOfYear: lt
        }
      }

      function Mo(l, d, v) {
        var _ = Ea(l.year(), d, v),
          x = Math.floor((l.dayOfYear() - _ - 1) / 7) + 1,
          C, W;
        return x < 1 ? (W = l.year() - 1, C = x + Bn(W, d, v)) : x > Bn(l.year(), d, v) ? (C = x - Bn(l.year(), d, v), W = l.year() + 1) : (W = l.year(), C = x), {
          week: C,
          year: W
        }
      }

      function Bn(l, d, v) {
        var _ = Ea(l, d, v),
          x = Ea(l + 1, d, v);
        return (xo(l) - _ + x) / 7
      }
      N("w", ["ww", 2], "wo", "week"), N("W", ["WW", 2], "Wo", "isoWeek"), K("week", "w"), K("isoWeek", "W"), Se("week", 5), Se("isoWeek", 5), $("w", Le), $("ww", Le, mt), $("W", Le), $("WW", Le, mt), Et(["w", "ww", "W", "WW"], function (l, d, v, _) {
        d[_.substr(0, 1)] = ee(l)
      });

      function Av(l) {
        return Mo(l, this._week.dow, this._week.doy).week
      }
      var Lv = {
        dow: 0,
        doy: 6
      };

      function Rv() {
        return this._week.dow
      }

      function Iv() {
        return this._week.doy
      }

      function Yv(l) {
        var d = this.localeData().week(this);
        return l == null ? d : this.add((l - d) * 7, "d")
      }

      function Fv(l) {
        var d = Mo(this, 1, 4).week;
        return l == null ? d : this.add((l - d) * 7, "d")
      }
      N("d", 0, "do", "day"), N("dd", 0, 0, function (l) {
        return this.localeData().weekdaysMin(this, l)
      }), N("ddd", 0, 0, function (l) {
        return this.localeData().weekdaysShort(this, l)
      }), N("dddd", 0, 0, function (l) {
        return this.localeData().weekdays(this, l)
      }), N("e", 0, 0, "weekday"), N("E", 0, 0, "isoWeekday"), K("day", "d"), K("weekday", "e"), K("isoWeekday", "E"), Se("day", 11), Se("weekday", 11), Se("isoWeekday", 11), $("d", Le), $("e", Le), $("E", Le), $("dd", function (l, d) {
        return d.weekdaysMinRegex(l)
      }), $("ddd", function (l, d) {
        return d.weekdaysShortRegex(l)
      }), $("dddd", function (l, d) {
        return d.weekdaysRegex(l)
      }), Et(["dd", "ddd", "dddd"], function (l, d, v, _) {
        var x = v._locale.weekdaysParse(l, _, v._strict);
        x != null ? d.d = x : w(v).invalidWeekday = l
      }), Et(["d", "e", "E"], function (l, d, v, _) {
        d[_] = ee(l)
      });

      function Nv(l, d) {
        return typeof l != "string" ? l : isNaN(l) ? (l = d.weekdaysParse(l), typeof l == "number" ? l : null) : parseInt(l, 10)
      }

      function zv(l, d) {
        return typeof l == "string" ? d.weekdaysParse(l) % 7 || 7 : isNaN(l) ? null : l
      }

      function Ec(l, d) {
        return l.slice(d, 7).concat(l.slice(0, d))
      }
      var Hv = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Hf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Wv = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        jv = ne,
        qv = ne,
        $v = ne;

      function Vv(l, d) {
        var v = s(this._weekdays) ? this._weekdays : this._weekdays[l && l !== !0 && this._weekdays.isFormat.test(d) ? "format" : "standalone"];
        return l === !0 ? Ec(v, this._week.dow) : l ? v[l.day()] : v
      }

      function Uv(l) {
        return l === !0 ? Ec(this._weekdaysShort, this._week.dow) : l ? this._weekdaysShort[l.day()] : this._weekdaysShort
      }

      function Bv(l) {
        return l === !0 ? Ec(this._weekdaysMin, this._week.dow) : l ? this._weekdaysMin[l.day()] : this._weekdaysMin
      }

      function Gv(l, d, v) {
        var _, x, C, W = l.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], _ = 0; _ < 7; ++_) C = g([2e3, 1]).day(_), this._minWeekdaysParse[_] = this.weekdaysMin(C, "").toLocaleLowerCase(), this._shortWeekdaysParse[_] = this.weekdaysShort(C, "").toLocaleLowerCase(), this._weekdaysParse[_] = this.weekdays(C, "").toLocaleLowerCase();
        return v ? d === "dddd" ? (x = ze.call(this._weekdaysParse, W), x !== -1 ? x : null) : d === "ddd" ? (x = ze.call(this._shortWeekdaysParse, W), x !== -1 ? x : null) : (x = ze.call(this._minWeekdaysParse, W), x !== -1 ? x : null) : d === "dddd" ? (x = ze.call(this._weekdaysParse, W), x !== -1 || (x = ze.call(this._shortWeekdaysParse, W), x !== -1) ? x : (x = ze.call(this._minWeekdaysParse, W), x !== -1 ? x : null)) : d === "ddd" ? (x = ze.call(this._shortWeekdaysParse, W), x !== -1 || (x = ze.call(this._weekdaysParse, W), x !== -1) ? x : (x = ze.call(this._minWeekdaysParse, W), x !== -1 ? x : null)) : (x = ze.call(this._minWeekdaysParse, W), x !== -1 || (x = ze.call(this._weekdaysParse, W), x !== -1) ? x : (x = ze.call(this._shortWeekdaysParse, W), x !== -1 ? x : null))
      }

      function Xv(l, d, v) {
        var _, x, C;
        if (this._weekdaysParseExact) return Gv.call(this, l, d, v);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), _ = 0; _ < 7; _++) {
          if (x = g([2e3, 1]).day(_), v && !this._fullWeekdaysParse[_] && (this._fullWeekdaysParse[_] = new RegExp("^" + this.weekdays(x, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[_] = new RegExp("^" + this.weekdaysShort(x, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[_] = new RegExp("^" + this.weekdaysMin(x, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[_] || (C = "^" + this.weekdays(x, "") + "|^" + this.weekdaysShort(x, "") + "|^" + this.weekdaysMin(x, ""), this._weekdaysParse[_] = new RegExp(C.replace(".", ""), "i")), v && d === "dddd" && this._fullWeekdaysParse[_].test(l)) return _;
          if (v && d === "ddd" && this._shortWeekdaysParse[_].test(l)) return _;
          if (v && d === "dd" && this._minWeekdaysParse[_].test(l)) return _;
          if (!v && this._weekdaysParse[_].test(l)) return _
        }
      }

      function Zv(l) {
        if (!this.isValid()) return l != null ? this : NaN;
        var d = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return l != null ? (l = Nv(l, this.localeData()), this.add(l - d, "d")) : d
      }

      function Kv(l) {
        if (!this.isValid()) return l != null ? this : NaN;
        var d = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return l == null ? d : this.add(l - d, "d")
      }

      function Qv(l) {
        if (!this.isValid()) return l != null ? this : NaN;
        if (l != null) {
          var d = zv(l, this.localeData());
          return this.day(this.day() % 7 ? d : d - 7)
        } else return this.day() || 7
      }

      function Jv(l) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Oc.call(this), l ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = jv), this._weekdaysStrictRegex && l ? this._weekdaysStrictRegex : this._weekdaysRegex)
      }

      function ey(l) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Oc.call(this), l ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = qv), this._weekdaysShortStrictRegex && l ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      }

      function ty(l) {
        return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || Oc.call(this), l ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = $v), this._weekdaysMinStrictRegex && l ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      }

      function Oc() {
        function l(wi, Qn) {
          return Qn.length - wi.length
        }
        var d = [],
          v = [],
          _ = [],
          x = [],
          C, W, he, Re, lt;
        for (C = 0; C < 7; C++) W = g([2e3, 1]).day(C), he = xe(this.weekdaysMin(W, "")), Re = xe(this.weekdaysShort(W, "")), lt = xe(this.weekdays(W, "")), d.push(he), v.push(Re), _.push(lt), x.push(he), x.push(Re), x.push(lt);
        d.sort(l), v.sort(l), _.sort(l), x.sort(l), this._weekdaysRegex = new RegExp("^(" + x.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + v.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
      }

      function Cc() {
        return this.hours() % 12 || 12
      }

      function iy() {
        return this.hours() || 24
      }
      N("H", ["HH", 2], 0, "hour"), N("h", ["hh", 2], 0, Cc), N("k", ["kk", 2], 0, iy), N("hmm", 0, 0, function () {
        return "" + Cc.apply(this) + A(this.minutes(), 2)
      }), N("hmmss", 0, 0, function () {
        return "" + Cc.apply(this) + A(this.minutes(), 2) + A(this.seconds(), 2)
      }), N("Hmm", 0, 0, function () {
        return "" + this.hours() + A(this.minutes(), 2)
      }), N("Hmmss", 0, 0, function () {
        return "" + this.hours() + A(this.minutes(), 2) + A(this.seconds(), 2)
      });

      function Wf(l, d) {
        N(l, 0, 0, function () {
          return this.localeData().meridiem(this.hours(), this.minutes(), d)
        })
      }
      Wf("a", !0), Wf("A", !1), K("hour", "h"), Se("hour", 13);

      function jf(l, d) {
        return d._meridiemParse
      }
      $("a", jf), $("A", jf), $("H", Le), $("h", Le), $("k", Le), $("HH", Le, mt), $("hh", Le, mt), $("kk", Le, mt), $("hmm", Ke), $("hmmss", dt), $("Hmm", Ke), $("Hmmss", dt), Me(["H", "HH"], Qe), Me(["k", "kk"], function (l, d, v) {
        var _ = ee(l);
        d[Qe] = _ === 24 ? 0 : _
      }), Me(["a", "A"], function (l, d, v) {
        v._isPm = v._locale.isPM(l), v._meridiem = l
      }), Me(["h", "hh"], function (l, d, v) {
        d[Qe] = ee(l), w(v).bigHour = !0
      }), Me("hmm", function (l, d, v) {
        var _ = l.length - 2;
        d[Qe] = ee(l.substr(0, _)), d[Ft] = ee(l.substr(_)), w(v).bigHour = !0
      }), Me("hmmss", function (l, d, v) {
        var _ = l.length - 4,
          x = l.length - 2;
        d[Qe] = ee(l.substr(0, _)), d[Ft] = ee(l.substr(_, 2)), d[Ot] = ee(l.substr(x)), w(v).bigHour = !0
      }), Me("Hmm", function (l, d, v) {
        var _ = l.length - 2;
        d[Qe] = ee(l.substr(0, _)), d[Ft] = ee(l.substr(_))
      }), Me("Hmmss", function (l, d, v) {
        var _ = l.length - 4,
          x = l.length - 2;
        d[Qe] = ee(l.substr(0, _)), d[Ft] = ee(l.substr(_, 2)), d[Ot] = ee(l.substr(x))
      });

      function ny(l) {
        return (l + "").toLowerCase().charAt(0) === "p"
      }
      var ry = /[ap]\.?m?\.?/i,
        sy = st("Hours", !0);

      function oy(l, d, v) {
        return l > 11 ? v ? "pm" : "PM" : v ? "am" : "AM"
      }
      var qf = {
          calendar: le,
          longDateFormat: _e,
          invalidDate: Lt,
          ordinal: ut,
          dayOfMonthOrdinalParse: $t,
          relativeTime: z,
          months: tn,
          monthsShort: Cs,
          week: Lv,
          weekdays: Hv,
          weekdaysMin: Wv,
          weekdaysShort: Hf,
          meridiemParse: ry
        },
        kt = {},
        ko = {},
        Po;

      function ay(l, d) {
        var v, _ = Math.min(l.length, d.length);
        for (v = 0; v < _; v += 1)
          if (l[v] !== d[v]) return v;
        return _
      }

      function $f(l) {
        return l && l.toLowerCase().replace("_", "-")
      }

      function ly(l) {
        for (var d = 0, v, _, x, C; d < l.length;) {
          for (C = $f(l[d]).split("-"), v = C.length, _ = $f(l[d + 1]), _ = _ ? _.split("-") : null; v > 0;) {
            if (x = Oa(C.slice(0, v).join("-")), x) return x;
            if (_ && _.length >= v && ay(C, _) >= v - 1) break;
            v--
          }
          d++
        }
        return Po
      }

      function cy(l) {
        return l.match("^[^/\\\\]*$") != null
      }

      function Oa(l) {
        var d = null,
          v;
        if (kt[l] === void 0 && n && n.exports && cy(l)) try {
          d = Po._abbr, v = $o, v("./locale/" + l), br(d)
        } catch {
          kt[l] = null
        }
        return kt[l]
      }

      function br(l, d) {
        var v;
        return l && (u(d) ? v = Gn(l) : v = Dc(l, d), v ? Po = v : typeof console < "u" && console.warn && console.warn("Locale " + l + " not found. Did you forget to load it?")), Po._abbr
      }

      function Dc(l, d) {
        if (d !== null) {
          var v, _ = qf;
          if (d.abbr = l, kt[l] != null) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), _ = kt[l]._config;
          else if (d.parentLocale != null)
            if (kt[d.parentLocale] != null) _ = kt[d.parentLocale]._config;
            else if (v = Oa(d.parentLocale), v != null) _ = v._config;
          else return ko[d.parentLocale] || (ko[d.parentLocale] = []), ko[d.parentLocale].push({
            name: l,
            config: d
          }), null;
          return kt[l] = new se(B(_, d)), ko[l] && ko[l].forEach(function (x) {
            Dc(x.name, x.config)
          }), br(l), kt[l]
        } else return delete kt[l], null
      }

      function uy(l, d) {
        if (d != null) {
          var v, _, x = qf;
          kt[l] != null && kt[l].parentLocale != null ? kt[l].set(B(kt[l]._config, d)) : (_ = Oa(l), _ != null && (x = _._config), d = B(x, d), _ == null && (d.abbr = l), v = new se(d), v.parentLocale = kt[l], kt[l] = v), br(l)
        } else kt[l] != null && (kt[l].parentLocale != null ? (kt[l] = kt[l].parentLocale, l === br() && br(l)) : kt[l] != null && delete kt[l]);
        return kt[l]
      }

      function Gn(l) {
        var d;
        if (l && l._locale && l._locale._abbr && (l = l._locale._abbr), !l) return Po;
        if (!s(l)) {
          if (d = Oa(l), d) return d;
          l = [l]
        }
        return ly(l)
      }

      function dy() {
        return re(kt)
      }

      function Ac(l) {
        var d, v = l._a;
        return v && w(l).overflow === -2 && (d = v[Wt] < 0 || v[Wt] > 11 ? Wt : v[Be] < 1 || v[Be] > Mt(v[ke], v[Wt]) ? Be : v[Qe] < 0 || v[Qe] > 24 || v[Qe] === 24 && (v[Ft] !== 0 || v[Ot] !== 0 || v[yt] !== 0) ? Qe : v[Ft] < 0 || v[Ft] > 59 ? Ft : v[Ot] < 0 || v[Ot] > 59 ? Ot : v[yt] < 0 || v[yt] > 999 ? yt : -1, w(l)._overflowDayOfYear && (d < ke || d > Be) && (d = Be), w(l)._overflowWeeks && d === -1 && (d = ti), w(l)._overflowWeekday && d === -1 && (d = Un), w(l).overflow = d), l
      }
      var fy = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        hy = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        py = /Z|[+-]\d\d(?::?\d\d)?/,
        Ca = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/],
          ["YYYYMM", /\d{6}/, !1],
          ["YYYY", /\d{4}/, !1]
        ],
        Lc = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ],
        my = /^\/?Date\((-?\d+)/i,
        gy = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        vy = {
          UT: 0,
          GMT: 0,
          EDT: -4 * 60,
          EST: -5 * 60,
          CDT: -5 * 60,
          CST: -6 * 60,
          MDT: -6 * 60,
          MST: -7 * 60,
          PDT: -7 * 60,
          PST: -8 * 60
        };

      function Vf(l) {
        var d, v, _ = l._i,
          x = fy.exec(_) || hy.exec(_),
          C, W, he, Re, lt = Ca.length,
          wi = Lc.length;
        if (x) {
          for (w(l).iso = !0, d = 0, v = lt; d < v; d++)
            if (Ca[d][1].exec(x[1])) {
              W = Ca[d][0], C = Ca[d][2] !== !1;
              break
            } if (W == null) {
            l._isValid = !1;
            return
          }
          if (x[3]) {
            for (d = 0, v = wi; d < v; d++)
              if (Lc[d][1].exec(x[3])) {
                he = (x[2] || " ") + Lc[d][0];
                break
              } if (he == null) {
              l._isValid = !1;
              return
            }
          }
          if (!C && he != null) {
            l._isValid = !1;
            return
          }
          if (x[4])
            if (py.exec(x[4])) Re = "Z";
            else {
              l._isValid = !1;
              return
            } l._f = W + (he || "") + (Re || ""), Ic(l)
        } else l._isValid = !1
      }

      function yy(l, d, v, _, x, C) {
        var W = [by(l), Cs.indexOf(d), parseInt(v, 10), parseInt(_, 10), parseInt(x, 10)];
        return C && W.push(parseInt(C, 10)), W
      }

      function by(l) {
        var d = parseInt(l, 10);
        return d <= 49 ? 2e3 + d : d <= 999 ? 1900 + d : d
      }

      function _y(l) {
        return l.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
      }

      function wy(l, d, v) {
        if (l) {
          var _ = Hf.indexOf(l),
            x = new Date(d[0], d[1], d[2]).getDay();
          if (_ !== x) return w(v).weekdayMismatch = !0, v._isValid = !1, !1
        }
        return !0
      }

      function Sy(l, d, v) {
        if (l) return vy[l];
        if (d) return 0;
        var _ = parseInt(v, 10),
          x = _ % 100,
          C = (_ - x) / 100;
        return C * 60 + x
      }

      function Uf(l) {
        var d = gy.exec(_y(l._i)),
          v;
        if (d) {
          if (v = yy(d[4], d[3], d[2], d[5], d[6], d[7]), !wy(d[1], v, l)) return;
          l._a = v, l._tzm = Sy(d[8], d[9], d[10]), l._d = To.apply(null, l._a), l._d.setUTCMinutes(l._d.getUTCMinutes() - l._tzm), w(l).rfc2822 = !0
        } else l._isValid = !1
      }

      function xy(l) {
        var d = my.exec(l._i);
        if (d !== null) {
          l._d = new Date(+d[1]);
          return
        }
        if (Vf(l), l._isValid === !1) delete l._isValid;
        else return;
        if (Uf(l), l._isValid === !1) delete l._isValid;
        else return;
        l._strict ? l._isValid = !1 : i.createFromInputFallback(l)
      }
      i.createFromInputFallback = F("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (l) {
        l._d = new Date(l._i + (l._useUTC ? " UTC" : ""))
      });

      function As(l, d, v) {
        return l ? ? d ? ? v
      }

      function Ty(l) {
        var d = new Date(i.now());
        return l._useUTC ? [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()] : [d.getFullYear(), d.getMonth(), d.getDate()]
      }

      function Rc(l) {
        var d, v, _ = [],
          x, C, W;
        if (!l._d) {
          for (x = Ty(l), l._w && l._a[Be] == null && l._a[Wt] == null && My(l), l._dayOfYear != null && (W = As(l._a[ke], x[ke]), (l._dayOfYear > xo(W) || l._dayOfYear === 0) && (w(l)._overflowDayOfYear = !0), v = To(W, 0, l._dayOfYear), l._a[Wt] = v.getUTCMonth(), l._a[Be] = v.getUTCDate()), d = 0; d < 3 && l._a[d] == null; ++d) l._a[d] = _[d] = x[d];
          for (; d < 7; d++) l._a[d] = _[d] = l._a[d] == null ? d === 2 ? 1 : 0 : l._a[d];
          l._a[Qe] === 24 && l._a[Ft] === 0 && l._a[Ot] === 0 && l._a[yt] === 0 && (l._nextDay = !0, l._a[Qe] = 0), l._d = (l._useUTC ? To : Dv).apply(null, _), C = l._useUTC ? l._d.getUTCDay() : l._d.getDay(), l._tzm != null && l._d.setUTCMinutes(l._d.getUTCMinutes() - l._tzm), l._nextDay && (l._a[Qe] = 24), l._w && typeof l._w.d < "u" && l._w.d !== C && (w(l).weekdayMismatch = !0)
        }
      }

      function My(l) {
        var d, v, _, x, C, W, he, Re, lt;
        d = l._w, d.GG != null || d.W != null || d.E != null ? (C = 1, W = 4, v = As(d.GG, l._a[ke], Mo(bt(), 1, 4).year), _ = As(d.W, 1), x = As(d.E, 1), (x < 1 || x > 7) && (Re = !0)) : (C = l._locale._week.dow, W = l._locale._week.doy, lt = Mo(bt(), C, W), v = As(d.gg, l._a[ke], lt.year), _ = As(d.w, lt.week), d.d != null ? (x = d.d, (x < 0 || x > 6) && (Re = !0)) : d.e != null ? (x = d.e + C, (d.e < 0 || d.e > 6) && (Re = !0)) : x = C), _ < 1 || _ > Bn(v, C, W) ? w(l)._overflowWeeks = !0 : Re != null ? w(l)._overflowWeekday = !0 : (he = zf(v, _, x, C, W), l._a[ke] = he.year, l._dayOfYear = he.dayOfYear)
      }
      i.ISO_8601 = function () {}, i.RFC_2822 = function () {};

      function Ic(l) {
        if (l._f === i.ISO_8601) {
          Vf(l);
          return
        }
        if (l._f === i.RFC_2822) {
          Uf(l);
          return
        }
        l._a = [], w(l).empty = !0;
        var d = "" + l._i,
          v, _, x, C, W, he = d.length,
          Re = 0,
          lt, wi;
        for (x = fe(l._f, l._locale).match(ye) || [], wi = x.length, v = 0; v < wi; v++) C = x[v], _ = (d.match(Ne(C, l)) || [])[0], _ && (W = d.substr(0, d.indexOf(_)), W.length > 0 && w(l).unusedInput.push(W), d = d.slice(d.indexOf(_) + _.length), Re += _.length), V[C] ? (_ ? w(l).empty = !1 : w(l).unusedTokens.push(C), vt(C, _, l)) : l._strict && !_ && w(l).unusedTokens.push(C);
        w(l).charsLeftOver = he - Re, d.length > 0 && w(l).unusedInput.push(d), l._a[Qe] <= 12 && w(l).bigHour === !0 && l._a[Qe] > 0 && (w(l).bigHour = void 0), w(l).parsedDateParts = l._a.slice(0), w(l).meridiem = l._meridiem, l._a[Qe] = ky(l._locale, l._a[Qe], l._meridiem), lt = w(l).era, lt !== null && (l._a[ke] = l._locale.erasConvertYear(lt, l._a[ke])), Rc(l), Ac(l)
      }

      function ky(l, d, v) {
        var _;
        return v == null ? d : l.meridiemHour != null ? l.meridiemHour(d, v) : (l.isPM != null && (_ = l.isPM(v), _ && d < 12 && (d += 12), !_ && d === 12 && (d = 0)), d)
      }

      function Py(l) {
        var d, v, _, x, C, W, he = !1,
          Re = l._f.length;
        if (Re === 0) {
          w(l).invalidFormat = !0, l._d = new Date(NaN);
          return
        }
        for (x = 0; x < Re; x++) C = 0, W = !1, d = O({}, l), l._useUTC != null && (d._useUTC = l._useUTC), d._f = l._f[x], Ic(d), T(d) && (W = !0), C += w(d).charsLeftOver, C += w(d).unusedTokens.length * 10, w(d).score = C, he ? C < _ && (_ = C, v = d) : (_ == null || C < _ || W) && (_ = C, v = d, W && (he = !0));
        m(l, v || d)
      }

      function Ey(l) {
        if (!l._d) {
          var d = Te(l._i),
            v = d.day === void 0 ? d.date : d.day;
          l._a = p([d.year, d.month, v, d.hour, d.minute, d.second, d.millisecond], function (_) {
            return _ && parseInt(_, 10)
          }), Rc(l)
        }
      }

      function Oy(l) {
        var d = new P(Ac(Bf(l)));
        return d._nextDay && (d.add(1, "d"), d._nextDay = void 0), d
      }

      function Bf(l) {
        var d = l._i,
          v = l._f;
        return l._locale = l._locale || Gn(l._l), d === null || v === void 0 && d === "" ? M({
          nullInput: !0
        }) : (typeof d == "string" && (l._i = d = l._locale.preparse(d)), R(d) ? new P(Ac(d)) : (h(d) ? l._d = d : s(v) ? Py(l) : v ? Ic(l) : Cy(l), T(l) || (l._d = null), l))
      }

      function Cy(l) {
        var d = l._i;
        u(d) ? l._d = new Date(i.now()) : h(d) ? l._d = new Date(d.valueOf()) : typeof d == "string" ? xy(l) : s(d) ? (l._a = p(d.slice(0), function (v) {
          return parseInt(v, 10)
        }), Rc(l)) : o(d) ? Ey(l) : f(d) ? l._d = new Date(d) : i.createFromInputFallback(l)
      }

      function Gf(l, d, v, _, x) {
        var C = {};
        return (d === !0 || d === !1) && (_ = d, d = void 0), (v === !0 || v === !1) && (_ = v, v = void 0), (o(l) && c(l) || s(l) && l.length === 0) && (l = void 0), C._isAMomentObject = !0, C._useUTC = C._isUTC = x, C._l = v, C._i = l, C._f = d, C._strict = _, Oy(C)
      }

      function bt(l, d, v, _) {
        return Gf(l, d, v, _, !1)
      }
      var Dy = F("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var l = bt.apply(null, arguments);
          return this.isValid() && l.isValid() ? l < this ? this : l : M()
        }),
        Ay = F("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
          var l = bt.apply(null, arguments);
          return this.isValid() && l.isValid() ? l > this ? this : l : M()
        });

      function Xf(l, d) {
        var v, _;
        if (d.length === 1 && s(d[0]) && (d = d[0]), !d.length) return bt();
        for (v = d[0], _ = 1; _ < d.length; ++_)(!d[_].isValid() || d[_][l](v)) && (v = d[_]);
        return v
      }

      function Ly() {
        var l = [].slice.call(arguments, 0);
        return Xf("isBefore", l)
      }

      function Ry() {
        var l = [].slice.call(arguments, 0);
        return Xf("isAfter", l)
      }
      var Iy = function () {
          return Date.now ? Date.now() : +new Date
        },
        Eo = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

      function Yy(l) {
        var d, v = !1,
          _, x = Eo.length;
        for (d in l)
          if (a(l, d) && !(ze.call(Eo, d) !== -1 && (l[d] == null || !isNaN(l[d])))) return !1;
        for (_ = 0; _ < x; ++_)
          if (l[Eo[_]]) {
            if (v) return !1;
            parseFloat(l[Eo[_]]) !== ee(l[Eo[_]]) && (v = !0)
          } return !0
      }

      function Fy() {
        return this._isValid
      }

      function Ny() {
        return yn(NaN)
      }

      function Da(l) {
        var d = Te(l),
          v = d.year || 0,
          _ = d.quarter || 0,
          x = d.month || 0,
          C = d.week || d.isoWeek || 0,
          W = d.day || 0,
          he = d.hour || 0,
          Re = d.minute || 0,
          lt = d.second || 0,
          wi = d.millisecond || 0;
        this._isValid = Yy(d), this._milliseconds = +wi + lt * 1e3 + Re * 6e4 + he * 1e3 * 60 * 60, this._days = +W + C * 7, this._months = +x + _ * 3 + v * 12, this._data = {}, this._locale = Gn(), this._bubble()
      }

      function Aa(l) {
        return l instanceof Da
      }

      function Yc(l) {
        return l < 0 ? Math.round(-1 * l) * -1 : Math.round(l)
      }

      function zy(l, d, v) {
        var _ = Math.min(l.length, d.length),
          x = Math.abs(l.length - d.length),
          C = 0,
          W;
        for (W = 0; W < _; W++)(v && l[W] !== d[W] || !v && ee(l[W]) !== ee(d[W])) && C++;
        return C + x
      }

      function Zf(l, d) {
        N(l, 0, 0, function () {
          var v = this.utcOffset(),
            _ = "+";
          return v < 0 && (v = -v, _ = "-"), _ + A(~~(v / 60), 2) + d + A(~~v % 60, 2)
        })
      }
      Zf("Z", ":"), Zf("ZZ", ""), $("Z", $e), $("ZZ", $e), Me(["Z", "ZZ"], function (l, d, v) {
        v._useUTC = !0, v._tzm = Fc($e, l)
      });
      var Hy = /([\+\-]|\d\d)/gi;

      function Fc(l, d) {
        var v = (d || "").match(l),
          _, x, C;
        return v === null ? null : (_ = v[v.length - 1] || [], x = (_ + "").match(Hy) || ["-", 0, 0], C = +(x[1] * 60) + ee(x[2]), C === 0 ? 0 : x[0] === "+" ? C : -C)
      }

      function Nc(l, d) {
        var v, _;
        return d._isUTC ? (v = d.clone(), _ = (R(l) || h(l) ? l.valueOf() : bt(l).valueOf()) - v.valueOf(), v._d.setTime(v._d.valueOf() + _), i.updateOffset(v, !1), v) : bt(l).local()
      }

      function zc(l) {
        return -Math.round(l._d.getTimezoneOffset())
      }
      i.updateOffset = function () {};

      function Wy(l, d, v) {
        var _ = this._offset || 0,
          x;
        if (!this.isValid()) return l != null ? this : NaN;
        if (l != null) {
          if (typeof l == "string") {
            if (l = Fc($e, l), l === null) return this
          } else Math.abs(l) < 16 && !v && (l = l * 60);
          return !this._isUTC && d && (x = zc(this)), this._offset = l, this._isUTC = !0, x != null && this.add(x, "m"), _ !== l && (!d || this._changeInProgress ? eh(this, yn(l - _, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
        } else return this._isUTC ? _ : zc(this)
      }

      function jy(l, d) {
        return l != null ? (typeof l != "string" && (l = -l), this.utcOffset(l, d), this) : -this.utcOffset()
      }

      function qy(l) {
        return this.utcOffset(0, l)
      }

      function $y(l) {
        return this._isUTC && (this.utcOffset(0, l), this._isUTC = !1, l && this.subtract(zc(this), "m")), this
      }

      function Vy() {
        if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
          var l = Fc(ge, this._i);
          l != null ? this.utcOffset(l) : this.utcOffset(0, !0)
        }
        return this
      }

      function Uy(l) {
        return this.isValid() ? (l = l ? bt(l).utcOffset() : 0, (this.utcOffset() - l) % 60 === 0) : !1
      }

      function By() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      }

      function Gy() {
        if (!u(this._isDSTShifted)) return this._isDSTShifted;
        var l = {},
          d;
        return O(l, this), l = Bf(l), l._a ? (d = l._isUTC ? g(l._a) : bt(l._a), this._isDSTShifted = this.isValid() && zy(l._a, d.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted
      }

      function Xy() {
        return this.isValid() ? !this._isUTC : !1
      }

      function Zy() {
        return this.isValid() ? this._isUTC : !1
      }

      function Kf() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
      }
      var Ky = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Qy = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function yn(l, d) {
        var v = l,
          _ = null,
          x, C, W;
        return Aa(l) ? v = {
          ms: l._milliseconds,
          d: l._days,
          M: l._months
        } : f(l) || !isNaN(+l) ? (v = {}, d ? v[d] = +l : v.milliseconds = +l) : (_ = Ky.exec(l)) ? (x = _[1] === "-" ? -1 : 1, v = {
          y: 0,
          d: ee(_[Be]) * x,
          h: ee(_[Qe]) * x,
          m: ee(_[Ft]) * x,
          s: ee(_[Ot]) * x,
          ms: ee(Yc(_[yt] * 1e3)) * x
        }) : (_ = Qy.exec(l)) ? (x = _[1] === "-" ? -1 : 1, v = {
          y: Br(_[2], x),
          M: Br(_[3], x),
          w: Br(_[4], x),
          d: Br(_[5], x),
          h: Br(_[6], x),
          m: Br(_[7], x),
          s: Br(_[8], x)
        }) : v == null ? v = {} : typeof v == "object" && ("from" in v || "to" in v) && (W = Jy(bt(v.from), bt(v.to)), v = {}, v.ms = W.milliseconds, v.M = W.months), C = new Da(v), Aa(l) && a(l, "_locale") && (C._locale = l._locale), Aa(l) && a(l, "_isValid") && (C._isValid = l._isValid), C
      }
      yn.fn = Da.prototype, yn.invalid = Ny;

      function Br(l, d) {
        var v = l && parseFloat(l.replace(",", "."));
        return (isNaN(v) ? 0 : v) * d
      }

      function Qf(l, d) {
        var v = {};
        return v.months = d.month() - l.month() + (d.year() - l.year()) * 12, l.clone().add(v.months, "M").isAfter(d) && --v.months, v.milliseconds = +d - +l.clone().add(v.months, "M"), v
      }

      function Jy(l, d) {
        var v;
        return l.isValid() && d.isValid() ? (d = Nc(d, l), l.isBefore(d) ? v = Qf(l, d) : (v = Qf(d, l), v.milliseconds = -v.milliseconds, v.months = -v.months), v) : {
          milliseconds: 0,
          months: 0
        }
      }

      function Jf(l, d) {
        return function (v, _) {
          var x, C;
          return _ !== null && !isNaN(+_) && (D(d, "moment()." + d + "(period, number) is deprecated. Please use moment()." + d + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), C = v, v = _, _ = C), x = yn(v, _), eh(this, x, l), this
        }
      }

      function eh(l, d, v, _) {
        var x = d._milliseconds,
          C = Yc(d._days),
          W = Yc(d._months);
        l.isValid() && (_ = _ ? ? !0, W && If(l, de(l, "Month") + W * v), C && Ht(l, "Date", de(l, "Date") + C * v), x && l._d.setTime(l._d.valueOf() + x * v), _ && i.updateOffset(l, C || W))
      }
      var eb = Jf(1, "add"),
        tb = Jf(-1, "subtract");

      function th(l) {
        return typeof l == "string" || l instanceof String
      }

      function ib(l) {
        return R(l) || h(l) || th(l) || f(l) || rb(l) || nb(l) || l === null || l === void 0
      }

      function nb(l) {
        var d = o(l) && !c(l),
          v = !1,
          _ = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
          x, C, W = _.length;
        for (x = 0; x < W; x += 1) C = _[x], v = v || a(l, C);
        return d && v
      }

      function rb(l) {
        var d = s(l),
          v = !1;
        return d && (v = l.filter(function (_) {
          return !f(_) && th(l)
        }).length === 0), d && v
      }

      function sb(l) {
        var d = o(l) && !c(l),
          v = !1,
          _ = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
          x, C;
        for (x = 0; x < _.length; x += 1) C = _[x], v = v || a(l, C);
        return d && v
      }

      function ob(l, d) {
        var v = l.diff(d, "days", !0);
        return v < -6 ? "sameElse" : v < -1 ? "lastWeek" : v < 0 ? "lastDay" : v < 1 ? "sameDay" : v < 2 ? "nextDay" : v < 7 ? "nextWeek" : "sameElse"
      }

      function ab(l, d) {
        arguments.length === 1 && (arguments[0] ? ib(arguments[0]) ? (l = arguments[0], d = void 0) : sb(arguments[0]) && (d = arguments[0], l = void 0) : (l = void 0, d = void 0));
        var v = l || bt(),
          _ = Nc(v, this).startOf("day"),
          x = i.calendarFormat(this, _) || "sameElse",
          C = d && (q(d[x]) ? d[x].call(this, v) : d[x]);
        return this.format(C || this.localeData().calendar(x, this, bt(v)))
      }

      function lb() {
        return new P(this)
      }

      function cb(l, d) {
        var v = R(l) ? l : bt(l);
        return this.isValid() && v.isValid() ? (d = ue(d) || "millisecond", d === "millisecond" ? this.valueOf() > v.valueOf() : v.valueOf() < this.clone().startOf(d).valueOf()) : !1
      }

      function ub(l, d) {
        var v = R(l) ? l : bt(l);
        return this.isValid() && v.isValid() ? (d = ue(d) || "millisecond", d === "millisecond" ? this.valueOf() < v.valueOf() : this.clone().endOf(d).valueOf() < v.valueOf()) : !1
      }

      function db(l, d, v, _) {
        var x = R(l) ? l : bt(l),
          C = R(d) ? d : bt(d);
        return this.isValid() && x.isValid() && C.isValid() ? (_ = _ || "()", (_[0] === "(" ? this.isAfter(x, v) : !this.isBefore(x, v)) && (_[1] === ")" ? this.isBefore(C, v) : !this.isAfter(C, v))) : !1
      }

      function fb(l, d) {
        var v = R(l) ? l : bt(l),
          _;
        return this.isValid() && v.isValid() ? (d = ue(d) || "millisecond", d === "millisecond" ? this.valueOf() === v.valueOf() : (_ = v.valueOf(), this.clone().startOf(d).valueOf() <= _ && _ <= this.clone().endOf(d).valueOf())) : !1
      }

      function hb(l, d) {
        return this.isSame(l, d) || this.isAfter(l, d)
      }

      function pb(l, d) {
        return this.isSame(l, d) || this.isBefore(l, d)
      }

      function mb(l, d, v) {
        var _, x, C;
        if (!this.isValid()) return NaN;
        if (_ = Nc(l, this), !_.isValid()) return NaN;
        switch (x = (_.utcOffset() - this.utcOffset()) * 6e4, d = ue(d), d) {
          case "year":
            C = La(this, _) / 12;
            break;
          case "month":
            C = La(this, _);
            break;
          case "quarter":
            C = La(this, _) / 3;
            break;
          case "second":
            C = (this - _) / 1e3;
            break;
          case "minute":
            C = (this - _) / 6e4;
            break;
          case "hour":
            C = (this - _) / 36e5;
            break;
          case "day":
            C = (this - _ - x) / 864e5;
            break;
          case "week":
            C = (this - _ - x) / 6048e5;
            break;
          default:
            C = this - _
        }
        return v ? C : Ee(C)
      }

      function La(l, d) {
        if (l.date() < d.date()) return -La(d, l);
        var v = (d.year() - l.year()) * 12 + (d.month() - l.month()),
          _ = l.clone().add(v, "months"),
          x, C;
        return d - _ < 0 ? (x = l.clone().add(v - 1, "months"), C = (d - _) / (_ - x)) : (x = l.clone().add(v + 1, "months"), C = (d - _) / (x - _)), -(v + C) || 0
      }
      i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

      function gb() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      }

      function vb(l) {
        if (!this.isValid()) return null;
        var d = l !== !0,
          v = d ? this.clone().utc() : this;
        return v.year() < 0 || v.year() > 9999 ? ae(v, d ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : q(Date.prototype.toISOString) ? d ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ae(v, "Z")) : ae(v, d ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
      }

      function yb() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var l = "moment",
          d = "",
          v, _, x, C;
        return this.isLocal() || (l = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", d = "Z"), v = "[" + l + '("]', _ = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", x = "-MM-DD[T]HH:mm:ss.SSS", C = d + '[")]', this.format(v + _ + x + C)
      }

      function bb(l) {
        l || (l = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
        var d = ae(this, l);
        return this.localeData().postformat(d)
      }

      function _b(l, d) {
        return this.isValid() && (R(l) && l.isValid() || bt(l).isValid()) ? yn({
          to: this,
          from: l
        }).locale(this.locale()).humanize(!d) : this.localeData().invalidDate()
      }

      function wb(l) {
        return this.from(bt(), l)
      }

      function Sb(l, d) {
        return this.isValid() && (R(l) && l.isValid() || bt(l).isValid()) ? yn({
          from: this,
          to: l
        }).locale(this.locale()).humanize(!d) : this.localeData().invalidDate()
      }

      function xb(l) {
        return this.to(bt(), l)
      }

      function ih(l) {
        var d;
        return l === void 0 ? this._locale._abbr : (d = Gn(l), d != null && (this._locale = d), this)
      }
      var nh = F("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (l) {
        return l === void 0 ? this.localeData() : this.locale(l)
      });

      function rh() {
        return this._locale
      }
      var Ra = 1e3,
        Ls = 60 * Ra,
        Ia = 60 * Ls,
        sh = (365 * 400 + 97) * 24 * Ia;

      function Rs(l, d) {
        return (l % d + d) % d
      }

      function oh(l, d, v) {
        return l < 100 && l >= 0 ? new Date(l + 400, d, v) - sh : new Date(l, d, v).valueOf()
      }

      function ah(l, d, v) {
        return l < 100 && l >= 0 ? Date.UTC(l + 400, d, v) - sh : Date.UTC(l, d, v)
      }

      function Tb(l) {
        var d, v;
        if (l = ue(l), l === void 0 || l === "millisecond" || !this.isValid()) return this;
        switch (v = this._isUTC ? ah : oh, l) {
          case "year":
            d = v(this.year(), 0, 1);
            break;
          case "quarter":
            d = v(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            d = v(this.year(), this.month(), 1);
            break;
          case "week":
            d = v(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            d = v(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            d = v(this.year(), this.month(), this.date());
            break;
          case "hour":
            d = this._d.valueOf(), d -= Rs(d + (this._isUTC ? 0 : this.utcOffset() * Ls), Ia);
            break;
          case "minute":
            d = this._d.valueOf(), d -= Rs(d, Ls);
            break;
          case "second":
            d = this._d.valueOf(), d -= Rs(d, Ra);
            break
        }
        return this._d.setTime(d), i.updateOffset(this, !0), this
      }

      function Mb(l) {
        var d, v;
        if (l = ue(l), l === void 0 || l === "millisecond" || !this.isValid()) return this;
        switch (v = this._isUTC ? ah : oh, l) {
          case "year":
            d = v(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            d = v(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            d = v(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            d = v(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            d = v(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            d = v(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            d = this._d.valueOf(), d += Ia - Rs(d + (this._isUTC ? 0 : this.utcOffset() * Ls), Ia) - 1;
            break;
          case "minute":
            d = this._d.valueOf(), d += Ls - Rs(d, Ls) - 1;
            break;
          case "second":
            d = this._d.valueOf(), d += Ra - Rs(d, Ra) - 1;
            break
        }
        return this._d.setTime(d), i.updateOffset(this, !0), this
      }

      function kb() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
      }

      function Pb() {
        return Math.floor(this.valueOf() / 1e3)
      }

      function Eb() {
        return new Date(this.valueOf())
      }

      function Ob() {
        var l = this;
        return [l.year(), l.month(), l.date(), l.hour(), l.minute(), l.second(), l.millisecond()]
      }

      function Cb() {
        var l = this;
        return {
          years: l.year(),
          months: l.month(),
          date: l.date(),
          hours: l.hours(),
          minutes: l.minutes(),
          seconds: l.seconds(),
          milliseconds: l.milliseconds()
        }
      }

      function Db() {
        return this.isValid() ? this.toISOString() : null
      }

      function Ab() {
        return T(this)
      }

      function Lb() {
        return m({}, w(this))
      }

      function Rb() {
        return w(this).overflow
      }

      function Ib() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }
      N("N", 0, 0, "eraAbbr"), N("NN", 0, 0, "eraAbbr"), N("NNN", 0, 0, "eraAbbr"), N("NNNN", 0, 0, "eraName"), N("NNNNN", 0, 0, "eraNarrow"), N("y", ["y", 1], "yo", "eraYear"), N("y", ["yy", 2], 0, "eraYear"), N("y", ["yyy", 3], 0, "eraYear"), N("y", ["yyyy", 4], 0, "eraYear"), $("N", Hc), $("NN", Hc), $("NNN", Hc), $("NNNN", Ub), $("NNNNN", Bb), Me(["N", "NN", "NNN", "NNNN", "NNNNN"], function (l, d, v, _) {
        var x = v._locale.erasParse(l, _, v._strict);
        x ? w(v).era = x : w(v).invalidEra = l
      }), $("y", Yt), $("yy", Yt), $("yyy", Yt), $("yyyy", Yt), $("yo", Gb), Me(["y", "yy", "yyy", "yyyy"], ke), Me(["yo"], function (l, d, v, _) {
        var x;
        v._locale._eraYearOrdinalRegex && (x = l.match(v._locale._eraYearOrdinalRegex)), v._locale.eraYearOrdinalParse ? d[ke] = v._locale.eraYearOrdinalParse(l, x) : d[ke] = parseInt(l, 10)
      });

      function Yb(l, d) {
        var v, _, x, C = this._eras || Gn("en")._eras;
        for (v = 0, _ = C.length; v < _; ++v) {
          switch (typeof C[v].since) {
            case "string":
              x = i(C[v].since).startOf("day"), C[v].since = x.valueOf();
              break
          }
          switch (typeof C[v].until) {
            case "undefined":
              C[v].until = 1 / 0;
              break;
            case "string":
              x = i(C[v].until).startOf("day").valueOf(), C[v].until = x.valueOf();
              break
          }
        }
        return C
      }

      function Fb(l, d, v) {
        var _, x, C = this.eras(),
          W, he, Re;
        for (l = l.toUpperCase(), _ = 0, x = C.length; _ < x; ++_)
          if (W = C[_].name.toUpperCase(), he = C[_].abbr.toUpperCase(), Re = C[_].narrow.toUpperCase(), v) switch (d) {
            case "N":
            case "NN":
            case "NNN":
              if (he === l) return C[_];
              break;
            case "NNNN":
              if (W === l) return C[_];
              break;
            case "NNNNN":
              if (Re === l) return C[_];
              break
          } else if ([W, he, Re].indexOf(l) >= 0) return C[_]
      }

      function Nb(l, d) {
        var v = l.since <= l.until ? 1 : -1;
        return d === void 0 ? i(l.since).year() : i(l.since).year() + (d - l.offset) * v
      }

      function zb() {
        var l, d, v, _ = this.localeData().eras();
        for (l = 0, d = _.length; l < d; ++l)
          if (v = this.clone().startOf("day").valueOf(), _[l].since <= v && v <= _[l].until || _[l].until <= v && v <= _[l].since) return _[l].name;
        return ""
      }

      function Hb() {
        var l, d, v, _ = this.localeData().eras();
        for (l = 0, d = _.length; l < d; ++l)
          if (v = this.clone().startOf("day").valueOf(), _[l].since <= v && v <= _[l].until || _[l].until <= v && v <= _[l].since) return _[l].narrow;
        return ""
      }

      function Wb() {
        var l, d, v, _ = this.localeData().eras();
        for (l = 0, d = _.length; l < d; ++l)
          if (v = this.clone().startOf("day").valueOf(), _[l].since <= v && v <= _[l].until || _[l].until <= v && v <= _[l].since) return _[l].abbr;
        return ""
      }

      function jb() {
        var l, d, v, _, x = this.localeData().eras();
        for (l = 0, d = x.length; l < d; ++l)
          if (v = x[l].since <= x[l].until ? 1 : -1, _ = this.clone().startOf("day").valueOf(), x[l].since <= _ && _ <= x[l].until || x[l].until <= _ && _ <= x[l].since) return (this.year() - i(x[l].since).year()) * v + x[l].offset;
        return this.year()
      }

      function qb(l) {
        return a(this, "_erasNameRegex") || Wc.call(this), l ? this._erasNameRegex : this._erasRegex
      }

      function $b(l) {
        return a(this, "_erasAbbrRegex") || Wc.call(this), l ? this._erasAbbrRegex : this._erasRegex
      }

      function Vb(l) {
        return a(this, "_erasNarrowRegex") || Wc.call(this), l ? this._erasNarrowRegex : this._erasRegex
      }

      function Hc(l, d) {
        return d.erasAbbrRegex(l)
      }

      function Ub(l, d) {
        return d.erasNameRegex(l)
      }

      function Bb(l, d) {
        return d.erasNarrowRegex(l)
      }

      function Gb(l, d) {
        return d._eraYearOrdinalRegex || Yt
      }

      function Wc() {
        var l = [],
          d = [],
          v = [],
          _ = [],
          x, C, W = this.eras();
        for (x = 0, C = W.length; x < C; ++x) d.push(xe(W[x].name)), l.push(xe(W[x].abbr)), v.push(xe(W[x].narrow)), _.push(xe(W[x].name)), _.push(xe(W[x].abbr)), _.push(xe(W[x].narrow));
        this._erasRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + v.join("|") + ")", "i")
      }
      N(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
      }), N(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
      });

      function Ya(l, d) {
        N(0, [l, l.length], 0, d)
      }
      Ya("gggg", "weekYear"), Ya("ggggg", "weekYear"), Ya("GGGG", "isoWeekYear"), Ya("GGGGG", "isoWeekYear"), K("weekYear", "gg"), K("isoWeekYear", "GG"), Se("weekYear", 1), Se("isoWeekYear", 1), $("G", be), $("g", be), $("GG", Le, mt), $("gg", Le, mt), $("GGGG", ci, Kt), $("gggg", ci, Kt), $("GGGGG", It, Oe), $("ggggg", It, Oe), Et(["gggg", "ggggg", "GGGG", "GGGGG"], function (l, d, v, _) {
        d[_.substr(0, 2)] = ee(l)
      }), Et(["gg", "GG"], function (l, d, v, _) {
        d[_] = i.parseTwoDigitYear(l)
      });

      function Xb(l) {
        return lh.call(this, l, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
      }

      function Zb(l) {
        return lh.call(this, l, this.isoWeek(), this.isoWeekday(), 1, 4)
      }

      function Kb() {
        return Bn(this.year(), 1, 4)
      }

      function Qb() {
        return Bn(this.isoWeekYear(), 1, 4)
      }

      function Jb() {
        var l = this.localeData()._week;
        return Bn(this.year(), l.dow, l.doy)
      }

      function e_() {
        var l = this.localeData()._week;
        return Bn(this.weekYear(), l.dow, l.doy)
      }

      function lh(l, d, v, _, x) {
        var C;
        return l == null ? Mo(this, _, x).year : (C = Bn(l, _, x), d > C && (d = C), t_.call(this, l, d, v, _, x))
      }

      function t_(l, d, v, _, x) {
        var C = zf(l, d, v, _, x),
          W = To(C.year, 0, C.dayOfYear);
        return this.year(W.getUTCFullYear()), this.month(W.getUTCMonth()), this.date(W.getUTCDate()), this
      }
      N("Q", 0, "Qo", "quarter"), K("quarter", "Q"), Se("quarter", 7), $("Q", en), Me("Q", function (l, d) {
        d[Wt] = (ee(l) - 1) * 3
      });

      function i_(l) {
        return l == null ? Math.ceil((this.month() + 1) / 3) : this.month((l - 1) * 3 + this.month() % 3)
      }
      N("D", ["DD", 2], "Do", "date"), K("date", "D"), Se("date", 9), $("D", Le), $("DD", Le, mt), $("Do", function (l, d) {
        return l ? d._dayOfMonthOrdinalParse || d._ordinalParse : d._dayOfMonthOrdinalParseLenient
      }), Me(["D", "DD"], Be), Me("Do", function (l, d) {
        d[Be] = ee(l.match(Le)[0])
      });
      var ch = st("Date", !0);
      N("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), K("dayOfYear", "DDD"), Se("dayOfYear", 4), $("DDD", Rt), $("DDDD", _i), Me(["DDD", "DDDD"], function (l, d, v) {
        v._dayOfYear = ee(l)
      });

      function n_(l) {
        var d = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return l == null ? d : this.add(l - d, "d")
      }
      N("m", ["mm", 2], 0, "minute"), K("minute", "m"), Se("minute", 14), $("m", Le), $("mm", Le, mt), Me(["m", "mm"], Ft);
      var r_ = st("Minutes", !1);
      N("s", ["ss", 2], 0, "second"), K("second", "s"), Se("second", 15), $("s", Le), $("ss", Le, mt), Me(["s", "ss"], Ot);
      var s_ = st("Seconds", !1);
      N("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
      }), N(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
      }), N(0, ["SSS", 3], 0, "millisecond"), N(0, ["SSSS", 4], 0, function () {
        return this.millisecond() * 10
      }), N(0, ["SSSSS", 5], 0, function () {
        return this.millisecond() * 100
      }), N(0, ["SSSSSS", 6], 0, function () {
        return this.millisecond() * 1e3
      }), N(0, ["SSSSSSS", 7], 0, function () {
        return this.millisecond() * 1e4
      }), N(0, ["SSSSSSSS", 8], 0, function () {
        return this.millisecond() * 1e5
      }), N(0, ["SSSSSSSSS", 9], 0, function () {
        return this.millisecond() * 1e6
      }), K("millisecond", "ms"), Se("millisecond", 16), $("S", Rt, en), $("SS", Rt, mt), $("SSS", Rt, _i);
      var _r, uh;
      for (_r = "SSSS"; _r.length <= 9; _r += "S") $(_r, Yt);

      function o_(l, d) {
        d[yt] = ee(("0." + l) * 1e3)
      }
      for (_r = "S"; _r.length <= 9; _r += "S") Me(_r, o_);
      uh = st("Milliseconds", !1), N("z", 0, 0, "zoneAbbr"), N("zz", 0, 0, "zoneName");

      function a_() {
        return this._isUTC ? "UTC" : ""
      }

      function l_() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      }
      var G = P.prototype;
      G.add = eb, G.calendar = ab, G.clone = lb, G.diff = mb, G.endOf = Mb, G.format = bb, G.from = _b, G.fromNow = wb, G.to = Sb, G.toNow = xb, G.get = Di, G.invalidAt = Rb, G.isAfter = cb, G.isBefore = ub, G.isBetween = db, G.isSame = fb, G.isSameOrAfter = hb, G.isSameOrBefore = pb, G.isValid = Ab, G.lang = nh, G.locale = ih, G.localeData = rh, G.max = Ay, G.min = Dy, G.parsingFlags = Lb, G.set = bi, G.startOf = Tb, G.subtract = tb, G.toArray = Ob, G.toObject = Cb, G.toDate = Eb, G.toISOString = vb, G.inspect = yb, typeof Symbol < "u" && Symbol.for != null && (G[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">"
      }), G.toJSON = Db, G.toString = gb, G.unix = Pb, G.valueOf = kb, G.creationData = Ib, G.eraName = zb, G.eraNarrow = Hb, G.eraAbbr = Wb, G.eraYear = jb, G.year = Nf, G.isLeapYear = Cv, G.weekYear = Xb, G.isoWeekYear = Zb, G.quarter = G.quarters = i_, G.month = Yf, G.daysInMonth = Pv, G.week = G.weeks = Yv, G.isoWeek = G.isoWeeks = Fv, G.weeksInYear = Jb, G.weeksInWeekYear = e_, G.isoWeeksInYear = Kb, G.isoWeeksInISOWeekYear = Qb, G.date = ch, G.day = G.days = Zv, G.weekday = Kv, G.isoWeekday = Qv, G.dayOfYear = n_, G.hour = G.hours = sy, G.minute = G.minutes = r_, G.second = G.seconds = s_, G.millisecond = G.milliseconds = uh, G.utcOffset = Wy, G.utc = qy, G.local = $y, G.parseZone = Vy, G.hasAlignedHourOffset = Uy, G.isDST = By, G.isLocal = Xy, G.isUtcOffset = Zy, G.isUtc = Kf, G.isUTC = Kf, G.zoneAbbr = a_, G.zoneName = l_, G.dates = F("dates accessor is deprecated. Use date instead.", ch), G.months = F("months accessor is deprecated. Use month instead", Yf), G.years = F("years accessor is deprecated. Use year instead", Nf), G.zone = F("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", jy), G.isDSTShifted = F("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Gy);

      function c_(l) {
        return bt(l * 1e3)
      }

      function u_() {
        return bt.apply(null, arguments).parseZone()
      }

      function dh(l) {
        return l
      }
      var Je = se.prototype;
      Je.calendar = we, Je.longDateFormat = Ae, Je.invalidDate = Ye, Je.ordinal = xt, Je.preparse = dh, Je.postformat = dh, Je.relativeTime = U, Je.pastFuture = Y, Je.set = Z, Je.eras = Yb, Je.erasParse = Fb, Je.erasConvertYear = Nb, Je.erasAbbrRegex = $b, Je.erasNameRegex = qb, Je.erasNarrowRegex = Vb, Je.months = Vr, Je.monthsShort = Ds, Je.monthsParse = kv, Je.monthsRegex = Ov, Je.monthsShortRegex = Ev, Je.week = Av, Je.firstDayOfYear = Iv, Je.firstDayOfWeek = Rv, Je.weekdays = Vv, Je.weekdaysMin = Bv, Je.weekdaysShort = Uv, Je.weekdaysParse = Xv, Je.weekdaysRegex = Jv, Je.weekdaysShortRegex = ey, Je.weekdaysMinRegex = ty, Je.isPM = ny, Je.meridiem = oy;

      function Fa(l, d, v, _) {
        var x = Gn(),
          C = g().set(_, d);
        return x[v](C, l)
      }

      function fh(l, d, v) {
        if (f(l) && (d = l, l = void 0), l = l || "", d != null) return Fa(l, d, v, "month");
        var _, x = [];
        for (_ = 0; _ < 12; _++) x[_] = Fa(l, _, v, "month");
        return x
      }

      function jc(l, d, v, _) {
        typeof l == "boolean" ? (f(d) && (v = d, d = void 0), d = d || "") : (d = l, v = d, l = !1, f(d) && (v = d, d = void 0), d = d || "");
        var x = Gn(),
          C = l ? x._week.dow : 0,
          W, he = [];
        if (v != null) return Fa(d, (v + C) % 7, _, "day");
        for (W = 0; W < 7; W++) he[W] = Fa(d, (W + C) % 7, _, "day");
        return he
      }

      function d_(l, d) {
        return fh(l, d, "months")
      }

      function f_(l, d) {
        return fh(l, d, "monthsShort")
      }

      function h_(l, d, v) {
        return jc(l, d, v, "weekdays")
      }

      function p_(l, d, v) {
        return jc(l, d, v, "weekdaysShort")
      }

      function m_(l, d, v) {
        return jc(l, d, v, "weekdaysMin")
      }
      br("en", {
        eras: [{
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        }, {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (l) {
          var d = l % 10,
            v = ee(l % 100 / 10) === 1 ? "th" : d === 1 ? "st" : d === 2 ? "nd" : d === 3 ? "rd" : "th";
          return l + v
        }
      }), i.lang = F("moment.lang is deprecated. Use moment.locale instead.", br), i.langData = F("moment.langData is deprecated. Use moment.localeData instead.", Gn);
      var Xn = Math.abs;

      function g_() {
        var l = this._data;
        return this._milliseconds = Xn(this._milliseconds), this._days = Xn(this._days), this._months = Xn(this._months), l.milliseconds = Xn(l.milliseconds), l.seconds = Xn(l.seconds), l.minutes = Xn(l.minutes), l.hours = Xn(l.hours), l.months = Xn(l.months), l.years = Xn(l.years), this
      }

      function hh(l, d, v, _) {
        var x = yn(d, v);
        return l._milliseconds += _ * x._milliseconds, l._days += _ * x._days, l._months += _ * x._months, l._bubble()
      }

      function v_(l, d) {
        return hh(this, l, d, 1)
      }

      function y_(l, d) {
        return hh(this, l, d, -1)
      }

      function ph(l) {
        return l < 0 ? Math.floor(l) : Math.ceil(l)
      }

      function b_() {
        var l = this._milliseconds,
          d = this._days,
          v = this._months,
          _ = this._data,
          x, C, W, he, Re;
        return l >= 0 && d >= 0 && v >= 0 || l <= 0 && d <= 0 && v <= 0 || (l += ph(qc(v) + d) * 864e5, d = 0, v = 0), _.milliseconds = l % 1e3, x = Ee(l / 1e3), _.seconds = x % 60, C = Ee(x / 60), _.minutes = C % 60, W = Ee(C / 60), _.hours = W % 24, d += Ee(W / 24), Re = Ee(mh(d)), v += Re, d -= ph(qc(Re)), he = Ee(v / 12), v %= 12, _.days = d, _.months = v, _.years = he, this
      }

      function mh(l) {
        return l * 4800 / 146097
      }

      function qc(l) {
        return l * 146097 / 4800
      }

      function __(l) {
        if (!this.isValid()) return NaN;
        var d, v, _ = this._milliseconds;
        if (l = ue(l), l === "month" || l === "quarter" || l === "year") switch (d = this._days + _ / 864e5, v = this._months + mh(d), l) {
          case "month":
            return v;
          case "quarter":
            return v / 3;
          case "year":
            return v / 12
        } else switch (d = this._days + Math.round(qc(this._months)), l) {
          case "week":
            return d / 7 + _ / 6048e5;
          case "day":
            return d + _ / 864e5;
          case "hour":
            return d * 24 + _ / 36e5;
          case "minute":
            return d * 1440 + _ / 6e4;
          case "second":
            return d * 86400 + _ / 1e3;
          case "millisecond":
            return Math.floor(d * 864e5) + _;
          default:
            throw new Error("Unknown unit " + l)
        }
      }

      function w_() {
        return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ee(this._months / 12) * 31536e6 : NaN
      }

      function Zn(l) {
        return function () {
          return this.as(l)
        }
      }
      var S_ = Zn("ms"),
        x_ = Zn("s"),
        T_ = Zn("m"),
        M_ = Zn("h"),
        k_ = Zn("d"),
        P_ = Zn("w"),
        E_ = Zn("M"),
        O_ = Zn("Q"),
        C_ = Zn("y");

      function D_() {
        return yn(this)
      }

      function A_(l) {
        return l = ue(l), this.isValid() ? this[l + "s"]() : NaN
      }

      function Gr(l) {
        return function () {
          return this.isValid() ? this._data[l] : NaN
        }
      }
      var L_ = Gr("milliseconds"),
        R_ = Gr("seconds"),
        I_ = Gr("minutes"),
        Y_ = Gr("hours"),
        F_ = Gr("days"),
        N_ = Gr("months"),
        z_ = Gr("years");

      function H_() {
        return Ee(this.days() / 7)
      }
      var Kn = Math.round,
        Is = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };

      function W_(l, d, v, _, x) {
        return x.relativeTime(d || 1, !!v, l, _)
      }

      function j_(l, d, v, _) {
        var x = yn(l).abs(),
          C = Kn(x.as("s")),
          W = Kn(x.as("m")),
          he = Kn(x.as("h")),
          Re = Kn(x.as("d")),
          lt = Kn(x.as("M")),
          wi = Kn(x.as("w")),
          Qn = Kn(x.as("y")),
          wr = C <= v.ss && ["s", C] || C < v.s && ["ss", C] || W <= 1 && ["m"] || W < v.m && ["mm", W] || he <= 1 && ["h"] || he < v.h && ["hh", he] || Re <= 1 && ["d"] || Re < v.d && ["dd", Re];
        return v.w != null && (wr = wr || wi <= 1 && ["w"] || wi < v.w && ["ww", wi]), wr = wr || lt <= 1 && ["M"] || lt < v.M && ["MM", lt] || Qn <= 1 && ["y"] || ["yy", Qn], wr[2] = d, wr[3] = +l > 0, wr[4] = _, W_.apply(null, wr)
      }

      function q_(l) {
        return l === void 0 ? Kn : typeof l == "function" ? (Kn = l, !0) : !1
      }

      function $_(l, d) {
        return Is[l] === void 0 ? !1 : d === void 0 ? Is[l] : (Is[l] = d, l === "s" && (Is.ss = d - 1), !0)
      }

      function V_(l, d) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var v = !1,
          _ = Is,
          x, C;
        return typeof l == "object" && (d = l, l = !1), typeof l == "boolean" && (v = l), typeof d == "object" && (_ = Object.assign({}, Is, d), d.s != null && d.ss == null && (_.ss = d.s - 1)), x = this.localeData(), C = j_(this, !v, _, x), v && (C = x.pastFuture(+this, C)), x.postformat(C)
      }
      var $c = Math.abs;

      function Ys(l) {
        return (l > 0) - (l < 0) || +l
      }

      function Na() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var l = $c(this._milliseconds) / 1e3,
          d = $c(this._days),
          v = $c(this._months),
          _, x, C, W, he = this.asSeconds(),
          Re, lt, wi, Qn;
        return he ? (_ = Ee(l / 60), x = Ee(_ / 60), l %= 60, _ %= 60, C = Ee(v / 12), v %= 12, W = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", Re = he < 0 ? "-" : "", lt = Ys(this._months) !== Ys(he) ? "-" : "", wi = Ys(this._days) !== Ys(he) ? "-" : "", Qn = Ys(this._milliseconds) !== Ys(he) ? "-" : "", Re + "P" + (C ? lt + C + "Y" : "") + (v ? lt + v + "M" : "") + (d ? wi + d + "D" : "") + (x || _ || l ? "T" : "") + (x ? Qn + x + "H" : "") + (_ ? Qn + _ + "M" : "") + (l ? Qn + W + "S" : "")) : "P0D"
      }
      var Ge = Da.prototype;
      Ge.isValid = Fy, Ge.abs = g_, Ge.add = v_, Ge.subtract = y_, Ge.as = __, Ge.asMilliseconds = S_, Ge.asSeconds = x_, Ge.asMinutes = T_, Ge.asHours = M_, Ge.asDays = k_, Ge.asWeeks = P_, Ge.asMonths = E_, Ge.asQuarters = O_, Ge.asYears = C_, Ge.valueOf = w_, Ge._bubble = b_, Ge.clone = D_, Ge.get = A_, Ge.milliseconds = L_, Ge.seconds = R_, Ge.minutes = I_, Ge.hours = Y_, Ge.days = F_, Ge.weeks = H_, Ge.months = N_, Ge.years = z_, Ge.humanize = V_, Ge.toISOString = Na, Ge.toString = Na, Ge.toJSON = Na, Ge.locale = ih, Ge.localeData = rh, Ge.toIsoString = F("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Na), Ge.lang = nh, N("X", 0, 0, "unix"), N("x", 0, 0, "valueOf"), $("x", be), $("X", Tt), Me("X", function (l, d, v) {
        v._d = new Date(parseFloat(l) * 1e3)
      }), Me("x", function (l, d, v) {
        v._d = new Date(ee(l))
      }); //! moment.js
      return i.version = "2.29.4", r(bt), i.fn = G, i.min = Ly, i.max = Ry, i.now = Iy, i.utc = g, i.unix = c_, i.months = d_, i.isDate = h, i.locale = br, i.invalid = M, i.duration = yn, i.isMoment = R, i.weekdays = h_, i.parseZone = u_, i.localeData = Gn, i.isDuration = Aa, i.monthsShort = f_, i.weekdaysMin = m_, i.defineLocale = Dc, i.updateLocale = uy, i.locales = dy, i.weekdaysShort = p_, i.normalizeUnits = ue, i.relativeTimeRounding = q_, i.relativeTimeThreshold = $_, i.calendarFormat = ob, i.prototype = G, i.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      }, i
    })
  })(ZE);
  jn.registerPlugin(pe, ks);
  const KE = "contato";

  function QE() {
    let n = jn.timeline({
      scrollTrigger: {
        trigger: "#footer",
        start: "-10% bottom",
        end: "bottom bottom",
        pinSpacing: !1,
        markers: !1,
        scrub: 1,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      }
    });
    n.fromTo("#footer .bg-color", {
      y: "50%",
      x: "50%",
      borderTopLeftRadius: "50rem"
    }, {
      y: "0",
      x: "0",
      borderTopLeftRadius: "1.2rem",
      duration: 1
    }), n.fromTo("#footer .row-map", {
      y: "3rem",
      autoAlpha: "0"
    }, {
      y: "0",
      autoAlpha: 1,
      duration: ".2"
    }, ">-.3"), n.fromTo("#footer .row-social", {
      y: "3rem",
      autoAlpha: "0"
    }, {
      y: "0",
      autoAlpha: 1,
      duration: ".2"
    }, "<+.1"), n.to("#footer .footer-logo #D", {
      y: "0",
      duration: ".3"
    }, "<-.1"), n.to("#footer .footer-logo #E", {
      y: "0",
      duration: ".3"
    }, "<+.05"), n.to("#footer .footer-logo #F", {
      y: "0",
      duration: ".3"
    }, "<+.05"), document.querySelectorAll("textarea.auto-expand").forEach(function (i) {
      i.addEventListener("keydown", t)
    });

    function t() {
      var i = this;
      setTimeout(function () {
        i.style.cssText = "height:auto; padding:1rem", i.style.cssText = "height:" + i.scrollHeight + "px"
      }, 0)
    }
  }
  const JE = new xa({
    pageName: KE,
    main: QE
  });
  et.registerPlugin(pe);

  function eO() {
    if (!Ce.isDesktop) return;
    document.querySelectorAll("[data-sticky]:not(.js-running)").forEach(e => {
      e.classList.add("js-running");
      let t = e.dataset.start ? e.dataset.start : "top top",
        i = e.dataset.end ? e.dataset.end : "bottom top",
        r = e.dataset.trigger ? document.querySelector(e.dataset.trigger) : e;
      e.dataset.trigger && e.dataset.trigger == "parent" && (r = e.parentElement);
      let s = e.dataset.endTrigger ? document.querySelector(e.dataset.endTrigger) : r,
        o = e.dataset.offset ? e.dataset.offset : 0,
        a = 0;
      o != 0 && document.querySelector(o) && (a = document.querySelector(o).clientHeight), e.dataset.trigger && e.dataset.trigger == "parent" && (t = () => `top-=${a} top`, i = () => `bottom-=${e.offsetHeight+a} top`), pe.create({
        trigger: r,
        endTrigger: s,
        start: t,
        end: i,
        pin: e,
        pinSpacing: !1,
        markers: !1,
        scrub: !0,
        anticipatePin: !0,
        invalidateOnRefresh: !0
      })
    })
  }

  function tO() {
    const e = document.querySelectorAll("[data-lottie-hover]:not(.js-running)");

    function t(r) {
      r.lottie.setDirection(1), r.lottie.play();
      let s = r.lottie.totalFrames - 1;
      r.dataset.loop || r.lottie.addEventListener("enterFrame", function (o) {
        o.currentTime > s && r.lottie.pause()
      })
    }

    function i(r) {
      r.lottie.setDirection(-1), r.lottie.play(), r.lottie.addEventListener("complete", () => {
        r.lottie.pause()
      }, {
        once: !0
      })
    }
    e.forEach(r => {
      r.classList.add("js-running"), r.addEventListener("mouseenter", function () {
        t(r.querySelector("lottie-player"))
      }), r.addEventListener("mouseleave", function () {
        i(r.querySelector("lottie-player"))
      })
    })
  }
  et.registerPlugin(yo, eg, ks, z1, H1, W1, dc, Xt, pe);

  function iO() {
    window.scrollto = new Vo;

    function n(g = 0, y = 1440, w = 1, S = !0) {
      let T = window.pageYOffset;
      const M = document.querySelectorAll("section, footer");
      let k = 1 / 0,
        E = null;
      M.forEach((P, R) => {
        const L = P.offsetTop - T;
        L > 0 && L < k && (k = L, M[R + 1], E = M[R + 1])
      });
      let O;
      switch (w) {
        case 1:
          O = "easeInOutQuart";
          break;
        case 2:
          O = "easeOutQuart";
          break;
        case 3:
          O = "easeInOutQuad";
          break;
        case 4:
          O = "easeOutQuad";
          break;
        case 5:
          O = "easeOutCubic";
          break;
        case 6:
          O = "Linear";
          break;
        default:
          O = w;
          break
      }
      scrollto.animateScroll(E.offsetTop + g, "", {
        speed: y,
        speedAsDuration: S,
        easing: O
      })
    }

    function e(g = 0, y = 1440, w = 1, S = !0) {
      let T = window.pageYOffset;
      const M = document.querySelectorAll("section, footer");
      let k = 1 / 0,
        E = null;
      M.forEach(R => {
        const L = R.offsetTop - T;
        L > 0 && L < k && (k = L, E = R)
      });
      let O;
      switch (w) {
        case 1:
          O = "easeInOutQuart";
          break;
        case 2:
          O = "easeOutQuart";
          break;
        case 3:
          O = "easeInOutQuad";
          break;
        case 4:
          O = "easeOutQuad";
          break;
        case 5:
          O = "easeOutCubic";
          break;
        case 6:
          O = "Linear";
          break;
        default:
          O = w;
          break
      }
      let P = 0;
      E && (P = E.offsetTop + g), scrollto.animateScroll(P, "", {
        speed: y,
        speedAsDuration: S,
        easing: O
      })
    }

    function t(g = 0, y = 1440, w = 1, S = !0) {
      let T;
      switch (w) {
        case 1:
          T = "easeInOutQuart";
          break;
        case 2:
          T = "easeOutQuart";
          break;
        case 3:
          T = "easeInOutQuad";
          break;
        case 4:
          T = "easeOutQuad";
          break;
        case 5:
          T = "easeOutCubic";
          break;
        case 6:
          T = "Linear";
          break;
        default:
          T = w;
          break
      }
      scrollto.animateScroll(window.pageYOffset + window.innerHeight + g, "", {
        speed: y,
        speedAsDuration: S,
        easing: T
      })
    }
    document.querySelectorAll("[data-scrollto-next-section]:not(.js-running)").forEach(g => {
      g.classList.add("js-running"), g.addEventListener("click", function () {
        e()
      })
    });

    function i() {
      e(0, 1080, 3, !1)
    }

    function r() {
      n(0, 1080, 3, !1)
    }

    function s(g = 0, y = 1440, w = 3, S = !1) {
      let T;
      switch (w) {
        case 1:
          T = "easeInOutQuart";
          break;
        case 2:
          T = "easeOutQuart";
          break;
        case 3:
          T = "easeInOutQuad";
          break;
        case 4:
          T = "easeOutQuad";
          break;
        case 5:
          T = "easeOutCubic";
          break;
        case 6:
          T = "Linear";
          break;
        default:
          T = w;
          break
      }
      w == "quarticInOut" ? scrollto.animateScroll(document.body.scrollHeight - g, "", {
        speed: y,
        speedAsDuration: S,
        easing: "quarticInOut",
        customEasing: function (M) {
          return M < .5 ? 8 * M * M * M * M : 1 - Math.pow(-2 * M + 2, 4) / 2
        }
      }) : w == "cubicInOut" ? scrollto.animateScroll(document.body.scrollHeight - g, "", {
        speed: y,
        speedAsDuration: S,
        easing: "cubicInOut",
        customEasing: function (M) {
          return M < .5 ? 4 * M * M * M : 1 - Math.pow(-2 * M + 2, 3) / 2
        }
      }) : w == "customEasing" ? scrollto.animateScroll(document.body.scrollHeight - g, "", {
        speed: y,
        speedAsDuration: S,
        easing: "customEase",
        customEasing: function (M) {
          return -(Math.cos(Math.PI * M) - 1) / 2
        }
      }) : scrollto.animateScroll(document.body.scrollHeight - g, "", {
        speed: y,
        speedAsDuration: S,
        easing: T
      })
    }
    Xt.get();

    function o(g) {
      return g.reduce((y, [w, S, T]) => y.then(() => new Promise(M => {
        w(...T), setTimeout(M, S)
      })), Promise.resolve())
    }

    function a(g, y = 0, w = 800, S = 1) {
      let T = 0;
      Number.isInteger(g) ? T = g : T = g.offsetTop, scrollto.animateScroll(T - y, "", {
        speed: w,
        speedAsDuration: !1,
        easing: "easeInOutQuad"
      })
    }
    window.findNextSection = e, window.findNextNextSection = n, window.findNextSectionContinuous = i, window.findNextNextSectionContinuous = r, window.findNextPage = t, window.dispararCallbacks = o, window.findFooter = s, window.scrollToItem = a;

    function c(g) {
      switch (g) {
        case 1:
          return "Power3.easeInOut";
        case 2:
          return "Power3.easeOut";
        case 3:
          return "Power1.easeInOut";
        case 4:
          return "Power1.easeOut";
        case 5:
          return "Power2.easeOut";
        case 6:
          return "Power0.easeInOut";
        case 7:
          return "Power2.easeInOut";
        case 8:
          return 'CustomEase.create("custom", "M0,0 C0.212,0 0.267,-0.076 0.346,0 0.422,0.074 0.46,0.356 0.502,0.504 0.551,0.68 0.617,0.862 0.684,0.922 0.748,0.98 0.734,1.094 1,1 ");';
        case 9:
          return "Sine.easeInOut";
        default:
          return g
      }
    }

    function u() {
      let g = Xt.get();
      const y = et.timeline();
      y.to(g, {
        duration: 2.6,
        scrollTop: 1608,
        ease: c(9)
      }), y.to(g, {
        duration: 1.6,
        scrollTop: 2345,
        ease: c(7)
      }), y.to(g, {
        duration: 2.6,
        scrollTop: 3484,
        ease: c(7)
      }, ">.3"), y.to(g, {
        duration: 2,
        scrollTop: 4892,
        ease: c(7)
      }, ">.3"), y.to(g, {
        duration: 2,
        scrollTop: 6633,
        ease: c(7)
      }), y.to(g, {
        duration: 2,
        scrollTop: 7530,
        ease: c(7)
      }), y.to(g, {
        duration: 2,
        scrollTop: 8643,
        ease: c(7)
      })
    }

    function f() {
      Xt.get(), et.timeline().to(window, {
        duration: 1.6,
        scrollTo: {
          y: 747,
          autoKill: !1
        },
        ease: c(7)
      })
    }

    function h() {
      et.timeline().to(window, {
        duration: 3,
        scrollTo: {
          y: 2085,
          autoKill: !1
        },
        ease: c(7)
      }).to(window, {
        duration: 10,
        scrollTo: {
          y: 10219,
          autoKill: !1
        },
        ease: c(9)
      }, "+=.4")
    }

    function p() {
      let g = Xt.get();
      const y = et.timeline();
      y.to(g, {
        duration: 1.6,
        scrollTop: 1240,
        ease: c(7)
      }), y.to(g, {
        duration: 1,
        scrollTop: 2245,
        ease: c(7)
      }), y.to(g, {
        duration: 1.6,
        scrollTop: 3250,
        ease: c(7)
      }), y.to(g, {
        duration: 2,
        scrollTop: 4718,
        ease: c(7)
      }, ">.3"), y.to(g, {
        duration: 4,
        scrollTop: 7197,
        ease: c(9)
      }), y.to(g, {
        duration: 4,
        scrollTop: 10279,
        ease: c(9)
      }, ">.3"), y.to(g, {
        duration: 2,
        scrollTop: 12475,
        ease: c(7)
      }, ">.6")
    }
    window.home = u, window.work = f, window.project = h, window.about = p, window.gsap = et;

    function m() {
      console.log(window.scrollY)
    }
    window.pageY = m
  }
  et.registerPlugin(Xt, pe);
  jk();
  pE();
  mE();
  DS();
  xv();
  Tv();
  var dm = !0;

  function Mv() {
    if (!Ce.isSafariDesktop && !Ce.isMobile) {
      let n = 2;
      Ce.isSafariDesktop && (n = 1), Xt.create({
        wrapper: "#main-transition .container-wrapper",
        content: "[data-scroll-container]",
        smooth: n,
        normalizeScroll: !0,
        ignoreMobileResize: !0,
        effects: !0,
        preventDefault: !0
      })
    }
    dm ? dm = !1 : (document.body.classList.add("page-enter-active"), document.body.classList.remove("page-leave-active"), setTimeout(() => {
      document.body.classList.remove("page-enter-active")
    }, 1250), setTimeout(() => {
      Kg(), sf()
    }, 350)), document.body.classList.remove("page-leave-active"), eO(), Wk(), Hk(), hE(), uE(), tO(), fE("", ""), document.querySelectorAll("[data-get-section]").forEach(n => {
      n.dataset.getSection = ""
    }), setTimeout(() => {
      um(), document.addEventListener("scroll", um, {
        passive: !0
      })
    }, 100)
  }
  Mv();
  document.addEventListener("pjax:complete", Mv);
  document.addEventListener("pjax:send", nO);
  document.addEventListener("pjax:switch", function () {
    let n = Xt.get();
    n && n.kill(), et.globalTimeline.getChildren().forEach(e => e.kill()), pe.getAll().forEach(e => {
      e.kill()
    })
  });

  function nO() {
    document.body.classList.add("page-leave-active")
  }
  const Ts = new AS;
  Ts.add(IS);
  Ts.add(kE);
  Ts.add(CE);
  Ts.add(GE);
  Ts.add(JE);
  Ts.updateCurrent() && Ts.runCurrent();
  loader.onFirstLeaving = () => {
    document.dispatchEvent(new CustomEvent("load:leaving")), Kg(), setTimeout(() => {
      sf()
    }, 0)
  };
  setTimeout(() => {
    loader.state.scriptReady = !0
  }, 2300);
  iO()
});
export default rO();