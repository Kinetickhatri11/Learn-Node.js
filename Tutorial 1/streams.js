const fs = require('fs');

const readStream = fs.createReadStream('./docs/content.txt', { encoding: "utf8" });
const wrtieStream = fs.createWriteStream('./docs/contentWriting.txt');

readStream.on('data', (chunk) => {
    console.log("---New chunk");
    console.log(chunk);
    wrtieStream.write('\n New chunk\n');
    wrtieStream.write(chunk);
});