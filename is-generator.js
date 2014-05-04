/**
 * Check whether an object is a generator.
 *
 * @param  {Object}  obj
 * @return {Boolean}
 */
exports = module.exports = function (obj) {
  return obj &&
    typeof obj.next === 'function' &&
    typeof obj.throw === 'function';
};

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 */
exports.fn = function (fn) {
  return typeof fn === 'function' &&
    fn.constructor.name === 'GeneratorFunction';
};
