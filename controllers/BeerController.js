const { Beer } = require('../models')

const GetAllBeer = async (req, res) => {
  try {
    const beers = await Beer.findAll()
    res.send(beers)
  } catch (error) {
    throw error
  }
}

const GetABeer = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const CreateBeer = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const UpdateBeer = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const DeleteBeer = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllBeer,
  GetABeer,
  CreateBeer,
  UpdateBeer,
  DeleteBeer
}
