const http = require("http");

const PORT = process.env.PORT || 3000;

const VERSION_INFO = {
    service: "backend",
    env: process.env.APP_ENV || "unknown",
    commit: process.env.APP_COMMIT_SHA || "unknown",
    deployed_at: process.ENV.APP_DEPLOYED_AT || "unknown"
};

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    res.end("ok");
    return;
  }

  if (req.url === "/version") {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end(JSON.stringify(VERSION_INFO))
    return;
  }

  res.writeHead(200);
  res.end("hello from ci playground");
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

