const express = require('express')
//morgan logs http requests
const morgan = require('morgan')
//mongoose connects the server to the database
const mongoose = require('mongoose')
//we have to set our own port, I used 8000
const port = process.env.PORT || 8000
//gives us access to the todoRoutes under the routes directory
const todos = require('./routes/todoRoutes')
//create the express app
const app = express()
//allows us to read the body of a post (required for post requests)
const bodyParser = require('body-parser')
//username/password to login to db
const secret = require('./secret.js')

//connection to db
//secret has the username and password
mongoose.connect(`mongodb+srv://${secret}@todo-cluster.sar1h.mongodb.net/todo?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//after connecting to the db, we perform everything else in a promise
    .then(() => {
        console.log('connected to the database')
        mongoose.connection.on('error', console.error.bind(console, 'error connecting to db'))

        //morgan middleware
        app.use(morgan('dev'))
        //bodyParser
        app.use(bodyParser.urlencoded({extended: false}))

        //todo routes
        app.use('/todos', todos)


        app.use(express.json())

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

        //runs the server on our port
        app.listen(port, function () {
            console.log('server listening on port 8000!!!')
        })
    })


