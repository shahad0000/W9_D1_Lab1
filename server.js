const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("index.html").pipe(res);
  }
  if (req.url === "/image") {
    fs.readFile("image.png", (err, data) => {
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(data);
    });
  }

  if (req.url === "/outsourcedImg") {
    res.writeHead(303, {
      location:
        "https://media.istockphoto.com/id/1470504494/photo/len%C3%A7%C3%B3is-maranhenses-national-park.jpg?s=1024x1024&w=is&k=20&c=zhU45tZIIidLQTV5ctRGlkqAtlD3PP6AVXYZGRJVl_0=",
    });
    res.end();
  }
});
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
// run with `node server.mjs`
