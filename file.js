const fs = require('fs');


//Reading files it requires some time to perform
// fs.readFile('./add.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// // writing files
// fs.writeFile('./add.txt', "Hello world from files", () => {
//     console.log("File was written");
// })



// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log("folder created");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Folder deleted");
    })
}

// deleting files