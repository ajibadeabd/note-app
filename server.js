// console.log('dlbwdkj')
const fs = require('fs')
const path = require('path')
const prompt = require('prompt-sync')({sigint: true});



console.log('WEJAPA NOTE APP')
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')

console.log('What would you like to do?', '\n')

console.log('1. create A New Note')
console.log('2. Manage Existing Note')
const firstOption = prompt('Choose an option:   ', '\n')

// create a file
if(firstOption==1) {
const Title = prompt('Enyer your title:   ', '\n')
const content = prompt('insert your content:   ', '\n')
    fs.writeFile(`file-created/${Title}.txt`,content, function(err) {
        // If an error occurred, show it and return
          if(err) return console.error(err);  
          // Successfully wrote to the file!
          else console.log('file created')
          })

} else if (firstOption==2){
console.log('1. list all Note')
console.log('2. Delete a Note')
const secondOption = prompt('Choose an option:   ', '\n')
if(secondOption==1){
     fs.readdir('file-created',(err,res)=>{
            if(err)
            console.log(err)
            else
            console.log(res.join(' '))
        
        })
}

else if(secondOption==2){
const del = prompt('Choose a file to delete:   ', '\n')

          fs.unlink(`file-created/${del}.txt`,function(err){
              if(err)  console.log('file does not exist'); 
              else 
              console.log('file deleted');})
}
else {
console.log('invalid selection')
   
}


}else{
    
console.log('invalid selection')
}

