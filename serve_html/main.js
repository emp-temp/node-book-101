const getViewUrl = (url) => {
  return `views/${url}.html`;
};

const port = 3500,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  fs = require('fs');

const routeMap = {
  '/': 'views/index.html',
};

http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.NOT_FOUND);
        res.write('<h1>FILE NOT FOUND</h1>');
      }
    });
  })
  .listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
