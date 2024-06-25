const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('HOME!')
})
app.get('/About', (req, res) => {
  res.send('About')
})

app.get('/home/:slug', (req, res) => {
  res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
  console.log(`Example app listeing on port ${port}`)
})