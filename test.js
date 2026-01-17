const http = require("http");

function checkHealth() {
  return new Promise((resolve, reject) => {
    const req = http.get("http://localhost:3000/health", (res) => {
      if (res.statusCode === 200) resolve(true);
      else reject(new Error("Health check failed"));
    });

    req.on("error", reject);
  });
}

(async () => {
  const result = await checkHealth();
  if (!result) process.exit(1);
  console.log("Health check passed");
})();
