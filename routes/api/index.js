const router = require('express').Router();
const { db, Hotel, Restaurant, Activity, Place } = require('../../db');


router.get('/attractions', (req, res, next) => {
    Promise
        .all([
            Hotel.findAll(),
            Restaurant.findAll(),
            Activity.findAll()
        ])
        .then(attractions => {
            const [ hotels, restaurants, activities ] = attractions;
            res.json({
                hotel: hotels,
                restaurant: restaurants,
                activity: activities
            });
        })
        .catch(next);
});

router.get('/attractions/restaurant', (req, res, next) => {
    Restaurant
        .findAll()
        .then(restaurants => res.json(restaurants))
        .catch(next);
});

router.get('/attractions/hotel', (req, res, next) => {
    Hotel
        .findAll()
        .then(hotels => res.json(hotels))
        .catch(next);
});

router.get('/attractions/activity', (req, res, next) => {
    Activity
        .findAll()
        .then(activities => res.json(activities))
        .catch(next);
});

router.get('/place', (req, res, next) => {
    Place
        .findAll()
        .then(places => res.json(places))
        .catch(next);
});

module.exports = router;