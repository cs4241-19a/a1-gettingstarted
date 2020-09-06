const http = require("http");
const fs = require("fs");
const port = 5000;

http.createServer((req, res) => {
	console.log(`Received request: ${req.url}`);
	if (req.method === "GET") {
		const file = "." + (req.url === "/" ? "/index.html" : req.url);
		fs.readFile(file, (err, data) => {
			if (err) {
				console.log(`Error 404. File not found: ${file}`);
				res.writeHead(404);
				res.end("Error 404. File not found.");
			} else {
				console.log(`Serving file: ${file}`);
				res.writeHead(200);
				res.end(data, "utf-8");
			}
		});
	} else {
		console.log("Error 405. Method not allowed.");
		res.writeHead(405);
		res.end("Error 405. Method not allowed.");
	}
}).listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));