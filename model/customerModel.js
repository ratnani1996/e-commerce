const mongoose = require('mongoose')
const validator = require('validator')

const addressSchema = new mongoose.Schema({
    Address_1 :{
        type : String
    },
    City : {
        type : String
    },
    State : {
        type : String
    },
    Country : {
        type : String
    },
    PostalCode : {
        type : Number
    }
})

const creditCardSchema = new mongoose.Schema({
    Card_Number : {
        type : String
    },
    Name_On_Card : {
        type : String
    },
    Exp_Date : {
        type : String
    }
})

const customerSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        required : true
    },
    Middle_name : {
        type : String,
        default : null
    },
    LastName : {
        type : String,
        default : null
    },
    ShippingAddress : [addressSchema],
    Phone : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : function(v){
                return validator.isEmail(v);
            },
            message : '{VALUE} is not a valid Email'
        }
    },
    Password : {
        type : String,
        required : true,
        minlength : 6
    },
    CreditCard : [creditCardSchema],
    BillingAddress : [addressSchema]
})

var customerModel = mongoose.model('Customers', customerSchema);

module.exports = {customerModel};