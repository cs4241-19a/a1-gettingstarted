const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})

const server = http.createServer( function( request,response ) {
  const url = request.url.slice( 1 )
  if(request.url === "/") {
    sendFile( response, "index.html") 
  } else {
    sendFile( response, url ) 
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  const mimeType = mime.getType( filename )
  response.writeHeader( 200, { 'Content-Type': mimeType })
  fs.readFile (filename, function( err, content) {
    if(error === null) {
      
    } else {
    response.end( content, 'utf-8' )
    }
  })
}