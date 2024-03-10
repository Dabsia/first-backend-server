const express = require('express')

const router = express.Router()

const { getAllTours, getTour, createNewTour, updateTour, deleteTour, checkId } = require('../controllers/tours.controllers')

// creating a param middleware

router.param('id', checkId)


router.route('/').get(getAllTours).post(createNewTour)
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour)

module.exports = router