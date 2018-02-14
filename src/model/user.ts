import { Burn } from 'burnjs';
import { BIGINT, STRING } from 'sequelize';

export interface CommmentModel {
    author: string
    content: string
    articleID: string
    created_at: string
}

export default (app: Burn) => {

    const user = app.Sequelize.define('user', {
        id: {
            type: BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        userName: {
            type: STRING(64),
            allowNull: false,
        },
        password: {
            type: STRING(64),
            allowNull: false,
        },
        loginToken: STRING(64)
    });
    // user.create({
    //     userName: 'floveluy',
    //     password: 'metal_gear2'
    // })
    // user.sync({ alter: true })
    return user
}
