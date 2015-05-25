# Is Generator

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Check whether a value is a generator or generator function.

## Installation

```
npm install is-generator --save
```

## Usage

```javascript
var isGenerator = require('is-generator')
var isGeneratorFn = require('is-generator').fn

isGenerator(null) //=> false
isGenerator(function * () {}) //=> false
isGenerator((function * () {})()) //=> true

isGeneratorFn(null) //=> false
isGeneratorFn(function () {}) //=> false
isGeneratorFn(function * () {}) //=> true
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/is-generator.svg?style=flat
[npm-url]: https://npmjs.org/package/is-generator
[downloads-image]: https://img.shields.io/npm/dm/is-generator.svg?style=flat
[downloads-url]: https://npmjs.org/package/is-generator
[travis-image]: https://img.shields.io/travis/blakeembrey/is-generator.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/is-generator
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/is-generator.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/is-generator?branch=master
