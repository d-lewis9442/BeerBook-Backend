const { BeerList, User, Beer, BeerListBeers } = require('../models')

const GetRecentBeerLists = async (req, res) => {
  try {
    const beerLists = await BeerList.findAll({
      include: { model: User, as: 'creator' }
    })
    res.send(beerLists)
  } catch (error) {
    throw error
  }
}

const GetABeerList = async (req, res) => {
  try {
    const aBeerList = await BeerList.findByPk(req.params.beerlist_id, {
      include: { model: User, as: 'creator' },
      include: { model: Beer, through: BeerListBeers, as: 'beers' }
    })
    console.log('beers:' + aBeerList.dataValues.beers)
    res.send(aBeerList)
  } catch (error) {
    throw error
  }
}

const CreateBeerList = async (req, res) => {
  try {
    const listBody = {
      ...req.body
    }
    const newBeerList = await BeerList.create(listBody) //the through table is not changing when a new list is created
    res.send(newBeerList)
  } catch (error) {
    throw error
  }
}

const updateBeerListById = async (req, res) => {
  try {
    const list = await BeerList.findByPk(req.params.beerlist_id)
    await list.addBeers([req.body.beerId])
    await list.save()
    const respoonse = await BeerList.findByPk(req.params.beerlist_id, {
      include: { model: Beer, through: BeerListBeers, as: 'beers' }
    })
    res.send(respoonse)
  } catch (error) {
    throw error
  }
}

// const UpdateBeerList = async (req, res) => {
//   try {
//     const beerListId = parseInt(req.params.beerlist_id)
//     const listToChange = await BeerList.findByPk(
//       beerListId
//       //{ ...req.body }, //push req.body.beerId to beerId
//       //{ where: { id: beerListId }, returning: true }
//     )
//     console.log(listToChange)
//     const beerArr = [...listToChange.beers]

//     beerArr.push(req.body.beerId)
//     const updatedBeerList = await BeerList.update(
//       { beers: beerArr },
//       { where: { id: beerListId }, returning: true }
//     )
//     res.send(updatedBeerList)
//   } catch (error) {
//     throw error
//   }
// }

// const updateBeerListById = async (req, res) => {
//   try {
//     const beerId = await Beer.findByPk( req.body.beerId )
//     const updatedBeer = await Beer.update(req.body, { where: { id: beerId }, returning: true })
//     res.status(200).json(updatedBeer)
//     const beerList = await Beer.findAll({ where: { lists: req.params.beerList_id }})
//     res.send(beerList)
//   } catch (error) {
//     throw error
//   }
// }

const DeleteBeerList = async (req, res) => {
  try {
    const beerListId = parseInt(req.params.beerlist_id)
    await BeerList.destroy({ where: { id: beerListId } })
    res.send({
      msg: 'List Deleted',
      payload: req.params.beerList_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecentBeerLists,
  GetABeerList,
  CreateBeerList,
  updateBeerListById,
  DeleteBeerList
}
