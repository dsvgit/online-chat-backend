var Transform = require('stream').Transform;
  tr = new Transform();

tr._transform = function(chunk, enc, cb){
  var string = String(chunk);
  this.push(string + '(' + string.length + ') ');
  cb();
};

process.stdin
  .pipe(tr)
  .pipe(process.stdout);