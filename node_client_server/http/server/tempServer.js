const http = require("http");
const url = require("url");
const port = 8080;

const convertFahrenheitToCelsius = (temp) => {
  return ((temp - 32) * 5) / 9;
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  const params = url.parse(req.url, true).query;
  res.write(`
            <!DOCTYPE html>
                <html>
                    <head>
                        <title>Temperature converter</title>
                    </head>

                    <body>
                        <h2>Temperature in Fahrenheit is ${params.temp}</h2>
                        <h2>Temperature in Celsius is ${convertFahrenheitToCelsius(
                          params.temp
                        )} C</h2>
                        <p>this is new</p>
                    </body>
                </html>
      `);
  res.end();
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
