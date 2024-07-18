// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_collage(r, I, A) {
  var y = jQuery,
    f = y(this),
    C = y(".ws_list", A),
    m = r.maxQuality || true,
    u = r.maxPreload || 20,
    E = !r.noCanvas && document.createElement("canvas").getContext,
    e = 10,
    F = false,
    M = 0.3,
    l = 0.7,
    w = -180,
    a = 180,
    d = I.length,
    S = [];
  var v = y("<div>")
    .addClass("ws_effect ws_collage")
    .css({
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      overflow: "hidden",
      "z-index": 8,
    })
    .appendTo(A);
  function H(x, j, i) {
    return parseFloat(i * (j - x) + x);
  }
  function R(W, V, N) {
    var i = N * V.x,
      X = N * V.y,
      j = N * V.width,
      U = N * V.height;
    if (E) {
      W.save();
      W.translate(i + 0.5 * j, X + 0.5 * U);
      W.rotate((V.angle * Math.PI) / 180);
      W.scale(V.scale, V.scale);
      if (V.img) {
        W.drawImage(V.img, -0.5 * j, -0.5 * U, j, U);
      }
      W.restore();
    } else {
      y("<img>")
        .attr("src", V.img)
        .css({
          position: "absolute",
          width: (100 * j) / r.width + "%",
          height: (100 * U) / r.height + "%",
          left: (100 * i) / r.width + "%",
          top: (100 * X) / r.height + "%",
        })
        .appendTo(W);
    }
  }
  function c(V, Y, U, N, W, Z) {
    var x = S[V],
      X = S[Y],
      i = new Date();
    if (E) {
      var j = y(I[Y]);
      j = {
        width: j.width(),
        height: j.height(),
        marginTop: parseFloat(j.css("marginTop")),
        marginLeft: parseFloat(j.css("marginLeft")),
      };
      y(t).css(j);
    }
    wowAnimate(
      function (aa) {
        var aj = 1 - 2 * aa;
        if (aj < 0) {
          aj *= -1;
          if (aj > 1) {
            aj = 1;
          }
        }
        aj = jQuery.easing.easeInOutQuad(1, aj, 0, 1, 1);
        aa = jQuery.easing.easeInOutQuad(1, aa, 0, 1, 1);
        if (E) {
          o.width = N;
          o.height = W;
          t.width = N;
          t.height = W;
          var ab = H(r.width / X.width, r.width / x.width, aa),
            ac = H(0.5, H(1 / X.scale, 1 / x.scale, aa), aj),
            ag = H(1 / X.scale, 1 / x.scale, aa),
            ah = H(X.angle, x.angle, aa),
            ai = U * x.width,
            ad = U * x.height,
            af = U * H(X.x, x.x, aa),
            ae = U * H(X.y, x.y, aa);
          if (Q && k) {
            o.ctx.drawImage(k, 0, 0, N, W);
            o.ctx.save();
            o.ctx.translate(af + 0.5 * ai, ae + 0.5 * ad);
            o.ctx.rotate((-ah * Math.PI) / 180);
            o.ctx.scale(ag, ag);
            o.ctx.translate(-(af + 0.5 * ai), -(ae + 0.5 * ad));
            o.ctx.transform(ag, 0, 0, ag, -af * ag, -ae * ag);
            o.ctx.drawImage(k, -N, -W, N * 4, W * 4);
            o.ctx.restore();
          }
          o.ctx.transform(ab, 0, 0, ab, -af * ab, -ae * ab);
          o.ctx.translate(af + 0.5 * ai, ae + 0.5 * ad);
          o.ctx.rotate((-ah * Math.PI) / 180);
          o.ctx.scale(ac, ac);
          o.ctx.translate(-(af + 0.5 * ai), -(ae + 0.5 * ad));
          o.ctx.globalAlpha = H(0.2, 1, aj);
          if (m) {
            for (P in S) {
              R(o.ctx, S[P], U);
            }
          } else {
            o.ctx.drawImage(L, 0, 0);
          }
          o.ctx.globalAlpha = 1;
          o.ctx.globalAlpha = H(0, 1, aj);
          R(o.ctx, x, U);
          o.ctx.globalAlpha = H(1, 0, aa * 2 > 1 ? 1 : aa * 2);
          R(o.ctx, X, U);
          o.ctx.globalAlpha = 1;
          t.ctx.drawImage(o, 0, 0);
        } else {
          var ak = H(2, N / (X.width * U), aj),
            af = -U * H(X.x, x.x, aa) * ak,
            ae = -U * H(X.y, x.y, aa) * ak,
            ai = N * ak,
            ad = W * ak;
          t.css({ left: af, top: ae, width: ai, height: ad });
        }
        v.show();
      },
      0,
      1,
      r.duration,
      function () {
        Z();
      }
    );
  }
  function B(V, i, U, j, N) {
    if (V > i || !S[V] || S[V].img) {
      return;
    }
    var x = new Image();
    x.onload = function () {
      S[V].img = x;
      if (U && V != N[0] && V != N[1]) {
        R(j, S[V], 1);
        B(V + 1, i, true, j, N);
      } else {
        B(V + 1, i, false);
      }
    };
    x.onerror = function () {
      if (U && V != N[0] && V != N[1]) {
        R(j, S[V], 1);
        B(V + 1, i, true, j, N);
      } else {
        B(V + 1, i, false);
      }
    };
    x.src = I[V].src;
  }
  var q = 0,
    p = 0,
    s = r.width / (Math.sqrt(d) + 1),
    z = r.height / (Math.sqrt(d) + 1),
    b = Math.floor(r.width / s);
  for (P = 0; P < d; P++) {
    if (s + q > s * b) {
      p = Math.floor((s * (P + 1)) / r.width) * z;
      q = 0;
    }
    S[P] = { x: q, y: p, width: s, height: z, img: null };
    if (E) {
      S[P].scale = H(M, l, Math.random());
      S[P].angle = H(w, a, Math.random());
    }
    q += parseFloat(s);
  }
  for (
    var O, D, P = S.length;
    P;
    O = parseInt(Math.random() * P), D = S[--P], S[P] = S[O], S[O] = D
  ) {}
  if (E) {
    var t = y("<canvas>")[0];
    t.ctx = t.getContext("2d");
    t.width = v.width();
    t.height = v.height();
    var o = y("<canvas>")[0];
    o.ctx = o.getContext("2d");
    o.width = v.width();
    o.height = v.height();
    var k = y("<canvas>")[0];
    k.ctx = k.getContext("2d");
    k.width = v.width();
    k.height = v.height();
    if (!m) {
      var L = y("<canvas>")[0];
      L.ctx = L.getContext("2d");
      L.width = v.width();
      L.height = v.height();
    }
    v.append(t);
  } else {
    var t = v.clone().removeClass("ws_effect").css({ overflow: "visible" });
    v.css("display", "none").append(t);
    for (P in S) {
      S[P].img = I[P].src;
      R(t, S[P], 1);
    }
    var h = d % b == "undefined" ? 0 : d % b;
    (startRight = 0),
      (bottomAddCount = 2 * b - h),
      (rightAddCount = Math.ceil(d / b) + 1);
    for (var P = 0; P < bottomAddCount; P++) {
      R(
        t,
        {
          img: I[P % I.length].src,
          width: s,
          height: z,
          x: s * ((h + P) % b),
          y: p + Math.floor((h + P) / b) * z,
        },
        1
      );
    }
    for (var P = 0; P < bottomAddCount; P++) {
      R(
        t,
        { img: I[P % I.length].src, width: s, height: z, x: s * b, y: P * z },
        1
      );
    }
  }
  var G, Q;
  this.go = function (x, U) {
    if (G) {
      return -1;
    }
    if (r.images) {
      S[x].img = I[x];
    }
    if (window.XMLHttpRequest) {
      if (E) {
        var N = r.width,
          j = r.height,
          i = 1;
        B(U, U, false);
        B(x, x, false);
        if (m) {
          B(2, u + 1, false);
        } else {
          L.width = N;
          L.height = j;
          B(2, u + 1, true, L.ctx, [U, x]);
        }
        if (!Q && !F) {
          rand = Math.round(H(0, d - 1, Math.random()));
          k.width = v.width();
          k.height = v.height();
          Q = J(y(I[rand]), e, k);
        }
      } else {
        var N = A.width(),
          j = A.height(),
          i = N / r.width;
      }
      G = new c(x, U, i, N, j, function V() {
        f.trigger("effectEnd");
        v.hide();
        G = 0;
        if (!m && E) {
          for (i in S) {
            S[i].img = null;
          }
        }
      });
    } else {
      G = 0;
      C.stop(true).animate(
        {
          left: x ? -x + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0,
        },
        r.duration,
        "easeInOutExpo",
        function () {
          f.trigger("effectEnd");
        }
      );
    }
  };
  function J(i, x, j) {
    if (E) {
      j.ctx.drawImage(i.get(0), 0, 0);
      if (!n(j.ctx, 0, 0, j.width, j.height, x)) {
        j.ctx.drawImage(i.get(0), 0, 0);
      }
      return true;
    }
    return cont;
  }
  var g = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ];
  var K = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];
  function n(aI, ap, an, j, N, az) {
    if (isNaN(az) || az < 1) {
      return;
    }
    az |= 0;
    var aD;
    try {
      aD = aI.getImageData(ap, an, j, N);
    } catch (aH) {
      console.log("error:unable to access image data: " + aH);
      return false;
    }
    var X = aD.data;
    var ax,
      aw,
      aF,
      aC,
      ae,
      ah,
      ab,
      V,
      W,
      am,
      ac,
      ao,
      ak,
      at,
      ay,
      af,
      aa,
      ag,
      ai,
      ar;
    var aG = az + az + 1;
    var au = j << 2;
    var ad = j - 1;
    var aB = N - 1;
    var Z = az + 1;
    var aA = (Z * (Z + 1)) / 2;
    var aq = new T();
    var al = aq;
    for (aF = 1; aF < aG; aF++) {
      al = al.next = new T();
      if (aF == Z) {
        var Y = al;
      }
    }
    al.next = aq;
    var aE = null;
    var av = null;
    ab = ah = 0;
    var aj = g[az];
    var U = K[az];
    for (aw = 0; aw < N; aw++) {
      at = ay = af = V = W = am = 0;
      ac = Z * (aa = X[ah]);
      ao = Z * (ag = X[ah + 1]);
      ak = Z * (ai = X[ah + 2]);
      V += aA * aa;
      W += aA * ag;
      am += aA * ai;
      al = aq;
      for (aF = 0; aF < Z; aF++) {
        al.r = aa;
        al.g = ag;
        al.b = ai;
        al = al.next;
      }
      for (aF = 1; aF < Z; aF++) {
        aC = ah + ((ad < aF ? ad : aF) << 2);
        V += (al.r = aa = X[aC]) * (ar = Z - aF);
        W += (al.g = ag = X[aC + 1]) * ar;
        am += (al.b = ai = X[aC + 2]) * ar;
        at += aa;
        ay += ag;
        af += ai;
        al = al.next;
      }
      aE = aq;
      av = Y;
      for (ax = 0; ax < j; ax++) {
        X[ah] = (V * aj) >> U;
        X[ah + 1] = (W * aj) >> U;
        X[ah + 2] = (am * aj) >> U;
        V -= ac;
        W -= ao;
        am -= ak;
        ac -= aE.r;
        ao -= aE.g;
        ak -= aE.b;
        aC = (ab + ((aC = ax + az + 1) < ad ? aC : ad)) << 2;
        at += aE.r = X[aC];
        ay += aE.g = X[aC + 1];
        af += aE.b = X[aC + 2];
        V += at;
        W += ay;
        am += af;
        aE = aE.next;
        ac += aa = av.r;
        ao += ag = av.g;
        ak += ai = av.b;
        at -= aa;
        ay -= ag;
        af -= ai;
        av = av.next;
        ah += 4;
      }
      ab += j;
    }
    for (ax = 0; ax < j; ax++) {
      ay = af = at = W = am = V = 0;
      ah = ax << 2;
      ac = Z * (aa = X[ah]);
      ao = Z * (ag = X[ah + 1]);
      ak = Z * (ai = X[ah + 2]);
      V += aA * aa;
      W += aA * ag;
      am += aA * ai;
      al = aq;
      for (aF = 0; aF < Z; aF++) {
        al.r = aa;
        al.g = ag;
        al.b = ai;
        al = al.next;
      }
      ae = j;
      for (aF = 1; aF <= az; aF++) {
        ah = (ae + ax) << 2;
        V += (al.r = aa = X[ah]) * (ar = Z - aF);
        W += (al.g = ag = X[ah + 1]) * ar;
        am += (al.b = ai = X[ah + 2]) * ar;
        at += aa;
        ay += ag;
        af += ai;
        al = al.next;
        if (aF < aB) {
          ae += j;
        }
      }
      ah = ax;
      aE = aq;
      av = Y;
      for (aw = 0; aw < N; aw++) {
        aC = ah << 2;
        X[aC] = (V * aj) >> U;
        X[aC + 1] = (W * aj) >> U;
        X[aC + 2] = (am * aj) >> U;
        V -= ac;
        W -= ao;
        am -= ak;
        ac -= aE.r;
        ao -= aE.g;
        ak -= aE.b;
        aC = (ax + ((aC = aw + Z) < aB ? aC : aB) * j) << 2;
        V += at += aE.r = X[aC];
        W += ay += aE.g = X[aC + 1];
        am += af += aE.b = X[aC + 2];
        aE = aE.next;
        ac += aa = av.r;
        ao += ag = av.g;
        ak += ai = av.b;
        at -= aa;
        ay -= ag;
        af -= ai;
        av = av.next;
        ah += j;
      }
    }
    aI.putImageData(aD, ap, an);
    return true;
  }
  function T() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
  }
}
jQuery.extend(jQuery.easing, {
  easeInOutQuad: function (e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return (h / 2) * f * f + a;
    }
    return (-h / 2) * (--f * (f - 2) - 1) + a;
  },
}); // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_cube(p, k, b) {
  var e = jQuery,
    j = e(this),
    a = /WOW Slider/g.test(navigator.userAgent),
    l = !/iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent) && !a,
    g = e(".ws_list", b),
    c = p.perspective || 2000,
    d = {
      position: "absolute",
      backgroundSize: "cover",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
    };
  var o = {
    domPrefixes: " Webkit Moz ms O Khtml".split(" "),
    testDom: function (r) {
      var q = this.domPrefixes.length;
      while (q--) {
        if (
          typeof document.body.style[this.domPrefixes[q] + r] !== "undefined"
        ) {
          return true;
        }
      }
      return false;
    },
    cssTransitions: function () {
      return this.testDom("Transition");
    },
    cssTransforms3d: function () {
      var r =
        typeof document.body.style.perspectiveProperty !== "undefined" ||
        this.testDom("Perspective");
      if (r && /AppleWebKit/.test(navigator.userAgent)) {
        var t = document.createElement("div"),
          q = document.createElement("style"),
          s = "Test3d" + Math.round(Math.random() * 99999);
        q.textContent = "@media (-webkit-transform-3d){#" + s + "{height:3px}}";
        document.getElementsByTagName("head")[0].appendChild(q);
        t.id = s;
        document.body.appendChild(t);
        r = t.offsetHeight === 3;
        q.parentNode.removeChild(q);
        t.parentNode.removeChild(t);
      }
      return r;
    },
    webkit: function () {
      return (
        /AppleWebKit/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent)
      );
    },
  };
  var f = o.cssTransitions() && o.cssTransforms3d(),
    m = o.webkit();
  var i = e("<div>")
    .css(d)
    .css({
      transformStyle: "preserve-3d",
      perspective: m && !a ? "none" : c,
      zIndex: 8,
    });
  e("<div>").addClass("ws_effect ws_cube").css(d).append(i).appendTo(b);
  if (!f && p.fallback) {
    return new p.fallback(p, k, b);
  }
  function n(q, r, t, s) {
    return (
      "inset " +
      (-s * q * 1.2) / 90 +
      "px " +
      (t * r * 1.2) / 90 +
      "px " +
      (q + r) / 20 +
      "px rgba(" +
      (t < s ? "0,0,0,.6" : t > s ? "255,255,255,0.8" : "0,0,0,.0") +
      ")"
    );
  }
  var h;
  this.go = function (B, y) {
    var t = e(k[y]);
    t = {
      width: t.width(),
      height: t.height(),
      marginTop: parseFloat(t.css("marginTop")),
      marginLeft: parseFloat(t.css("marginLeft")),
    };
    function s(S, F, H, I, G, E, Q, R, P, O) {
      S.parent().css("perspective", c);
      var N = S.width(),
        K = S.height();
      F.front.css({
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
      });
      F.back.css({
        opacity: 1,
        transform:
          "translate3d(0,0,0) rotateY(" + Q + "deg) rotateX(" + E + "deg)",
      });
      if (l) {
        var J = e("<div>")
          .css(d)
          .css("boxShadow", n(N, K, 0, 0))
          .appendTo(F.front);
        var M = e("<div>")
          .css(d)
          .css("boxShadow", n(N, K, E, Q))
          .appendTo(F.back);
      }
      if (m && !/WOW Slider/g.test(navigator.userAgent)) {
        S.css({ transform: "translateZ(-" + H + "px)" });
      }
      var L = setTimeout(function () {
        var w =
          "all " + p.duration + "ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";
        F.front.css({
          transition: w,
          boxShadow: l ? n(N, K, R, P) : "",
          transform: "rotateX(" + R + "deg) rotateY(" + P + "deg)",
          zIndex: 0,
        });
        F.back.css({
          transition: w,
          boxShadow: l ? n(N, K, 0, 0) : "",
          transform: "rotateY(0deg) rotateX(0deg)",
          zIndex: 20,
        });
        if (l) {
          J.css({ transition: w, boxShadow: n(N, K, R, P) });
          M.css({ transition: w, boxShadow: n(N, K, 0, 0) });
        }
        L = setTimeout(O, p.duration);
      }, 20);
      return {
        stop: function () {
          clearTimeout(L);
          O();
        },
      };
    }
    if (f) {
      if (h) {
        h.stop();
      }
      var C = b.width(),
        z = b.height();
      var x = {
        left: [C / 2, C / 2, 0, 0, 90, 0, -90],
        right: [C / 2, -C / 2, 0, 0, -90, 0, 90],
        down: [z / 2, 0, -z / 2, 90, 0, -90, 0],
        up: [z / 2, 0, z / 2, -90, 0, 90, 0],
      }[
        p.direction ||
          ["left", "right", "down", "up"][Math.floor(Math.random() * 4)]
      ];
      var D = e("<img>").css(t),
        v = e("<img>").css(t).attr("src", k.get(B).src);
      var q = e("<div>")
        .css({
          overflow: "hidden",
          transformOrigin: "50% 50% -" + x[0] + "px",
          zIndex: 20,
        })
        .css(d)
        .append(D)
        .appendTo(i);
      var r = e("<div>")
        .css({
          overflow: "hidden",
          transformOrigin: "50% 50% -" + x[0] + "px",
          zIndex: 0,
        })
        .css(d)
        .append(v)
        .appendTo(i);
      D.on("load", function () {
        g.hide();
      });
      D.attr("src", k.get(y).src).load();
      i.parent().show();
      h = new s(
        i,
        { front: q, back: r },
        x[0],
        x[1],
        x[2],
        x[3],
        x[4],
        x[5],
        x[6],
        function () {
          j.trigger("effectEnd");
          i.empty().parent().hide();
          h = 0;
        }
      );
    } else {
      i.css({
        position: "absolute",
        display: "none",
        zIndex: 2,
        width: "100%",
        height: "100%",
      });
      i.stop(1, 1);
      var u = !!((B - y + 1) % k.length) ^ p.revers ? "left" : "right";
      var q = e("<div>")
        .css({
          position: "absolute",
          left: "0%",
          right: "auto",
          top: 0,
          width: "100%",
          height: "100%",
        })
        .css(u, 0)
        .append(
          e(k[y])
            .clone()
            .css({
              width: (100 * t.width) / b.width() + "%",
              height: (100 * t.height) / b.height() + "%",
              marginLeft: (100 * t.marginLeft) / b.width() + "%",
            })
        )
        .appendTo(i);
      var A = e("<div>")
        .css({
          position: "absolute",
          left: "100%",
          right: "auto",
          top: 0,
          width: "0%",
          height: "100%",
        })
        .append(
          e(k[B])
            .clone()
            .css({
              width: (100 * t.width) / b.width() + "%",
              height: (100 * t.height) / b.height() + "%",
              marginLeft: (100 * t.marginLeft) / b.width() + "%",
            })
        )
        .appendTo(i);
      i.css({ left: "auto", right: "auto", top: 0 }).css(u, 0).show();
      i.show();
      g.hide();
      A.animate(
        { width: "100%", left: 0 },
        p.duration,
        "easeInOutExpo",
        function () {
          e(this).remove();
        }
      );
      q.animate({ width: 0 }, p.duration, "easeInOutExpo", function () {
        j.trigger("effectEnd");
        i.empty().hide();
      });
    }
  };
} // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_blast(q, j, m) {
  var e = jQuery;
  var i = e(this);
  var f = m.find(".ws_list");
  var a = q.distance || 1;
  var g = e("<div>").addClass("ws_effect ws_blast");
  var c = e("<div>").addClass("ws_zoom").appendTo(g);
  var k = e("<div>").addClass("ws_parts").appendTo(g);
  m.css({ overflow: "visible" }).append(g);
  g.css({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    "z-index": 8,
  });
  var d = q.cols;
  var p = q.rows;
  var l = [];
  var b = [];
  function h(u, r, s, t) {
    if (q.support.transform && q.support.transition) {
      if (typeof r.left === "number" || typeof r.top === "number") {
        r.transform =
          "translate3d(" +
          (typeof r.left === "number" ? r.left : 0) +
          "px," +
          (typeof r.top === "number" ? r.top : 0) +
          "px,0)";
      }
      delete r.left;
      delete r.top;
      if (s) {
        r.transition = "all " + s + "ms ease-in-out";
      } else {
        r.transition = "";
      }
      u.css(r);
      if (t) {
        u.on(
          "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
          function () {
            t();
            u.off(
              "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"
            );
          }
        );
      }
    } else {
      delete r.transfrom;
      delete r.transition;
      if (s) {
        u.animate(r, {
          queue: false,
          duration: q.duration,
          complete: t ? t : 0,
        });
      } else {
        u.stop(1).css(r);
      }
    }
  }
  function n(r) {
    var w = Math.max((q.width || g.width()) / (q.height || g.height()) || 3, 3);
    d = d || Math.round(w < 1 ? 3 : 3 * w);
    p = p || Math.round(w < 1 ? 3 / w : 3);
    for (var u = 0; u < d * p; u++) {
      var v = u % d;
      var t = Math.floor(u / d);
      e([
        (b[u] = document.createElement("div")),
        (l[u] = document.createElement("div")),
      ])
        .css({ position: "absolute", overflow: "hidden" })
        .appendTo(k)
        .append(e("<img>").css({ position: "absolute" }));
    }
    l = e(l);
    b = e(b);
    o(l, r);
    o(b, r, true);
    var s = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    };
    c.css(s).append(e("<img>").css(s));
  }
  function o(t, u, s, r, w, z) {
    var v = g.width();
    var x = g.height();
    var y = {
      left: e(window).scrollLeft(),
      top: e(window).scrollTop(),
      width: e(window).width(),
      height: e(window).height(),
    };
    e(t).each(function (F) {
      var E = F % d;
      var C = Math.floor(F / d);
      if (s) {
        var I = a * v * (2 * Math.random() - 1) + v / 2;
        var G = a * x * (2 * Math.random() - 1) + x / 2;
        var H = g.offset();
        H.left += I;
        H.top += G;
        if (H.left < y.left) {
          I -= H.left + y.left;
        }
        if (H.top < y.top) {
          G -= H.top + y.top;
        }
        var D = y.left + y.width - H.left - v / d;
        if (0 > D) {
          I += D;
        }
        var B = y.top + y.height - H.top - x / p;
        if (0 > B) {
          G += B;
        }
      } else {
        var I = (v * E) / d;
        var G = (x * C) / p;
      }
      e(this)
        .find("img")
        .css({
          left: -((v * E) / d) + u.marginLeft,
          top: -((x * C) / p) + u.marginTop,
          width: u.width,
          height: u.height,
        });
      var A = { left: I, top: G, width: v / d, height: x / p };
      if (w) {
        e.extend(A, w);
      }
      if (r) {
        h(e(this), A, q.duration, F === 0 && z ? z : 0);
      } else {
        h(e(this), A);
      }
    });
  }
  this.go = function (s, u) {
    var v = e(j[u]),
      r = {
        width: v.width(),
        height: v.height(),
        marginTop: parseFloat(v.css("marginTop")),
        marginLeft: parseFloat(v.css("marginLeft")),
      };
    if (!l.length) {
      n(r);
    }
    l.find("img").attr("src", j.get(u).src);
    h(l, { opacity: 1, zIndex: 3 });
    b.find("img").attr("src", j.get(s).src);
    h(b, { opacity: 0, zIndex: 2 });
    c.find("img").attr("src", j.get(u).src);
    h(c.find("img"), { transform: "scale(1)" });
    g.show();
    f.hide();
    o(b, r, false, true, { opacity: 1 });
    o(l, r, true, true, { opacity: 0 }, function () {
      i.trigger("effectEnd");
      g.hide();
    });
    h(c.find("img"), { transform: "scale(2)" }, q.duration, 0);
    var t = b;
    b = l;
    l = t;
  };
} // -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({
  effect: "collage,cube,blast",
  prev: "",
  next: "",
  duration: 20 * 100,
  delay: 20 * 100,
  width: 1000,
  height: 500,
  autoPlay: true,
  autoPlayVideo: false,
  playPause: true,
  stopOnHover: false,
  loop: false,
  bullets: 1,
  caption: true,
  captionEffect: "parallax",
  controls: true,
  controlsThumb: false,
  responsive: 1,
  fullScreen: false,
  gestures: 2,
  onBeforeStep: 0,
  images: 0,
});
