const http = require('http'),
      fs   = require('fs'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
}) 

let cssFile
fs.readFile('./bulma.min.css', function(err, content) {
	cssFile = content
}) 


const server = http.createServer( function( request, response ) {
  switch( request.url ) { 
    case '/bulma.min.css':
      response.writeHead(200, {"Content-Type": "text/css"});
      response.write(cssFile);
    case '/':
      sendFile(response, 'index.html')
      break
	 case 'index.html':
      sendFile(response, 'index.html')
      break
    default:
      response.end( '404 Error: File Not Found')
  }
}) 

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}



