// Uncomment the code below to use Sequelize ORM
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
// const mongoose = require('mongoose');


// Insert your model definition below

const Trades = sequelize.define(
    'Trades',
    {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING

        },
        user_id: {
            type: DataTypes.INTEGER(11)
        },
        symbol: {
            type: DataTypes.STRING
        },
        shares: {
            type: DataTypes.INTEGER(11)
        },
        price: {
            type: DataTypes.INTEGER(11)
        },
        timestamp: {
            type: DataTypes.INTEGER(11)
        },
    },
    {
        timestamps: false,
        underscored: true,
        tableName: 'trades',
        freezeTableName: true
    }
);

module.exports = Trades;