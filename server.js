const http = require('http'),
	fs   = require('fs'),
	port = 3000

let file, picture, style

/* Read all files before loading page */
console.log("Loading files into memory...")

fs.readFile('./P7.jpg', function(err, content) {
	picture = content;
})

console.log("Starting Server!")

/* This callback is made every time a request is given. */
const server = http.createServer( function( request,response ) {
	console.log("New request! The user is asking for " + request.url)
	switch( request.url ) {
		case '/':
			sendFile(file, response, './index.html', 'utf-8')
			break;
		case '/P7.jpg':
			sendFile(picture, response, './P7.jpg')
			break;
		case '/style.css':
			sendFile(style, response, './style.css', 'utf-8')
			break;
		default:
			response.end( '404 Error: File Not Found' )
	}
})

server.listen( process.env.PORT || port )

/*
 * Function to send a file to the client
 * @param pointer - where to store the file
 * @param response - final response to the client
 * @param filename - filename for file
 * @param format - how to interpret the data in the request
 */
const sendFile = function( pointer, response, filename, format=null ) {
   fs.readFile( filename, function( err, content ) {
     pointer = content
	   if (format === null) {
		   response.end( pointer, format )
	   } else {
		   response.end( pointer )
	   }
   })
}
