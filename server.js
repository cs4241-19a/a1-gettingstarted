const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      // fall through to sending index.html
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css' )
      break
    case '/js/scrolling-nav.js':
      sendFile(response, 'js/scrolling-nav.js')
      break;
    case '/images/max.jpg':
      sendFile(response, 'images/max.jpg')
      break;
    case '/images/favicon.png':
      sendFile(response, 'images/favicon.png')
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
