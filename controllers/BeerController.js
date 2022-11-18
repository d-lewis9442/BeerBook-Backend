const Sequelize = require('sequelize')
const { Beer } = require('../models')

const GetAllBeer = async (req, res) => {
  try {
    const beers = await Beer.findAll({ order: [[Sequelize.fn('RANDOM')]] })
    res.send(beers)
  } catch (error) {
    throw error
  }
}

const GetAllBeerOrderRecent = async (req, res) => {
  try {
    const recentBeers = await Beer.findAll({
      order: [['id', 'DESC']]
    })
    res.send(recentBeers)
  } catch (error) {
    throw error
  }
}

const GetABeer = async (req, res) => {
  try {
    const aBeer = await Beer.findByPk(req.params.beer_id)
    res.send(aBeer)
  } catch (error) {
    throw error
  }
}

const CreateBeer = async (req, res) => {
  try {
    const newBeer = await Beer.create({ ...req.body })
    res.send(newBeer)
  } catch (error) {
    throw error
  }
}

const UpdateBeer = async (req, res) => {
  try {
    const updatedBeer = await Beer.update(
      { ...req.body },
      { where: { id: req.params.beer_id }, returning: true }
    )
    res.send(updatedBeer)
  } catch (error) {
    throw error
  }
}

const DeleteBeer = async (req, res) => {
  try {
    await Beer.destroy({ where: { id: req.params.beer_id } })
    res.send({
      msg: 'Beer Deleted',
      payload: req.params.beer_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllBeer,
  GetAllBeerOrderRecent,
  GetABeer,
  CreateBeer,
  UpdateBeer,
  DeleteBeer
}
