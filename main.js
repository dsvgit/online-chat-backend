var net = require('net');

var Readable = require('stream').Readable,
  stream = new Readable(),
  data = ('Необязательный параметр. Индекс элемента в массиве, на котором новый массив завершится. При этом последним в новом массиве будет элемент с индексом end-1').split(' ');

stream._read = function(){
  if (data.length) {
    setTimeout(function(){
      stream.push(data.shift() + ' ');
    }, 50);
  } else {
    stream.push(null);
  }
};

stream.pipe(process.stdout);