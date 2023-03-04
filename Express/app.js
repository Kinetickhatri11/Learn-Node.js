const express=require('express');

//express app
const app=express();

//listen for request

app.listen(3000);

//'/' means root

app.get('/',(req,res)=>{
    res.sendFile('./Soumya.html',{root:__dirname});                        //dont need to type content type in header
});


//package-lock.json file 