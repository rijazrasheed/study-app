var http = require('http');
var dt = require('./next.js');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end(uc.upperCase('\n Hello World!'));
}).listen(8080);