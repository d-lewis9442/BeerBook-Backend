const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.getUser)
router.post('/', controller.createUser)
router.put('/', controller.updateUser)
router.delete('/', controller.yeetUser)

module.exports = router
