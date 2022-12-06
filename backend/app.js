require('dotenv').config()
const express = require('express');
const dbConnect = require('./config/dbConnect')
const todoRouter = require('./routes/todoRoutes')
const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnect();
app.use("/", todoRouter)

module.exports = app
