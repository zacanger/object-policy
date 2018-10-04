const fixCase = require('zeelib/lib/camel-case-to-lisp-case')

module.exports = (opts = {}) => {
  const directives = Object.keys(opts)
    .reduce((p, c) => {
      const fixed = fixCase(c)
      p[fixed] = opts[c].join(' ')
      return p
    }, {})

  return Object.keys(directives)
    .reduce((p, c) => {
      p += `${c} ${directives[c]}; `
      return p
    }, '').trim()
}
