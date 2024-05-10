! function (e, n, t) {
    function r(e, n) {
        return typeof e === n
    }

    function o(e) {
        return e.replace(/([a-z])-([a-z])/g, (function (e, n, t) {
            return n + t.toUpperCase()
        })).replace(/^-/, "")
    }

    function i(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function s() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : C ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function a(e, n) {
        return function () {
            return e.apply(n, arguments)
        }
    }

    function l(e) {
        return e.replace(/([A-Z])/g, (function (e, n) {
            return "-" + n.toLowerCase()
        })).replace(/^ms-/, "-ms-")
    }

    function f(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o
    }

    function u(e, t, r, o) {
        var i, a, l, f, u = "modernizr",
            c = s("div"),
            p = function () {
                var e = n.body;
                return e || ((e = s(C ? "svg" : "body")).fake = !0), e
            }();
        if (parseInt(r, 10))
            for (; r--;)(l = s("div")).id = o ? o[r] : u + (r + 1), c.appendChild(l);
        return (i = s("style")).type = "text/css", i.id = "s" + u, (p.fake ? p : c).appendChild(i), p.appendChild(c), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)), c.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = g.style.overflow, g.style.overflow = "hidden", g.appendChild(p)), a = t(c, e), p.fake ? (p.parentNode.removeChild(p), g.style.overflow = f, g.offsetHeight) : c.parentNode.removeChild(c), !!a
    }

    function c(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(l(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + l(n[o]) + ":" + r + ")");
            return u("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", (function (e) {
                return "absolute" == f(e, null, "position")
            }))
        }
        return t
    }

    function p(e, n, a, l) {
        function f() {
            p && (delete j.style, delete j.modElem)
        }
        if (l = !r(l, "undefined") && l, !r(a, "undefined")) {
            var u = c(e, a);
            if (!r(u, "undefined")) return u
        }
        for (var p, d, m, v, h, y = ["modernizr", "tspan", "samp"]; !j.style && y.length;) p = !0, j.modElem = s(y.shift()), j.style = j.modElem.style;
        for (m = e.length, d = 0; m > d; d++)
            if (v = e[d], h = j.style[v], i(v, "-") && (v = o(v)), j.style[v] !== t) {
                if (l || r(a, "undefined")) return f(), "pfx" != n || v;
                try {
                    j.style[v] = a
                } catch (e) {}
                if (j.style[v] != h) return f(), "pfx" != n || v
            } return f(), !1
    }

    function d(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + w.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? p(l, n, o, i) : function (e, n, t) {
            var o;
            for (var i in e)
                if (e[i] in n) return !1 === t ? e[i] : r(o = n[e[i]], "function") ? a(o, t || n) : o;
            return !1
        }(l = (e + " " + b.join(s + " ") + s).split(" "), n, t)
    }
    var m = [],
        v = [],
        h = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout((function () {
                    n(t[e])
                }), 0)
            },
            addTest: function (e, n, t) {
                v.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function (e) {
                v.push({
                    name: null,
                    fn: e
                })
            }
        },
        y = function () {};
    y.prototype = h, y = new y;
    var g = n.documentElement,
        C = "svg" === g.nodeName.toLowerCase(),
        S = "Moz O ms Webkit",
        w = h._config.usePrefixes ? S.split(" ") : [];
    h._cssomPrefixes = w;
    var x = function (n) {
        var r, o = T.length,
            i = e.CSSRule;
        if (void 0 === i) return t;
        if (!n) return !1;
        if ((r = (n = n.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = T[s];
            if (a.toUpperCase() + "_" + r in i) return "@-" + a.toLowerCase() + "-" + n
        }
        return !1
    };
    h.atRule = x;
    var b = h._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    h._domPrefixes = b;
    var _ = {
        elem: s("modernizr")
    };
    y._q.push((function () {
        delete _.elem
    }));
    var j = {
        style: _.elem.style
    };
    y._q.unshift((function () {
        delete j.style
    })), h.testAllProps = d;
    var z = h.prefixed = function (e, n, t) {
        return 0 === e.indexOf("@") ? x(e) : (-1 != e.indexOf("-") && (e = o(e)), n ? d(e, n, t) : d(e, "pfx"))
    };
    y.addTest("objectfit", !!z("objectFit"), {
        aliases: ["object-fit"]
    });
    var T = h._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    h._prefixes = T;
    var P = h.testStyles = u;
    y.addTest("touchevents", (function () {
            var t;
            if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
            else {
                var r = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                P(r, (function (e) {
                    t = 9 === e.offsetTop
                }))
            }
            return t
        })),
        function () {
            var e, n, t, o, i, s;
            for (var a in v)
                if (v.hasOwnProperty(a)) {
                    if (e = [], (n = v[a]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                        for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++) 1 === (s = e[i].split(".")).length ? y[s[0]] = o : (!y[s[0]] || y[s[0]] instanceof Boolean || (y[s[0]] = new Boolean(y[s[0]])), y[s[0]][s[1]] = o), m.push((o ? "" : "no-") + s.join("-"))
                }
        }(),
        function (e) {
            var n = g.className,
                t = y._config.classPrefix || "";
            if (C && (n = n.baseVal), y._config.enableJSClass) {
                var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(r, "$1" + t + "js$2")
            }
            y._config.enableClasses && (n += " " + t + e.join(" " + t), C ? g.className.baseVal = n : g.className = n)
        }(m), delete h.addTest, delete h.addAsyncTest;
    for (var E = 0; E < y._q.length; E++) y._q[E]();
    e.Modernizr = y
}(window, document);