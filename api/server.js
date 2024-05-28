const { createServer } = require("http");
const PORT = 3000;
const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers":
      "X-Requested-With, Content-Type, Accept, Origin",
  });
  res.write("Hello World Here");
  res.end(console.log("I am here"));

  if ((req.method = "POST")) {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers":
        "X-Requested-With, Content-Type, Accept, Origin",
    });
    const data = "";
    res.on("data", (chunk) => {
      data += JSON.parse(chunk);
      console.log(data);
    });
    res.write(JSON.stringify(data));
    res.end(console.log("I am here"));
  }
});

server.listen(PORT, (err, res) => {
  if (err) throw err;
  console.log("Running on port http://localhost:" + PORT);
});
