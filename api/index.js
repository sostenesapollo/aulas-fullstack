const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    ususarios: [
        {
            nome: 'Joao',
            idade: 20
        },
        {
            nome: 'Maria',
            idade: 30
        }
    ]
  })
})

app.get('/joao', (req, res) => {
    res.send('Joao')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})