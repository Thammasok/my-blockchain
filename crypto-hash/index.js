const crypto = require('crypto')
// const hexToBinary = require('hex-to-binary')

const cryptoHash = (...input) => {
  const hash = crypto.createHash('sha256')
  hash.update(input.sort().join(' '))
  // return hexToBinary(hash.digest('hex'))
  return hash.digest('hex')
}

module.exports = cryptoHash
