const mongoose = require('mongoose')

const model = new mongoose.Schema({
  task: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('model', model)