const { Workout } = require("../models");


const getAllWorkouts = async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({
      order: [
        ["date", "DESC"],
        ["id", "DESC"]
      ]
    });

    res.render("index", {
      title: "Дневник тренировок",
      workouts
    });

  } catch (error) {
    next(error);
  }
};


const getWorkoutById = async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(
      req.params.id
    );

    if (!workout) {
      return res.status(404).render("404", {
        title: "Тренировка не найдена",
        message: "Тренировка с таким ID не найдена"
      });
    }

    res.render("item", {
      title: `Тренировка №${workout.id}`,
      workout
    });

  } catch (error) {
    next(error);
  }
};


const showAddForm = (req, res) => {
  res.render("add", {
    title: "Добавить тренировку",
    error: null
  });
};


const addWorkout = async (req, res, next) => {
  try {
    const {
      date,
      program,
      exercise,
      weight,
      reps,
      sets,
      duration,
      notes
    } = req.body;


    if (!date || !program || !exercise) {
      return res.status(400).render("add", {
        title: "Добавить тренировку",
        error: "Дата, программа и упражнение обязательны"
      });
    }


    await Workout.create({
      date,
      program,
      exercise,

      weight:
        Number(weight) || 0,

      reps:
        Number(reps) || 0,

      sets:
        Number(sets) || 0,

      duration:
        Number(duration) || 0,

      completed:
        req.body.completed === "on",

      notes:
        notes || ""
    });


    res.redirect("/");

  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllWorkouts,
  getWorkoutById,
  showAddForm,
  addWorkout
};