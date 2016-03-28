/* global describe, it */

var assert = require('assert')
var isGenerator = require('./')

describe('is-generator', function () {
  describe('generators', function () {
    it('should return false with non-generators', function () {
      assert(!isGenerator(null))
      assert(!isGenerator(25))
      assert(!isGenerator('test'))
      assert(!isGenerator(/* istanbul ignore next */ function () {}))
      assert(!isGenerator(/* istanbul ignore next */ function * () {}))
    })

    it('should return true with a generator', function () {
      assert(isGenerator((/* istanbul ignore next */ function * () {})()))
    })
  })

  describe('generator functions', function () {
    it('should return false with non-generator function', function () {
      assert(!isGenerator.fn(null))
      assert(!isGenerator.fn(25))
      assert(!isGenerator.fn('test'))
      assert(!isGenerator.fn(/* istanbul ignore next */ function () {}))

      var noConstructorFn = /* istanbul ignore next */ function () {}
      noConstructorFn.constructor = undefined

      assert(!isGenerator.fn(noConstructorFn))
    })

    it('should return true with a generator function', function () {
      assert(isGenerator.fn(/* istanbul ignore next */ function * () { yield 'something' }))
    })

    it('should return true with a generator function even if it does not yield', function () {
      var f = function * iDontYield () { return }
      assert(isGenerator.fn(f))
    })

    it('should return false with a fake generator function', function () {
      var fake = function notAGenerator () {},
        legit = function * someLegitGenerator () { return }
      fake.constructor = legit.constructor
      // Detectable by:
      assert(Object.hasOwnProperty.call(fake, 'constructor'))
      assert(!isGenerator.fn(fake))

      // so get rid of that:
      fake = Object.create(fake)
      assert(!Object.hasOwnProperty.call(fake, 'constructor'))
      // but now it's not a function anymore:
      assert.equal(typeof fake, 'object')
      assert(!isGenerator.fn(fake))
    })
  })
})
