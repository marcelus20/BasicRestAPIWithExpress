const hello = require('./controllers/hello')
const express = require('express');
const routers = express.Router();
const expAutoSan = require('express-autosanitizer');



//assigning middlewares to the expresss object
routers.use(express.json());
routers.use(expAutoSan.allUnsafe);
const bodyParser = require('body-parser')
const cors = require('cors')
routers.use(cors());

// Configuring body parser middleware
routers.use(bodyParser.urlencoded({ extended: false }));
routers.use(bodyParser.json());

routers.get('/hello/:name', hello.get)
routers.post('/hello/:name', hello.post)
routers.put('/hello/:name', hello.put)
routers.delete('/hello/:name', hello.delete)

// Add your routers here.
module.exports = routers