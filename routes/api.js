const router = require('expres').Router();
const Workout = require('../models/workout.js');

router.post('/api/wprkouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err));
});

router.get('/api/workouts', (req, res) => {
    Workout.find()
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
});

router.put('/api/aorkout/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {excercise: req.body}},
        { new: true}
    )
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

router.delete('/api/workouts', (req, res) => {

});

