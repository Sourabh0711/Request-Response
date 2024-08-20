const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header with a status code and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check the URL and return the appropriate response
    if (req.url === '/home') {
        res.end('Welcome home');
    } else if (req.url === '/about') {
        res.end('Welcome to About Us page');
    } else if (req.url === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
        res.end('Page not found');
    }
});

// Make the server listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
