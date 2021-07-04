const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type : String,
        required: true
    },
    body:{
        type: String,
        required : true
    }
}, {timestamps: true})

// 'Blog' should be the singular of the colllection name
const Blog = mongoose.model('Blog', blogSchema)  // automatically looks for the schema with plural of 'blog'
module.exports = Blog