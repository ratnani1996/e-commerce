const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productID: {
        type: String,
        required: true
    },
    vendorProductID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    categoryID: {
        // type:,
        // ref:
    },
    productDescription: {
        type: String,
        required: true
    },
    productAvailable:{
      type:String,
      required:true
    },
    supplierId:{
      type:String,
      required:true
    },
    msrp: {
        type: Number,
        required: true
    },
    availableSizes: {
        type: String,
        required: true
    },
    sizes:{
        type:Array,
        required:true
    },
    availableColor: {
        type: Array
    },
    QuantityPerUnit: {
        type: Number,
        required: true
    },
    discountAvailable: {
        type: Number,
        default:0
    },
    unitsInStock:{
      type:Number,
      required:true
    },
    picture: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('products', productSchema);

module.exports = { productModel };
