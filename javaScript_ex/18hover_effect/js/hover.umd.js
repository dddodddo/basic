var e = require("three"),
    t = require("gsap");

function n(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    }
}

function i(e) {
    if (e && e.__esModule) return e;
    var t = Object.create(null);
    return e && Object.keys(e).forEach(function (n) {
        if ("default" !== n) {
            var i = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(t, n, i.get ? i : {
                enumerable: !0,
                get: function () {
                    return e[n]
                }
            })
        }
    }), t.default = e, t
}
var r = /*#__PURE__*/ i(e),
    o = /*#__PURE__*/ n(t);
module.exports = function (e) {
    function t() {
        for (var e = 0; e < arguments.length; e++)
            if (void 0 !== arguments[e]) return arguments[e]
    }
    console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ", "color: #bada55; font-size: 0.8rem");
    var n = e.parent,
        i = e.displacementImage,
        a = e.image1,
        s = e.image2,
        f = t(e.imagesRatio, 1),
        l = t(e.intensity1, e.intensity, 1),
        d = t(e.intensity2, e.intensity, 1),
        u = t(e.angle, Math.PI / 4),
        v = t(e.angle1, u),
        c = t(e.angle2, 3 * -u),
        m = t(e.speedIn, e.speed, 1.6),
        p = t(e.speedOut, e.speed, 1.2),
        g = t(e.hover, !0),
        h = t(e.easing, "expo.out"),
        y = t(e.video, !1);
    if (n)
        if (a && s && i) {
            var F = new r.Scene,
                x = new r.OrthographicCamera(n.offsetWidth / -2, n.offsetWidth / 2, n.offsetHeight / 2, n.offsetHeight / -2, 1, 1e3);
            x.position.z = 1;
            var w = new r.WebGLRenderer({
                antialias: !1,
                alpha: !0
            });
            w.setPixelRatio(2), w.setClearColor(16777215, 0), w.setSize(n.offsetWidth, n.offsetHeight), n.appendChild(w.domElement);
            var L = function () {
                    w.render(F, x)
                },
                H = new r.TextureLoader;
            H.crossOrigin = "";
            var W, V, b = H.load(i, L);
            if (b.magFilter = b.minFilter = r.LinearFilter, y) {
                ! function e() {
                    requestAnimationFrame(e), w.render(F, x)
                }(), (y = document.createElement("video")).autoplay = !0, y.loop = !0, y.muted = !0, y.src = a, y.load();
                var P = document.createElement("video");
                P.autoplay = !0, P.loop = !0, P.muted = !0, P.src = s, P.load();
                var E = new r.VideoTexture(y),
                    M = new r.VideoTexture(P);
                E.magFilter = M.magFilter = r.LinearFilter, E.minFilter = M.minFilter = r.LinearFilter, P.addEventListener("loadeddata", function () {
                    P.play(), (M = new r.VideoTexture(P)).magFilter = r.LinearFilter, M.minFilter = r.LinearFilter, U.uniforms.texture2.value = M
                }, !1), y.addEventListener("loadeddata", function () {
                    y.play(), (E = new r.VideoTexture(y)).magFilter = r.LinearFilter, E.minFilter = r.LinearFilter, U.uniforms.texture1.value = E
                }, !1)
            } else E = H.load(a, L), M = H.load(s, L), E.magFilter = M.magFilter = r.LinearFilter, E.minFilter = M.minFilter = r.LinearFilter;
            var O = f;
            n.offsetHeight / n.offsetWidth < O ? (W = 1, V = n.offsetHeight / n.offsetWidth / O) : (W = n.offsetWidth / n.offsetHeight * O, V = 1);
            var U = new r.ShaderMaterial({
                    uniforms: {
                        intensity1: {
                            type: "f",
                            value: l
                        },
                        intensity2: {
                            type: "f",
                            value: d
                        },
                        dispFactor: {
                            type: "f",
                            value: 0
                        },
                        angle1: {
                            type: "f",
                            value: v
                        },
                        angle2: {
                            type: "f",
                            value: c
                        },
                        texture1: {
                            type: "t",
                            value: E
                        },
                        texture2: {
                            type: "t",
                            value: M
                        },
                        disp: {
                            type: "t",
                            value: b
                        },
                        res: {
                            type: "vec4",
                            value: new r.Vector4(n.offsetWidth, n.offsetHeight, W, V)
                        },
                        dpr: {
                            type: "f",
                            value: window.devicePixelRatio
                        }
                    },
                    vertexShader: "\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
                    fragmentShader: "\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform float dpr;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\nuniform vec4 res;\nuniform vec2 parent;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n\n  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;\n  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);\n\n\n  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",
                    transparent: !0,
                    opacity: 1
                }),
                _ = new r.PlaneGeometry(n.offsetWidth, n.offsetHeight, 1),
                C = new r.Mesh(_, U);
            F.add(C), g && (n.addEventListener("mouseenter", D), n.addEventListener("touchstart", D), n.addEventListener("mouseleave", R), n.addEventListener("touchend", R)), window.addEventListener("resize", function (e) {
                n.offsetHeight / n.offsetWidth < O ? (W = 1, V = n.offsetHeight / n.offsetWidth / O) : (W = n.offsetWidth / n.offsetHeight * O, V = 1), C.material.uniforms.res.value = new r.Vector4(n.offsetWidth, n.offsetHeight, W, V), w.setSize(n.offsetWidth, n.offsetHeight), L()
            }), this.next = D, this.previous = R
        } else console.warn("One or more images are missing");
    else console.warn("Parent missing");

    function D() {
        o.default.to(U.uniforms.dispFactor, {
            duration: m,
            value: 1,
            ease: h,
            onUpdate: L,
            onComplete: L
        })
    }

    function R() {
        o.default.to(U.uniforms.dispFactor, {
            duration: p,
            value: 0,
            ease: h,
            onUpdate: L,
            onComplete: L
        })
    }
};
//# sourceMappingURL=hover-effect.js.map