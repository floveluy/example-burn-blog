import { Burn } from 'burnjs';
import { Sequelize, BIGINT, TEXT, STRING, Model } from 'sequelize';

export interface ArticleModel {
    title: string
    content: string
    articleID: string
    created_at: string
}

export default (app: Burn) => {
    const article = app.Sequelize.define('article', {
        id: {
            type: BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title: STRING(64),
        content: TEXT,
        articleID: STRING(64)
    });
    app.Sequelize.sync();

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