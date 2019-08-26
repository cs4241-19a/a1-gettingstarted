const http = require( 'http' ),
      fs   = require( 'fs' ),
      // IMPORTANT: you must run `npm install` in the directory for this assignment
      // to install the mime library used in the following line of code
      mime = require( 'mime' ),
      port = 3000

const server = http.createServer( function( request,response ) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  const filename = request.url.slice( 1 ) // remove leading forward slash (**not a backslash**)

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
   // mime types: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
   const type = mime.getType( filename ) 

   fs.readFile( filename, function( err, content ) {

     // if the error = null, then we've loaded the file successfully
     if( err === null ) {

       // status code: https://httpstatuses.com
       response.writeHeader( 200, { 'Content-Type': type })
       response.end( content )

     }else{

       // file not found, error code 404
       response.writeHeader( 404 )
       response.end( '404 Error: File Not Found' )

     }
   })
}