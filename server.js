const http = require('http'),
      fs   = require('fs'),
      port = 3000;

let file;
fs.readFile( './index.html', function( err, content ) {
  file = content
});

let fileImg;
fs.readFile('IMG_20180606_165302.jpg', function(err, content){
  fileImg = content
});

let titleImg;
fs.readFile('gradient photo_edited_edited.png', function (err, content) {
  titleImg = content;
});

let fileCss;
fs.readFile('./style.css', function(err, content) {
  fileCss = content
});

let fileJs;
fs.readFile('./scripts.js', function (err, content) {
  fileJs = content
});

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      response.end( file, 'utf-8');
      break;
    case './index.html':
      response.end(file, 'utf-8');
      break;
    case './DSC_1882 (2).jpg':
      response.end(fileImg, 'utf-8');
      break;
    case './style.css':
      response.end('./style.css', 'utf-8');
      break;
    case './scripts.js':
      response.end(fileJs, 'utf-8');
      break;
    case 'IMG_20180606_165302.jpg':
      response.end(titleImg, 'utf-8');
      break;
    case 'cards.css':
      response.end('cards.css', 'utf-8');
      break;
    default:
      response.end( '404 Error: File Not Found');
      break;
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    file = content;
    response.end( content, 'utf-8' )
  })
};