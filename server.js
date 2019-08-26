const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/ken.jpeg':
      sendFile( response, 'ken.jpeg' )
      break
    case '/html.png':
      sendFile( response, 'html.png' )
      break
    case '/css.png':
      sendFile( response, 'css.png' )
      break
    case '/js.png':
      sendFile( response, 'js.png' )
      break
    case '/java.png':
      sendFile( response, 'java.png' )
      break
    case '/ruby.png':
      sendFile( response, 'ruby.png' )
      break
    case '/python.png':
      sendFile( response, 'python.png' )
      break
    case '/test.png':
      sendFile( response, 'test.png' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    default:
      response.end( '404 Error: File Not Found')
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  const mimeType = mime.getType(filename)
  response.writeHeader(200, {'Content-Type': mimeType})
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}