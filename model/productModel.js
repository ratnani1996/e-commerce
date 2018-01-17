import { mongo, SchemaTypes, Schema } from 'mongoose';

const mongoose = require('mongoose')

const ProductModel = new mongoose.Schema({
    vendorProductID: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    categoryID: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    msrp: {
        type: String,
        required: true
    },
    availableSizes: {
        type: String,
        required: true
    },
    availableColor: {
        type: String,
        required: true
    },
    QuantityPerUnit: {
        type: String,
        required: true
    },
    discountAvailable: {
        type: String,
        required: true
    }
    picture: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('products', ProductModel);

module.exports = { ProductModel };
