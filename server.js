'use strict';
const http = require('http'),
    fs = require('fs'),
    port = 3000;

//we can have this return a promise for a file, then have
//the server wait for it
exports.getFile = function getFile(file_name) {
    //avoid 404 on base dir
    if (file_name == '/') {
        file_name = '/index.html'
    }
    // we create a promise that will only return once the file is created,
    // or will return an error if there is no file with that name
    return new Promise(function (resolve, reject) {
        fs.readFile('.' + file_name, function (err, content) {
            if (err) {
                reject(new Error("404 file not found"))
            }
            resolve(content);
        })
    });
};

const server = http.createServer(function (request, response) {
    //on each request attempt to grab the file requested, otherwise return a 404 error
    exports.getFile(request.url)
        .then(file => {
            response.end(file)
        })
        .catch(err => {
            response.statusCode = 404;
            response.statusMessage = "File not found with error: " + err;
            response.end();
        });
});

server.listen(process.env.PORT || port);

