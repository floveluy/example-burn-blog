import { Burn } from 'burnjs';
import { BIGINT, TEXT, STRING } from 'sequelize';

export interface CommmentModel {
    author: string
    content: string
    articleID: string
    created_at: string
}

export default (app: Burn) => {

    const commment = app.Sequelize.define('commment', {
        id: {
            type: BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        author: STRING(64),
        content: TEXT,
        articleID: STRING(64)
    });
    return commment
}
