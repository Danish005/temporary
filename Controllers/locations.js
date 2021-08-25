const Locations = require('../Models/locations');

exports.getLocations = (req, res) => {
    const { locId } = req.params;
    Locations.find({ location_id: locId })


    .then(response => {
            res.status(200).json({ message: "Locations Fetched Succesfully", locations: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}