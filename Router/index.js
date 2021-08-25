const express = require('express');

const route = express.Router();

const locationControlller = require('../Controllers/locations');
const mealTypeController = require('../Controllers/mealTypes');
const restaurantControler = require('../Controllers/restaurant');

route.get('/locations/:locId', locationControlller.getLocations);
route.get('/mealtypes', mealTypeController.getMealTypes);
route.get('/restaurant/:locId', restaurantControler.getRestaurantByLocation);

module.exports = route;