const Block = require('../block')
const cryptoHash = require('../crypto-hash')

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()]
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data,
    })

    this.chain.push(newBlock)
  }

  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.error('The incoming chain must be longer')
      return
    }

    if (!Blockchain.isValidChain(newChain)) {
      console.error('The incoming chain must be valid')
      return
    }

    console.log('replacing chain with ', newChain)
    this.chain = newChain
  }

  static isValidChain(chain) {
    // ตรวจสอบว่า ข้อมูล Block แรก ถูกต้องหรือไม่
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false
    }

    for(let i = 1; i< chain.length; i++) {
      const { timestamp, lastHash, hash, nonce, difficulty, data } = chain[i]
      const actualLastHash = chain[i-1].hash
      const lastDifficulty = chain[i-1].difficulty
      
      // ตรวจสอบว่า lastHash ของ Block ล่าสุด เป็นของ Block ก่อนหน้าหรือไม่
      if(lastHash !== actualLastHash) return false

      // ตรวจสอบว่าข้อมูลถูกเปลี่ยนแปลงหรือไม่
      const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty)
      if(hash !== validatedHash) return false

      // ป้องกันปัญหาการสร้าง block ที่มีค่า difficulty (ความยาก) ที่น้อยกว่าที่ทางระบบกำหนด
      if (Math.abs(lastDifficulty - difficulty) > 1) return false
    }

    return true
  }
}

module.exports = Blockchain
