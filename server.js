const http = require('http'),
      fs   = require('fs'),
      mime = require('mime'),
      port = 3000;

const server = http.createServer( function( request,response ) {
  const filename = request.url.slice(1);
  switch(filename) {
    case '':
      if (request.url === '/'){
         sendFile(response, 'index.html');
      }
      break;
    default: 
      sendFile(response, filename);
      break;
  }
});

server.listen( process.env.PORT || port );

const sendFile = function(response, filename){
  const type = mime.getType(filename);
  fs.readFile(filename, function(err, content){
    if(err === null){
      response.writeHeader(200, {'Content-Type': type});
      response.end(content);
    }
    else{
      response.writeHeader(404);
      response.end('404 Error: File Not Found');
    }
  });
};