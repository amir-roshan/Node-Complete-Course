const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my first page</h1>');
        res.write('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form> </body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/user' && req.method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            // buffer is a global object in nodejs, it is used to store raw data
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                // 302 - redirect
                res.statusCode = 302;

                // redirect to root
                res.setHeader('Location', '/');

                // end the response
                return res.end();
            });
        });
    }
});

server.listen(3000);

