/*const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

const sendFile = function (r, name){
  const mimeType = mime.getType(name)
  r.writeHeader(200, {'Content-Type' : mimeType})
  fs.readFile( name, function( err, content ) {
    r.end( content, 'utf-8' )
  })
}

let file
fs.readFile( 'index.html', function( err, content ) {
  file = content
})
let ss
fs.readFile('style.css', function(e, css){
  ss = css
})
let ttf
fs.readFile('Milkshake.ttf', function(e, font){
  ttf = font
})

const server = http.createServer( function( request,response ) {
  const url = request.url.slice(1)
  console.log(request.url)
  switch( request.url) {
    case '/':
      sendFile(response, 'index.html')
      break
    case '/style.css':
      response.end(ss, 'utf-8')
    case '/Milkshake.ttf':
      response.end(ttf, 'utf-8')
    case '/onLoad.js':
      response.end()
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

*/

/* the part above was the server I wrote before I saw the improved server */
const http = require( 'http' ),
      fs   = require( 'fs' ),
      mime = require( 'mime' ),
      port = 3000

const server = http.createServer( function( request,response ) {
  const filename = request.url.slice( 1 ) 

  console.log( filename )
  
  switch( filename ) {
    case '':
      if( request.url === '/' ) sendFile( response, 'index.html' )
      break
    default:
      sendFile( response, filename )
      break
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   const type = mime.getType( filename ) 

   fs.readFile( filename, function( err, content ) {

     if( err === null ) {

       response.writeHeader( 200, { 'Content-Type': type })
       response.end( content )

     }else{

       response.writeHeader( 404 )
       response.end( '404 Error: File Not Found' )

     }
   })
}
