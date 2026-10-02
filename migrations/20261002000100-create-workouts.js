"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Workouts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: { allowNull: false, type: Sequelize.DATEONLY },
      program: { allowNull: false, type: Sequelize.STRING },
      exercise: { allowNull: false, type: Sequelize.STRING },
      weight: { allowNull: false, type: Sequelize.FLOAT, defaultValue: 0 },
      reps: { allowNull: false, type: Sequelize.INTEGER, defaultValue: 0 },
      sets: { allowNull: false, type: Sequelize.INTEGER, defaultValue: 0 },
      duration: { allowNull: false, type: Sequelize.INTEGER, defaultValue: 0 },
      completed: { allowNull: false, type: Sequelize.BOOLEAN, defaultValue: false },
      notes: { allowNull: false, type: Sequelize.TEXT, defaultValue: "" },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Workouts");
  }
};
