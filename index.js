require('dotenv/config')
const express = require('express')

const router = require('./router')

const app = express()
app.use(router)

const port = process.env.PORT || 3000


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
