const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mealtypeId: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('mealType', MealTypeSchema, 'mealtype');