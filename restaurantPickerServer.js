var http = require('http');

console.log("proc env port = " + JSON.stringify(process.env));

//create a server object:
http.createServer(function (req, res) {
  console.log('request received')
  if (/GET.*basicRestaurantList/.exec(req.method + ' ' + req.url)) {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': '58'
      });
    res.write('El Sombrero,La Piazza,Applebees,Ruby Tuesday,The Boathouse');
  }
  else {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.write('invalid resource');
    //res.writeHead(200, { 'Content-Type': 'text/html'});
    //res.write('did not match');
  }
  res.end();
}).listen(process.env.PORT);
