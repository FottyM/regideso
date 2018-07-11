const express = require('express')
const cors = require('cors')
const data = require('./data')

const app = express()
const port = 4000 || process.env.PORT

app.use(cors())

app.get('/customers', (req, res) => {
  setTimeout(() => res.json(data), 1500)
})

app.listen(port, () => {
  console.log('the server running on http://localhost:' + port)
})
