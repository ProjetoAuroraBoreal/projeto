
const http = require('http');

const hostneme = '192.68.1.103'
const port = 3000;

const server = http.createServer((req, res) =>{
	res.statusCode = 200;
rest.setHeader('Content-Type', 'txt/plain');
	res.end('Hello from Danki Code!');

});


server.listen(port,hostname,  () => {
    console.log("servidor rodando!");
})