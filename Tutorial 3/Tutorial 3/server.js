const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);

    //set header content type
    res.setHeader("Content-Type","text/html");
    
    let path='./';

    switch(req.url){
        case '/':
            path+='Soumya.html';
            res.statusCode=200;
            break;
        case "/Ranjan":
            path+="Ranjan.html";
            res.statusCode=200;
            break;
        default:
            path+="404page.html";
            res.statusCode=404;
            break;
    }
    
    //send an html file
    fs.readFile(path,(err,data)=>{
        if (err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    });

}); //This creates a server and takes a funct as argument




server.listen(3000,'localhost',()=>{
    console.log("Listening for request on port 3000");
});

//localhost is like a domain name on the web browser connects us to our own computer

//Port number are like 'doors' into a computer, server too require a port number. If a port is being used we can't you the same port number

//Satus code describes the type of response sent to the browser