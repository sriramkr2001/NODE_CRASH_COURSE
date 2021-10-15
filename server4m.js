console.log("Hello babee")

const http = require('http');
const fs=require('fs');


const server = http.createServer((req,res)=>{
// console.log('request made')
// console.log(req.url);
// console.log(req.method);

// Everytime we make a change to the server code , we must close the ongoing server and rerun the code



res.setHeader('Content-Type','text/html')
// sending an html as response 
// res.write('<h1>Sriram Krishnamurthy</h1>')
// res.write('<h1>PASSION|UI|REACT.JS</h1>')

// Basic routing in react 
let path='./4(h)FOLDER/';
switch(req.url)
{
    case '/':
        path+="index.html"
        res.statusCode = 200;
        break;
    case '/about':
        path+="about.html"
        res.statusCode = 200;
        break;
    case '/about--mee':
        // path+="about.html"
        // or
        // we can simply redirect to about.html 
res.setHeader('Location','/about');
        res.statusCode = 301;
        break;
    default:
        path+='404.html';
        res.statusCode = 404;
        break;

}

// Sending an html file as response 
// "4(h)FOLDER/index.html"
fs.readFile(path,(err,data)=>{


    if(err)
    {
         console.log(err)
         res.end()
    }
    else{
        res.write(data);
        res.end();
    }
   

})


});


server.listen(3000,'localhost',()=>{
    console.log('listening to requests on port 3000')
})