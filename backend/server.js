const http = require('http');

const server = http.createServer((request, response) => {
	console.log(request.headers)
	console.log(request.method)
	console.log(request.url)
});

server.listen(3000);

