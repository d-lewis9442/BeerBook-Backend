const { User, BeerList } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(1)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserAndTheirBeerLists = async (req, res) => {
  try {
    const user = await User.findByPk(1, {
      include: BeerList
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  GetUserAndTheirBeerLists
}
