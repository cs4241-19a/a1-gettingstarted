const http = require('http'),
fs   = require('fs'),
port = 3000

let index
fs.readFile('index.html',function(err,content){
  index = content
})

const server = http.createServer( function( request,response ) {
  const filename = request.url.slice(1)
  console.log(filename);
   switch( filename ) {
    case '':
      if( request.url === '/' )
        sendFile( response, 'index.html' )
      else
        response.end( '404 Error: File Not Found' )
      break
    default:
      sendFile( response, filename )
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename) {
 fs.readFile( filename, function( err, content ) {
   file = content
   response.end( content, 'utf-8' )
 })
}
