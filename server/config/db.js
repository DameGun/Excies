import dbConfig from "./db.config.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

async function connectDb() {
    try {
        await auth();
        await sync();
        console.log("Database connected and synchronized successfully")
    }
    catch (error) {
        return error;
    }
}

async function sync() {
    try {
        await sequelize.sync();
    }
    catch (error) {
        return "Failed to synchronize database: " + error.message;
    }
}

async function auth() {
    try {
        await sequelize.authenticate();
    }
    catch (error) {
        return "Unable to connect to database: " + error.message; 
    }
}

export {
    sequelize as db,
    connectDb
}
