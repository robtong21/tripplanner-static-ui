const Sequelize = require('sequelize');
const db = require('../_db');
const Place = require('./place.js');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 1,
      max: 5
    },
  },
  amenities: {
    type: Sequelize.STRING,
  }
}, {
    defaultScope: {
        include: [Place]
    }
});

module.exports = Hotel;
