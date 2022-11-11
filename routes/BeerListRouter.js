const router = require('express').Router()
const controller = require('../controllers/BeerListController')

router.get('/', controller.GetRecentBeerLists)
router.get('/:beerlist_id', controller.GetABeerList)
router.post('/', controller.CreateBeerList)
router.put('/:beerlist_id', controller.UpdateBeerList)
router.delete('/:beerlist_id', controller.DeleteBeerList)

module.exports = router
