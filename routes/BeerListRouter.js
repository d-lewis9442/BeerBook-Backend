const router = require('express').Router()
const controller = require('../controllers/BeerListController')

router.get('/', controller.GetRecentBeerLists)
router.post('/', controller.CreateBeerList)
router.put('/', controller.UpdateBeerList)
router.delete('/', controller.DeleteBeerList)

module.exports = router
