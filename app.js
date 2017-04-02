//dealing with streams, html files and web server
//core idea using streams for full performance

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    //look for the index and read using stream
    //and pipe it to the writable res
    fs.createReadStream(__dirname + '/index.htm').pipe(res);

}).listen(3306,'127.0.0.1');
