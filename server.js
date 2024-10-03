// server.js
const http = require('http');

http.createServer((req, res) => {
  const { code } = req.query;
  if (req.url === '/invite') {
    try {
      // Verify the invite code and perform the necessary actions
      // ...
      res.writeHead(302, { Location: '/success' });
      res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid invite code' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(3000, () => {
  console.log('Server listening on port 3000');
});