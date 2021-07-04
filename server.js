// old syntax

// DONT USE, USE EXPRESS INSTEAD 
// TUTORIAL AT APP.JS



const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method)    //when ypu go to the browser then only the request will be made

    // set header content type
    res.setHeader('Content-Type', 'text/html')

    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // //replaces the default head

    // res.write('<p>hello, ninjas</p>')
    // res.write('<p>hello, ninjas from PK</p>')


    const num = _.random(0,10)
    console.log(num)


    const greet = _.once(() => {
        console.log('hello')
    });

    greet();
    //greet();

    // send an html file
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        case '/about-blah':
            res.statusCode = 301
            res.setHeader('Location', '/about');
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            //res.write(data)
            res.end(data)
        }
    })

    //res.end()
});


server.listen(3000, 'localhost', () => {
    console.log("listening to port 3000")   // this is logged on to to the server, not the browser
})

