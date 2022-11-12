const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetAllUsers)
router.get('/:user_id', controller.GetUserById)
router.get('/:user_id/lists', controller.GetUserAndTheirBeerLists)

module.exports = router
