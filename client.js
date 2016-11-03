var NetcatClient = require('node-netcat').client,
  client = NetcatClient(8000, 'localhost');

client.on('open', function () {
  console.log('connect');
  client.send('this is a test' + '\n');
});

client.on('data', function (data) {
  console.log(data.toString());
  client.send('Goodbye!!!', true);
});

client.start();