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
            response.end(index, 'utf-8')
            break
      case '/styles.css':
            response.writeHead(200, {'Content-Type': 'text/css'})
            response.write(css)
            response.end()
            break;
        default:
            response.end('404 Error: File Not Found')
    }
})

server.listen(process.env.PORT || port)
