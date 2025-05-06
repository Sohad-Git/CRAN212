import http from 'node:http';

// Create a local server to receive data from
const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello World!',
    }));
    return;
  }
  else if (req.url === '/About') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      data: 'Hello About!',
    }));
    return;
  }

});

server.listen(8000);