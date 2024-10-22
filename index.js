const http = require("http");

const handleServer = (req, res) => {
  console.log("Request has been sent");
  const url = req.url;

  if (url === "/") {
    res.write("<h1>Welcome to homepage</h1>");
  } else if (url === "/about") {
    res.write("<h1>Welcome to about page</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Welcome to contact page</h1>");
  } else {
    res.write("<h1>Page not found </h1>");
  }

  res.end();
};

const server = http.createServer(handleServer);

server.listen(4450, "127.0.0.1", () => console.log("Server is lifeeee"));
