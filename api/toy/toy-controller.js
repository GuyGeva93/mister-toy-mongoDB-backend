const toyService = require('./toy-service')
const socketService = require('../../services/socket.service')
const logger = require('../../services/logger.service')

module.exports = {
  getToy,
  getToys,
  deleteToy,
  addToy,
  updateToy
}

async function getToy(req, res) {
  try {
    const toy = await toyService.getById(req.params.id)
    res.send(toy)
  } catch (err) {
    // logger.error('Failed to get toy', err)
    res.status(500).send({ err: 'Failed to get toy' })
  }
}

async function getToys(req, res) {
  try {
    // const filterBy = {
    //   txt: req.query?.txt || '',
    //   minBalance: +req.query?.minBalance || 0
    // }
    const filterBy = ''
    const toys = await toyService.query(filterBy)
    res.send(toys)
  } catch (err) {
    logger.error('Failed to get toys', err)
    res.status(500).send({ err: 'Failed to get toys' })
  }
}

async function deleteToy(req, res) {
  try {
    await toyService.remove(req.params.id)
    res.send({ msg: 'Deleted successfully' })
  } catch (err) {
    logger.error('Failed to delete user', err)
    res.status(500).send({ err: 'Failed to delete user' })
  }
}

async function addToy(req, res) {
  try {
    const toy = req.body
    const savedToy = await toyService.add(toy)
    res.send(savedToy)
    // socketService.broadcast({ type: 'user-updated', data: review, to: savedUser._id })
  } catch (err) {
    logger.error('Failed to add toy', err)
    res.status(500).send({ err: 'Failed to add toy' })
  }
}

async function updateToy(req, res) {
  try {
    const toy = req.body
    console.log(toy);
    const savedToy = await toyService.update(toy)
    res.send(savedToy)
    // socketService.broadcast({ type: 'user-updated', data: review, to: savedUser._id })
  } catch (err) {
    logger.error('Failed to update toy', err)
    res.status(500).send({ err: 'Failed to update toy' })
  }
}

