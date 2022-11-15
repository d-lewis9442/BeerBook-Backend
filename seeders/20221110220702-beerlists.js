'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('beer_lists', [
      {
        name: 'Maxs Brews',
        userId: 1,
        beerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aarons Tasty Bevs',
        userId: 2,
        beerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dereks Scrump Bevs',
        userId: 3,
        beerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('beer_lists', null, {})
  }
}
