require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const controller = require('./controllers/controller')

const app = express()
app.use(bodyParser.json())

let {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
}).catch(err => console.log(err))


app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.addProduct)


app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
