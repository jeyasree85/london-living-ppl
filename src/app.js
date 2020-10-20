"use strict"
require('dotenv').config();

const express = require("express");
const app = express();

const indexRouter = require('./routes/index');

app.use("/",indexRouter)

app.listen(process.env.PORT,()=>console.log('service running on 3000 port....'))
