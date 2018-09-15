# object-policy

Convert an object to a policy-type header, for use in Content-Security-Policy or Feature-Policy.

--------

## Installation

`npm i object-policy`

## Usage

```javascript
const policy = require('object-policy')

objectPolicy({
  fooBar: [ 'a', 'b' ],
  'baz-quux': [ 'one', 'two' ]
})
// => `foo-bar: a b; baz-quux: one two;`
```

## License

[MIT](./LICENSE.md)
