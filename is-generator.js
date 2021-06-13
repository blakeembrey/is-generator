/**
 * Export generator function checks.
 */
module.exports = isGenerator
module.exports.fn = isGeneratorFunction

/**
 * Check whether an object is a generator.
 *
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isGenerator (obj) {
  return typeof obj == "object" && 
    obj !== null && 
    obj.constructor instanceof GeneratorFunction;
}

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 */
function isGeneratorFunction (fn) {
  return fn instanceof GeneratorFunction
}
