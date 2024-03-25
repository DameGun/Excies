import { DataTypes } from "sequelize";
import { db } from '../config/connectDb.js';

const Muscles = db.define('muscles', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    tableName: 'muscles',
    timestamps: false
})

export default Muscles;