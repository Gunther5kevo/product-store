const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'sqlite',
    logging: false, 
});

module.exports = { sequelize };
