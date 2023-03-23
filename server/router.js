const express = require('express')
const router = express.Router()
const db = require('./db.js')
const model = require('./model.js')

router.get('/', async (req, res) => {
  const tasks = await model.find()
  res.status(200)
  res.send(tasks)
})

router.post('/', async (req, res) => {
  const newTask = new model({
    task: req.body.task
  })
  const task = await newTask.save()
  res.status(201)
  res.send(task)
})

router.delete('/:id', async (req, res) => {
  deleteObject = await model.findById(req.params.id)
  await deleteObject.deleteOne()
  res.send('Delete successful!')
})
module.exports = router