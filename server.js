const http = require('http'),
    fs = require('fs'),
    port = 3000

let index
let css
fs.readFile('./index.html', function (err, content) {
    index = content
})
fs.readFile('./styles.css', function (err, content) {
    css = content
})

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/':
            sendFile(response, 'index.html')
            break
        case '/index.html':
            sendFile(response, 'index.html')
            break
      case '/styles.css':
            response.writeHead(200, {'Content-Type': 'text/css'})
            sendFile(response, 'styles.css')
            break;
        default:
            response.end('404 Error: File Not Found')
    }
})

server.listen(process.env.PORT || port)

const sendFile = function( response, filename ) {
    fs.readFile( filename, function( err, content ) {
        file = content
        response.end( content, 'utf-8' )
    })
}
