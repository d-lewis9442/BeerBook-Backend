const router = require('express').Router()
const controller = require('../controllers/BeerController')

router.get('/', controller.GetBeer)
router.post('/', controller.CreateBeer)
router.put('/:beerlist_id', controller.UpdateBeer)
router.delete('/:beerlist_id', controller.DeleteBeer)

module.exports = router
