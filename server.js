require('dotenv').config({path : './variables.env'});
const express = require('express')
const app = express();

//connect to mongodatabase
var {connectToDatabase} = require('./config/database');
connectToDatabase();

//add public folder as express static
app.use(express.static('./public'))

app.listen(process.env.PORT, ()=>{console.log(`Listening to port ${process.env.PORT}`)})