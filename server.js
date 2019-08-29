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
    case '/exStyles.css':
      sendFile( response, 'exStyles.css' )
      break
    case '/res/HunterProfile.jpg':
      sendFile( response, '/res/HunterProfile.jpg' )
      break
    case '/res/HunterProfile2.jpg':
      sendFile( response, '/res/HunterProfile2.jpg' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     File = content
     response.end( content, 'utf-8' )
   })
}
