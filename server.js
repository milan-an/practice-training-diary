require("dotenv").config();

const path = require("path");
const express = require("express");
const { sequelize } = require("./models");
const workoutRoutes = require("./routes/workoutRoutes");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Кастомное middleware логирования всех основных HTTP-запросов.
app.use(logger);

app.use("/", workoutRoutes);

// Middleware обработки 404 должно идти после маршрутов.
app.use(notFound);

// Error-handling middleware всегда содержит 4 параметра и идёт последним.
app.use(errorHandler);

async function start() {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connection established successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error.message);
    process.exit(1);
  }
}

start();
