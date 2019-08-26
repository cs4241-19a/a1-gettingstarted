const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    default:
      response.end( '404 Error: File Not Found')
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  const mimeType = mime.getType( filename )
  response.writeHeader( 200, { 'Content-Type': mimeType })
  fs.readFile (filename, function( err, content) {
    response.end( content, 'utf-8' )
  })
}