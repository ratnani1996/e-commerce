require('dotenv').config({path : './variables.env'});
const express = require('express')
const app = express();

//connect to mongodatabase
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL)
mongoose.connection
        .once('connected', ()=>{console.log(`Connection to the database up and running`)})
        .on('error', (err)=>{console.log(err)})





app.listen(process.env.PORT, ()=>{console.log(`Listening to port ${process.env.PORT}`)})