const router = require('express').Router()
const controller = require('../controllers/BeerController')

router.get('/', controller.GetABeer)
router.get('/', controller.GetAllBeer)
router.post('/', controller.CreateBeer)
router.put('/:beer_id', controller.UpdateBeer)
router.delete('/:beer_id', controller.DeleteBeer)

module.exports = router
