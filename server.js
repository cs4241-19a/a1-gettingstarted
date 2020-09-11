const http = require('http'),
    fs = require('fs'),
    port = 3000

const server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/':
            sendFile(response, 'index.html')
            break
        case '/index.html':
            sendFile(response, 'index.html')
            break
         case '/assets/chris.jpg':
            sendFile(response, 'assets/chris.jpg')
            break
      case '/assets/wpi.png':
        sendFile(response, 'assets/wpi.png')
        break;
        case '/Style.css':
            sendFile(response, 'Style.css')
            break
        default:
            response.end('404 Error: File Not Found')
    }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
    fs.readFile(filename, function (err, content) {
        file = content
        response.end(content, 'utf-8')
    })
}
