# is-generator

Check whether a given value is a generator function.

## Installation

```
npm install is-generator --save
```

## Usage

```javascript
var isGenerator = require('is-generator');

isGenerator(null);            //=> false
isGenerator(function () {});  //=> false
isGenerator(function* () {}); //=> true
```

## License

MIT
