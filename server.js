const http = require('http'),
      fs   = require('fs'),
      port = 3000

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
  console.log(request.url)
  switch( request.url) {
    case '/':
      response.end( file, 'utf-8' )
      break
    case '/style.css':
      response.end(ss, 'utf-8')
    case '/Milkshake.ttf':
      response.end(ttf, 'utf-8')
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

