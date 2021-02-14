const cryptoHash = require('.')

describe('cryptoHash()', () => {
  it('generate a SHA-256 hashed output', () => {
    expect(cryptoHash('foo')).toEqual(
      '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae'
    )
  })

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(
      '0cf7ab33db97212c3506f4fe5e3051e1c59037616aadcd34db7d4bf7b567caed'
    )
  })
})
