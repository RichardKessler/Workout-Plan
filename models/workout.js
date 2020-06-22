const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    excercise: [
        {
            excerciseType: {
                type: String,
                trim: true,
                required: "Please enter an excercise type"
            },
            excerciseName: {
                type: String,
                trim: true,
                require: "Please enter a name for your excercise"
            },
            duration: {
                type: Number,
                required: "How long is your excercise duration"
            },
            weight: {
                type: Number,
                required: "Please enter the total weight"
            },
            reps: {
                type: Number,
                required: "Please enter your total reps"
            },
            sets: {
                type: Number,
                required: "Please enter how many sets you did"
            },
            distance: {
                type: Number,
                required: "Please enter your total distance"
            }
        }
    ],
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout