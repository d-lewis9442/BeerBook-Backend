const { BeerList, User, Beer } = require('../models')

const GetRecentBeerLists = async (req, res) => {
  try {
    const beerLists = await BeerList.findAll({
      include: BeerList.beerId
    })
    // let id = beerLists[0].dataValues.beerId
    // const beer = await Beer.findByPk(id)
    // console.log(beer.dataValues)
    // res.send(beerLists, {
    //   where: { beerId: beer.dataValues }
    // })
    res.send(beerLists)
  } catch (error) {
    throw error
  }
}

const GetABeerList = async (req, res) => {
  try {
    const aBeerList = await BeerList.findByPk(req.params.beerlist_id, {
      include: BeerList.beerId
    })
    res.send(aBeerList)
  } catch (error) {
    throw error
  }
}

const CreateBeerList = async (req, res) => {
  try {
    const userId = parseInt(req.params.user_id)
    const listBody = {
      userId,
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
      { ...req.body },
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
