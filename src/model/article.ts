import { Burn } from 'burnjs';
import { Sequelize, BIGINT, TEXT, STRING, Model, INTEGER } from 'sequelize';
const seq = require('sequelize');

export interface ArticleModel {
    title: string
    content: string
    articleID: string
    created_at: string
}


export default (app: Burn) => {

    class article extends seq.Model {
        // coding...
        static foo() {
            console.log('可以调用了')
        }
    }
    article.init({
        id: {
            type: BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: STRING(64),
        content: TEXT,
        articleID: STRING(64),
        commentCount: {
            type: INTEGER,
            defaultValue: 0
        },
        views: {
            type: INTEGER,
            defaultValue: 0
        }
    }, { sequelize: app.Sequelize });
    article.sync({ alter: true })
    return article
}

declare module 'burnjs' {
    export interface Burn {
        Sequelize: Sequelize;
    }
}
declare module "koa" {
    export interface BaseContext {
        model: {
            article: Model<{}, {}>,
            comments: Model<{}, {}>,
            [key: string]: any
        }
    }
}