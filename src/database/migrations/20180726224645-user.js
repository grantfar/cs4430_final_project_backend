'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('users', {

      /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      */	
	
      id: {

        allowNull: false,

        autoIncrement: true,

        primaryKey: true,

        type: Sequelize.INTEGER

      },

      firstName: {

        type: Sequelize.STRING

      },

      lastName: {

        type: Sequelize.STRING

      },

      email: {

        type: Sequelize.STRING

      },

      password: {

        type: Sequelize.STRING

     },

      isTracker: {

        type: Sequelize.BOOLEAN,

        allowNull: false,

        defaultValue: '0'

      },

      role: {

        type: Sequelize.STRING

      },

      createdAt: {

        allowNull: false,

        type: Sequelize.DATE

      },

      updatedAt: {

        allowNull: false,

        type: Sequelize.DATE

      }

    });

  },

  down: (queryInterface, Sequelize) => {
    /*
      Reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
	return queryInterface.dropTable('users');
  }
};
