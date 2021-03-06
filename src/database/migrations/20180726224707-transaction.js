'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('transactions', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            acctNum: {
                allowNull: false,
                foreignKey: true,
                type: Sequelize.INTEGER
            },

            vendor: {
                type: Sequelize.STRING
            },

            amount: {
                type: Sequelize.DOUBLE
            },

            date: {
                type: Sequelize.DATE
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
        return queryInterface.dropTable('transaction');
    }
};
