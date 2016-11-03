var net = require('net');

var server = net.createServer(function(socket){
  console.log('Connected ' + socket.remoteAddress + ' ' + socket.remotePort);
  socket.on('data', function(data){
    console.log(data);
    socket.write(String(data).toUpperCase());
  });
  socket.on('close', function(){
    console.log('Connection closed!');
  });
});

server.listen(8000);
console.log('Listening on port 8000');