//HTTP
//brief intro first
const http = require("http");

// incoming request
// outgoing response
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(
    `<h1>Oops!</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>back home</a>
    `
  );
});

//listening for request
server.listen(5000);
