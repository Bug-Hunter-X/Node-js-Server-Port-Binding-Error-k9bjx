const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const PORT = process.env.PORT || 3000;

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
    process.exit(1);
  } else {
    console.error(`Server error:`, err);
    process.exit(1);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});