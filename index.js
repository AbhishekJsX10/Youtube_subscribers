
const express = require("express")
const app = express()
require('dotenv').config();
const mongoose = require('mongoose')
const routes = require('./src/app.js')


const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://localhost:27017";


// Connect to DATABASE
mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))


// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get("/",async(req,res)=>{
    res.render("index")
})

// view engine setup as ejs
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`)
})