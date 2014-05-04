/* global describe, it */

var assert      = require('assert');
var isGenerator = require('./');

describe('is-generator', function () {
  describe('generators', function () {
    it('should return false with non-generators', function () {
      assert(!isGenerator(null));
      assert(!isGenerator(25));
      assert(!isGenerator('test'));
      assert(!isGenerator(function () {}));
      assert(!isGenerator(function* () {}));
    });

    it('should return true with a generator', function () {
      assert(isGenerator((function* () {})()));
    });
  });

  describe('generator functions', function () {
    it('should return false with non-generator function', function () {
      assert(!isGenerator.fn(null));
      assert(!isGenerator.fn(25));
      assert(!isGenerator.fn('test'));
      assert(!isGenerator.fn(function () {}));
    });

    it('should return true with a generator function', function () {
      assert(isGenerator.fn(function* () { yield 'something'; }));
    });
  });
});
