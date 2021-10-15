
// View Engines ------------------
// ejs is our view engine , dynammic html if checks etc...


const express = require('express');
const mongoose=require('mongoose');
const Blog = require('./models/blog')

// Blog here refers to the Blog model 


// create a new instance of a blog model i.e the  blog document object  and save it to the Blogs collection in the database 

//express app


// we invoke the express() function to create an instance of an express app 
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const dbURI = 'mongodb+srv://K-SRIRAM:test1234@node-js-blog-applicatio.ghe0o.mongodb.net/blog-project-1?retryWrites=true&w=majority';
mongoose.connect(dbURI).then((result)=>{console.log('connected to db')
app.listen(3000)})
.catch((err)=>console.log(err));
// Registering view engines 
// app.set() method 
// Helps us configure application setting 
app.set('view engine','ejs')
// we can set another config setting called views wherein we set the folder where we shall keep our views so that express looks at the mentioned folder for it's views 
app.set('views','myViews')
app.use(express.static('assets'))
// By default it looks at a folder called views if present for it's views so if u have kept the views folder name as views then u needn't use this config setting method 
app.get('/add-blog',(req,res)=>{

    const blog = new Blog({
    
        title:'Hey There Sexy-1',
        snippet:"Awesome",
        body :"Gonna enjoy my ride all along the way"
    })
    
    
    blog.save().then((result)=>res.send(result))
    .catch((err)=>res.send('<p>OOpsies</p>'))
  
})



app.get('/all-blog',(req,res)=>{


    Blog.find()
    // we have another method caled Blog.findById to return the document object with the id string as that mentioned by us 

    .then((result)=>res.send(result))
    .catch((err)=>res.send('<p>OOpsies</p>'))
    
})


const blogs=[


    {
        a:"Hello Senorita",
        Content:"HEllo geez bas hewllo eeeee Helozo"
    },
    {
        a:"Hello Senoritaqx",
        Content:"HEllo geez bas hewllo eeeee Helozo"
    },
    {
        a:"Hello Senoritaaa",
        Content:"HEllo geez bas hewllo eeeee Helozo"
    }
    
]


// we must now listen for requests =(now done with the .then  of the mongodb)
// app.listen(3000);

app.get('/',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')

    // res.sendFile('./4(h)FOLDER/home.html',{root:__dirname});
    res.render('index',{title:"Homes"});


    // just uncomment out the last line and comment every following line for the view-engines tutorial 

});

app.post('/',(req,res)=>{
const blog= new Blog(


    req.body
)
blog.save()
.then(resu=>res.redirect('/about'))
.catch(err=>res.send('sjsj'))






})
app.get('/about',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')
    // res.sendFile('./4(h)FOLDER/about.html',{root:__dirname});
Blog.find()
.then(resu=>   res.render('about',{blogs:resu}))
.catch(err=>res.send('shshs'))
})

app.get('/blogs/create',(req,res)=>{
res.render('blogs')


})


app.use((req,res)=>{
    // res.statusCode = 404;
    // res.sendFile('./4(h)FOLDER/404.html',{root:__dirname});
   
    res.status(404).sendFile('./4(h)FOLDER/404.html',{root:__dirname});
})



// We need multiple get Handlers as we want to set up multiple route handlers , each for that particular URL 



// In the res.sendFile, we have 2 arguments one relative path , What directory it is relative to 


