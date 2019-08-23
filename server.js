const http = require('http');
const fs = require('fs');

let htmlFile
fs.readFile('./index.html', function (err, data) {
  if (err) throw err
  htmlFile = data
})

let cssFile
fs.readFile('./style.css', function (err, data) {
  if (err) throw err
  cssFile = data
})

let imgFile
fs.readFile('./Savin-NY-Website-Background-Web.jpg', function (err, data) {
  if (err) throw err
  imgFile = data
})

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/Savin-NY-Website-Background-Web.jpg":
      response.writeHead(200, { "Content-Type": "text/html" })
      response.write(imgFile)
      break
    case "/style.css":
      response.writeHead(200, { "Content-Type": "text/css" })
      response.write(cssFile)
      break
    default:
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(htmlFile);
  }
  response.end()
})

server.listen(3000);