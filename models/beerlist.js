'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class BeerList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BeerList.hasMany(models.User, { foreignKey: 'userId' })
      BeerList.belongsTo(models.Beer, { foreignKey: 'beerId' })
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
      },
      beerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'beers',
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
