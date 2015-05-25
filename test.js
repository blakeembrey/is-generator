'use strict'

var test = require('assertit')
var isGenerator = require('./')

test('is-generator', function () {
  test('generators', function () {
    test('should return false with non-generators', function () {
      test.ok(!isGenerator(null))
      test.ok(!isGenerator(25))
      test.ok(!isGenerator('test'))
      test.ok(!isGenerator(function () {}))
      test.ok(!isGenerator(function * () {}))
    })

    test('should return true with a generator', function () {
      test.ok(isGenerator((function * () {})()))
    })
  })

  test('generator functions', function () {
    test('should return false with non-generator function', function () {
      test.ok(!isGenerator.fn(null))
      test.ok(!isGenerator.fn(25))
      test.ok(!isGenerator.fn('test'))
      test.ok(!isGenerator.fn(function () {}))
    })

    test('should return true with a generator function', function () {
      test.ok(isGenerator.fn(function * () { yield 'something' }))
    })
  })
})
