const express = require('express')
const router = require('./routes/router')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000


app.use(router)
app.listen(PORT, ()=> console.log(`Node Server is running on port ${PORT}`))