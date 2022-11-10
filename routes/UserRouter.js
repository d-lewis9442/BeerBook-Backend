const router = require('express').Router()
const controller = require('../controllers/UserController')

//router.get('/', controller.GetUser)
router.post('/', controller.CreateUser)
router.put('/', controller.UpdateUser)
router.delete('/', controller.YeetUser)

module.exports = router
