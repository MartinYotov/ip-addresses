import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'; 
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'postgres', process.env.DB_USER || 'postgres', process.env.DB_PASS || 'password', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: Number(process.env.DB_PORT) || 5000,
});

const testDbConnection = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

export { sequelize, testDbConnection };
