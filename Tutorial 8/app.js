const express=require('express');

const morgan=require('morgan');


//express app
const app=express();



//Register view engine
app.set('view engine','ejs');

app.use(express.static('public'));          //doing so will allow us to access all the files in public folder

//listen for request

app.listen(3000);
app.use(morgan('tiny'));

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

//once the response has been sent the app.use statements wont have any effect

app.use((req,res,next)=>{
    console.log('in the next middleware');
    next();
});

// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:"404"});
})



//package-lock.json file 