const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if (request.url === '/') {
    sendFile(response, 'index.html')
  } else {
    sendFile(response, request.url.slice(1))
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  const mimeType = mime.getType(filename)
  response.writeHeader(200, {'Content-Type': mimeType})
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
