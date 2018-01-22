const mongoose = require('mongoose')

const orderDetailsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    dicount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
    color: {
        type: String,
    },
    fulfilled: {
        type: Boolean,
        required: true
    },
    shipDate: {
        type: String,
        required: true,
        default: null
    },
    billDate: {
        type: String,
        required: true
    }
});

const orderDetailModel = mongoose.model('orderDetail', orderDetailsSchema);

module.exports = { orderDetailModel };
