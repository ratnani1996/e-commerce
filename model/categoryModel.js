const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema ({
    CategoryName : {
        type : String
    },
    Description : {
        type : String
    },
    Picture : {
        type : String
    }
})

const categoryModel = mongoose.model('Categories', categorySchema)

module.exports = {categoryModel};