module.exports = function (f) {
  return typeof f === 'function' && f.constructor.name === 'GeneratorFunction';
};
