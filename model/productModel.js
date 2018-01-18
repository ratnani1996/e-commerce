import { mongo, SchemaTypes, Schema } from 'mongoose';

const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
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
        type: Number,
        required: true
    },
    discountAvailable: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = { ProductModel };
