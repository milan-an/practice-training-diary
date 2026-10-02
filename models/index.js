const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Create .env from .env.example.");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: process.env.DB_SSL === "true"
    ? { ssl: { require: true, rejectUnauthorized: false } }
    : {}
});

const Workout = require("./workoutModel")(sequelize, DataTypes);
const RequestLog = require("./requestLogModel")(sequelize, DataTypes);

module.exports = {
  sequelize,
  Workout,
  RequestLog
};
