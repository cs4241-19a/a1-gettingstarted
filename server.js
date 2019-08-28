const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})



const server = http.createServer( function( request,response ) {
  console.log(request.url)
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html')
      break
    case '/style.css':  
      sendFile( response, 'style.css');
      break;
    default:
      response.end( '404 Error: File Not Found')
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ){
  fs.readFile( filename, function(err, content ) {
    file = content
    response.end( content, 'utf-8')
  })
}