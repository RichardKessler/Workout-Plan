const router = require('express').Router();
const Workout = require('../models/workout.js');
// const { db } = require('../models/workout.js');

router.post('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err));
});

router.get('/api/workouts', (req, res) => {
    Workout.find()
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {excercises: req.body}},
        { new: true}
    )
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
})

router.delete('/api/workouts', (req, res) => {

});

module.exports = router;

