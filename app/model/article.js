"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (app) => {
    const article = app.Sequelize.define('article', {
        id: {
            type: sequelize_1.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: sequelize_1.STRING(64),
        content: sequelize_1.TEXT,
    });
    app.Sequelize.sync();
    return article;
};
