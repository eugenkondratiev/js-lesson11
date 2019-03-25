console.log("First start");

//=======================================

const http = require('http');

const hostname = "127.0.0.1";
const port = 3000;

//const lcl = require('/home//eugenkondratiev//le')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end(`Server running at http://${hostname}:${port}`);

});

server.listen(port, hostname, () => {
    console.log("Server created");
    
});

 

console.log('Finish');
