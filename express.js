var express = require('express'),
  app = express(),
  server;

var data = {
  page: "Main page",
  content: "some weird content"
};

app.set('view engine', 'jade');

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.static(__dirname + '/public', {
  maxAge: '1m'
}));

app.get('/', function(req, res) {
  res.render('main', data);
});

server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});