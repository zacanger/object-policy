const tape = require('tape')
const policy = require('./')

tape.test('objectPolicy', (t) => {
  t.equal(
    policy({
      fooBar: ['a', 'b'],
      'baz-quux': ['one', 'two']
    }),
    'foo-bar a b; baz-quux one two;'
  )
  t.end()
})
