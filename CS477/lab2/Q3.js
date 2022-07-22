
// const fs = require("fs");
// const zlib = require('zlib');
// fs.createReadStream('text.txt').pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('text.txt.gz'));
// console.log("File is un-zipped");

const fs = require("fs");
const path = require("path")
const zlib = require('zlib');


fs.createReadStream(path.join(__dirname, './text.txt'))
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./text.txt.gz'));

console.log("File is un-zipped");