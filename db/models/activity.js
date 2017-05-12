const Sequelize = require('sequelize');
const db = require('../_db');
const Place = require('./place.js');

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age_range: {
    type: Sequelize.STRING,
    defaultValue: '*',
  },
}, {
    defaultScope: {
        include: [Place]
    }
});

module.exports = Activity;
