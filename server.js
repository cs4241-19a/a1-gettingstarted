const http = require('http'),
    fs   = require('fs'),
    port = 3000;

let file;
fs.readFile( './index.html', function( err, content ) {
    file = content;
});

let cssFile;
fs.readFile( './style.css', function( err, content ) {
    cssFile = content;
});

let bgFile;
fs.readFile( './public/assets/images/Rubin Campus Center-locations-500x300.jpg', function( err, content ) {
    bgFile = content;
});

let fi32File;
fs.readFile( './public/assets/images/favicon-32x32.png', function( err, content ) {
    fi32File = content;
});

let fi16File;
fs.readFile( './public/assets/images/favicon-16x16.png', function( err, content ) {
    fi16File = content;
});

const server = http.createServer( function( request,response ) {
    switch( request.url ) {
        case '/':
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write( file, 'utf-8' );
            break;
        case '/style.css':
            response.writeHead(200, {"Content-Type": "text/css"});
            response.write( cssFile, 'utf-8' );
            break;
        case '/public/assets/images/Rubin%20Campus%20Center-locations-500x300.jpg':
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write( bgFile, 'utf-8' );
            break;
        case '/public/assets/images/favicon-32x32.png':
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write( fi32File, 'utf-8' );
            break;
        case '/public/assets/images/favicon-16x16.png':
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write( fi16File, 'utf-8' );
            break;
        default:
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write( '404 Error: File Not Found' );
    }
    response.end()
});

server.listen( process.env.PORT || port );

