const http = require('http'),
      fs   = require('fs'),
      port = 3000;


const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile(response,'index.html');
      break;
    case '/index.html':
      sendFile(response,'index.html');
      break;
    case '/DSC_1882 (2).jpg':
      sendFile(response,'DSC_1882 (2).jpg');
      break;
    case '/title_picture.png':
      sendFile(response, 'title_picture.png');
      break;
    case '/style.css':
      sendFile(response,'style.css');
      break;
    case '/scripts.js':
      sendFile(response,'scripts.js');
      break;
    case '/IMG_20180606_165302.jpg':
      sendFile(response,'IMG_20180606_165302.jpg');
      break;
    case '/cards.css':
      sendFile(response,'cards.css');
      break;
      case '/experineceDropdown.css':
          sendFile(response, 'experineceDropdown.css');
          break;
      case '/textStyles.css':
          sendFile(response, 'textStyles.css');
          break;
    default:
      response.end( '404 Error: File Not Found');
      break;
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    let file = content;
    response.end( content, 'utf-8' )
  })
};