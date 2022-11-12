'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Max',
        email: 'max@calabro.com',
        passwordDigest: '1234max',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aaron',
        email: 'aaron@sanchez.com',
        passwordDigest: '1234aaron',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Derek',
        email: 'derek@lewis.com',
        passwordDigest: '1234derek',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
}
