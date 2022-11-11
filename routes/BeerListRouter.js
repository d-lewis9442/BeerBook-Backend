const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/BeerListController')

router.get('/recents', controller.GetRecentBeerLists)
router.get('/:beerlist_id', controller.GetABeerList)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateBeerList
)
router.put(
  '/:beerlist_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateBeerList
)
router.delete(
  '/:beerlist_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBeerList
)

module.exports = router
