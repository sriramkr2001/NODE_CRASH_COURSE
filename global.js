console.log(global)
setTimeout(() => {
  console.log("well Hello There !!")  
  clearInterval(int)
}, 3000);



const int = setInterval(()=>{





  console.log("In the setIntervalz")
},1000)


console.log(__dirname)
console.log(__filename)