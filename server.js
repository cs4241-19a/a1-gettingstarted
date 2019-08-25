const http = require('http'),
      fs   = require('fs'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})

let cssFile
fs.readFile( './style.css', function( err, content ) {
  cssFile = content
})

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      response.end( file, 'utf-8' )
      break
      case '/index.html':
      response.end( file, 'utf-8')
      break
      case '/style.css':
      response.end( cssFile, 'utf-8')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

