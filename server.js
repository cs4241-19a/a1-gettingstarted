const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/bg/2.jpg':
      sendFile( response, 'bg/2.jpg' )
      break
    case '/bg/4.jpg':
      sendFile( response, 'bg/4.jpg' )
      break
    case '/Scripts/NavBar.js':
      sendFile( response, 'Scripts/NavBar.js' )
      break
    case '/Scripts/scroll.js':
      sendFile( response, 'Scripts/scroll.js' )
      break
    case '/node_modules/jquery/src/jquery.js':
      sendFile( response, 'node_modules/jquery/src/jquery.js' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    file = content
    response.end( content, 'utf-8' )
  })
}

