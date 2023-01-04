document.addEventListener('DOMContentLoaded', function() {
  const lunaDates = {
    2023: "01/22/2023",
    2024: "02/10/2024",
    2025: "01/29/2025",
    2026: "02/17/2026",
    2027: "02/06/2027",
    2028: "01/26/2028",
    2029: "02/13/2029",
    2030: "02/02/2030",
    2031: "01/23/2031",
    2032: "02/11/2032",
    2033: "01/31/2033",
    2034: "02/19/2034",
    2035: "02/08/2035",
    2036: "01/28/2036",
    2037: "02/15/2037",
    2038: "02/04/2038",
    2039: "01/24/2039",
    2040: "02/12/2040",
    2041: "02/01/2041",
    2042: "01/22/2042",
    2043: "02/10/2043",
    2044: "01/30/2044",
    2045: "02/17/2045",
    2046: "02/06/2046",
    2047: "01/26/2047",
    2048: "02/14/2048",
    2049: "02/02/2049",
    2050: "01/23/2050",
    2051: "02/11/2051",
    2052: "02/01/2052",
    2053: "02/18/2053",
    2054: "02/08/2054",
    2055: "01/28/2055",
    2056: "02/15/2056",
    2057: "02/04/2057",
    2058: "01/24/2058",
    2059: "02/12/2059",
    2060: "02/02/2060",
    2061: "01/21/2061",
    2062: "02/09/2062",
    2063: "01/29/2063",
    2064: "02/17/2064",
    2065: "02/05/2065",
    2066: "01/26/2066",
    2067: "02/14/2067",
    2068: "02/03/2068",
    2069: "01/23/2069",
    2070: "02/11/2070",
    2071: "01/31/2071",
    2072: "02/19/2072",
    2073: "02/07/2073",
    2074: "01/27/2074",
    2075: "02/15/2075",
    2076: "02/05/2076",
    2077: "01/24/2077",
    2078: "02/12/2078",
    2079: "02/02/2079",
    2080: "01/22/2080",
    2081: "02/09/2081",
    2082: "01/29/2082",
    2083: "02/17/2083",
    2084: "02/06/2084",
    2085: "01/26/2085",
    2086: "02/14/2086",
    2087: "02/03/2087",
    2088: "01/24/2088",
    2089: "02/10/2089",
    2090: "01/30/2090",
    2091: "02/18/2091",
    2092: "02/07/2092",
    2093: "01/27/2093",
    2094: "02/15/2094",
    2095: "02/05/2095",
    2096: "01/25/2096",
    2097: "02/12/2097",
    2098: "02/01/2098",
    2099: "01/21/2099",
    2100: "02/09/2100",
    2101: "01/29/2101",
    2102: "02/17/2102",
    2103: "02/07/2103",
    2104: "01/28/2104",
    2105: "02/15/2105",
    2106: "02/04/2106",
    2107: "01/24/2107",
    2108: "02/12/2108"
}

  const year = (new Date()).getFullYear();
  let targetDate = new Date(
    `${lunaDates[year]} 00:00:00 GMT+0700 (SE Asia Standard Time)`
  );
  let onStart = () => {
    document
      .querySelectorAll('.countdown-item')
      .forEach((item) => item.classList.add('show'));
  };
  let onTick = ({ days, hours, minutes, seconds }) => {
    document.querySelector('.countdown-item.days').innerHTML = days;
    document.querySelector('.countdown-item.hours').innerHTML = hours;
    document.querySelector('.countdown-item.minutes').innerHTML = minutes;
    document.querySelector('.countdown-item.seconds').innerHTML = seconds;
  };
  let options = new LsCountdownOptions({ targetDate, onStart, onTick });
  let countdown = new LsCountdown(options);

  countdown.start();
  window.mycountdown = countdown;
});
!(function(t) {
  var e = {};
  function s(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = t),
    (s.c = e),
    (s.d = function(t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          s.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return s.d(e, 'a', e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ''),
    s((s.s = 2));
})([
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = class {
      constructor({
        days: t = '0',
        hours: e = '0',
        minutes: s = '0',
        seconds: n = '0'
      }) {
        (this.days = t),
          (this.hours = e),
          (this.minutes = s),
          (this.seconds = n);
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    e.default = class {
      constructor({
        days: t = 'd',
        hours: e = 'h',
        minutes: s = 'm',
        seconds: n = 's'
      }) {
        (this.days = t),
          (this.hours = e),
          (this.minutes = s),
          (this.seconds = n);
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(3);
    e.LsCountdown = n.default;
    const o = s(4);
    e.LsCountdownOptions = o.default;
    const i = s(1);
    e.LsCountdownSufixes = i.default;
    const r = s(0);
    (e.LsCountdownTick = r.default),
      ((t) => {
        (t.LsCountdown = n.default),
          (t.LsCountdownOptions = o.default),
          (t.LsCountdownSufixes = i.default),
          (t.LsCountdownTick = r.default);
      })('undefined' != typeof window ? window : {});
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(0);
    e.default = class {
      constructor(t) {
        this.validateTargetDate(t.targetDate),
          (this.targetDate = t.targetDate),
          (this.onStart = t.onStart),
          (this.onStop = t.onStop),
          (this.onTick = t.onTick),
          (this.sufixes = t.sufixes),
          (this.CURRENT_TIME = new n.default({}));
      }
      validateTargetDate(t) {
        if (t <= new Date())
          throw new Error('The target date must be a foward date');
      }
      doTick(t) {
        let e,
          s,
          o,
          i,
          r = new Date().getTime(),
          u = (this.targetDate.getTime() - r) / 1e3;
        (e = u / 86400),
          (s = (u %= 86400) / 3600),
          (o = (u %= 3600) / 60),
          (i = u % 60),
          (e =
            parseInt(e > 0 ? (e > 9 ? e : `0${e}`) : '00').toString() +
            this.sufixes.days),
          (s =
            parseInt(s > 0 ? (s > 9 ? s : `0${s}`) : '00').toString() +
            this.sufixes.hours),
          (o =
            parseInt(o > 0 ? (o > 9 ? o : `0${o}`) : '00').toString() +
            this.sufixes.minutes),
          (i =
            parseInt(i > 0 ? (i > 9 ? i : `0${i}`) : '00').toString() +
            this.sufixes.seconds),
          (this.CURRENT_TIME = new n.default({
            days: e,
            hours: s,
            minutes: o,
            seconds: i
          })),
          'function' == typeof t && t(this.CURRENT_TIME);
      }
      stop() {
        this.COUNTDOWN_INTERVAL &&
          (clearInterval(this.COUNTDOWN_INTERVAL),
          'function' == typeof this.onStop &&
            this.onStop(Object.assign({}, this.CURRENT_TIME)));
      }
      start() {
        this.doTick(this.onStart),
          (this.COUNTDOWN_INTERVAL = setInterval(() => {
            this.doTick(this.onTick);
          }, 1e3));
      }
      changeTargetDate(t = new Date()) {
        this.validateTargetDate(t),
          this.stop.bind(this).call(),
          (this.targetDate = t),
          this.start.bind(this).call();
      }
    };
  },
  function(t, e, s) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    const n = s(1);
    e.default = class {
      constructor({
        targetDate: t = new Date(),
        onStart: e = () => {},
        onStop: s = () => {},
        onTick: o = () => {},
        sufixes: i = new n.default({})
      } = {}) {
        (this.targetDate = t),
          (this.onStart = e),
          (this.onStop = s),
          (this.onTick = o),
          (this.sufixes = i);
      }
    };
  }
]);
