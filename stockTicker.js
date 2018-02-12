const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 5500;

fs.readFile('stocks.html', (err, html) => {
  
  if(err) {
    console.log(err);
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' + port);
  })

});


