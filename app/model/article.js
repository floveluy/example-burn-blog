"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const seq = require('sequelize');
exports.default = (app) => {
    class article extends seq.Model {
        // coding...
        static foo() {
            console.log('可以调用了');
        }
    }
    article.init({
        id: {
            type: sequelize_1.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: sequelize_1.STRING(64),
        content: sequelize_1.TEXT,
        articleID: sequelize_1.STRING(64)
    }, { sequelize: app.Sequelize });
    article.sync();
    return article;
};
