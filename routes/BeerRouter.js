const router = require('express').Router()
const controller = require('../controllers/BeerController')

router.get('/', controller.GetAllBeer)
router.get('/recent', controller.GetAllBeerOrderRecent)
router.get('/:beer_id', controller.GetABeer)
router.post('/new', controller.CreateBeer)
router.put('/:beer_id', controller.UpdateBeer)
router.delete('/:beer_id', controller.DeleteBeer)

module.exports = router
