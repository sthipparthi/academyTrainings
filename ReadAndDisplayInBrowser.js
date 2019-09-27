var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (req, resp) {
    if (req.url === "/render") {
        fs.readFile("Sample.html", function (error, buff) {
            if (error) {
                resp.writeHead(404);
                resp.write('Could Not Read Content!');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(buff);
            }
             
            resp.end();
        });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Hit URL</h1><br/><br/>Please hit: /render');
        resp.end();
    }
});
server.listen(5050);