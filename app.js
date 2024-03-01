const express = require('express');
const dotenv = require('dotenv');



const app = express();


const connectDB = require('./config/db');

//Load Config
dotenv.config({path: './config/config.env'});

connectDB();

//Routes
app.use('/', require('./routes/index'));

app.listen(3000);