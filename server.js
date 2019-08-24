const http = require('http'),
	fs   = require('fs'),
	port = 3000

let file, picture, style

/* Read all files before loading page */
console.log("Loading files into memory...")
fs.readFile( './index.html', function( err, content ) {
	file = content;
})

fs.readFile('./P7.jpg', function(err, content) {
	picture = content;
})

fs.readFile('./style.css', function(err, content){
	style = content;
})
console.log("Starting Server!")

/* This callback is made every time a request is given. */
const server = http.createServer( function( request,response ) {
	console.log("New request! The user is asking for " + request.url)
	switch( request.url ) {
		case '/':
			response.end( file, 'utf-8' )
			break;
		case '/P7.jpg':
			response.end(picture)
			break;
		case './style.css':
			response.end( style, 'utf-8')
		default:
			response.end( '404 Error: File Not Found' )
	}
})

server.listen( process.env.PORT || port )

