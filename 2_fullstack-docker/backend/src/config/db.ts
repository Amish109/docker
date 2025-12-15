import pg from "pg";
import { ENV_VARIABLES } from "./env.js";

const { Pool } = pg;

export const pool = new Pool({
  host: ENV_VARIABLES.DB_HOST,
  port: Number(ENV_VARIABLES.DB_PORT),
  user: ENV_VARIABLES.DB_USER,
  password: ENV_VARIABLES.DB_PASSWORD,
  database: ENV_VARIABLES.DB_NAME,
});

export const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Database initialized - items table ready");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};
