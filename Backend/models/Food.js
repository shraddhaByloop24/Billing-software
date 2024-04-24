const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  foodtype: {
    type: String,
    enum: ['Veg', 'Non-Veg'],
    default: 'Veg', 
    // required: true 
  },
  foodcategory: {
    type: String,
    enum: ['Starter', 'Lunch', 'Dinner'],
    default: 'Starter',
    // required: true
  },
  description: {
    type: String,
    required: true
  },
  foodimg: {
    type: String,
    required: true
  }
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
