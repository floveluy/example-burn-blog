import { Burn } from 'burnjs';
import { Sequelize, BIGINT, TEXT, STRING, Model } from 'sequelize';

interface Article {

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
            article: Model<{}, {}>
        }
    }
}