import dotenv from "dotenv";
dotenv.config();

interface Env {
    PORT: string | number;
}

export const ENV_VARIABLES:Env = {
    PORT: process.env.PORT || 9000,
};