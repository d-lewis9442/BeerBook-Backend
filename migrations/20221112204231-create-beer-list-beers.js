'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('beer_list_beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beerListId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'beer_lists',
          key: 'id'
        }
      },
      beerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'beers',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('beer_list_beers')
  }
}
