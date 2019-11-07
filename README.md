# object-policy

Convert an object to a policy-type header, for use in Content-Security-Policy or Feature-Policy.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

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

[LICENSE](./LICENSE.md)
