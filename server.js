//Created for CS4241 - updated by Karen Royer
const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000

//let file
//fs.readFile( './index.html', function( err, content ) {
//  file = content
//})

//let cssFile
//fs.readFile( './style.css', function( err, content ) {
//  cssFile = content
//})

const server = http.createServer( function( request,response ) {
  const fileURL = request.url.slice(1)
  if(request.url ==='/'){
    sendMyFile( response, 'index.html')
  }else{
    sendMyFile( response, fileURL)
  }
  /*switch( request.url ) {
    case '/':
      sendMyFile( response, 'index.html')
      break
      case '/index.html':
      sendMyFile( response, 'index.html')
      break
      case '/style.css':      
      sendMyFile( response, 'style.css')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }*/
})

server.listen( process.env.PORT || port )

const sendMyFile = function(response, filename){
  const mimeType = mime.getType(filename)
  response.writeHeader(200, {'Content-Type':mimeType})
  fs.readFile(filename, function(error,content){
    if(error === null){
      response.end(content, 'utf-8')
    }else{
      response.writeHeader(404)
      response.end('404 Error: File Not Found')
    }
  })
}