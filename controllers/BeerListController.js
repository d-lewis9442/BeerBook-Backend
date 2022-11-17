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

const RemoveABeerFromAList = async (req, res) => {
  try {
    const beerList_id = req.params.beerList_id
    const beer_id = req.params.beer_id
    await BeerListBeers.destroy({
      where: { beerListId: beerList_id } && { beerId: beer_id }
    })
    res.send({
      msg: `Beer of id ${beer_id} removed from list of id ${beerList_id}`,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const DeleteBeerList = async (req, res) => {
  try {
    const beerListId = parseInt(req.params.beerlist_id)
    await BeerListBeers.destroy({ where: { beerListId: beerListId } })
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
  RemoveABeerFromAList,
  DeleteBeerList
}
