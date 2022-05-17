import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
	HOST: process.env.DB_HOST,
	PORT: parseInt(process.env.DB_PORT),
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASSWORD,
	DB: process.env.DB_DB,
};

export default dbConfig;
