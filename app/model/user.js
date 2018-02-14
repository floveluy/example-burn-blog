"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (app) => {
    const user = app.Sequelize.define('user', {
        id: {
            type: sequelize_1.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        userName: {
            type: sequelize_1.STRING(64),
            allowNull: false,
        },
        password: {
            type: sequelize_1.STRING(64),
            allowNull: false,
        },
        loginToken: sequelize_1.STRING(64)
    });
    // user.create({
    //     userName: 'floveluy',
    //     password: 'metal_gear2'
    // })
    // user.sync({ alter: true })
    return user;
};
