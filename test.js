const fs=require('fs');
const name='mario'
for(let i=0;i<10;i++)
console.log("Mario");

const greet=()=>{
console.log("Sup There")
}
// greet()


// Practicing How to remove an empty directory -----
// fs.rmdir
getCurrentFilenames();
fs.rmdir("whatsapp", () => {
    console.log("Folder Deleted!");
   
    // Get the current filenames
    // in the directory to verify
    getCurrentFilenames();
  });

function getCurrentFilenames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file);
    });
    console.log("\n");
  }

  fs.unlink('./blog2.txt',(err)=>{


    if(err)
    console.log(err)
    
    })