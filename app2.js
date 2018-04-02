const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {

    let filePath = './public' + request.url;
    if (filePath === './public/') {
        filePath = './public/index.html';
    }

    let extname = String(path.extname(filePath)).toLowerCase();

    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml'
    };

    let contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.write('Error 404: resource not found.');
                response.end();
            }
            else {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.write('Error 500: Internal Server Error.');
                response.end();
            }
        }
        else {
            response.writeHead(200, {'Content-Type': contentType});
            response.end(content, 'utf-8');
        }
    });

}).listen(3000);
console.log("Working on port 3000");