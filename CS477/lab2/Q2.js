
const fs = require("fs");
const http = require("http");
http.createServer((request, response) => {
    //response.end(fs.readFileSync("./phone.jpg"))

    fs.readFile("./phone.jpg", function(err, data){
        if(err){
            response.end("That is not right")
        }else{
            response.end(data)
        }
    })

    //fs.createReadStream("./phone.jpg").pipe(response)
}).listen(8020, () => {
    console.log("8020 is running")
})