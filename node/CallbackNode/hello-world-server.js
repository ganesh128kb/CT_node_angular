var http = require('http');
http.createServer(function(request, response) {
response.writeHead(200);
response.write("Dog is running.");
    setTimeout(function(){	response.write("Dog is done.");
	                        response.end();
                           }, 10000);
    console.log('hi');
}).listen(8080); 



/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
*/