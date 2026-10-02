const express = require("express");
const mockAuth = require("../middleware/mockAuth");

const {
  getAllWorkouts,
  getWorkoutById,
  showAddForm,
  addWorkout
} = require("../controllers/workoutController");

const router = express.Router();


// Главная страница
router.get("/", getAllWorkouts);


// Детальная страница тренировки
router.get("/item/:id", getWorkoutById);


// Форма добавления тренировки
router.get(
  "/add",
  mockAuth,
  showAddForm
);


// Добавление тренировки
router.post(
  "/add",
  mockAuth,
  addWorkout
);


// Страница входа
router.get("/login", (req, res) => {
  res.render("login", {
    title: "Вход",
    error: null
  });
});


// Имитация входа
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).render("login", {
      title: "Вход",
      error: "Введите email и пароль"
    });
  }

  // Учебная имитация авторизации.
  // Реальной проверки пользователя в БД здесь нет.
  res.cookie("practiceAuth", "1", {
    httpOnly: true,
    sameSite: "lax"
  });

  res.redirect("/add");
});


module.exports = router;