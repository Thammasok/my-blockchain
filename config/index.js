const MINE_RATE = 1000 //Second
const INITIAL_DIFFICULTY = 3

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: '---',
  hash: 'hash-one',
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
  data: [],
}

module.exports = {
  GENESIS_DATA,
  MINE_RATE,
  INITIAL_DIFFICULTY
}
