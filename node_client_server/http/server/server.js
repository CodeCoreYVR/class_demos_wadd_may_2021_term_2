const http = require("http");
const url = require("url");

const port = 4000;
const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    `
      <!DOCTYPE html>
      <html>
        <head>
            <title>My first web server</title>
        </head>
        <body>
            <h1>Hello ${params.name}, with age ${params.age}!</h1>
        </body>
      </html>
      
      `
  );
  res.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
