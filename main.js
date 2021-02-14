const Blockchain = require('./blockchain')

blockchain = new Blockchain()
blockchain.addBlock({ data: 'foo' })
blockchain.addBlock({ data: 'bar' })

console.log('blockchain', blockchain)