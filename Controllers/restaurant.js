const Restaurants = require('../Models/restaurant');

exports.getRestaurantByLocation = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({ location_id: locId })
        .then(response => {
            res.status(200).json({ message: "Restaurants Fetched Succesfully", restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}