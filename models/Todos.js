const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {type: String, required: [true, 'todo name is required']},
    complete: {type: Boolean, default: [false], required: [true, 'todo must be complete or incomplete']},

})

module.exports = mongoose.model('Todos', schema)