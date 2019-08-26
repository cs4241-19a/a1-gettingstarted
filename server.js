// server.js

const http = require('http'),
      fs   = require('fs'),
      port = 3000,
      // Added the express framework
      express = require('express'),
      app = express();

// Using express to include an external css and javascript file
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

// Using express for routing index.html
// http://expressjs.com/en/starter/basic-routing.html
const server = app.get('/', function(request, response) {
  switch( request.url ) {
    case '/':
      response.sendFile(__dirname + '/index.html');
      break
    case '/index.html':
      response.sendFile(__dirname + '/index.html');
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     var file = content
     response.end( content, 'utf-8' )
   })
}

