require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const router = require('./router.js')
app.use('/items', router)

const db = require('./db.js')

const PORT = 8080 || process.env.PORT

app.listen(PORT, () => console.log(`listening on ${PORT}`))