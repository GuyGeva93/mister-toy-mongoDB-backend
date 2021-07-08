const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const { getToy, getToys, deleteToy, addToy, updateToy } = require('./toy-controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getToys)
router.post('/', addToy)
router.get('/:id', getToy)
router.put('/:id', updateToy)
router.delete('/:id', deleteToy)

module.exports = router