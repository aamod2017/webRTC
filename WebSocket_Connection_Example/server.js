var express = require('express');
var http = require('http');
var url = require('url');
var WebSocket = require('ws');
var path = require('path')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var server = http.createServer(app);
var wss = new WebSocket.Server({ server });
wss.on('connection', function connection(ws, req) {
   console.log("ws",ws,"req",req);
});

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});