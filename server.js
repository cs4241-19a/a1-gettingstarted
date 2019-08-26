const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = request.url.slice(1)
  if(request.url === '/'){
    sendFile(response, url)
  } else{
    sendFile(response, url)
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  const mimeType = mime.getType(filename)
  response.writeHeader(200, {'Content-Type': mimeType})
   fs.readFile( filename, function( error, content ) {
    if (error === null){
      response.end( content, 'utf-8' )
    } else{
      response.writeHeader(404)
      response.end('File not found', 'utf-8')
    }
   })
}

/*RENAME GIT REPO*/