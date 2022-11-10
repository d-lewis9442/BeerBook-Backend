const { BeerList } = require('../models')

const GetRecentBeerLists = async (req, res) => {
  try {
    const beerLists = await BeerList.findAll({ limit: 5 })
    res.send(beerLists)
  } catch (error) {
    throw error
  }
}

const CreateBeerList = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const UpdateBeerList = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const DeleteBeerList = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRecentBeerLists,
  CreateBeerList,
  UpdateBeerList,
  DeleteBeerList
}
