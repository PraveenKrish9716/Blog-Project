const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


//express app
const app = express();


//connect to mongodb
const dbURi ='mongodb+srv://pkrootuser:word@pass@nodeblogproject.ep3ak.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURi, {useNewUrlParser:true, useUnifiedTopology:true})
.then((result) => app.listen(3000))   // to fire when database is connected
.catch((err)=>console.log(err))

//register view engine
app.set('view engine','ejs');
// app.set('views','whereviewsrekept')    // use only if views not in views

// listen for requests


//OLD METHOD:

// app.get('/', (req,res) =>{    // send automatically sets the type or sets the header
//     //res.send('<p>Home Page</p>')       

//     //tha path given is absloute , so when we give __dirname we can give the path relative to current directory
//     res.sendFile('./views/index.html', {root: __dirname})  
// })

//next()                   //to tell browser to go the page after logging instead of buffering


//MIDDLEWARE AND STATIC FILES
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))   // middleware to acceppt form data
//app.use(morgan('dev'))




// app.get('/add-blog',(req,res) =>{
//     const blog = new Blog({
//         title: 'New blog',
//         snippet: 'about my blog',
//         body : 'more about the new blog'
//     })

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console,log(err)
//     })
// })

// app.get('/all-blogs', (req,res)=>{
//     Blog.find() // retrive all collections
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.get('/single-blog', (req,res)=>{
    Blog.findById('60db1f0e3ce11e492ba455bd') // retrive all collections
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})




app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

//blog- routes


app.get('/about', (req,res) =>{    
    res.render('about',{title: 'About'})    
})

app.use('/blogs',blogRoutes)


//404 page, should manually set the status code
// use only when the program control reaches this section of the code
app.use((req,res)=>{
    res.status(404).render('404',{title: '404'})
}) 