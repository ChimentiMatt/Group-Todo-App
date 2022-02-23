const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const app = express()
const secret = require('./secret.js')

mongoose.connect(`mongodb+srv://${secret}@todo-cluster.sar1h.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('connected to the database')
        mongoose.connection.on('error', console.error.bind(console, 'error connecting to db'))

        app.use(express.json())
    })

//express doesn't consider 404 to be an error (404 means not found, which isn't technically an error), so this middleware and the one below it will treat 404 responses as errors.
app.use(function (req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

app.use(function (err, req, res, next) {
    console.log(err)
    if (err.status === 404)
        res.status(404).json({ message: 'not found' })
    else
        res.status(500).json({ messsage: 'oops, something went wrong!' })
})

app.listen(port, function () {
    console.log('server listening on port 8000!!!')
})
