const express = require('express')
const app = express()
// const { getExample } = require('./controllers')
const morgan = require('morgan')
var cors = require('cors')

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Humble Beginnings')
})

// app.get('/search', (req, res) => {
//   getAllMovies()
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(500).send(err))
// })

module.exports = app
