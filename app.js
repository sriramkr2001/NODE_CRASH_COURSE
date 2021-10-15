const express = require('express');


//express app


// we invoke the express() function to create an instance of an express app 
const app = express();

// we must now listen for requests 
app.listen(3000);


app.use((req,res)=>{

console.log('new request made !!')
console.log('host',req.hostname)
console.log('path',req.path)
console.log('method',req.method);
res.sendFile('./4(h)FOLDER/about.html',{root:__dirname});

})

app.get('/',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')
    res.sendFile('./4(h)FOLDER/home.html',{root:__dirname});
});
app.get('/about',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')
    res.sendFile('./4(h)FOLDER/about.html',{root:__dirname});

})
app.get('/awesome',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')
    res.sendFile('./4(h)FOLDER/awesome.html',{root:__dirname});
})
app.get('/awesome-me',(req,res)=>{
    // res.send('<p>Hello Fellas</p>')
    // res.sendFile('./4(h)FOLDER/awesome.html',{root:__dirname});
    res.redirect('/awesome');
})


app.use((req,res)=>{
    // res.statusCode = 404;
    // res.sendFile('./4(h)FOLDER/404.html',{root:__dirname});
   
    res.status(404).sendFile('./4(h)FOLDER/404.html',{root:__dirname});
})



// We need multiple get Handlers as we want to set up multiple route handlers , each for that particular URL 



// In the res.sendFile, we have 2 arguments one relative path , What directory it is relative to 

