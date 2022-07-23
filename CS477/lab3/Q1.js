const http = require("http");

http.createServer((req, res) => {
    console.log(req);

    res.end("new http server");
}).listen(3000)