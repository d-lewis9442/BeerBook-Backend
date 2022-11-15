'use strict'
const { Model, ARRAY } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BeerListBeers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
