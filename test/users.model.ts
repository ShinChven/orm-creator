import {DataTypes, Model, ReferenceOption} from "../src/";

const model: Model = {
    tableName: 'users',
    autoId: true,
    columns: {
        code: {
            type: 'varchar',
            length: 20,
        },
        username: {
            type: 'varchar',
            length: 15,
            defaultValue:'hello',
            comment: 'user use username to login',
        },
        password: {
            type: 'string',
            length: 100,
            comment: ` password`,
        },
        description: {
            type: 'string',
            comment: 'your description'
        },
        enabled: {
            type: 'char',
            defaultValue:'D'
        },
        profile: {
            type: 'json',
        },
        height: {
            type: 'integer',
            defaultValue: 30,
        },
        accountStatus: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            comment: '收费状态， 0未收费，1收费'
        },
        weight: {
            type: 'integer',
        },
        deptId: {
            type: DataTypes.INTEGER,
            unsigned: true,
            nullable: true,
            reference: {
                table: 'Depts',
                column: 'id',
                onDelete: ReferenceOption.SET_NULL,
            }
        }
    },
    timestamps: {
        makeDefaultNow: true,
        camelCase: true,
    },
    engine: 'InnoDB',
}

export default model;
