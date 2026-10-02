require("dotenv").config();

const dialectOptions = process.env.DB_SSL === "true"
  ? { ssl: { require: true, rejectUnauthorized: false } }
  : {};

module.exports = {
  development: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    logging: false,
    dialectOptions
  }
};
