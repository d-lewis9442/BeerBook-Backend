const { BeerList, User, Beer } = require('../models')

const GetRecentBeerLists = async (req, res) => {
  try {
    const beerLists = await BeerList.findAll({ limit: 5 })
    res.send(beerLists)
  } catch (error) {
    throw error
  }
}

const GetABeerList = async (req, res) => {
  try {
    const aBeerList = await BeerList.findByPk(req.params.beerlist_id, {
      include: {
        model: User
      },
      include: {
        model: Beer
      }
    })
    res.send(aBeerList)
  } catch (error) {
    throw error
  }
}

const CreateBeerList = async (req, res) => {
  try {
    const newBeerList = await BeerList.create({ ...req.body })
    res.send(newBeerList)
  } catch (error) {
    throw error
  }
}

const UpdateBeerList = async (req, res) => {
  try {
    const updatedBeerList = await BeerList.update(
      { ...req.body },
      { where: { id: req.params.beerlist_id }, returning: true }
    )
    res.send(updatedBeerList)
  } catch (error) {
    throw error
  }
}

const DeleteBeerList = async (req, res) => {
  try {
    await BeerList.destroy({ where: { id: req.params.beerList_id } })
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
