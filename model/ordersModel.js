const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({

})

const orderModel = mongoose.model('Orders', ordersSchema)

module.exports = {orderModel};