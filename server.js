//Import statement for node.js
const http = require('http'),
//Node.js syntax to interact with the file system, can be unsafe on client
  fs = require('fs'),
  mime = require('mime'),
  port = 3000,
  express = require('express')

//Let is much more flexible than const, can define value later
//Variable for server for ease of use
const server = http.createServer(function (request, response){
  const url = request.url.slice(1)
  console.log(request.url)
  if(request.url === '/'){
    sendFile(response, 'index.html')
  }
  else{
        sendFile(response, url)
  }
  
})
server.listen(process.env.PORT || port)

//refined file retrival
const sendFile = function (response, filename){
  const mimeType = mime.getType(filename)
  response.writeHeader(200, {'Content-Type': mimeType})
  fs.readFile(filename, function(err, content){
    if (err === null){
      response.end(content, 'utf-8')
    }
    else{
      response.writeHeader(404)
      response.end("Error 404 file not found")
    }
  })
}
