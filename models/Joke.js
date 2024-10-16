const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Joke = sequelize.define('Joke', {
  setup: {
    type: DataTypes.STRING,
    allowNull: false
  },
  punchline: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Joke;