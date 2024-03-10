const express = require('express')

const router = express.Router()

const { getAllUsers, getUser, createNewUser, updateUser, deleteUser } = require('../controllers/users.controllers')


router.route('/').get(getAllUsers).post(createNewUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router