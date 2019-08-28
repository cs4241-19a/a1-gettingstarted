const http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    port = 3000;

const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        sendFile('index.html', response);
    } else {
        sendFile(request.url.slice(1), response);
    }
});

const sendFile = function (filename, res) {
    const mimeType = mime.getType(filename);
    res.writeHeader(200, {'Content-Type': mimeType});
    fs.readFile(filename, (err, content) => {
        if (err) {
            res.status(404).send('Not found')
        } else {
            res.end(content, 'utf-8');
        }
    });
};

server.listen(process.env.PORT || port);

