const express = require('express')
const bodyParser = require('body-parser')
const Blockchain = require('./blockchain')

const app = express()
blockchain = new Blockchain()

app.use(bodyParser.json())

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain)
})

app.post('/api/mine', (req, res) => {
  const { data } = req.body
  blockchain.addBlock({ data })

  res.redirect('/api/blocks')
})

app.listen(3000, () => console.log(`listening at localhost:3000`))