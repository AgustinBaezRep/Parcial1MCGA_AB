const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bparser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()
const uri = "mongodb+srv://ARB-test:test@cluster0.xvi0t.mongodb.net/cluster0?retryWrites=true&w=majority"

// middlewares use
app.use(morgan('dev'))
app.use(cors())
app.use(bparser.json())
app.use(bparser.urlencoded({extended: true}))

// DB Connect
mongoose.connect(uri)
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))

// importings routes
const playersRoutes = require('./routes/players.ruotes')

// setting port 
app.set('port', process.env.PORT || 3000)

// using routes
app.use('/', playersRoutes)

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'))
})