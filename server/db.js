const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ToDoList')

const db = mongoose.connection
db.once('open', () => console.log('Mongoose works omg'))

module.exports = db