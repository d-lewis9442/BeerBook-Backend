'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BeerList extends Model {
    static associate(models) {
      BeerList.belongsTo(models.User, { as: 'creator', foreignKey: 'userId' })
      BeerList.belongsToMany(models.Beer, {
        through: 'beer_list_beers',
        as: 'beers',
        foreignKey: 'beerListId'
      })
    }
  }
  BeerList.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'BeerList',
      tableName: 'beer_lists'
    }
  )
  return BeerList
}
