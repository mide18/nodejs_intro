const http = require('http');

const creatServer = http.createServer((req, res) => {
  res.write('Welcome to our homepage');
  res.end();
});

creatServer.listen(5000)