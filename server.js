const http = require('http'),
    fs   = require('fs'),
    port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/images/edx-logo.png':
      sendFile( response, 'images/edx-logo.png' )
      break
    case '/images/hanover-logo.png':
      sendFile( response, 'images/hanover-logo.png' )
      break
    case '/images/nust-logo.png':
      sendFile( response, 'images/nust-logo.png' )
      break
    case '/images/sensitech-logo.png':
      sendFile( response, 'images/sensitech-logo.png' )
      break
    case '/images/wpi-logo.png':
      sendFile( response, 'images/wpi-logo.png' )
      break
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
