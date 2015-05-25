'use strict'

/**
 * Check whether an object is a generator.
 *
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isGenerator (obj) {
  return obj && typeof obj.next === 'function' && typeof obj.throw === 'function'
}

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 * @api public
 */
function isGeneratorFunction (obj) {
  if (!obj) return false
  var co = obj.constructor
  if (!co) return false
  if (typeof obj !== 'function') return false
  if (co.name === 'GeneratorFunction' || co.displayName === 'GeneratorFunction') return true
  return isGenerator(co.prototype)
}

exports = module.exports = isGenerator
exports.fn = isGeneratorFunction
