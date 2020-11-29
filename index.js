const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// import routes
const authRoute = require('./routes/auth.js')
const postRoute = require('./routes/posts.js')

// initialized dotenv
dotenv.config()

// connect to DB
mongoose.connect(process.env.DB_CONNECT, 
{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log('Connected to DB'))

// middlewares
app.use(express.json()) // in order to send json inside http requests

// route middlewares
app.use('/api/user', authRoute) // everything in the authRoute will have api/user as prefix
app.use('/api/posts', postRoute)


// start server on port 3000
app.listen(3000)