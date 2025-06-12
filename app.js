// app.js
const http = require("http");

http.createServer((_, res) => {
  res.write("Hello from GitHub Actions!");
  res.end();
}).listen(8080);
