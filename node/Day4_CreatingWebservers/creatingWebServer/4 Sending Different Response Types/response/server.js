var connect = require('connect');
//use firefox
var app = connect()
	.use(function (req, res) {
		res.statusCode=200;
		res.end("hello");
	//res.statusCode=403;  
	//res.end("Forbidden");
	})
	.listen(3000);