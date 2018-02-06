import { Burn } from 'burnjs';
import { Sequelize, BIGINT, TEXT,STRING } from 'sequelize';

export default (app: Burn) => {

    const article = app.Sequelize.define('article', {
        id: {
            type: BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        title:STRING(64),
        content: TEXT,
    });
    app.Sequelize.sync();
    return article
}

declare module 'burnjs' {
    export interface Burn {
        Sequelize: Sequelize;
    }
}