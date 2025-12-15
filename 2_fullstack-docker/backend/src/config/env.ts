import dotenv from "dotenv";
dotenv.config();

interface Env {
  PORT: string | number;
  DB_HOST: string;
  DB_PORT: string | number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

export const ENV_VARIABLES: Env = {
  PORT: process.env.PORT || 9000,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_NAME: process.env.DB_NAME || "crud_db",
};
