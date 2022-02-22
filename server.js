const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const app = express()
const secret = require('./secret')


mongoose.connect(`mongodb+srv://${secret}@todo-cluster.sar1h.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log('connected to the database')
    mongoose.connection.on('error', console.error.bind(console, 'error connecting to db'))

    app.use(express.json())
})

app.listen(port, function() {
    console.log('server listening on port 8000!!!')
})