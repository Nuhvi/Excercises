const http = require('http');
const url = require('url');
const fs = require('fs');

let Page404;

fs.readFile('./404.html', (err, data) => {
  Page404 = data;
});

const fileNameFromPath = (path) => {
  path = path.match(/\w+/);
  path = path ? path[0] : 'index';
  return `./${path}.html`;
};

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const fileName = fileNameFromPath(q.pathname);

    fs.readFile(fileName, (err, data) => {
      let code = 200;

      if (err) {
        code = 404;
        data = Page404;
      }

      res.writeHead(code, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  })
  .listen(8080);
