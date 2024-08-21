const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.end("This is my About Page");
  } else if (req.url === "/contact") {
    res.end("This is my Contact Page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
    res.end();
  }
});
server.listen(10086, () => {
  console.log("Server listening at port 10086");
});
