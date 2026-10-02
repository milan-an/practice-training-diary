"use strict";

module.exports = {
  async up(queryInterface) {
    const now = new Date();

    await queryInterface.bulkInsert("Workouts", [
      {
        date: "2026-10-01",
        program: "Push Day",
        exercise: "Bench Press",
        weight: 80,
        reps: 8,
        sets: 4,
        duration: 70,
        completed: true,
        notes: "Рабочая тренировка",
        createdAt: now,
        updatedAt: now
      },
      {
        date: "2026-10-02",
        program: "Pull Day",
        exercise: "Lat Pulldown",
        weight: 65,
        reps: 10,
        sets: 4,
        duration: 60,
        completed: true,
        notes: "Увеличил рабочий вес",
        createdAt: now,
        updatedAt: now
      },
      {
        date: "2026-10-03",
        program: "Leg Day",
        exercise: "Squat",
        weight: 90,
        reps: 8,
        sets: 4,
        duration: 75,
        completed: false,
        notes: "Запланированная тренировка",
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Workouts", null, {});
  }
};
