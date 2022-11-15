'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Beer.belongsToMany(models.BeerList, {
        through: 'beer_list_beers',
        as: 'lists',
        foreignKey: 'beerId'
        //otherKey: 'beerListId'
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
      // beerListId: {
      //   type: DataTypes.ARRAY(DataTypes.INTEGER),
      //   onDelete: 'CASCADE',
      //   references: {
      //     model: 'beer_lists',
      //     key: 'id'
      //   }
      // }
    },
    {
      sequelize,
      modelName: 'Beer',
      tableName: 'beers'
    }
  )
  return Beer
}
