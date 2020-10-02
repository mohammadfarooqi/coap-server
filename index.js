var coap = require('coap');
var server = coap.createServer();

server.on('request', function(req, res) {
  console.log('req.payload', req.payload.toString());
  res.end('Hello ' + req.url.split('/')[1] + '\n')
});

// the default CoAP port is 5683
server.listen(5683, function() {
  // var req = coap.request('coap://localhost/Matteo')

  // req.on('response', function(res) {
  //   res.pipe(process.stdout)
  //   res.on('end', function() {
  //     process.exit(0)
  //   })
  // })

  // req.end()
  console.log('server started');
});