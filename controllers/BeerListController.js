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
    const newBeerList = await BeerList.create(listBody)
    res.send(newBeerList)
  } catch (error) {
    throw error
  }
}

const UpdateBeerList = async (req, res) => {
  try {
    const beerListId = parseInt(req.params.beerlist_id)
    const updatedBeerList = await BeerList.update(
      { ...req.body }, //push req.body.beerId to beerId
      { where: { id: beerListId }, returning: true }
    )
    res.send(updatedBeerList)
  } catch (error) {
    throw error
  }
}

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
  UpdateBeerList,
  DeleteBeerList
}
