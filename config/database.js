const mongoose = require('mongoose')

var connectToDatabase = ()=>{
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGO_URL)
    mongoose.connection
            .once('connected', ()=>{console.log(`Connection to the database up and running`)})
            .on('error', (err)=>{console.log(err)})
}

module.exports = {connectToDatabase};
