module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Workout", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    program: {
      type: DataTypes.STRING,
      allowNull: false
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: "Workouts"
  });
};
