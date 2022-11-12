'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('beer_list_beers', [
      {
        beerListId: 1,
        beerId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beerListId: 2,
        beerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        beerListId: 3,
        beerId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('beer_list_beers', null, {})
  }
}
