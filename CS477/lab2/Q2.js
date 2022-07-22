
const fs = require("fs");
const http = require("http");
http.createServer((request, response) => {
    //response.end(fs.readFileSync("./phone.jpg"))

    fs.readFile("./phone.jpg", function(err, data){
        if(err){
            response.end("Whoops")
        }else{
            response.end(data)
        }
    })

    //fs.createReadStream("./phone.jpg").pipe(response)
}).listen(3000, () => {
    console.log("3000 is running")
})