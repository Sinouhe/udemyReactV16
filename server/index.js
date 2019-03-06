const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan")
const expressServer = express();
const router = require("./route")
const http = require('http')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/udemyReactV16',{
    useNewUrlParser:true,
});
mongoose.connection
.once('open', () => console.log('connecté'))
.on('error', error => () => console.log('connecté'))

expressServer.use(morgan('combined'));
expressServer.use(bodyParser.urlencoded({
    extended: true
  }));
  expressServer.use(bodyParser.json());

const port = 3000
const server = http.createServer(expressServer)
router(expressServer)
server.listen(port)
console.log('server')