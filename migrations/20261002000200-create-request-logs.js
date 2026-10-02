"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RequestLogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: { allowNull: false, type: Sequelize.DATE },
      event: { allowNull: false, type: Sequelize.STRING },
      method: { allowNull: false, type: Sequelize.STRING },
      url: { allowNull: false, type: Sequelize.STRING },
      statusCode: { allowNull: false, type: Sequelize.INTEGER },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("RequestLogs");
  }
};
