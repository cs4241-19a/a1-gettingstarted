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
    case '/index.css':
      sendFile( response, 'index.css' )
      break
    case '/MePic1.png':
      sendFile( response, 'MePic1.png' )
      break
    case '/MePic2.png':
      sendFile( response, 'MePic2.png' )
      break
    case '/MePic3.png':
      sendFile( response, 'MePic3.png' )
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
