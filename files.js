const fs = require('fs');

// fs.readFile('./docs/sample.txt' , (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// // console.log('last line')  // executes before readFile

//  fs.writeFile('./docs/sample.txt','hello world', () =>{
//      console.log('file was written')  // written event happens
//  })


//making files


// if (!fs.existsSync('./assets')) {

//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('file created')
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// deleting files

// if(fs.existsSync('./docs/delete.txt')){
//     fs.unlink('./docs/delete.txt',(err)=>{
//         if(err) console.log(err)

//         console.log('file deleted')
//     })
// }
