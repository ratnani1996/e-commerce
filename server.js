require('dotenv').config({path : './variables.env'});
const express = require('express')
const app = express();

//connect to mongodatabase
var {connectToDatabase} = require('./config/database');
connectToDatabase();





app.listen(process.env.PORT, ()=>{console.log(`Listening to port ${process.env.PORT}`)})