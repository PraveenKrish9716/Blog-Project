const fs = require('fs')

const readStream = fs.createReadStream('./docs/data.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/datawrite.txt') 
// encoding already gives the data in readable format    

// on data event of read stream, when a chunk of data arrives

// readStream.on('data',(chunk)=>{
//     console.log('----NEW CHUNK----')
//     console.log(chunk)
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk)
// })

// shorter way to do this is via piping
readStream.pipe(writeStream)
