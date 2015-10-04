module.exports = {
  a: function a(cb) {
    setTimeout(cb.bind(null, null, 'a'), 400);
  },
  b: function b(cb) {
    setTimeout(cb.bind(null, null, 'b'), 300);
  },
  c: function c(cb) {
    setTimeout(cb.bind(null, null, 'c'), 200);
  },
  d: function d(cb) {
    setTimeout(cb.bind(null, null, 'd'), 100);
  },
  e: function e(cb) {
    setTimeout(cb.bind(null, null, 'e'), 400);
  },
  f: function f(cb) {
    setTimeout(cb.bind(null, null, 'f'), 300);
  },
  g: function g(cb) {
    setTimeout(cb.bind(null, null, 'g'), 200);
  },
  h: function h(cb) {
    setTimeout(cb.bind(null, null, 'h'), 100);
  },
};

