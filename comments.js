// Create web server
const http = require('http'); 

function createWebServer() {
    const server = http.createServer((req, res) => { 
        res.statusCode = 200;

        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World modified!\n');
    });

    server.listen(3000, '127.0.0.1', () => {
        console.log('Server running at http://127.0.0.1:3000/');
    });
}

createWebServer();
