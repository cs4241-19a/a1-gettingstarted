const http = require('http'),
      fs   = require('fs'),
      port = 3000

let file;
const server = http.createServer( function( request,response ) {
  console.log(request.url);
  const filename = request.url.slice( 1 )
  switch( filename ) {
    case '':
      sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, filename )
      console.log("non-default file found");
  }
})


server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}