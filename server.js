const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    res.end("ok");
    return;
  }

  res.writeHead(200);
  res.end("hello from ci playground");
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
afsadf
