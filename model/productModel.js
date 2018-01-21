const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Suppliers'
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
        default:null
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
      required:true,
      default:0
    },
    picture: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('products', productSchema);

module.exports = { productModel };
