// const http = require("http");
// const fs = require("fs")
// const path = require("path")

// http.createServer((req, res) => {
//     if(req.url === "/" && req.method === "GET"){
//         //res.end("./signup.html");
//         fs.createReadStream(path.join(__dirname, "signup.html"))
//         .pipe(res)
//     }else if(req.url === "/signup" && req.method === "POST"){
//         const body = [];
//         req.on("data", chunk => {
//             body.push(chunk)
//         });

//         req.on("end", ()=> {
//             const str = Buffer.concat(body).toString();
//             console.log(str);
//             fs.writeFile("./users.txt", str, (err) => {
//                 if(!err){
//                     res.end("saved successfully")
//                 }else{
//                     res.end("not saved")
//                 }
//             })
//         })

//     } else{
//         res.end("others")
//     }

// }).listen(8050)


const http = require("http");
const fs = require("fs")
const path = require("path")
const server = http.createServer()

http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET"){
        res.write("./signup.html");       
    }
    
    if(req.url === "/signup" && req.method === "POST"){
        const body = [];
        req.on("data", chunk => {
            body.push(chunk)
        });

        req.on("end", ()=> {
            const str = Buffer.concat(body).toString();
            console.log(str);
            fs.writeFile("./users.txt", str.split("=")[1], (err) => {
                if(!err){
                    res.end("saved successfully")
                }else{
                    res.setHeader("location", "/")
                    res.end("not saved")
                }
            })
        })

    }

    res.setHeader("content-type", "text/html")
    res.write("./signup.html")
    res.end()
    }
)
server.listen(8050)