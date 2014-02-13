# is-generator

Check whether a value is a generator or generator function.

## Installation

```
npm install is-generator --save
```

## Usage

```javascript
var isGenerator   = require('is-generator');
var isGeneratorFn = require('is-generator').fn;

isGenerator(null);                //=> false
isGenerator(function* () {});     //=> false
isGenerator((function* () {})()); //=> true

isGeneratorFn(null);            //=> false
isGeneratorFn(function () {});  //=> false
isGeneratorFn(function* () {}); //=> true
```

## License

MIT
