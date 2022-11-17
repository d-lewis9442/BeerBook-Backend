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
  controller.updateBeerListById
)
router.delete('/:beerList_id/:beer_id', controller.RemoveABeerFromAList)
router.delete(
  '/:beerlist_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBeerList
)

module.exports = router
