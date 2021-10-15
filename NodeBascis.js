const xyz = require('./2-helper');
// alternatively we can also use destructuring 
const {people} = require('./2-helper')
console.log(xyz)
console.log(xyz.people)

const fs = require('fs');

// The os node_module 



// const os = require('os');
// console.log(os.platform(), os.homedir())


// The fs node module 
// we can use the fs node module to read/write files , access directories and delete files 


// reading file 
fs.readFile('./blog1.txt',(err,data)=>{
    if(err)
    console.log(err);
    
    console.log(data.toString());
    })
// writing files 

// fs.writeFile('./blog1.txt','hello world',()=>{
//     console.log('file was written')
// })



// fs.mkdir('./hey/hello',(err,)=>{
//     if(err)
// console.log(err)
//     console.log("Folder Created")   
//     })clear

if(fs.existsSync('./supp.js'))
{
fs.unlink('./supp.js',(err)=>{


if(err)
console.log(err)

})
}


if(!fs.existsSync('./supp.js'))
{
    // when a file doesn't exist writeStream just creates the file and adds teh content which we intend to add 
 fs.writeFile('./supp.js','uqgs',(err)=>{


if(err)
console.log(err)

 })
}
// reading from a stream using a readStream and writing to another filw using the writeStream
const readStream = fs.createReadStream('./blog1.txt',{encoding : 'utf8'});


const writeStream = fs.createWriteStream('./blog2.txt');


readStream.on('data',(chunk)=>{
// console.log("------------New Chunk----------------");
// console.log("New Chuck Received")
// writeStream.write('\n------------New Chunk----------------\n')
// writeStream.write(chunk)
});


// readStream.pipe(writeStream)