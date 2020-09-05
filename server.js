const http = require('http'),
      fs   = require('fs'),
      port = 3000
const express = require('express')
const app = express();

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile(response, 'style.css')
      break;
    case '/img/me.jpg':
      sendFile(response, 'img/me.jpg')
      break;
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}

app.use(express.static(__dirname + '/img/'));
