const fs = require("fs");
const http = require("http");
const mime = require("mime");
const path = require("path");

class Server {
  /**
   * Creates a server that serves files from the specified static directory. If
   * a user tries to access the root domain, the specified index file is
   * served.
   * @param indexFile The index file
   * @param staticDir The static file directory
   */
  constructor(indexFile = "index.html", staticDir = null) {
    this.indexFile = indexFile;
    this.staticDir = staticDir;
  }

  /**
   * Starts the server, listening on the specified port.
   * @param port The port to listen on
   */
  listen(port) {
    const server = http.createServer((request, response) => {
      console.log(`${request.method}: ${request.url}`);
      const url = request.url.slice(1);
      if (url === "") {
        this.sendFile(this.indexFile, response);
      } else {
        this.sendFile(url, response);
      }
    });
    console.log(`Server listening on port: ${port}...`);
    server.listen(port);
  }

  /**
   * Sends a 404 error to the specified response.
   * @param fileName The file name that the user tried to access
   * @param response The response to send the 404 error to
   */
  send404(fileName, response) {
    response.writeHeader(404);
    response.end(`404 Error: Could not read file "${fileName}"`);
  }

  resolveFile(fileName) {
    const baseDir = path.normalize(this.staticDir || "");
    const relativePath = path.normalize(fileName);
    const filePath = path.join(baseDir, relativePath);
    return filePath;
  }

  /**
   * Sends the file with the specified file name as part of the specified
   * response. If there is an error reading the file, a 404 response is sent.
   * Files are looked for in the specified static directory if one is specified
   * when the server is created.
   * @param fileName The file name to send
   * @param response The response to send the file to
   */
  sendFile(fileName, response) {
    const file = this.resolveFile(fileName);
    console.log(`Sending ${file}...`);
    fs.readFile(file, "utf8", (err, data) => {
      // Check if we have successfully read the file
      if (err) {
        this.send404(fileName, response);
      } else {
        const mimeType = mime.getType(fileName);
        response.writeHeader(200, { "content-type": mimeType });
        response.end(data, "utf8");
      }
    });
  }
}

const server = new Server("index.html", "static");
server.listen(process.env.PORT || 3000);
