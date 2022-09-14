const getJSONString = (obj) => {
  return JSON.stringify(obj, null, 2);
};

const routeResponseMap = {
  '/info': '<h1>Info Page</h1>',
  '/contact': '<h1>Contact Us</h1>',
  '/about': '<h1>About Us</h1>',
  '/hello': '<h1>Learn More emailing us <a href="#">here</a></h1>',
  '/error': 'Sorry, the page you are looking for is not here',
};

const port = 3500,
  http = require('http'),
  httpStatus = require('http-status-codes'),
  app = http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    if (routeResponseMap[req.url]) {
      if (toString(req.url) === '/error') {
        res.writeHead(404, {
          'Content-Type': 'text/html',
        });
        res.end(routeResponseMap[req.url]);
      } else {
        setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
      }
    } else {
      res.end('<h1>Welcome!</h1>');
    }
  });

app.listen(port);

console.log(`The server has started and is listening on port number: ${port}`);
