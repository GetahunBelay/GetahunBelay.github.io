
const dns = require("dns");
dns.resolve4("www.miu.edu", (err, address) => {
    if(err){
        throw new Error("error")
    }else{
        console.log(address); //[ '192.249.118.206' ]
    }
})