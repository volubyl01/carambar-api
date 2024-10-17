const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './carambarandco.sqlite'
});

module.exports = sequelize;