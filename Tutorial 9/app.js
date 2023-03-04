const express=require('express');

const morgan=require('morgan');
const mongoose=require('mongoose');
const Blog=require('./models/blogs');


//express app
const app=express();

//connect to MongoDB
const dbURI="mongodb+srv://kinetickhatri:test1234@cluster0.rs0416x.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI,{useNewURLParser:true,useUnifiedTopology:true})
  .then((result)=>{
    console.log('connected to DB')
    app.listen(3000)})
  .catch((err)=>console.log(err));


//Register view engine
app.set('view engine','ejs');

app.use(express.static('public'));          //doing so will allow us to access all the files in public folder

//listen for request


app.use(morgan('tiny'));



//mongoose and mongo sandbox routes
app.get('/add-blog',(req,res)=>{
    const blog= new Blog({
        title:'new blog 2',
        snippet:'about my blog',
        body:'more about my new blog'
    });

    blog.save()
      .then((result)=>{
        res.send(result)
      })
      .catch((err)=>console.log(err))

      
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
      .then((result)=>{
        res.send(result);
      })
      .catch((err)=>console.log(err))
    
});


app.get('/single-blog',(req,res)=>{
    Blog.findById('640397d258e635c244cd22da')
      .then((result)=>{
        res.send(result);
      })
      .catch((err)=>{
        console.log(err);
      })
})

app.get('/blogs',(req,res)=>{
    Blog.find()
      .then((result)=>{
        res.send(result);
      })
      .catch((err)=>console.log(err))
      
});

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