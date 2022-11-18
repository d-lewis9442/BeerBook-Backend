'use strict'
const { Model, ARRAY } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BeerListBeers extends Model {
    static associate(models) {}
  }
  BeerListBeers.init(
    {
      beerListId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'beer_lists',
          key: 'id'
        }
      },
      beerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'beers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'BeerListBeers',
      tableName: 'beer_list_beers'
    }
  )
  return BeerListBeers
}
