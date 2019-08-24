const http = require('http'),
      fs   = require('fs'),
      port = 3000

let file
fs.readFile( './index.html', function( err, content ) {
  file = content
})
let style
//test
fs.readFile( './style.css', function( err, content ) {
  style = content
})
let ken
fs.readFile( './ken.jpeg', function( err, content ) {
  ken = content
})
let html
fs.readFile( './html.png', function( err, content ) {
  html = content
})
let css
fs.readFile( './css.png', function( err, content ) {
  css = content
})
let js
fs.readFile( './js.png', function( err, content ) {
  js = content
})
let java
fs.readFile( './java.png', function( err, content ) {
  java = content
})
let ruby
fs.readFile( './ruby.png', function( err, content ) {
  ruby = content
})
let python
fs.readFile( './python.png', function( err, content ) {
  python = content
})
let test
fs.readFile( './test.png', function( err, content ) {
  test = content
})

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      response.end( file, 'utf-8')
      break
    case '/ken.jpeg':
      response.end( ken, 'utf-8')
      break
    case '/html.png':
      response.end( html, 'utf-8')
      break
    case '/css.png':
      response.end( css, 'utf-8')
      break
    case '/js.png':
      response.end( js, 'utf-8')
      break
    case '/java.png':
      response.end( java, 'utf-8')
      break
    case '/ruby.png':
      response.end( ruby, 'utf-8')
      break
    case '/python.png':
      response.end( python, 'utf-8')
      break
    case '/test.png':
      response.end( test, 'utf-8')
      break
    case '/style.css':
      response.end( style, 'utf-8')
      break
    default:
      response.end( '404 Error: File Not Found')
  }
})

server.listen( process.env.PORT || port )