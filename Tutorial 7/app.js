const express=require('express');

//express app
const app=express();

//Register view engine
app.set('view engine','ejs');



//listen for request

app.listen(3000);

//'/' means root

app.get('/',(req,res)=>{
    const blogs=[
        {title:"home",snippet:"lorem 34"},
        {title:"office",snippet:"lorem20"},
        {title:"school",snippet:"lorem40"}
    ];

    
    res.render('index',{heading:"home",blogs});                       //dont need to type content type in header
});

app.get('/ranjan',(req,res)=>{
    res.render('ranjan');
});



//package-lock.json file 