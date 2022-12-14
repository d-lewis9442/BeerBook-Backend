'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    static associate(models) {
      Beer.belongsToMany(models.BeerList, {
        through: 'beer_list_beers',
        as: 'lists',
        foreignKey: 'beerId'
      })
    }
  }
  Beer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false
      },
      abv: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      brewery: {
        type: DataTypes.STRING,
        allowNull: false
      },
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Beer',
      tableName: 'beers'
    }
  )
  return Beer
}
