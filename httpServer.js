var http = require('http'),
  server = http.createServer(function(req, res) {
    //console.log(req.headers);
    console.log(req.url);
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.write('Hello http!');
    res.end();
  });

server.listen(8000);
console.log('Listen 8000...');