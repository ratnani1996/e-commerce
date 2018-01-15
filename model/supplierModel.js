import { mongo, SchemaTypes, Schema } from 'mongoose';

const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({
    CompanyName : {
        type : String,
        required : true
    },
    displayName : {
        type : String,
        required : true
    },
    Address_1 : {
        type :String,
        required : true
    },
    Address_2 : {
        type : String,
        required : true
    },
    City : {
        type : String,
        required : true
    },
    postalCode : {
        type : String,
        required : true
    },
    Country : {
        type : String,
        required : true
    },
    Phone : {
        type : String,
        required : true
    },
    Fax : {
        type : String,
        default : null
    },
    Email : {
        type : String,
        required : true
    },
    customerId : {
        type : Schema.Types.ObjectId
        // ref : 
    }
})

var SupplierModel = mongoose.model('suppliers', supplierSchema);

module.exports = {SupplierModel};