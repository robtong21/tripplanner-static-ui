const router = require('express').Router()
const { db, Hotel, Restaurant, Activity } = require('../db');

// root path
router.get('/', (req, res, next) => {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
    .then(attractions => {
      const [ hotels, restaurants, activities ] = attractions;
      res.render('index', {
        hotels,
        restaurants,
        activities,
      });
    })
    .catch(next);
});

module.exports = router
