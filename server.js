const http = require('http'),
      fs   = require('fs'),
      port = 3000

let cssFile;
fs.readFile( './styles.css', function( err, content ) {
    cssFile = content;
});

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css' )
      response.write( cssFile, 'utf-8' );
      break;
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