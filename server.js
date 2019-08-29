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
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/font-awesome.min.css':
      sendFile( response, 'font-awesome.min.css' )
      break
    case '/bootstrap.min.css':
      sendFile( response, 'bootstrap.min.css' )
      break
    case '/app.js':
      sendFile( response, 'app.js' )
      break
    case '/custom.js':
      sendFile( response, 'custom.js' )
      break
    case '/effect.js':
      sendFile( response, 'effect.js' )
      break
    case '/jquery.js':
      sendFile( response, 'jquery.js' )
      break
    case '/bootstrap.min.js':
      sendFile( response, 'bootstrap.min.js' )
      break
    case '/particles.min.js':
      sendFile( response, 'particles.min.js' )
      break
    case '/jquery.parallax.js':
      sendFile( response, 'jquery.parallax.js' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     filename = content
     response.end( content, 'utf-8' )
   })
}
