const http = require('http'),
      fs   = require('fs'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})

let stylesheet
fs.readFile( './style.css', function( err, content ) {
  stylesheet = content
})

let bg
fs.readFile( './bg/2.jpg', function( err, content ) {
  bg = content
})

let bg1
fs.readFile( './bg/4.jpg', function( err, content ) {
  bg1 = content
})

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      response.end( file, 'utf-8' )
      break
    case '/index.html':
      response.end( file, 'utf-8' )
      break
    case '/style.css':
      response.end( stylesheet, 'utf-8' )
      break
    case '/bg/2.jpg':
      response.end( bg, 'utf-8' )
      break
    case '/bg/4.jpg':
      response.end( bg1, 'utf-8' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

