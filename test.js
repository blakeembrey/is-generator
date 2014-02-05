/* global describe, it */

var assert      = require('assert');
var isGenerator = require('./');

describe('is-generator', function () {
  it('should return false with non-generators', function () {
    assert(!isGenerator(null));
    assert(!isGenerator(25));
    assert(!isGenerator('test'));
    assert(!isGenerator(function () {}));
  });

  it('should return true with a generator', function () {
    assert(isGenerator(function* () { yield 'something'; }));
  });
});
