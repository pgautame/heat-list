const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;

// GET      /workouts       -->  Gets all the workout documents
// POST     /workouts       -->  Creates a new workout document
// GET      /workouts/:id   -->  Gets a single workout document
// DELETE   /workouts/:id   -->  Deletes a single workout
// PATCH    /workouts/:id   -->  Updates a single workout
