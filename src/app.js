const express = require("express");
const app = express();
const port=3000;

const indexRouter = require('./routes/index');
process.env['NODE_TLS_REJECT_UNAUTHORIZED']=0;

app.use("/",indexRouter)

app.listen(port,()=>console.log('service running on 3000 port....'))
