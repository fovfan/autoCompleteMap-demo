const express = require('express')
const router = require('./routes/router')
const app = express();
require('dotenv').config()


app.use(router)
app.listen(3001, ()=> console.log("Node Server is running on port 3001"))