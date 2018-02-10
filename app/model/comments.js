"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (app) => {
    const commment = app.Sequelize.define('commment', {
        id: {
            type: sequelize_1.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        author: sequelize_1.STRING(64),
        content: sequelize_1.TEXT,
        articleID: sequelize_1.STRING(64)
    });
    // commment.sync({ alter: true })
    return commment;
};
